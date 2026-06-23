import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background border-t border-card py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo or Copyright text */}
          <div className="text-center md:text-left space-y-1">
            <div className="text-sm font-semibold text-text-main">
              Tejas N <span className="text-accent">| Portfolio</span>
            </div>
            <div className="text-xs text-text-muted font-sans">
              © {new Date().getFullYear()} Tejas N. All rights reserved.
            </div>
          </div>

          {/* Core statement */}
          <div className="text-xs text-text-muted font-sans text-center max-w-xs md:max-w-none">
            Designed & Built with React.js & Tailwind CSS.
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-card hover:bg-card/80 border border-white/5 hover:border-accent/40 rounded-lg text-xs font-semibold text-text-muted hover:text-accent transition-all duration-300"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ChevronUp className="h-3.5 w-3.5" />
          </button>

        </div>
      </div>
    </footer>
  );
}
