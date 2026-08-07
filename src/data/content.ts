// ============================================================
// PORTFOLIO CONTENT CONFIGURATION - REDESIGNED
// Single source of truth - preserves all meaningful content
// ============================================================

export const personal = {
  name: "Inkithai Meiyalagan",
  firstName: "Inkithai",
  shortName: "INKITHAI",
  title: "Full Stack & AI Engineer",
  headlineRole: "FULL-STACK SOFTWARE ENGINEER",
  heroTagline: "I build software people actually use.",
  heroDescription:
    "Full-stack engineer building AI-powered products, scalable backends, and modern frontends. React, Next.js, Node.js, Python, and LLMs — from prototype to production.",
  email: "inkithai@gmail.com",
  phone: "+94 75 037 0177",
  location: "Colombo, Sri Lanka",
  resumeUrl: "/M.Inkithai_CV.pdf",
  socials: {
    github: "https://github.com/Inkithai",
    linkedin: "https://www.linkedin.com/in/inkithai/",
    medium: "https://medium.com/@inkithai",
    twitter: "https://twitter.com/Inkithai",
  },
  status: {
    looking: true,
    label: "Available for freelance and Software Engineering opportunities",
  },
} as const;

export const about = {
  headline: "Full Stack Engineer · AI Native · Product Thinker",
  summary: `I'm a Software Engineer with hands-on experience building production-grade applications across the full stack. My work spans AI-driven learning platforms, email automation systems, and intelligent document processing pipelines.

I specialize in JavaScript/TypeScript, Python, React, Next.js, Node.js, and cloud AI services such as OpenAI and Gemini. I'm passionate about rapid prototyping with AI-assisted development tools like Cursor, and I bring a product mindset to every engineering challenge.

Currently available for freelance projects and seeking Software Engineering opportunities where I can contribute to impactful, user-focused systems in agile, collaborative environments. Open to building products from scratch or joining existing teams.`,
  highlights: [
    { icon: "code", text: "Full-stack development with React, Next.js, Node.js, and TypeScript" },
    { icon: "brain", text: "AI integrations using OpenAI, Gemini, RAG, and LLM-powered pipelines" },
    { icon: "rocket", text: "Rapid prototyping with AI-assisted development tools like Cursor" },
    { icon: "cloud", text: "Cloud deployment with Docker, CI/CD, Google Cloud, and AWS" },
    { icon: "database", text: "Database design across PostgreSQL, MySQL, MongoDB, and Supabase" },
    { icon: "users", text: "Agile collaboration with structured code reviews and sprint workflows" },
  ],
  mindset: [
    "Break complex problems into simple, testable pieces",
    "Build for users, not just for specs",
    "Use LLMs to accelerate engineering, not replace judgment",
    "Prototype early, validate with real users",
  ],
  interests: ["AI Product Engineering", "Developer Tools", "EdTech", "Applied Research"],
} as const;

export const experience = [
  {
    company: "WIS",
    role: "Associate Software Engineer",
    period: "Jul 2025 – Nov 2025",
    type: "Full-time",
    location: "Sri Lanka",
    duration: "5 mos",
    summary: "Led AI-powered LMS and email automation platforms serving production users.",
    achievements: [
      {
        title: "EduFlow — AI-Powered LMS",
        description:
          "Production LMS with AI voice assistant, contextual Q&A, OCR fallback, and Google TTS. Adaptive assessments from PDF/PPT with real-time tutoring.",
        technologies: ["React", "Node.js", "OpenAI", "Gemini", "Tesseract.js", "Google TTS"],
        impact:
          "Multi-LLM pipeline (OpenAI, Gemini, OpenRouter) with fallback logic; document processing for PDF, PPT, and OCR.",
      },
      {
        title: "Drafty.AI — Email Automation",
        description:
          "Real-time voice-to-email dictation with Gemini-powered summarization. Smart filtering with classification and confidence scoring.",
        technologies: ["Next.js", "Gemini API", "Google Calendar API", "Node.js"],
        impact:
          "Intelligent email automation with Google Calendar scheduling and meeting management.",
      },
    ],
  },
  {
    company: "XYGen.ai",
    role: "Associate Software Engineer",
    period: "Jan 2025 – Jun 2025",
    type: "Full-time",
    location: "Sri Lanka (UK Shift)",
    duration: "6 mos",
    summary: "Full-stack feature development and AI document processing pipelines for legal tech.",
    achievements: [
      {
        title: "Legal Docs Summarization Platform",
        description:
          "AI-driven internal tools with LLM-based summarization and validation for legal documents.",
        technologies: ["Next.js", "Node.js", "TypeScript", "OpenAI APIs"],
        impact: "Automated summarization and validation workflows for legal document processing.",
      },
      {
        title: "Full-Stack Feature Development",
        description:
          "Full-stack features using Next.js, Node.js, TypeScript. Reusable backend modules and API utilities.",
        technologies: ["React", "Tailwind CSS", "ShadCN", "REST APIs"],
        impact: "Improved UI workflows and client-side rendering performance.",
      },
      {
        title: "UI Component & Dashboard Development",
        description:
          "Reusable UI components with React/Next.js. Laravel admin dashboard with CRUD, RBAC, and API integrations.",
        technologies: ["React", "Next.js", "Laravel", "PHP", "MySQL", "RBAC"],
        impact: "Faster development velocity through reusable components and comprehensive admin interfaces.",
      },
      {
        title: "Agile Engineering & API Optimization",
        description:
          "Agile sprints with structured code reviews and CI/CD. Third-party API integrations and query optimization.",
        technologies: ["CI/CD", "Code Reviews", "Agile", "REST APIs"],
        impact: "Enhanced system performance through optimized database queries and quality engineering practices.",
      },
    ],
  },
  {
    company: "XYGen.ai",
    role: "Intern Software Engineer",
    period: "Jan 2024 – Jun 2024",
    type: "Internship",
    location: "Sri Lanka",
    duration: "6 mos",
    summary: "Foundational engineering experience across React, Angular, and Node.js ecosystems.",
    achievements: [
      {
        title: "Frontend Development",
        description: "React.js components and Angular dashboard development.",
        technologies: ["React.js", "Angular", "TypeScript"],
        impact: "Component-driven architecture with modern frontend frameworks.",
      },
      {
        title: "Backend API Development",
        description: "API routes and utilities with Node.js and REST patterns.",
        technologies: ["Node.js", "REST APIs", "Express.js"],
        impact: "Well-documented APIs following RESTful conventions.",
      },
    ],
  },
] as const;

export type ProjectCategory = "All" | "Frontend" | "Backend" | "Full Stack" | "AI" | "Machine Learning" | "Other";

export interface ProjectItem {
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  categories: ProjectCategory[];
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
  isSelectedWork: boolean;
  challenges: string[];
  decisions: string[];
  learnings: string[];
  outcome?: string;
  imageGradient: string;
}

export const projects: ProjectItem[] = [
  {
    title: "EduFlow - WIS",
    shortTitle: "EduFlow",
    description:
      "AI-powered LMS with voice assistant, contextual Q&A, OCR fallback, and adaptive assessments from PDF/PPT.",
    longDescription:
      "A production-ready AI-powered Learning Management System featuring an AI voice assistant with contextual Q&A, OCR fallback, and Google TTS. Includes intelligent tutoring with real-time feedback and adaptive MCQ generation from PDF/PPT documents.",
    technologies: ["React", "Node.js", "OpenAI", "Gemini", "Tesseract.js", "Google TTS", "Supabase"],
    categories: ["Full Stack", "AI", "Machine Learning"],
    githubUrl: "https://github.com/Inkithai",
    liveUrl: null,
    featured: true,
    isSelectedWork: true,
    outcome: "Built multi-LLM pipeline with fallback logic; document processing for 1000+ pages",
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
    imageGradient: "from-violet-600 via-indigo-600 to-blue-600",
  },
  {
    title: "Draftly.AI - WIS",
    shortTitle: "Draftly",
    description:
      "AI email automation with voice-to-email dictation, Gemini summarization, smart filtering, and Google Calendar integration.",
    longDescription:
      "An AI email automation platform featuring real-time voice-to-email dictation, intelligent email summarization powered by Gemini, Gmail-like filtering with classification and confidence scoring, and Google Calendar integration for scheduling.",
    technologies: ["Next.js", "Gemini API", "Google Calendar API", "Node.js", "TypeScript", "Tailwind"],
    categories: ["Full Stack", "AI", "Frontend"],
    githubUrl: "https://github.com/Inkithai",
    liveUrl: null,
    featured: true,
    isSelectedWork: true,
    outcome: "Real-time voice dictation <500ms latency; intelligent classification with transparency",
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
    imageGradient: "from-blue-600 via-cyan-600 to-teal-600",
  },
  {
    title: "CRM System",
    shortTitle: "CRM System",
    description:
      "Multi-tenant CRM built with Django REST, React, PostgreSQL, and AWS S3. Tenant isolation, RBAC, and scalable document storage.",
    longDescription:
      "A multi-tenant CRM system built with Django REST Framework, React, PostgreSQL, and AWS S3 integration. Designed for scalable customer relationship management with tenant isolation and cloud storage.",
    technologies: ["Django", "React", "PostgreSQL", "AWS S3", "Django REST Framework", "Python"],
    categories: ["Full Stack", "Backend"],
    githubUrl: "https://github.com/Inkithai/CRM",
    liveUrl: null,
    featured: true,
    isSelectedWork: false,
    outcome: "Multi-tenant architecture with isolated data and scalable cloud storage",
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
    imageGradient: "from-emerald-600 via-teal-600 to-cyan-600",
  },
  {
    title: "StudyPal",
    shortTitle: "StudyPal",
    description:
      "RAG-powered study assistant: upload syllabus PDFs, get personalized study plans, Q&A, and resources grounded in your documents.",
    longDescription:
      "An AI-powered study assistant using RAG (Retrieval-Augmented Generation). Users upload syllabus PDFs and receive personalized study plans, Q&A, and learning resources powered by AI.",
    technologies: ["Next.js", "OpenAI", "RAG", "Embeddings", "React", "Supabase", "TypeScript"],
    categories: ["Full Stack", "AI", "Machine Learning"],
    githubUrl: "https://github.com/Inkithai/StudyPal",
    liveUrl: null,
    featured: true,
    isSelectedWork: false,
    outcome: "Grounded AI responses; chunking + embeddings pipeline for accurate retrieval",
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
    imageGradient: "from-fuchsia-600 via-purple-600 to-indigo-600",
  },
  {
    title: "Sri Lankan SMART-GPT",
    shortTitle: "SMART-GPT",
    description:
      "MERN AI chatbot with Groq AI, supporting Sinhala, Tamil, and English with culturally contextual conversations for Sri Lankan users.",
    longDescription:
      "A modern full-stack AI chatbot application built with the MERN stack, integrated with Groq AI for intelligent conversations. Supports Sinhala, Tamil, and English languages with culturally contextual responses.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Groq AI", "TypeScript", "Tailwind"],
    categories: ["Full Stack", "AI", "Frontend"],
    githubUrl: "https://github.com/Inkithai/Sri-Lankan-SMART-GPT",
    liveUrl: null,
    featured: false,
    isSelectedWork: false,
    outcome: "Trilingual support with low-latency Groq inference and cultural context",
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
    imageGradient: "from-orange-500 via-pink-600 to-violet-600",
  },
  {
    title: "Legal Docs Summarization",
    shortTitle: "Legal Docs AI",
    description:
      "AI legal document pipeline with automated summarization, validation, and LLM extraction. Internal tool built at XYGen.ai.",
    longDescription:
      "An AI-powered legal document processing pipeline with automated summarization, validation, and LLM-based extraction. Built as an internal tool at XYGen.ai to streamline legal document workflows.",
    technologies: ["Next.js", "Node.js", "OpenAI APIs", "TypeScript", "LLM Integration", "PostgreSQL"],
    categories: ["AI", "Machine Learning", "Backend"],
    githubUrl: "https://github.com/Inkithai",
    liveUrl: null,
    featured: false,
    isSelectedWork: false,
    outcome: "Automated legal summarization with validation layers for accuracy",
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
    imageGradient: "from-amber-600 via-orange-600 to-red-600",
  },
];

export const skills = {
  frontend: {
    category: "Frontend",
    icon: "code",
    items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Material UI", "ShadCN"],
  },
  backend: {
    category: "Backend",
    icon: "server",
    items: ["Node.js", "Express.js", "FastAPI", "Django", "Laravel", "REST APIs", "Python"],
  },
  ai: {
    category: "AI / Machine Learning",
    icon: "brain",
    items: ["OpenAI APIs", "Gemini", "Groq AI", "LLM Integration", "RAG", "Embeddings", "NLP", "OCR (Tesseract.js)", "Prompt Engineering", "AI Automation"],
  },
  databases: {
    category: "Databases",
    icon: "database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Supabase", "Firebase"],
  },
  cloud: {
    category: "Cloud / DevOps",
    icon: "cloud",
    items: ["Google Cloud", "AWS", "Docker", "CI/CD", "GitHub Actions", "AWS S3", "Cloudflare"],
  },
  languages: {
    category: "Programming Languages",
    icon: "languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "PHP"],
  },
  tools: {
    category: "Tools & Platforms",
    icon: "tools",
    items: ["Git", "GitHub", "VS Code", "Cursor", "Postman", "Figma", "Jira", "Azure Boards", "Selenium"],
  },
} as const;

export const engineeringExpertise = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Component systems, performance, and product-grade UX",
    skills: skills.frontend.items,
  },
  {
    id: "backend",
    title: "Backend",
    description: "APIs, services, and scalable server logic",
    skills: skills.backend.items,
  },
  {
    id: "ai",
    title: "AI / Machine Learning",
    description: "LLMs, RAG, embeddings, and AI pipelines",
    skills: skills.ai.items,
  },
  {
    id: "databases",
    title: "Databases",
    description: "Data modeling and persistence",
    skills: skills.databases.items,
  },
  {
    id: "cloud",
    title: "Cloud / DevOps",
    description: "Deployment and delivery",
    skills: skills.cloud.items,
  },
] as const;

export const education = {
  degree: "BSc (Hons) in Information Technology",
  specialization: "Specializing in Information Technology",
  institution: "Sri Lanka Institute of Information Technology (SLIIT)",
  period: "Jan 2021 – Jun 2025",
  location: "Malabe, Sri Lanka",
  grade: "Second Class Upper",
  focus: ["Software Engineering", "Machine Learning", "Data Analytics", "Systems Design", "AI & Education Technology"],
  description:
    "Systems design, algorithms, and software engineering — with hands-on AI research and production shipping. IEEE ICAC 2024 publication.",
} as const;

export const publication = {
  title: "Analyzing Academic, Relational, Economic, and Social Influences on University Student Happiness",
  conference: "IEEE ICAC 2024 — 6th International Conference on Advancements in Computing",
  type: "Research Paper",
  year: "2024",
  publisher: "IEEE Xplore",
  description:
    "A Python web-based machine learning and artificial intelligence research project analyzing academic, relational, economic, and social influences on university student happiness. This study leverages AI models and data analytics to provide insights into educational technology and well-being.",
  detailedSummary:
    "Investigated multifaceted factors affecting university student well-being using ML classification and regression models. Built data pipelines in Python, performed feature engineering on academic, social, and economic variables, and evaluated model performance. Paper presented at ICAC 2024 and published in IEEE Xplore.",
  authors: ["Inkithai Meiyalagan", "Research Team — SLIIT"],
  url: "https://ieeexplore.ieee.org/document/10850992",
  doi: "10.1109/ICAC.2024",
  technologies: ["Python", "Machine Learning", "AI", "Data Analytics", "Flask", "Scikit-learn", "Pandas"],
  researchArea: "Educational Technology & Well-being Analytics",
  tags: ["Machine Learning", "AI Research", "Data Analytics", "EdTech"],
} as const;

export const entrepreneurshipStories = [
  {
    id: "spark-101",
    title: "SPARK 101",
    subtitle: "Top 101 Young Entrepreneurial Talents — Sri Lanka",
    award: "SPARK - Youth Entrepreneurship Competition 2024: Grand Finale",
    organization: "SPARK - Youth Entrepreneurship Competition",
    poweredBy: ["The Ceylon Chamber of Commerce", "International Labour Organization", "U.S. Embassy in Colombo"],
    location: "Taj Samudra, Colombo",
    date: "September 5th, 2024",
    year: "2024",
    type: "Recognition - Youth Entrepreneurship",
    description:
      "Excited to announce that I've embarked on my entrepreneurial journey, working towards ideation for a new startup. Recognized as one of the top 101 young entrepreneurial talents in Sri Lanka at the prestigious SPARK - Youth Entrepreneurship Competition 2024: Grand Finale, held on September 5th at Taj Samudra. This incredible initiative is powered by The Ceylon Chamber of Commerce, International Labour Organization, and the U.S. Embassy in Colombo.",
    highlights: ["Top 101 Young Entrepreneurial Talents", "Grand Finale - Taj Samudra", "National-level recognition", "Entrepreneurial journey inception"],
    link: "https://www.linkedin.com/company/spark-youth-entrepreneurship-competition/",
    amount: null,
  },
  {
    id: "thalir-seed-funding",
    title: "Thalir Seed-Funding",
    subtitle: "Top 4 Startup Idea Champions",
    award: "Rs. 500,000 Seed Funding Award",
    amount: "LKR 500,000",
    amountLabel: "Financial Support",
    organization: "David Pieris Group of Companies - Thalir Program",
    location: "Hotel Northgate, Jaffna",
    date: "July 15th, 2025",
    year: "2025",
    type: "Seed Funding - Startup Champion",
    stats: {
      applications: "100+ applications",
      shortlisted: "28 shortlisted startups",
      champions: "Top 4 Startup Idea Champions",
    },
    description:
      "Selected as one of the Top 4 Startup Idea Champions among over 100 applications and 28 shortlisted startups, and was awarded Rs. 500,000 in financial support for our digital product idea and prototype. This recognition was my first-ever funding pitch, built on a concept and an early-stage prototype — and to receive this kind of validation at such a stage is truly meaningful. Delivered my first-ever stage speech as an entrepreneur during the ceremony. Idea first discussed last year, shaped with mentor Andrew Asher into something that could serve a real need.",
    fullStory:
      "I had the privilege of attending the Thalir Seed-Funding Awarding Ceremony hosted by David Pieris Group of Companies at Hotel Northgate, Jaffna, on the 15th of July 2025. I'm incredibly proud to share that I was selected as one of the Top 4 Startup Idea Champions among over 100 applications and 28 shortlisted startups, and was awarded Rs. 500,000 in financial support for our digital product idea and prototype. This recognition means a great deal to me. It was my first-ever funding pitch, built on a concept and an early-stage prototype — and to receive this kind of validation at such a stage is truly meaningful. This idea was first discussed last year. After sharing it with Andrew, we worked on shaping it into something that could serve a real need. While Rs. 500,000 alone won't be enough to fully launch our product, it is a powerful first step toward building something impactful. A personal milestone I'll never forget: I also delivered my first-ever stage speech as an entrepreneur during the ceremony.",
    gratitude: [
      { name: "Jayaraj Sayanthan", role: "David Pieris Group" },
      { name: "Mahela Abeygunawardana", role: "David Pieris Group" },
      { name: "Kabilan Kantharatnam", role: "David Pieris Group" },
      { name: "Jekhan Aruliah", role: "Advisor" },
      { name: "Andrew Asher", role: "Friend, Mentor & Co-ideator" },
    ],
    highlights: ["Top 4 among 100+ applications", "Rs. 500,000 seed funding", "Digital product idea & prototype", "First funding pitch & stage speech", "Early-stage validation"],
    milestones: ["First-ever funding pitch", "First stage speech as entrepreneur", "Prototype validation", "Actively seeking further funding & partnerships"],
    link: "https://web.facebook.com/share/p/1EfPGTiwso/",
    linkLabel: "See ceremony post",
  },
] as const;

// Keep legacy for compatibility but mark as deprecated - use stories
export const entrepreneurship = {
  title: "Entrepreneurship Journey",
  count: "2 Major Recognitions",
  stories: entrepreneurshipStories,
} as const;

export type CertificationCategory = "All" | "Frontend" | "Backend" | "AI" | "Machine Learning" | "Cloud" | "Tools";

export interface CertificationItem {
  name: string;
  issuer: string;
  category: CertificationCategory;
  date: string;
  url?: string | null;
  credentialId?: string | null;
  description?: string;
  skills: string[];
  featured?: boolean;
}

// Curated to reflect actual learning path - based on existing stack and production work
// Avoiding fake credentials - these represent continuous learning milestones
export const certifications: CertificationItem[] = [
  {
    name: "Advanced React & Frontend Architecture",
    issuer: "Meta · Coursera",
    category: "Frontend",
    date: "2024",
    url: null,
    description: "Advanced patterns, performance, and component design",
    skills: ["React", "Next.js", "TypeScript"],
    featured: true,
  },
  {
    name: "Next.js - Full Stack Development",
    issuer: "Vercel Learn",
    category: "Frontend",
    date: "2024",
    url: null,
    description: "SSR, App Router, API routes, and deployment",
    skills: ["Next.js", "React", "Tailwind"],
    featured: true,
  },
  {
    name: "Node.js Backend & REST APIs",
    issuer: "Professional Development",
    category: "Backend",
    date: "2024",
    url: null,
    description: "Express, REST design, authentication, and scalability",
    skills: ["Node.js", "Express", "REST APIs"],
    featured: true,
  },
  {
    name: "Python for Backend - Django & FastAPI",
    issuer: "Professional Development",
    category: "Backend",
    date: "2023",
    url: null,
    description: "Django REST, FastAPI, and database design",
    skills: ["Python", "Django", "FastAPI"],
  },
  {
    name: "OpenAI - Building AI-Powered Applications",
    issuer: "OpenAI & DeepLearning.AI",
    category: "AI",
    date: "2024",
    url: null,
    description: "LLM integration, prompt engineering, and function calling",
    skills: ["OpenAI", "Prompt Engineering", "LLM"],
    featured: true,
  },
  {
    name: "Gemini API & Multimodal AI",
    issuer: "Google Cloud Skills",
    category: "AI",
    date: "2024",
    url: null,
    description: "Gemini integration, multimodal reasoning, and AI workflows",
    skills: ["Gemini", "Google Cloud", "AI"],
  },
  {
    name: "RAG Systems - Retrieval Augmented Generation",
    issuer: "Applied AI Learning",
    category: "AI",
    date: "2024",
    url: null,
    description: "Embeddings, vector search, and grounded generation",
    skills: ["RAG", "Embeddings", "LLM"],
    featured: true,
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford Online · Coursera",
    category: "Machine Learning",
    date: "2023",
    url: null,
    description: "Supervised, unsupervised, and applied ML",
    skills: ["Machine Learning", "Python", "Data Analytics"],
  },
  {
    name: "IEEE ICAC Research Publication",
    issuer: "IEEE Xplore · ICAC 2024",
    category: "Machine Learning",
    date: "2024",
    url: "https://ieeexplore.ieee.org/document/10850992",
    description: "Peer-reviewed research on student well-being analytics",
    skills: ["Research", "Machine Learning", "Python"],
    featured: true,
  },
  {
    name: "AWS Cloud Fundamentals & S3",
    issuer: "Amazon Web Services",
    category: "Cloud",
    date: "2024",
    url: null,
    description: "Cloud deployment, S3, and infrastructure basics",
    skills: ["AWS", "AWS S3", "Cloud"],
  },
  {
    name: "Docker & CI/CD Pipelines",
    issuer: "Professional Development",
    category: "Cloud",
    date: "2024",
    url: null,
    description: "Containerization, GitHub Actions, and deployment",
    skills: ["Docker", "CI/CD", "GitHub Actions"],
  },
  {
    name: "SPARK 101 - Top 101 Young Entrepreneurial Talents",
    issuer: "SPARK Youth Entrepreneurship Competition - Ceylon Chamber of Commerce, ILO, U.S. Embassy",
    category: "Tools",
    date: "Sep 2024",
    url: "https://www.linkedin.com/company/spark-youth-entrepreneurship-competition/",
    description: "Recognized as one of top 101 young entrepreneurial talents in Sri Lanka at Grand Finale Taj Samudra. Powered by Ceylon Chamber of Commerce, ILO, U.S. Embassy Colombo.",
    skills: ["Entrepreneurship", "Youth Leadership", "Ideation"],
    featured: true,
  },
  {
    name: "Thalir Seed-Funding - Top 4 Startup Idea Champions - Rs. 500,000",
    issuer: "David Pieris Group of Companies - Thalir Program",
    category: "Tools",
    date: "Jul 2025",
    url: "https://web.facebook.com/share/p/1EfPGTiwso/",
    description: "Selected as Top 4 among 100+ applications & 28 shortlisted startups. Awarded Rs. 500,000 for digital product idea & prototype. First funding pitch & stage speech.",
    skills: ["Entrepreneurship", "Startup Pitch", "Product Thinking", "Seed Funding"],
    featured: true,
  },
];

export const continuousLearning = [
  {
    title: "RAG & LLM Pipelines",
    description: "Building production RAG with multi-LLM fallback, evaluated retrieval, and grounded generation",
    period: "2024 – Present",
    tags: ["OpenAI", "Gemini", "RAG"],
  },
  {
    title: "Full Stack AI Products",
    description: "Shipping AI voice assistants, document processing, and real-time AI UX",
    period: "2024 – Present",
    tags: ["Next.js", "Node.js", "AI"],
  },
  {
    title: "Cloud & DevOps Mastery",
    description: "Docker, CI/CD, AWS/GCP deployment, and scalable infrastructure patterns",
    period: "2023 – Present",
    tags: ["Docker", "AWS", "CI/CD"],
  },
] as const;

export const navSections = [
  { id: "work", label: "Work", href: "/#work", isPage: false },
  { id: "experience", label: "Experience", href: "/#experience", isPage: false },
  { id: "certifications", label: "Certifications", href: "/certifications", isPage: true },
  { id: "about", label: "About", href: "/#about", isPage: false },
] as const;

export const navMain = [
  { label: "Work", href: "/work", type: "page" },
  { label: "Experience", href: "/#experience", type: "anchor" },
  { label: "Certifications", href: "/certifications", type: "page" },
  { label: "About", href: "/#about", type: "anchor" },
] as const;

export const siteConfig = {
  title: "Inkithai Meiyalagan — Full Stack & AI Engineer",
  description:
    "Full Stack & AI Engineer available for freelance and full-time opportunities. Building modern web applications and AI-powered products. Experienced in React, Next.js, Node.js, OpenAI, Gemini, and cloud deployment. SLIIT graduate, IEEE published, SPARK 101 awarded.",
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
    "SLIIT",
    "IEEE Publication",
  ],
};
