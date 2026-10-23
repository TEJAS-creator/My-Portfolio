import { SectionHeader } from './SectionHeader';
import { siteConfig } from '@/data/site';
import { MapPin } from 'lucide-react';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col pb-12">
      <SectionHeader label="Location & Info" id="footer" />

      <div className="py-6 flex flex-col items-start gap-4 text-xs font-mono text-[var(--muted)]">
        {/* Location line with subtle pulse */}
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[var(--muted)] shrink-0" />
          <span>
            Based in <strong className="text-[var(--fg)] font-medium">{siteConfig.city}</strong>,{' '}
            {siteConfig.state}, {siteConfig.country}
          </span>
          <span className="flex items-center space-x-1 ml-1">
            <span className="h-1.5 w-1.5 bg-[var(--muted)] rounded-full animate-pulse"></span>
            <span className="h-1.5 w-1.5 bg-[var(--muted)] rounded-full animate-pulse [animation-delay:150ms]"></span>
            <span className="h-1.5 w-1.5 bg-[var(--muted)] rounded-full animate-pulse [animation-delay:300ms]"></span>
          </span>
        </div>

        {/* Education highlight */}
        <div className="text-[11.5px] text-[var(--muted)]">
          Manipal Institute of Technology, Bengaluru • B.Tech CSE (2024–2028)
        </div>

        {/* Minimal Copyright */}
        <div className="w-full pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[var(--muted)]">
          <span>
            © {currentYear} {siteConfig.name}. Designed & Built with Next.js, TypeScript & Tailwind CSS.
          </span>
          <span className="text-[10px] uppercase tracking-wider">
            Strict Monochrome Minimal
          </span>
        </div>
      </div>
    </footer>
  );
}
