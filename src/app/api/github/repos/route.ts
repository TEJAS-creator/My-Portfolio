import { NextResponse } from 'next/server';
import { siteConfig } from '@/data/site';

export const revalidate = 3600; // Cache for 1 hour

export interface PublicRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export async function GET() {
  const username = process.env.GITHUB_USERNAME || siteConfig.githubUsername;
  const token = process.env.GITHUB_TOKEN;

  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'Tejas-Portfolio-App',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json({
        success: false,
        repos: [],
        message: `Failed to fetch repos: ${res.statusText}`,
      });
    }

    const data: PublicRepo[] = await res.json();
    const formatted = Array.isArray(data)
      ? data.map((r) => ({
          id: r.id,
          name: r.name,
          html_url: r.html_url,
          description: r.description,
          language: r.language,
          stars: r.stargazers_count,
          forks: r.forks_count,
          updatedAt: r.updated_at,
        }))
      : [];

    return NextResponse.json({
      success: true,
      repos: formatted,
    });
  } catch (err: unknown) {
    return NextResponse.json({
      success: false,
      repos: [],
      message: err instanceof Error ? err.message : 'Error fetching repositories',
    });
  }
}
