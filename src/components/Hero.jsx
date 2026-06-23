import { Mail, ArrowRight, Download } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Name with Gradient */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
          Hi, I am{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Tejas N
          </span>
        </h1>

        {/* Intro Description */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-text-muted mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Second-year B.Tech CS student at MIT Bengaluru building practical AI solutions with Python, React, and modern LLM frameworks.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-primary text-text-main font-bold text-sm sm:text-base rounded-xl hover:bg-primary/95 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a
            href="/resume.pdf"
            download="Tejas_N_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border-2 border-accent/40 text-accent font-bold text-sm sm:text-base rounded-xl hover:bg-accent/10 hover:border-accent transition-all duration-300 hover:-translate-y-0.5"
          >
            Download Resume
            <Download className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://github.com/Tejas-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-card/60 border border-white/5 rounded-full text-text-muted hover:text-accent hover:border-accent/40 hover:bg-card transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="h-7 w-7" />
          </a>
          <a
            href="https://linkedin.com/in/tejas-n-june2006"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-card/60 border border-white/5 rounded-full text-text-muted hover:text-accent hover:border-accent/40 hover:bg-card transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-7 w-7" />
          </a>
          <a
            href="mailto:tejasnj14@gmail.com"
            className="p-3.5 bg-card/60 border border-white/5 rounded-full text-text-muted hover:text-accent hover:border-accent/40 hover:bg-card transition-all duration-300"
            aria-label="Email Contact"
          >
            <Mail className="h-7 w-7" />
          </a>
        </div>

      </div>
    </section>
  );
}
