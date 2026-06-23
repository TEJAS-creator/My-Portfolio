import { Code2, Cpu, Laptop, Wrench, BrainCircuit } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="h-5 w-5 text-accent" />,
      skills: ["Python", "JavaScript", "C", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Laptop className="h-5 w-5 text-primary" />,
      skills: ["React.js", "Node.js", "Streamlit"]
    },
    {
      title: "AI/ML Ecosystem",
      icon: <Cpu className="h-5 w-5 text-accent" />,
      skills: ["scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "FAISS", "HuggingFace Transformers", "LangChain"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-5 w-5 text-primary" />,
      skills: ["Git", "Firebase", "Docker", "N8N", "REST APIs"]
    },
    {
      title: "Core Concepts",
      icon: <BrainCircuit className="h-5 w-5 text-accent" />,
      skills: ["RAG", "NLP", "Chatbot Development", "Semantic Search", "Document Chunking", "Prompt Engineering", "Vector Embeddings"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mt-3 rounded-full" />
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={`p-6 bg-card border border-white/5 rounded-2xl flex flex-col h-full hover:border-accent/30 transition-all duration-300 ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${
                idx === 4 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/5">
                <div className="p-2.5 bg-background rounded-xl border border-white/5">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg text-text-main">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-3 py-1.5 bg-background/50 border border-white/5 text-text-muted hover:text-text-main hover:border-primary/40 text-sm font-medium rounded-lg transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
