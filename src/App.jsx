import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-text-main font-sans selection:bg-primary/30 selection:text-accent overflow-x-hidden">
      
      {/* Background Decorative Lighting */}
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <Projects />

          {/* Achievements & Certifications Section */}
          <Achievements />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
