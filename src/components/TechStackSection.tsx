'use client';

import { siteConfig, TechItem } from '@/data/site';
import { SectionHeader } from './SectionHeader';
import { SiHuggingface, SiN8N } from 'react-icons/si';
import { Cpu, Terminal, Layers, Network, Search, Sparkles } from 'lucide-react';

function renderIcon(tech: TechItem) {
  // Special Simple Icons
  if (tech.name.includes('Hugging Face')) {
    return <SiHuggingface className="w-3.5 h-3.5 shrink-0" style={{ color: '#FFD21E' }} />;
  }
  if (tech.name === 'n8n') {
    return <SiN8N className="w-3.5 h-3.5 shrink-0" style={{ color: '#EA4B71' }} />;
  }

  // Devicon class
  if (tech.logoType === 'devicon' && tech.deviconClass) {
    if (tech.darkInvert) {
      return (
        <i
          className={`${tech.deviconClass} text-sm shrink-0 text-black dark:text-white transition-colors`}
        />
      );
    }
    return <i className={`${tech.deviconClass} text-sm shrink-0`} />;
  }

  // Fallbacks for items without official logos: clean neutral monochrome icons
  if (tech.name === 'REST APIs') {
    return <Network className="w-3.5 h-3.5 shrink-0 text-[var(--muted)]" />;
  }
  if (tech.name === 'CI/CD') {
    return <Terminal className="w-3.5 h-3.5 shrink-0 text-[var(--muted)]" />;
  }
  if (tech.name === 'FAISS') {
    return <Layers className="w-3.5 h-3.5 shrink-0 text-[var(--muted)]" />;
  }
  if (tech.name === 'LangGraph') {
    return <Network className="w-3.5 h-3.5 shrink-0 text-[var(--muted)]" />;
  }
  if (tech.name === 'RAG') {
    return <Search className="w-3.5 h-3.5 shrink-0 text-[var(--muted)]" />;
  }
  if (tech.name === 'AI Agents') {
    return <Cpu className="w-3.5 h-3.5 shrink-0 text-[var(--muted)]" />;
  }
  if (tech.name === 'NLP') {
    return <Terminal className="w-3.5 h-3.5 shrink-0 text-[var(--muted)]" />;
  }
  if (tech.name === 'Semantic Search') {
    return <Search className="w-3.5 h-3.5 shrink-0 text-[var(--muted)]" />;
  }
  if (tech.name === 'Multimodal AI') {
    return <Sparkles className="w-3.5 h-3.5 shrink-0 text-[var(--muted)]" />;
  }

  return null;
}

export function TechStackSection() {
  return (
    <section className="w-full flex flex-col">
      <SectionHeader label="Tech Stack" id="stack" />

      <div className="py-6 flex flex-col gap-6">
        {siteConfig.techStack.map((group) => (
          <div key={group.category} className="flex flex-col gap-2.5">
            {/* Category label */}
            <span className="text-[12px] font-mono uppercase tracking-wider text-[var(--muted)] font-medium">
              {group.category}
            </span>

            {/* Chips row */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <div
                  key={tech.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--pill-bg)] text-[13px] font-medium text-[var(--fg)] hover:border-[var(--pill-hover-border)] transition-colors select-none"
                >
                  {renderIcon(tech)}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
