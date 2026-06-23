import { Award, CheckCircle2, Milestone } from 'lucide-react';

export default function Achievements() {
  const academics = [
    {
      level: "PUC (Class 12 - PCMC)",
      school: "Vidya Mandir, Malleshwaram",
      score: "94%",
      year: "2024",
      desc: "Completed pre-university education specializing in Physics, Chemistry, Mathematics, and Computer Science."
    },
    {
      level: "SSLC (Class 10)",
      school: "Vidya Vardhaka Sangha, Rajajinagar",
      score: "98.4%",
      year: "2022",
      desc: "Completed secondary education with top honors."
    }
  ];

  const certifications = [
    {
      title: "Fundamentals of AI Agents Using RAG and LangChain",
      issuer: "IBM",
      badgeColor: "border-blue-500/20 text-blue-400 bg-blue-500/5",
      desc: "Learned core concepts of AI agents, building pipelines using LangChain, vector retrieval databases, and LLM frameworks."
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta",
      badgeColor: "border-purple-500/20 text-purple-400 bg-purple-500/5",
      desc: "Explored fundamentals of HTML, CSS, JavaScript, and modern component-driven front-end structures."
    },
    {
      title: "Data Analysis and Visualization in Python",
      issuer: "Microsoft",
      badgeColor: "border-green-500/20 text-green-400 bg-green-500/5",
      desc: "Mastered data inspection, engineering, and visual plotting using pandas, NumPy, seaborn, and matplotlib."
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Academics Timeline - Column 5 */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-text-main flex items-center gap-2 mb-6">
              <Milestone className="h-5 w-5 text-primary" />
              <span>Academic Milestones</span>
            </h3>

            {/* Timeline Vertical Stack */}
            <div className="relative border-l border-white/5 ml-3 pl-6 space-y-8">
              {academics.map((academic, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-background border border-primary text-primary shadow group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  </span>
                  
                  {/* Timeline Content */}
                  <div className="p-5 bg-card border border-white/5 rounded-xl hover:border-primary/20 transition-all duration-300">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded">
                        {academic.year}
                      </span>
                      <span className="text-sm font-bold text-accent">{academic.score}</span>
                    </div>
                    
                    <h4 className="text-base font-bold text-text-main leading-tight mb-1">
                      {academic.level}
                    </h4>
                    
                    <p className="text-xs text-text-muted font-medium mb-3">
                      {academic.school}
                    </p>
                    
                    <p className="text-xs text-text-muted font-sans leading-relaxed">
                      {academic.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Grid - Column 7 */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-text-main flex items-center gap-2 mb-6">
              <Award className="h-5 w-5 text-accent" />
              <span>Professional Certifications</span>
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-card border border-white/5 hover:border-accent/25 rounded-2xl flex flex-col md:flex-row md:items-center gap-4 transition-all duration-300"
                >
                  {/* Badge Logo / Icon */}
                  <div className={`p-3 border rounded-xl flex items-center justify-center flex-shrink-0 w-12 h-12 ${cert.badgeColor}`}>
                    <CheckCircle2 className="h-6 w-6" />
                  </div>

                  {/* Cert text */}
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">{cert.issuer}</span>
                      <span className="text-[10px] text-text-muted font-sans bg-background/50 px-2 py-0.5 rounded border border-white/5">Verified Credential</span>
                    </div>
                    <h4 className="text-base font-bold text-text-main leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed font-sans">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
