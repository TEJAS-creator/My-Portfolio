import { NextResponse } from 'next/server';
import { siteConfig } from '@/data/site';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const username = process.env.GITHUB_USERNAME || siteConfig.githubUsername;
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json({
      available: false,
      message: 'Contribution data unavailable. GITHUB_TOKEN not configured.',
      totalContributions: 0,
      weeks: [],
    });
  }

  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                weekday
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Tejas-Portfolio-App',
      },
      body: JSON.stringify({
        query,
        variables: { login: username },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({
        available: false,
        message: `GitHub API error: ${res.statusText}`,
        totalContributions: 0,
        weeks: [],
      });
    }

    const data = await res.json();

    if (data.errors || !data?.data?.user?.contributionsCollection?.contributionCalendar) {
      return NextResponse.json({
        available: false,
        message: data.errors?.[0]?.message || 'Contribution data unavailable.',
        totalContributions: 0,
        weeks: [],
      });
    }

    const calendar = data.data.user.contributionsCollection.contributionCalendar;

    return NextResponse.json({
      available: true,
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks,
    });
  } catch (err: unknown) {
    return NextResponse.json({
      available: false,
      message: err instanceof Error ? err.message : 'Failed to fetch contribution data',
      totalContributions: 0,
      weeks: [],
    });
  }
}
