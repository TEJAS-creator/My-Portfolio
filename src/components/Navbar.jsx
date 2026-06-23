import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the middle portion of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-card shadow-lg py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center space-x-2 text-text-main font-bold text-xl tracking-tight group"
          >
            <div className="p-1.5 bg-primary/10 border border-primary/20 rounded-lg group-hover:border-accent/40 transition-colors duration-300">
              <Terminal className="h-5 w-5 text-accent" />
            </div>
            <span>
              Tejas<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">.N</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm sm:text-base font-semibold transition-all duration-300 relative py-1 hover:text-accent ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-primary'
                    : 'text-text-muted'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent origin-left transition-transform duration-300 scale-x-0 ${
                  activeSection === link.href.replace('#', '') ? 'scale-x-100' : 'hover:scale-x-100'
                }`} />
              </a>
            ))}
            
            {/* Outline highlight button */}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-accent border border-accent/30 rounded-full hover:bg-accent/10 hover:border-accent transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-muted hover:text-text-main p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-screen border-b border-card bg-background/95 backdrop-blur-lg' : 'max-h-0'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`block px-3 py-3 rounded-md text-lg font-medium transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? 'bg-primary/10 text-primary border-l-4 border-primary'
                  : 'text-text-muted hover:bg-card hover:text-accent'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="px-3 pt-2">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="block text-center w-full px-4 py-3 text-base font-bold text-accent border border-accent/40 rounded-lg hover:bg-accent/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
