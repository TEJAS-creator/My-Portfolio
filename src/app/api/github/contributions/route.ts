import { NextResponse } from 'next/server';
import { siteConfig } from '@/data/site';

export const revalidate = 3600; // Cache for 1 hour

interface PublicContributionDay {
  date: string;
  count: number;
  level: number;
}

export async function GET() {
  const username = process.env.GITHUB_USERNAME || siteConfig.githubUsername;
  const token = process.env.GITHUB_TOKEN;

  // 1. If GITHUB_TOKEN is available, use the official GitHub GraphQL API
  if (token) {
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

      if (res.ok) {
        const data = await res.json();
        const calendar = data?.data?.user?.contributionsCollection?.contributionCalendar;
        if (calendar) {
          return NextResponse.json({
            available: true,
            source: 'github-graphql',
            totalContributions: calendar.totalContributions,
            weeks: calendar.weeks,
          });
        }
      }
    } catch {
      // If GraphQL fails, proceed to public fallback
    }
  }

  // 2. Seamless Public Fallback: Fetch real live calendar without requiring token
  try {
    const publicRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      {
        headers: { 'User-Agent': 'Tejas-Portfolio-App' },
        next: { revalidate: 3600 },
      }
    );

    if (publicRes.ok) {
      const data = await publicRes.json();
      const rawDays: PublicContributionDay[] = data.contributions || [];

      const weeks: {
        contributionDays: {
          contributionCount: number;
          date: string;
          weekday: number;
        }[];
      }[] = [];

      let currentWeek: {
        contributionCount: number;
        date: string;
        weekday: number;
      }[] = [];

      rawDays.forEach((day) => {
        const d = new Date(day.date);
        const weekday = d.getDay();
        currentWeek.push({
          contributionCount: day.count,
          date: day.date,
          weekday,
        });

        if (weekday === 6 || currentWeek.length === 7) {
          weeks.push({ contributionDays: currentWeek });
          currentWeek = [];
        }
      });

      if (currentWeek.length > 0) {
        weeks.push({ contributionDays: currentWeek });
      }

      const totalContributions =
        data.total?.lastYear ??
        rawDays.reduce((acc, curr) => acc + (curr.count || 0), 0);

      return NextResponse.json({
        available: true,
        source: 'public-calendar',
        totalContributions,
        weeks,
      });
    }
  } catch (err: unknown) {
    console.error('Failed to fetch contributions fallback:', err);
  }

  // 3. Graceful fallback if both services are unreachable
  return NextResponse.json({
    available: false,
    message: 'Contribution data temporarily unavailable.',
    totalContributions: 0,
    weeks: [],
  });
}
