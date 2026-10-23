'use client';

import { siteConfig } from '@/data/site';
import { SectionHeader } from './SectionHeader';
import { ExternalLink, Sparkles } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { SiHuggingface } from 'react-icons/si';

function renderSmallTechTag(name: string) {
  // Check for icon classes
  let icon = null;
  const lower = name.toLowerCase();

  if (lower.includes('react')) {
    icon = <i className="devicon-react-original colored text-[11px]" />;
  } else if (lower.includes('fastapi')) {
    icon = <i className="devicon-fastapi-plain colored text-[11px]" />;
  } else if (lower.includes('pytorch')) {
    icon = <i className="devicon-pytorch-original colored text-[11px]" />;
  } else if (lower.includes('opencv')) {
    icon = <i className="devicon-opencv-plain colored text-[11px]" />;
  } else if (lower.includes('python')) {
    icon = <i className="devicon-python-plain colored text-[11px]" />;
  } else if (lower.includes('typescript')) {
    icon = <i className="devicon-typescript-plain colored text-[11px]" />;
  } else if (lower.includes('sqlite')) {
    icon = <i className="devicon-sqlite-plain colored text-[11px]" />;
  } else if (lower.includes('c') && !lower.includes('css') && !lower.includes('chart')) {
    icon = <i className="devicon-c-plain colored text-[11px]" />;
  } else if (lower.includes('hugging face')) {
    icon = <SiHuggingface className="w-2.5 h-2.5 text-[#FFD21E]" />;
  }

  return (
    <span
      key={name}
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[var(--border)] bg-[var(--pill-bg)] text-[11px] font-mono text-[var(--muted-light)]"
    >
      {icon}
      <span>{name}</span>
    </span>
  );
}

export function ProjectsSection() {
  return (
    <section className="w-full flex flex-col">
      <SectionHeader label="Projects" id="projects" />

      <div className="py-6 flex flex-col gap-4">
        {siteConfig.projects.map((project) => (
          <div
            key={project.id}
            className="w-full p-4 sm:p-5 rounded-xl border border-[var(--border)] bg-[var(--panel-card)] flex flex-col gap-3 transition-colors hover:border-[var(--pill-hover-border)]"
          >
            {/* Header: Title and GitHub Link */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="text-[15px] sm:text-[16px] font-bold text-[var(--fg)] tracking-tight">
                  {project.title}
                </h3>
                {project.tagline && (
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--muted)] block mt-0.5">
                    {project.tagline}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--panel)] text-xs font-medium text-[var(--fg)] hover:border-[var(--pill-hover-border)] transition-colors"
                    title={`View ${project.title} on GitHub`}
                  >
                    <FiGithub className="w-3.5 h-3.5" />
                    <span>Repo</span>
                  </a>
                )}
                {project.demoUrl && project.demoUrl !== project.githubUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--panel)] text-xs font-medium text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--pill-hover-border)] transition-colors"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-[13px] sm:text-[13.5px] text-[var(--muted)] leading-relaxed">
              {project.description}
            </p>

            {/* Key Highlight / Metric */}
            {project.highlight && (
              <div className="flex items-start gap-1.5 text-xs text-[var(--fg)] bg-[var(--panel)] border border-[var(--border)] rounded-md px-2.5 py-1.5">
                <Sparkles className="w-3.5 h-3.5 shrink-0 text-[var(--muted)] mt-0.5" />
                <span className="leading-tight text-[12px]">{project.highlight}</span>
              </div>
            )}

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mt-1 pt-2 border-t border-[var(--border)]">
              {project.tech.map((t) => renderSmallTechTag(t))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
