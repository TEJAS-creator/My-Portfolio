'use client';

import { useEffect, useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Star, GitFork, AlertCircle, ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { siteConfig } from '@/data/site';

interface Day {
  contributionCount: number;
  date: string;
  weekday: number;
}

interface Week {
  contributionDays: Day[];
}

interface ContributionData {
  available: boolean;
  message?: string;
  totalContributions: number;
  weeks: Week[];
}

interface RepoData {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
}

export function GitHubActivitySection() {
  const [contributionData, setContributionData] = useState<ContributionData | null>(null);
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [loadingCalendar, setLoadingCalendar] = useState(true);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<{ count: number; date: string } | null>(null);

  useEffect(() => {
    // Fetch GitHub Contributions
    fetch('/api/github/contributions')
      .then((res) => res.json())
      .then((data: ContributionData) => {
        setContributionData(data);
      })
      .catch(() => {
        setContributionData({
          available: false,
          message: 'Contribution data unavailable.',
          totalContributions: 0,
          weeks: [],
        });
      })
      .finally(() => setLoadingCalendar(false));

    // Fetch Public Repos
    fetch('/api/github/repos')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.repos)) {
          setRepos(data.repos);
        }
      })
      .catch(() => {})
      .finally(() => setLoadingRepos(false));
  }, []);

  const getLevelColorClass = (count: number) => {
    if (count === 0) return 'bg-[var(--level-0)] border border-[var(--border)]';
    if (count <= 2) return 'bg-[var(--level-1)]';
    if (count <= 5) return 'bg-[var(--level-2)]';
    if (count <= 9) return 'bg-[var(--level-3)]';
    return 'bg-[var(--level-4)]';
  };

  return (
    <section className="w-full flex flex-col">
      <SectionHeader label="GitHub Activity" id="stats" />

      <div className="py-6 flex flex-col gap-6">
        {/* Heatmap Card */}
        <div className="w-full p-4 sm:p-5 rounded-xl border border-[var(--border)] bg-[var(--panel-card)] flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiGithub className="w-4 h-4 text-[var(--muted)]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--fg)] font-medium">
                Contributions
              </span>
            </div>

            {contributionData?.available && (
              <span className="text-xs text-[var(--muted)] font-mono">
                {contributionData.totalContributions.toLocaleString()} contributions in the last year
              </span>
            )}
          </div>

          {loadingCalendar ? (
            <div className="flex flex-col gap-2 py-8 items-center justify-center">
              <div className="w-6 h-6 border-2 border-[var(--border)] border-t-[var(--fg)] rounded-full animate-spin" />
              <span className="text-xs text-[var(--muted)] font-mono">
                Loading contribution calendar...
              </span>
            </div>
          ) : contributionData?.available && contributionData.weeks.length > 0 ? (
            <div className="flex flex-col gap-2 mt-1">
              {/* Heatmap Grid */}
              <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
                <div className="flex gap-[3px] min-w-max p-1">
                  {contributionData.weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[3px]">
                      {week.contributionDays.map((day) => (
                        <div
                          key={day.date}
                          onMouseEnter={() =>
                            setHoveredDay({
                              count: day.contributionCount,
                              date: day.date,
                            })
                          }
                          onMouseLeave={() => setHoveredDay(null)}
                          className={`w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] rounded-[1.5px] transition-transform hover:scale-125 cursor-pointer ${getLevelColorClass(
                            day.contributionCount
                          )}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend & Tooltip readout */}
              <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[var(--muted)] font-mono pt-2 border-t border-[var(--border)]">
                <div>
                  {hoveredDay ? (
                    <span>
                      <strong className="text-[var(--fg)]">
                        {hoveredDay.count} contribution{hoveredDay.count === 1 ? '' : 's'}
                      </strong>{' '}
                      on {hoveredDay.date}
                    </span>
                  ) : (
                    <span>Hover over any cell to see daily commits</span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 mt-2 sm:mt-0">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[var(--level-0)] border border-[var(--border)]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[var(--level-1)]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[var(--level-2)]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[var(--level-3)]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[var(--level-4)]" />
                  <span>More</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center border border-dashed border-[var(--border)] rounded-lg bg-[var(--panel)]">
              <AlertCircle className="w-6 h-6 text-[var(--muted)] mb-2" />
              <p className="text-xs text-[var(--muted)] font-mono">
                Contribution data unavailable
              </p>
              <p className="text-[11px] text-[var(--muted-light)] mt-1 max-w-sm">
                Set GITHUB_TOKEN in your environment variables to stream live contributions from the GitHub GraphQL API.
              </p>
            </div>
          )}
        </div>

        {/* Public Repos Cards */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-[12px] font-mono uppercase tracking-wider text-[var(--muted)] font-medium">
              Featured Public Repositories
            </span>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--muted)] hover:text-[var(--fg)] flex items-center gap-1 transition-colors"
            >
              <span>View all on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {loadingRepos ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-28 rounded-xl border border-[var(--border)] bg-[var(--panel-card)] animate-pulse"
                />
              ))}
            </div>
          ) : repos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--panel-card)] hover:border-[var(--pill-hover-border)] transition-all flex flex-col justify-between gap-2.5 group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="text-[13.5px] font-semibold text-[var(--fg)] group-hover:underline truncate">
                        {repo.name}
                      </h4>
                      <FiGithub className="w-3.5 h-3.5 text-[var(--muted)] shrink-0" />
                    </div>
                    <p className="text-[11.5px] text-[var(--muted)] line-clamp-2 mt-1">
                      {repo.description || 'Repository on GitHub'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-[var(--muted)] pt-2 border-t border-[var(--border)]">
                    <span className="flex items-center gap-1">
                      {repo.language && (
                        <>
                          <span className="w-2 h-2 rounded-full bg-[var(--muted)]" />
                          <span>{repo.language}</span>
                        </>
                      )}
                    </span>
                    <div className="flex items-center gap-2.5">
                      {repo.stars > 0 && (
                        <span className="flex items-center gap-0.5">
                          <Star className="w-3 h-3" />
                          <span>{repo.stars}</span>
                        </span>
                      )}
                      {repo.forks > 0 && (
                        <span className="flex items-center gap-0.5">
                          <GitFork className="w-3 h-3" />
                          <span>{repo.forks}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
