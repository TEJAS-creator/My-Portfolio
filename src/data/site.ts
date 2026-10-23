export interface TechItem {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'AI/ML' | 'Databases' | 'Developer Tools' | 'AI Engineering';
  logoType: 'devicon' | 'simpleicon' | 'text';
  deviconClass?: string;
  siColor?: string;
  darkInvert?: boolean; // For black/dark logos like Next.js, Vercel, GitHub
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlight?: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  isPendingRepo?: boolean;
}

export interface SiteConfig {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  city: string;
  state: string;
  country: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUrl: string;
  portfolioUrl: string;
  schedulingUrl: string;
  resumePath: string;
  resumeDownloadName: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    period: string;
    cgpa: string;
    coursework: string[];
  };
  certifications: {
    title: string;
    issuer: string;
  }[];
  techStack: {
    category: string;
    items: TechItem[];
  }[];
  projects: Project[];
}

export const siteConfig: SiteConfig = {
  name: "TEJAS",
  firstName: "TEJAS",
  lastName: "",
  role: "Full-Stack Developer | AI/ML Engineer | Computer Vision",
  tagline: "Full-Stack Developer | AI/ML Engineer | Computer Vision",
  summary:
    "Third-year B.Tech Computer Science student at MIT Bengaluru specializing in AI/ML engineering and full-stack web development. Hands-on experience building production-ready AI applications including RAG systems, LLM-powered tools, and high-performance computing platforms.",
  email: "tejasnj14@gmail.com",
  phone: "+91 93538 70346",
  location: "Bengaluru, Karnataka, India",
  city: "Bengaluru",
  state: "Karnataka",
  country: "India",
  githubUsername: "Tejas-creator",
  githubUrl: "https://github.com/Tejas-creator",
  linkedinUrl: "https://www.linkedin.com/in/tejas-n-june2006",
  portfolioUrl: "https://tejasn-portfolio.vercel.app",
  schedulingUrl: "https://cal.com/tejas-n",
  resumePath: "/resume.pdf",
  resumeDownloadName: "Tejas-N-Resume.pdf",
  education: {
    degree: "B.Tech",
    field: "Computer Science and Engineering",
    institution: "Manipal Institute of Technology, Bengaluru",
    period: "August 2024 – May 2028",
    cgpa: "7.33 / 10.0 (up to 4th Semester)",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Machine Learning",
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  certifications: [
    { title: "Fundamentals of AI Agents Using RAG and LangChain", issuer: "IBM" },
    { title: "Front-End Development", issuer: "Meta" },
    { title: "Data Analysis and Visualization in Python", issuer: "Microsoft" },
    { title: "GenAI Job Simulation (AI-powered Financial Chatbot)", issuer: "BCG X" },
  ],
  techStack: [
    {
      category: "Languages",
      items: [
        { name: "Python", category: "Languages", logoType: "devicon", deviconClass: "devicon-python-plain colored" },
        { name: "JavaScript", category: "Languages", logoType: "devicon", deviconClass: "devicon-javascript-plain colored" },
        { name: "C", category: "Languages", logoType: "devicon", deviconClass: "devicon-c-plain colored" },
        { name: "Java", category: "Languages", logoType: "devicon", deviconClass: "devicon-java-plain colored" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", category: "Frontend", logoType: "devicon", deviconClass: "devicon-react-original colored" },
        { name: "Next.js", category: "Frontend", logoType: "devicon", deviconClass: "devicon-nextjs-plain", darkInvert: true },
        { name: "HTML5", category: "Frontend", logoType: "devicon", deviconClass: "devicon-html5-plain colored" },
        { name: "CSS3", category: "Frontend", logoType: "devicon", deviconClass: "devicon-css3-plain colored" },
        { name: "Tailwind CSS", category: "Frontend", logoType: "devicon", deviconClass: "devicon-tailwindcss-original colored" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "FastAPI", category: "Backend", logoType: "devicon", deviconClass: "devicon-fastapi-plain colored" },
        { name: "Node.js", category: "Backend", logoType: "devicon", deviconClass: "devicon-nodejs-plain colored" },
        { name: "REST APIs", category: "Backend", logoType: "text" },
      ],
    },
    {
      category: "AI/ML",
      items: [
        { name: "PyTorch", category: "AI/ML", logoType: "devicon", deviconClass: "devicon-pytorch-original colored" },
        { name: "Scikit-learn", category: "AI/ML", logoType: "devicon", deviconClass: "devicon-scikitlearn-plain colored" },
        { name: "Hugging Face Transformers", category: "AI/ML", logoType: "simpleicon", siColor: "#FFD21E" },
        { name: "LangChain", category: "AI/ML", logoType: "simpleicon", siColor: "#1C3C3C", darkInvert: true },
        { name: "LangGraph", category: "AI/ML", logoType: "text" },
        { name: "FAISS", category: "AI/ML", logoType: "text" },
        { name: "OpenCV", category: "AI/ML", logoType: "devicon", deviconClass: "devicon-opencv-plain colored" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", category: "Databases", logoType: "devicon", deviconClass: "devicon-postgresql-plain colored" },
        { name: "PostGIS", category: "Databases", logoType: "devicon", deviconClass: "devicon-postgresql-plain colored" },
        { name: "SQLite", category: "Databases", logoType: "devicon", deviconClass: "devicon-sqlite-plain colored" },
        { name: "Firebase", category: "Databases", logoType: "devicon", deviconClass: "devicon-firebase-plain colored" },
      ],
    },
    {
      category: "Developer Tools",
      items: [
        { name: "Git", category: "Developer Tools", logoType: "devicon", deviconClass: "devicon-git-plain colored" },
        { name: "GitHub", category: "Developer Tools", logoType: "devicon", deviconClass: "devicon-github-original", darkInvert: true },
        { name: "Docker", category: "Developer Tools", logoType: "devicon", deviconClass: "devicon-docker-plain colored" },
        { name: "Vercel", category: "Developer Tools", logoType: "devicon", deviconClass: "devicon-vercel-original", darkInvert: true },
        { name: "Streamlit", category: "Developer Tools", logoType: "devicon", deviconClass: "devicon-streamlit-plain colored" },
        { name: "CI/CD", category: "Developer Tools", logoType: "text" },
      ],
    },
    {
      category: "AI Engineering",
      items: [
        { name: "RAG", category: "AI Engineering", logoType: "text" },
        { name: "AI Agents", category: "AI Engineering", logoType: "text" },
        { name: "NLP", category: "AI Engineering", logoType: "text" },
        { name: "Semantic Search", category: "AI Engineering", logoType: "text" },
        { name: "Multimodal AI", category: "AI Engineering", logoType: "text" },
        { name: "n8n", category: "AI Engineering", logoType: "simpleicon", siColor: "#EA4B71" },
      ],
    },
  ],
  projects: [
    {
      id: "satq-ai",
      title: "SATQ AI — Geospatial Intelligence Platform",
      tagline: "SIH Hackathon Foundation Platform",
      description:
        "An AI-powered geospatial platform that transforms natural-language queries into actionable satellite imagery analysis. Integrates multimodal AI, computer vision, and interactive mapping to enable region-of-interest analysis, zero-shot segmentation, change detection, and GeoJSON-based result export.",
      highlight: "Sub-10s spatial inference with dynamic 512x512 tile streaming reducing GPU overhead by 70%",
      tech: [
        "React.js",
        "FastAPI",
        "PyTorch",
        "Gemini 2.5 Flash",
        "Grounding DINO",
        "SAM 2",
        "PostGIS",
        "OpenCV",
        "Leaflet.js",
      ],
      githubUrl: "https://github.com/TEJAS-creator/AI-Project-FullStack",
      demoUrl: "https://github.com/TEJAS-creator/AI-Project-FullStack",
    },
    {
      id: "crack-detection",
      title: "AI-Powered Crack Detection System",
      tagline: "Hackverse 2.0 (IBM Finalist)",
      description:
        "An intelligent infrastructure inspection platform that analyzes images, videos, and live camera feeds to detect structural cracks and assess defect severity. Combines vision-based processing with AI models and fallback detection mechanisms to support automated inspection and reporting.",
      highlight: "Selected as finalist among 90 competing teams at IBM-judged Hackverse 2.0",
      tech: [
        "React.js",
        "TypeScript",
        "FastAPI",
        "OpenCV",
        "OpenRouter",
        "Google Gemini",
        "IBM Granite",
        "SQLite",
      ],
      githubUrl: "https://github.com/TEJAS-creator/CDS-Crack-Detection-System",
      demoUrl: "https://github.com/TEJAS-creator/CDS-Crack-Detection-System",
    },
    {
      id: "jarvis-assistant",
      title: "JARVIS — Voice-Controlled AI Coding Assistant",
      tagline: "Hands-Free Desktop Developer Assistant",
      description:
        "A voice-driven AI desktop assistant that enables natural-language codebase queries, general knowledge assistance, and Git/GitHub operations. Integrates speech recognition, intelligent intent routing, contextual codebase retrieval, and neural text-to-speech with automated workflows for hands-free developer productivity.",
      highlight: "Voice-activated workflow with wake-word detection, Groq Whisper STT, and Edge TTS",
      tech: [
        "Python",
        "Groq Whisper",
        "LLMs",
        "Silero VAD",
        "openWakeWord",
        "Edge TTS",
        "n8n",
        "GitHub CLI",
      ],
      githubUrl: "https://github.com/TEJAS-creator/Jarvis-Assistant",
      demoUrl: "https://github.com/TEJAS-creator/Jarvis-Assistant",
    },
    {
      id: "rag-assistant",
      title: "RAG-Based Document Intelligence Assistant",
      tagline: "High-Speed Context-Aware Knowledge Retrieval",
      description:
        "A retrieval-augmented generation system that enables context-aware question answering over custom document collections. Uses document chunking, semantic retrieval, vector search, and language models to retrieve relevant information and generate grounded responses through an interactive interface.",
      highlight: "Sub-500ms query latency, reducing document lookup time by 70% across 100+ page corpora",
      tech: [
        "Python",
        "FAISS",
        "Hugging Face Transformers",
        "Flan-T5",
        "LangChain",
        "Streamlit",
        "NLP",
      ],
      githubUrl: "https://github.com/TEJAS-creator/Agentic-AI",
      demoUrl: "https://github.com/TEJAS-creator/Agentic-AI",
    },
    {
      id: "finance-analyzer",
      title: "AI-Powered Finance Analyzer",
      tagline: "Smart Spending Intelligence & Predictive Analytics",
      description:
        "A financial analytics application designed to help users understand spending patterns, explore financial data, and generate actionable insights through interactive analysis and visualization.",
      highlight: "Interactive Streamlit visualization engine with algorithmic expense categorization",
      tech: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Scikit-learn",
        "Streamlit",
      ],
      githubUrl: "https://github.com/TEJAS-creator/finance-app",
      demoUrl: "https://github.com/TEJAS-creator/finance-app",
    },
    {
      id: "soundmatch",
      title: "SOUNDMATCH — Parallel Audio Fingerprinting & Song Identification",
      tagline: "High-Performance Distributed Audio Matching",
      description:
        "A distributed audio identification system inspired by acoustic fingerprinting techniques. Extracts time-frequency landmarks from audio signals, generates fingerprints for song matching, and distributes database search across multiple processes using MPI. Includes a web dashboard for audio uploads and performance benchmarking against a sequential implementation.",
      highlight: "Distributed MPI acoustic landmark hashing with benchmarked parallel acceleration",
      tech: [
        "C",
        "OpenMPI",
        "Python",
        "Librosa",
        "NumPy",
        "SciPy",
        "Flask",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Chart.js",
      ],
      githubUrl: "https://github.com/TEJAS-creator/Sound-Match-System",
      demoUrl: "https://github.com/TEJAS-creator/Sound-Match-System",
    },
  ],
};
