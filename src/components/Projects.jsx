import { ExternalLink, Calendar } from 'lucide-react';
import { Github } from './SocialIcons';

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Personal Finance Analyzer",
      period: "May 2026 – Jun 2026",
      tech: ["React.js", "Firebase", "Google Gemini API", "Python", "REST APIs"],
      bullets: [
        "Built a secure full-stack financial analytics platform that parses CSV/PDF bank statements using AI + rule-based logic, automating transaction categorization.",
        "Integrated Google Gemini AI for personalized financial recommendations and spending insights.",
        "Real-time currency conversion dashboards with interactive visualizations for multi-currency expense tracking."
      ],
      github: "https://github.com/TEJAS-creator/finance-app",
      live: "https://finance-app-theta-ochre.vercel.app",
      namespace: "[ finance-analyzer ]",
      tagline: "Full-Stack Dev + AI Integration"
    },
    {
      title: "AI-Powered RAG Question Answering System",
      period: "Jan 2025 – Mar 2025",
      tech: ["Python", "FAISS", "HuggingFace Flan-T5", "Streamlit", "NLP", "Semantic Search"],
      bullets: [
        "Built a RAG app where users upload/paste documents and get context-aware answers via semantic search + NLG.",
        "Implemented FAISS vector retrieval with document chunking and Flan-T5 generation for low-latency QA.",
        "Interactive Streamlit UI for dynamic document ingestion and real-time querying."
      ],
      github: "https://github.com/TEJAS-creator/Machine-Learning/tree/main/chat",
      live: "https://m8muh4wygrakqyvwyf3gef.streamlit.app/",
      namespace: "[ rag-qa-system ]",
      tagline: "Vector Storage + Document QA"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mt-3 rounded-full" />
        </div>

        {/* Projects Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group bg-card border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full hover:border-accent/40 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Minimalist Graphic Header */}
              <div className="aspect-video bg-background flex flex-col items-center justify-center border-b border-white/5 relative select-none">
                <span className="font-mono text-lg font-bold text-accent tracking-widest opacity-80">
                  {project.namespace}
                </span>
                <span className="text-[10px] text-text-muted mt-2 font-sans font-medium uppercase tracking-wider">
                  {project.tagline}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Meta Row */}
                <div className="flex items-center gap-2 text-xs font-semibold text-text-muted mb-3 uppercase tracking-wider">
                  <Calendar className="h-3.5 w-3.5 text-accent" />
                  <span>{project.period}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-text-main group-hover:text-primary transition-colors duration-300 mb-4 leading-snug">
                  {project.title}
                </h3>

                {/* Description Bullets */}
                <ul className="space-y-3.5 mb-6 flex-grow">
                  {project.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start text-sm text-text-muted leading-relaxed">
                      <span className="text-accent mr-2.5 mt-1.5 block flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="px-2.5 py-1 bg-background text-accent text-xs font-semibold rounded-md border border-accent/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 border border-white/5 hover:border-primary/40 text-text-main hover:text-primary bg-background/50 hover:bg-background rounded-xl text-sm font-semibold transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-text-main hover:bg-primary/95 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
