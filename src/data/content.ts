// ============================================================
// PORTFOLIO CONTENT CONFIGURATION
// ============================================================
// This is the single source of truth for all portfolio content.
// Edit this file to update any text, links, or data.
// ============================================================

export const personal = {
  name: "Inkithai Meiyalagan",
  firstName: "Inkithai",
  title: "Full Stack & AI Engineer",
  tagline:
    "Building modern web applications and AI-powered products with clean, scalable code.",
  email: "inkithai@gmail.com",
  phone: "+94 75 037 0177",
  location: "Colombo, Sri Lanka",
  resumeUrl: "/M.Inkithai_CV.pdf",
  socials: {
    github: "https://github.com/Inkithai",
    linkedin: "https://www.linkedin.com/in/inkithai/",
    twitter: "https://twitter.com/Inkithai",
  },
  status: {
    looking: true,
    label: "Open to Software Engineering opportunities",
  },
} as const;

export const about = {
  headline: "Full Stack Engineer · AI Native · Product Thinker",
  summary: `I'm a Software Engineer with hands-on experience building production-grade applications across the full stack. My work spans AI-driven learning platforms, email automation systems, and intelligent document processing pipelines.

I specialize in JavaScript/TypeScript, Python, React, Next.js, Node.js, and cloud AI services such as OpenAI and Gemini. I'm passionate about rapid prototyping with AI-assisted development tools like Cursor, and I bring a product mindset to every engineering challenge.

Currently seeking Software Engineering opportunities where I can contribute to impactful, user-focused systems in agile, collaborative environments.`,
  highlights: [
    { icon: "code", text: "Full-stack development with React, Next.js, Node.js, and TypeScript" },
    { icon: "brain", text: "AI integrations using OpenAI, Gemini, RAG, and LLM-powered pipelines" },
    { icon: "rocket", text: "Rapid prototyping with AI-assisted development tools like Cursor" },
    { icon: "cloud", text: "Cloud deployment with Docker, CI/CD, Google Cloud, and AWS" },
    { icon: "database", text: "Database design across PostgreSQL, MySQL, MongoDB, and Supabase" },
    { icon: "users", text: "Agile collaboration with structured code reviews and sprint workflows" },
  ],
} as const;

export const experience = [
  {
    company: "WIS",
    role: "Associate Software Engineer",
    period: "Jul 2025 – Nov 2025",
    type: "Full-time",
    location: "Sri Lanka",
    achievements: [
      {
        title: "EduFlow — AI-Powered LMS",
        description:
          "Developed and deployed a production-ready Learning Management System with AI-driven learning features. Built an AI voice assistant with contextual Q&A, OCR fallback, and Google TTS. Developed AI-based assessment generation using PDF/PPT extraction and adaptive MCQs. Implemented intelligent tutoring system with real-time feedback.",
        technologies: ["React", "Node.js", "OpenAI", "Gemini", "OCR (Tesseract.js)", "Google TTS"],
        impact:
          "Built document processing pipelines (PDF, PPT, OCR) for AI reasoning and integrated multiple LLM providers (OpenAI, Gemini, OpenRouter) with fallback logic for enhanced reliability.",
      },
      {
        title: "Drafty.AI — Email Automation Platform",
        description:
          "Built real-time voice-to-email dictation module and integrated Gemini for email summarization and content generation. Developed a Gmail-like filtering system with classification and confidence scoring.",
        technologies: ["Next.js", "Gemini API", "Google Calendar API", "Node.js"],
        impact:
          "Enabled intelligent email automation with scheduling and meeting management through Google Calendar API integration.",
      },
    ],
  },
  {
    company: "XYGen.ai",
    role: "Associate Software Engineer",
    period: "Jan 2025 – Jun 2025",
    type: "Full-time",
    location: "Sri Lanka (UK Shift time)",
    achievements: [
      {
        title: "Legal Docs Summarization Platform",
        description:
          "Developed AI-driven internal tools with LLM-based automation, summarization, and validation pipelines for legal document processing.",
        technologies: ["Next.js", "Node.js", "TypeScript", "OpenAI APIs"],
        impact: "Improved document processing efficiency through automated summarization and validation workflows.",
      },
      {
        title: "Full-Stack Feature Development",
        description:
          "Implemented full-stack features using Next.js, Node.js, TypeScript, and cloud-hosted APIs. Designed reusable backend modules and API utilities to improve developer productivity.",
        technologies: ["React", "Tailwind CSS", "ShadCN", "REST APIs"],
        impact: "Enhanced UI workflows and optimized client-side rendering for better user experience.",
      },
      {
        title: "UI Component & Dashboard Development",
        description:
          "Implemented reusable UI components using React, Next.js, and optimized client interactions. Built a Laravel-based admin dashboard with CRUD modules, RBAC, and API integrations.",
        technologies: ["React", "Next.js", "Laravel", "PHP", "MySQL", "RBAC"],
        impact: "Improved development velocity through reusable components and delivered comprehensive admin interfaces.",
      },
      {
        title: "Agile Engineering & API Optimization",
        description:
          "Worked in Agile sprints with structured code reviews and CI/CD deployment workflows. Integrated third-party APIs and improved server response times through query optimization.",
        technologies: ["CI/CD", "Code Reviews", "Agile", "REST APIs"],
        impact: "Contributed to quality engineering practices and enhanced system performance through optimized database queries.",
      },
    ],
  },
    {
    company: "XYGen.ai",
    role: "Junior Software Engineer",
    period: "June 2025 – December 2025",
    type: "Full-time",
    location: "Sri Lanka",
    achievements: [
      {
        title: "Legal Docs Summarization Platform",
        description:
          "Developed AI-driven internal tools with LLM-based automation, summarization, and validation pipelines for legal document processing.",
        technologies: ["Next.js", "Node.js", "TypeScript", "OpenAI APIs"],
        impact: "Improved document processing efficiency through automated summarization and validation workflows.",
      },
      {
        title: "Full-Stack Feature Development",
        description:
          "Implemented full-stack features using Next.js, Node.js, TypeScript, and cloud-hosted APIs. Designed reusable backend modules and API utilities to improve developer productivity.",
        technologies: ["React", "Tailwind CSS", "ShadCN", "REST APIs"],
        impact: "Enhanced UI workflows and optimized client-side rendering for better user experience.",
      },
      {
        title: "UI Component & Dashboard Development",
        description:
          "Implemented reusable UI components using React, Next.js, and optimized client interactions. Built a Laravel-based admin dashboard with CRUD modules, RBAC, and API integrations.",
        technologies: ["React", "Next.js", "Laravel", "PHP", "MySQL", "RBAC"],
        impact: "Improved development velocity through reusable components and delivered comprehensive admin interfaces.",
      },
      {
        title: "Agile Engineering & API Optimization",
        description:
          "Worked in Agile sprints with structured code reviews and CI/CD deployment workflows. Integrated third-party APIs and improved server response times through query optimization.",
        technologies: ["CI/CD", "Code Reviews", "Agile", "REST APIs"],
        impact: "Contributed to quality engineering practices and enhanced system performance through optimized database queries.",
      },
    ],
  },
  {
    company: "XYGen.ai",
    role: "Intern Software Engineer",
    period: "Jan 2024 – Jun 2024",
    type: "Internship",
    location: "Sri Lanka",
    achievements: [
      {
        title: "Frontend Development",
        description:
          "Developed frontend components in React.js and contributed to dashboard development using Angular.",
        technologies: ["React.js", "Angular", "TypeScript"],
        impact: "Gained hands-on experience with modern frontend frameworks and component-driven architecture.",
      },
      {
        title: "Backend API Development",
        description:
          "Wrote API routes and utility functions using Node.js and REST design patterns.",
        technologies: ["Node.js", "REST APIs", "Express.js"],
        impact: "Built robust, well-documented APIs following RESTful conventions.",
      },
    ],
  },
] as const;

export const projects = [
  {
    title: "EduFlow - WIS",
    description:
      "A production-ready AI-powered Learning Management System featuring an AI voice assistant with contextual Q&A, OCR fallback, and Google TTS. Includes intelligent tutoring with real-time feedback and adaptive MCQ generation from PDF/PPT documents.",
    technologies: ["React", "Node.js", "OpenAI", "Gemini", "Tesseract.js", "Google TTS"],
    githubUrl: "https://github.com/Inkithai",
    liveUrl: null,
    challenges: [
      "Built document processing pipelines for PDF/PPT extraction with OCR fallback",
      "Implemented multi-LLM integration (OpenAI, Gemini, OpenRouter) with intelligent fallback logic",
      "Designed contextual AI voice assistant for natural student interaction",
      "Created adaptive assessment generation system using LLM reasoning",
    ],
    decisions: [
      "Chose multi-provider LLM architecture for resilience and cost optimization",
      "Implemented OCR fallback to handle non-text document formats",
      "Used real-time streaming for voice assistant responsiveness",
    ],
    learnings: [
      "Production AI systems require careful error handling and fallback strategies",
      "Multi-model integration provides better reliability than single-provider dependency",
      "Document processing pipelines need robust OCR and format handling",
    ],
    featured: true,
  },
  {
    title: "Drafty.AI - WIS",
    description:
      "An AI email automation platform featuring real-time voice-to-email dictation, intelligent email summarization powered by Gemini, Gmail-like filtering with classification and confidence scoring, and Google Calendar integration for scheduling.",
    technologies: ["Next.js", "Gemini API", "Google Calendar API", "Node.js", "TypeScript"],
    githubUrl: "https://github.com/Inkithai",
    liveUrl: null,
    challenges: [
      "Implemented real-time voice-to-email dictation with low latency",
      "Built email classification system with confidence scoring",
      "Integrated Google Calendar API for meeting automation",
    ],
    decisions: [
      "Used Gemini for email summarization due to strong multilingual capabilities",
      "Implemented confidence scoring to give users transparency in AI decisions",
      "Chose Next.js for server-side rendering and API route co-location",
    ],
    learnings: [
      "Voice-to-text pipelines need careful handling of audio quality and background noise",
      "Email classification benefits from confidence thresholds to avoid false positives",
      "Calendar API integration requires careful handling of time zones and permissions",
    ],
    featured: true,
  },
  {
    title: "CRM System",
    description:
      "A multi-tenant CRM system built with Django REST Framework, React, PostgreSQL, and AWS S3 integration. Designed for scalable customer relationship management with tenant isolation and cloud storage.",
    technologies: ["Django", "React", "PostgreSQL", "AWS S3", "Django REST Framework"],
    githubUrl: "https://github.com/Inkithai/CRM",
    liveUrl: null,
    challenges: [
      "Implemented multi-tenant architecture with data isolation",
      "Integrated AWS S3 for scalable file and document storage",
      "Designed RESTful API with proper authentication and authorization",
    ],
    decisions: [
      "Chose Django for its robust ORM and built-in admin capabilities",
      "Used PostgreSQL for relational data integrity and complex queries",
      "Implemented tenant isolation at the database level for security",
    ],
    learnings: [
      "Multi-tenant systems require careful data isolation and access control design",
      "Cloud storage integration needs proper file handling and security considerations",
      "Django's ORM provides powerful tools for complex database operations",
    ],
    featured: true,
  },
  {
    title: "StudyPal",
    description:
      "An AI-powered study assistant using RAG (Retrieval-Augmented Generation). Users upload syllabus PDFs and receive personalized study plans, Q&A, and learning resources powered by AI.",
    technologies: ["Next.js", "OpenAI", "RAG", "Embeddings", "React"],
    githubUrl: "https://github.com/Inkithai/StudyPal",
    liveUrl: null,
    challenges: [
      "Implemented document chunking and embedding pipelines for RAG",
      "Built context-aware AI responses from uploaded syllabus content",
      "Optimized retrieval accuracy for personalized study plan generation",
    ],
    decisions: [
      "Chose RAG architecture for grounded, accurate AI responses",
      "Used OpenAI embeddings for semantic similarity search",
      "Implemented chunking strategies for large document processing",
    ],
    learnings: [
      "RAG systems require careful document preprocessing and chunking strategies",
      "Embedding quality directly impacts retrieval accuracy and response relevance",
      "AI-powered education tools need robust fallback mechanisms for edge cases",
    ],
    featured: true,
  },
  {
    title: "Sri Lankan SMART-GPT",
    description:
      "A modern full-stack AI chatbot application built with the MERN stack, integrated with Groq AI for intelligent conversations. Supports Sinhala, Tamil, and English languages with culturally contextual responses.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Groq AI", "TypeScript"],
    githubUrl: "https://github.com/Inkithai/Sri-Lankan-SMART-GPT",
    liveUrl: null,
    challenges: [
      "Built multilingual support for Sinhala, Tamil, and English",
      "Integrated Groq AI for fast, cost-effective inference",
      "Designed culturally contextual AI responses for Sri Lankan users",
    ],
    decisions: [
      "Chose Groq AI for low-latency responses in multilingual contexts",
      "Implemented MERN stack for full JavaScript ecosystem consistency",
      "Used MongoDB for flexible document storage of conversation history",
    ],
    learnings: [
      "Multilingual AI requires careful prompt engineering and cultural context awareness",
      "Low-latency inference is critical for conversational AI user experience",
      "Full-stack JavaScript enables rapid development and deployment cycles",
    ],
    featured: false,
  },
  {
    title: "Legal Docs Summarization",
    description:
      "An AI-powered legal document processing pipeline with automated summarization, validation, and LLM-based extraction. Built as an internal tool at XYGen.ai to streamline legal document workflows.",
    technologies: ["Next.js", "Node.js", "OpenAI APIs", "TypeScript", "LLM Integration"],
    githubUrl: "https://github.com/Inkithai",
    liveUrl: null,
    challenges: [
      "Built accurate document summarization for legal content",
      "Implemented validation pipelines for AI-generated summaries",
      "Designed extraction workflows for structured data from unstructured documents",
    ],
    decisions: [
      "Used OpenAI APIs for high-quality text understanding and generation",
      "Implemented validation layers to ensure summary accuracy",
      "Chose modular architecture for easy extension to new document types",
    ],
    learnings: [
      "Legal document processing requires careful attention to accuracy and compliance",
      "AI validation pipelines are essential for production-grade summarization",
      "Modular architecture enables rapid adaptation to new document formats",
    ],
    featured: false,
  },
] as const;

export const skills = {
  frontend: {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Material UI", "ShadCN"],
  },
  backend: {
    category: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Django", "Laravel", "REST APIs"],
  },
  ai: {
    category: "AI & Machine Learning",
    items: ["OpenAI APIs", "Gemini", "LLM Integration", "RAG", "Embeddings", "NLP", "OCR (Tesseract.js)", "Prompt Engineering", "AI Automation", "Groq AI"],
  },
  cloud: {
    category: "Cloud & DevOps",
    items: ["Google Cloud", "AWS", "Docker", "CI/CD", "GitHub Actions", "AWS S3"],
  },
  databases: {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Supabase", "Firebase"],
  },
  languages: {
    category: "Programming Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "PHP"],
  },
  tools: {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Cursor", "Postman", "Figma", "Jira", "Azure Boards", "Selenium"],
  },
} as const;

export const education = {
  degree: "BSc (Hons) in Information Technology",
  specialization: "Information Technology",
  institution: "Sri Lanka Institute of Information Technology (SLIIT)",
  period: "Jan 2021 – Jun 2025",
  location: "Malabe, Sri Lanka",
} as const;

export const certifications = [
  {
    name: "TODO: Add certifications from your CV or LinkedIn",
    issuer: "TODO",
    date: "TODO",
    url: null,
  },
] as const;

export const publication = {
  title: "IEEE Publication — ICAC 2024 Conference",
  description:
    "A Python web-based machine learning and artificial intelligence research project analyzing academic, relational, economic, and social influences on university student happiness. This study leverages AI models and data analytics to provide insights into educational technology and well-being.",
  url: "https://ieeexplore.ieee.org/document/10850992",
  technologies: ["Python", "Machine Learning", "AI", "Data Analytics", "Flask"],
} as const;

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const siteConfig = {
  title: "Inkithai Meiyalagan — Full Stack & AI Engineer",
  description:
    "Full Stack & AI Engineer building modern web applications and AI-powered products. Experienced in React, Next.js, Node.js, OpenAI, Gemini, and cloud deployment.",
  url: "https://inkithai.dev",
  keywords: [
    "Software Engineer",
    "Full Stack Engineer",
    "AI Engineer",
    "Product Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "AI/ML Engineer",
    "Colombo",
    "Sri Lanka",
  ],
};
