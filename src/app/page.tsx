import { HeroSection } from '@/components/HeroSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { GitHubActivitySection } from '@/components/GitHubActivitySection';
import { ContactSection } from '@/components/ContactSection';
import { FooterSection } from '@/components/FooterSection';

export default function Home() {
  return (
    <main className="min-h-screen w-full page-diagonal-bg flex justify-center py-0 sm:py-8">
      {/* Centered Column: 580px wide with dark panel background and 1px side borders */}
      <div className="w-full max-w-[580px] bg-[var(--panel)] border-x border-[var(--border)] min-h-screen px-4 sm:px-6 relative flex flex-col shadow-2xl">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Tech Stack */}
        <TechStackSection />

        {/* 3. Projects */}
        <ProjectsSection />

        {/* 4. GitHub Activity */}
        <GitHubActivitySection />

        {/* 5. Contact */}
        <ContactSection />

        {/* 6. Footer */}
        <FooterSection />
      </div>
    </main>
  );
}
