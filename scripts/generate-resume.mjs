import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]); // A4 size
  const helvetica = await doc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const helveticaOblique = await doc.embedFont(StandardFonts.HelveticaOblique);

  const { width, height } = page.getSize();
  const margin = 40;
  let y = height - 45;

  const primaryColor = rgb(0.1, 0.1, 0.1);
  const mutedColor = rgb(0.35, 0.35, 0.35);
  const lineColor = rgb(0.75, 0.75, 0.75);

  function drawText(text, x, curY, font, size, color = primaryColor) {
    page.drawText(text, { x, y: curY, size, font, color });
  }

  function drawDivider(curY) {
    page.drawLine({
      start: { x: margin, y: curY },
      end: { x: width - margin, y: curY },
      thickness: 0.75,
      color: lineColor,
    });
  }

  // Header - Name
  const name = "TEJAS N";
  const nameWidth = helveticaBold.widthOfTextAtSize(name, 22);
  drawText(name, (width - nameWidth) / 2, y, helveticaBold, 22);
  y -= 18;

  // Subheader - Contact Info
  const contact = "Bengaluru, Karnataka  |  +91 93538 70346  |  tejasnj14@gmail.com";
  const contactWidth = helvetica.widthOfTextAtSize(contact, 9.5);
  drawText(contact, (width - contactWidth) / 2, y, helvetica, 9.5, mutedColor);
  y -= 14;

  const links = "github.com/Tejas-creator  |  linkedin.com/in/tejas-n-june2006  |  tejasn-portfolio.vercel.app";
  const linksWidth = helvetica.widthOfTextAtSize(links, 9);
  drawText(links, (width - linksWidth) / 2, y, helvetica, 9, mutedColor);
  y -= 16;

  // SECTION: PROFESSIONAL SUMMARY
  drawText("PROFESSIONAL SUMMARY", margin, y, helveticaBold, 10.5);
  y -= 5;
  drawDivider(y);
  y -= 14;

  const summary = [
    "Third-year B.Tech Computer Science student at MIT Bengaluru specializing in AI/ML engineering and full-stack web development.",
    "Hands-on experience building production-ready AI applications including RAG systems, LLM-powered tools, and data analytics",
    "platforms using Python, React.js, LangChain-Graph, and Hugging Face Transformers."
  ];
  summary.forEach(line => {
    drawText(line, margin, y, helvetica, 9);
    y -= 12;
  });
  y -= 6;

  // SECTION: EDUCATION
  drawText("EDUCATION", margin, y, helveticaBold, 10.5);
  y -= 5;
  drawDivider(y);
  y -= 14;

  drawText("B.Tech, Computer Science and Engineering", margin, y, helveticaBold, 9.5);
  const gradDate = "August 2024 - May 2028";
  const gradWidth = helveticaBold.widthOfTextAtSize(gradDate, 9.5);
  drawText(gradDate, width - margin - gradWidth, y, helveticaBold, 9.5);
  y -= 12;

  drawText("Manipal Institute of Technology, Bengaluru  |  CGPA: 7.33 / 10.0 (up to 4th Semester)", margin, y, helveticaOblique, 9, mutedColor);
  y -= 12;
  drawText("Relevant Coursework: DSA, Database Management Systems, Machine Learning, OOPS, Operating Systems, Computer Networks", margin, y, helvetica, 8.5);
  y -= 18;

  // SECTION: TECHNICAL SKILLS
  drawText("TECHNICAL SKILLS", margin, y, helveticaBold, 10.5);
  y -= 5;
  drawDivider(y);
  y -= 14;

  const skills = [
    ["Languages:", "Python, JavaScript, C, Java, HTML5, CSS3"],
    ["Frontend:", "React.js, Next.js, Tailwind CSS, Streamlit"],
    ["Backend & DB:", "FastAPI, Node.js, REST APIs, PostgreSQL, PostGIS, SQLite, Firebase"],
    ["AI / ML & Agents:", "PyTorch, Scikit-learn, FAISS, Hugging Face Transformers, LangChain, LangGraph, OpenCV"],
    ["Developer Tools:", "Git, GitHub, Docker, Vercel, n8n, CI/CD, VS Code"],
    ["Concepts:", "RAG, AI Agents, NLP, Semantic Search, Transformer Architecture, Data Pipelines, Full-Stack Dev"]
  ];

  skills.forEach(([cat, items]) => {
    drawText(cat, margin, y, helveticaBold, 8.8);
    drawText(items, margin + 95, y, helvetica, 8.8);
    y -= 11.5;
  });
  y -= 6;

  // SECTION: PROJECTS
  drawText("PROJECTS", margin, y, helveticaBold, 10.5);
  y -= 5;
  drawDivider(y);
  y -= 14;

  // Project 1
  drawText("SATQ AI - Geospatial Foundation Platform", margin, y, helveticaBold, 9.5);
  const p1Date = "Sep 2026 onwards - SIH Hackathon";
  drawText(p1Date, width - margin - helvetica.widthOfTextAtSize(p1Date, 8.5), y, helvetica, 8.5, mutedColor);
  y -= 11;
  drawText("React.js, FastAPI, PyTorch, Gemini 2.5 Flash, Grounding DINO, SAM 2, PostGIS, OpenCV, Leaflet.js", margin, y, helveticaOblique, 8.5, mutedColor);
  y -= 11;
  [
    "Built an agentic platform using Gemini 2.5 Flash as an AI orchestrator to parse natural language queries, cutting spatial analysis time from 4+ hours to <10 seconds.",
    "Engineered dynamic ROI engine with Leaflet.js and OpenCV streaming 512x512 tile crops, reducing GPU compute overhead by >70%.",
    "Integrated multimodal AI pipeline (Grounding DINO, SAM 2, Prithvi-EO, Siam-Swin ViT) for zero-shot segmentation, change detection, and auditable GeoJSON export."
  ].forEach(bullet => {
    drawText("-  " + bullet, margin + 5, y, helvetica, 8.2);
    y -= 10.5;
  });
  y -= 6;

  // Project 2
  drawText("CDS - AI-Powered Crack Detection System", margin, y, helveticaBold, 9.5);
  const p2Date = "Hackverse 2.0 - IBM | Aug 2026";
  drawText(p2Date, width - margin - helvetica.widthOfTextAtSize(p2Date, 8.5), y, helvetica, 8.5, mutedColor);
  y -= 11;
  drawText("React.js, TypeScript, FastAPI, OpenCV, OpenRouter, Google Gemini, IBM Granite, SQLite", margin, y, helveticaOblique, 8.5, mutedColor);
  y -= 11;
  [
    "Built an intelligent infrastructure inspection platform supporting image, video, and live-camera crack detection with automated severity assessment and reporting.",
    "Designed a multi-provider AI pipeline using OpenRouter, Gemini, and OpenCV fallback for resilient defect detection and structured bounding boxes.",
    "Selected for the final round among 90 teams at Hackverse 2.0, an IBM-judged hackathon."
  ].forEach(bullet => {
    drawText("-  " + bullet, margin + 5, y, helvetica, 8.2);
    y -= 10.5;
  });
  y -= 6;

  // Project 3
  drawText("AI-Powered RAG Question Answering System", margin, y, helveticaBold, 9.5);
  const p3Date = "Jan 2025 - Mar 2025";
  drawText(p3Date, width - margin - helvetica.widthOfTextAtSize(p3Date, 8.5), y, helvetica, 8.5, mutedColor);
  y -= 11;
  drawText("Python, FAISS, Hugging Face Flan-T5, LangChain, Streamlit, NLP, Semantic Search", margin, y, helveticaOblique, 8.5, mutedColor);
  y -= 11;
  [
    "Developed a RAG pipeline enabling context-aware Q&A over custom document corpora using FAISS vector retrieval, Flan-T5, and LangChain; sub-500ms latency.",
    "Implemented document chunking and semantic embedding strategies, reducing document lookup time by ~70% across 100+ page corpora.",
    "Designed an interactive Streamlit interface supporting dynamic document ingestion and real-time grounded query processing."
  ].forEach(bullet => {
    drawText("-  " + bullet, margin + 5, y, helvetica, 8.2);
    y -= 10.5;
  });
  y -= 6;

  // Project 4
  drawText("SOUNDMATCH - Parallel Audio Fingerprinting & Song Identification", margin, y, helveticaBold, 9.5);
  const p4Date = "Systems & High Performance Computing";
  drawText(p4Date, width - margin - helvetica.widthOfTextAtSize(p4Date, 8.5), y, helvetica, 8.5, mutedColor);
  y -= 11;
  drawText("C, OpenMPI, Python, Librosa, NumPy, SciPy, Flask, HTML5, CSS3, JavaScript", margin, y, helveticaOblique, 8.5, mutedColor);
  y -= 11;
  [
    "Extracted time-frequency landmarks from audio signals, generating robust combinatorial fingerprints for song matching.",
    "Distributed database search across multiple processes using OpenMPI, achieving significant speedup over sequential search benchmarks."
  ].forEach(bullet => {
    drawText("-  " + bullet, margin + 5, y, helvetica, 8.2);
    y -= 10.5;
  });
  y -= 10;

  // SECTION: CERTIFICATIONS
  drawText("CERTIFICATIONS", margin, y, helveticaBold, 10.5);
  y -= 5;
  drawDivider(y);
  y -= 14;

  const certs = [
    "IBM - Fundamentals of AI Agents Using RAG and LangChain",
    "Meta - Front-End Development",
    "Microsoft - Data Analysis and Visualization in Python",
    "BCG X - GenAI Job Simulation | AI-powered financial chatbot development"
  ];
  certs.forEach(cert => {
    drawText("*  " + cert, margin + 5, y, helvetica, 8.5);
    y -= 11.5;
  });

  const pdfBytes = await doc.save();
  const outDir = path.resolve('public');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  fs.writeFileSync(path.join(outDir, 'resume.pdf'), pdfBytes);
  console.log('Successfully generated public/resume.pdf');
}

generateResume().catch(console.error);
