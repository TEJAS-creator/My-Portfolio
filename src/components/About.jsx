import { BookOpen, GraduationCap, Award } from 'lucide-react';

export default function About() {
  const courses = [
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Machine Learning',
    'Object-Oriented Programming (OOP)'
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-text-main flex items-center gap-2">
              <span className="text-accent">01.</span> Building the Future of AI & Web Tech
            </h3>
            
            <p className="text-text-muted leading-relaxed text-base sm:text-lg">
              I am a passionate Computer Science student and software developer with a strong focus on artificial intelligence, natural language processing, and modern full-stack web applications. I love bridging the gap between theoretical knowledge and practical engineering.
            </p>
            
            <p className="text-text-muted leading-relaxed text-base sm:text-lg">
              My current work revolves around constructing highly responsive Retrieval-Augmented Generation (RAG) frameworks, building robust backend pipelines using Python, and developing user-friendly frontend interfaces in React.js. I thrive in collaborative environments where I can build and iterate quickly.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-card border border-white/5 rounded-xl flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-main">AI & ML Focus</div>
                  <div className="text-xs text-text-muted">RAG & Agent systems</div>
                </div>
              </div>
              
              <div className="p-4 bg-card border border-white/5 rounded-xl flex items-center space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-main font-sans">Full-Stack Dev</div>
                  <div className="text-xs text-text-muted font-sans">React, Node, & APIs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Coursework Column */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Card */}
            <div className="p-6 bg-card border border-white/5 rounded-2xl relative overflow-hidden group transition-all duration-300 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/15 rounded-xl text-primary mt-1">
                  <GraduationCap className="h-6 w-6" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent">Education</div>
                  <h4 className="text-lg font-bold text-text-main leading-tight">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-sm text-text-muted font-medium">Manipal Institute of Technology, Bengaluru</p>
                  <p className="text-xs text-text-muted bg-background/50 inline-block px-2.5 py-1 rounded-md border border-white/5">2024 — 2028</p>
                </div>
              </div>
            </div>

            {/* Coursework Card */}
            <div className="p-6 bg-card border border-white/5 rounded-2xl shadow-md">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Relevant Coursework</h4>
              
              <div className="flex flex-wrap gap-2.5">
                {courses.map((course, index) => (
                  <span 
                    key={index}
                    className="px-3.5 py-1.5 bg-background border border-accent/25 hover:border-accent/80 text-accent hover:text-text-main text-xs sm:text-sm font-medium rounded-lg transition-colors duration-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}
