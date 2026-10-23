'use client';

import { Mail, Download } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { siteConfig } from '@/data/site';
import { ThemeToggle } from './ThemeToggle';

export function HeroSection() {
  return (
    <section className="w-full pt-8 pb-7 flex flex-col relative fade-in-up">
      {/* Top bar with theme toggle */}
      <div className="flex items-center justify-end w-full mb-6">
        <ThemeToggle />
      </div>

      {/* Hero Name: Single clean line 'TEJAS', very large, tightly tracked neo-grotesk */}
      <div className="flex flex-col select-none">
        <h1 className="tracking-[-0.03em] leading-[0.9] font-black uppercase hero-text-shadow text-[clamp(4rem,18vw,88px)] text-[var(--fg)]">
          {siteConfig.firstName}
        </h1>
      </div>

      {/* Tagline: Full-Stack Developer | AI/ML Engineer | Computer Vision */}
      <p className="mt-4 text-[clamp(1.1rem,3.2vw,1.35rem)] font-normal text-[var(--muted)] leading-[1.4] tracking-tight max-w-xl">
        {siteConfig.tagline}
      </p>

      {/* Link Buttons: rounded-full pills with 1px border, slightly lighter fill, outline monochrome icons */}
      <div className="flex flex-wrap items-center gap-2.5 mt-6">
        {/* GitHub Pill */}
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--pill-border)] bg-[var(--pill-bg)] text-[13.5px] font-medium text-[var(--fg)] hover:border-[var(--pill-hover-border)] hover:-translate-y-[1px] transition-all cursor-pointer shadow-xs"
        >
          <FiGithub className="w-4 h-4 stroke-[1.75]" />
          <span>GitHub</span>
        </a>

        {/* LinkedIn Pill */}
        <a
          href={siteConfig.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--pill-border)] bg-[var(--pill-bg)] text-[13.5px] font-medium text-[var(--fg)] hover:border-[var(--pill-hover-border)] hover:-translate-y-[1px] transition-all cursor-pointer shadow-xs"
        >
          <FiLinkedin className="w-4 h-4 stroke-[1.75]" />
          <span>LinkedIn</span>
        </a>

        {/* Email Pill */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--pill-border)] bg-[var(--pill-bg)] text-[13.5px] font-medium text-[var(--fg)] hover:border-[var(--pill-hover-border)] hover:-translate-y-[1px] transition-all cursor-pointer shadow-xs"
        >
          <Mail className="w-4 h-4 stroke-[1.75]" />
          <span>Email</span>
        </a>

        {/* Resume Download Pill (One click download) */}
        <a
          href={siteConfig.resumePath}
          download={siteConfig.resumeDownloadName}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--pill-border)] bg-[var(--pill-bg)] text-[13.5px] font-medium text-[var(--fg)] hover:border-[var(--pill-hover-border)] hover:-translate-y-[1px] transition-all cursor-pointer shadow-xs"
          title={`Download ${siteConfig.resumeDownloadName}`}
        >
          <Download className="w-4 h-4 stroke-[1.75]" />
          <span>Resume</span>
        </a>
      </div>
    </section>
  );
}
