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
    company: "WIS Sri Lanka",
    role: "Associate Software Engineer",
    period: "Jul 2025 – Nov 2025",
    type: "Full-time",
    location: "Sri Lanka",
    duration: "5 mos",
    summary:
      "Built EduFlow end to end and co-developed Draftlee in a two-person team at WIS Sri Lanka. EduFlow is being deployed for client testing during ongoing development.",
    achievements: [
  {
    "title": "EduFlow — AI-Powered Learning Platform",
    "description": "Built the complete AI-powered LMS for mortgage advisors and paraplanners: secure course delivery, contextual voice Q&A, AI-generated assessments, intelligent tutoring, CPD tracking, and team analytics. Deploying for client testing during ongoing development.",
    "bullets": [
      "Extracted PDF and PowerPoint content with multiple fallbacks, including Tesseract.js OCR for image-based PDFs and pdf2pic/sharp image processing.",
      "Built screen-aware voice Q&A using full-document and page/slide-specific context, transcription, fuzzy matching, and spoken responses.",
      "Generated adaptive MCQs from document chunks, with quality controls and new question pools for retakes.",
      "Synchronized PDF-page, video-time, and slide progress with CPD hours, certificates, dashboards, and manager notifications."
    ],
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js / Express",
      "MongoDB / Mongoose",
      "Gemini",
      "OpenAI",
      "OpenRouter",
      "Tesseract.js",
      "Google Cloud TTS",
      "Socket.io",
      "Zustand",
      "Tailwind CSS",
      "PDF.js",
      "natural / compromise",
      "Docker / GCP"
    ],
    "impact": "Built the full LMS end to end; deploying for client testing while development continues."
  },
  {
    "title": "Draftlee — AI Email Management Platform",
    "description": "Co-developed an AI email management platform with one teammate. Personally researched and built voice dictation, inline email summaries, advanced Gmail-style filters, and full Google Calendar integration to client requirements.",
    "bullets": [
      "Researched and developed voice input for email dictation.",
      "Built inline email summaries within the inbox workflow.",
      "Implemented detailed Gmail-style email filters.",
      "Developed the full Google Calendar integration to client requirements, including availability, event creation, invitations, time zones, and conflict detection."
    ],
    "technologies": [
      "Next.js 14",
      "TypeScript",
      "React 18",
      "Gemini 2.0 Flash",
      "Google Calendar API",
      "Gmail API",
      "NextAuth.js",
      "Prisma",
      "Supabase / PostgreSQL",
      "Tailwind CSS",
      "Radix UI",
      "React Window"
    ],
    "impact": "Delivered voice dictation, inline summaries, advanced email filters, and complete calendar integration within a two-person client project."
  }
],
  },
  {
    company: "XYGen.ai",
    role: "Junior Software Engineer",
    period: "Jul 2024 – Jun 2025",
    type: "Full-time",
    location: "Sri Lanka",
    duration: "1 yr",
    summary:
      "Full-stack software engineering using Next.js, React, TypeScript, Node.js, and Express, AI document processing pipelines, microservices, and Laravel admin dashboards.",
    achievements: [
      {
        title: "Full-Stack Engineering & AI Tooling",
        description:
          "Engineered full-stack features, internal AI document summarization tools, microservices, reusable UI components, and administrative dashboards.",
        bullets: [
          "Developed full-stack applications using **Next.js, React, TypeScript, Node.js, and Express**.",
          "Built internal **AI-driven tools** using LLM-based automation, summarization, and validation pipelines for a Legal Documents Summarization platform.",
          "Designed reusable **backend modules, API utilities, and service abstractions** to improve development productivity and maintainability.",
          "Developed reusable UI components and optimized client-side interactions using **React, Tailwind CSS, and ShadCN**.",
          "Integrated third-party APIs and optimized database queries to improve application performance and server response times.",
          "Contributed to internal **microservices and RESTful backend services** using Node.js and Express.",
          "Built a **Laravel-based administration dashboard** with CRUD modules, role-based access control (RBAC), and API integrations.",
          "Participated in **Agile development, code reviews, CI/CD workflows, and production deployments**.",
        ],
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "Express",
          "OpenAI APIs",
          "Tailwind CSS",
          "ShadCN",
          "Laravel",
          "PHP",
          "MySQL",
          "RBAC",
          "REST APIs",
          "CI/CD",
        ],
        impact:
          "Improved development productivity, query response times, and delivered automated legal document processing and administrative tools.",
      },
    ],
  },
  {
    company: "WIS Sri Lanka",
    role: "Intern Software Engineer",
    period: "Jan 2024 – Jun 2024",
    type: "Internship",
    location: "Sri Lanka",
    duration: "6 mos",
    summary:
      "Frontend component development, RESTful API design, enterprise dashboard development, and production feature contributions.",
    achievements: [
      {
        title: "Frontend, Backend & Dashboard Engineering",
        description:
          "Contributed to production application features across React, Angular, and Node.js ecosystems.",
        bullets: [
          "Developed reusable frontend components using **React.js**.",
          "Implemented API routes and backend utility functions using **Node.js** and RESTful design patterns.",
          "Contributed to enterprise dashboard development using **Angular**.",
          "Worked within existing codebases and development workflows while contributing to production application features.",
        ],
        technologies: [
          "React.js",
          "Angular",
          "Node.js",
          "Express.js",
          "REST APIs",
          "TypeScript",
          "Git",
        ],
        impact:
          "Shipped frontend component systems and RESTful backend utilities within enterprise agile workflows.",
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
  role?: string;
  status?: string;
  features?: string[];
  imageGradient: string;
  isWorkProject?: boolean;
  company?: string;
  workType?: "open-source" | "work-project" | "wis-sri-lanka";
  screenshots?: string[]; // e.g. ["/screenshots/your-project/1.webp", "/screenshots/your-project/2.png"] or external URLs like "https://res.cloudinary.com/..."
  thumbnail?: string; // optional cover image e.g. "/screenshots/your-project/thumb.webp"
}

export const projects: ProjectItem[] = [
  // === WORK PROJECTS — Mortgage AI Toolkit (WIS Sri Lanka) — NO PUBLIC CODE ===
  {
    "categories": [
      "Full Stack",
      "AI"
    ],
    "githubUrl": "",
    "featured": true,
    "isSelectedWork": true,
    "isWorkProject": true,
    "company": "WIS Sri Lanka (Mortgage AI Toolkit)",
    "workType": "wis-sri-lanka",
    "title": "Draftlee — AI Email Management Platform",
    "shortTitle": "Draftlee",
    "screenshots": [
      "/screenshots/Draftlee.png"
    ],
    "thumbnail": "/screenshots/Draftlee.png",
    "liveUrl": "https://www.mortgageaitoolkit.com/products/draftlee",
    "role": "Full-stack contributor · Two-person team",
    "status": "Collaborative client project",
    "description": "Co-developed an AI email management platform with one teammate. Personally researched and built voice dictation, inline email summaries, advanced Gmail-style filters, and full Google Calendar integration to client requirements.",
    "longDescription": "Draftlee is an AI-powered email management platform using Google Gemini 2.0 Flash for contextual replies and classification. This was a two-person project: my scope covered research and development of voice input, inline summaries, detailed Gmail-style filtering, and end-to-end calendar integration. The broader platform combines knowledge-base retrieval, confidence-based automation, draft management, and meeting workflows; these are team capabilities rather than claims of sole ownership.",
    "technologies": [
      "Next.js 14",
      "TypeScript",
      "React 18",
      "Gemini 2.0 Flash",
      "Google Calendar API",
      "Gmail API",
      "NextAuth.js",
      "Prisma",
      "Supabase / PostgreSQL",
      "Tailwind CSS",
      "Radix UI",
      "React Window"
    ],
    "outcome": "Delivered voice dictation, inline summaries, advanced email filters, and complete calendar integration within a two-person client project.",
    "challenges": [
      "Researched and developed voice input for email dictation.",
      "Built inline email summaries within the inbox workflow.",
      "Implemented detailed Gmail-style email filters.",
      "Developed the full Google Calendar integration to client requirements, including availability, event creation, invitations, time zones, and conflict detection."
    ],
    "decisions": [
      "Worked within a Next.js App Router application with TypeScript and API routes.",
      "Integrated Google Calendar with email workflows for meeting-aware scheduling.",
      "Kept summaries inline and filtering familiar to support the existing email workflow."
    ],
    "learnings": [
      "Calendar workflows require careful handling of time zones, availability, and scheduling conflicts.",
      "Voice input, inline summaries, and precise filters complement AI-generated replies.",
      "Clear feature ownership matters when delivering a shared application."
    ],
    "features": [
      "AI replies: Gemini 2.0 Flash, professional/friendly/formal/casual tones, and custom user instructions.",
      "Hybrid classification: knowledge-base matching, keyword/domain/regex rules, then AI fallback, with confidence scoring.",
      "Confidence-based automation: at least 90% auto-send, 70–89% approval, below 70% manual review; system/security email detection helps prevent unsafe replies and loops.",
      "Knowledge base: document uploads, chunking, keyword-based retrieval and relevance scoring, with source citations in replies.",
      "Meeting automation: intent extraction, Google Calendar availability checks, booking, invitations, timezone conversion, and conflict detection.",
      "Email workflows: drafts, forwarding, All/Drafts/Sent views, pagination, adaptive background polling, signatures, profiles, and settings.",
      "Platform architecture: Google OAuth via NextAuth.js, Prisma with Supabase PostgreSQL, virtualized lists, usage monitoring, credits, audit logs, HTML sanitization, and rate limits with retry/backoff."
    ],
    "imageGradient": "from-slate-800 via-slate-700 to-blue-900"
  },
  {
    "categories": [
      "Full Stack",
      "AI"
    ],
    "githubUrl": "",
    "featured": true,
    "isSelectedWork": true,
    "isWorkProject": true,
    "company": "WIS Sri Lanka (Mortgage AI Toolkit)",
    "workType": "wis-sri-lanka",
    "title": "EduFlow — AI-Powered Learning Platform",
    "shortTitle": "EduFlow",
    "screenshots": [
      "/screenshots/EduFlow.png"
    ],
    "thumbnail": "/screenshots/EduFlow.png",
    "liveUrl": "https://www.mortgageaitoolkit.com/products/eduflow",
    "role": "Sole developer · End-to-end full-stack & AI",
    "status": "In development · Deploying for client testing",
    "description": "Built the complete AI-powered LMS for mortgage advisors and paraplanners: secure course delivery, contextual voice Q&A, AI-generated assessments, intelligent tutoring, CPD tracking, and team analytics. Deploying for client testing during ongoing development.",
    "longDescription": "EduFlow supports personalized training for compliance, skill development, and career advancement. I developed the complete platform across the Next.js/React frontend, Node.js/Express APIs, MongoDB data layer, document-processing pipeline, and AI services. The application is still in development and is being deployed for client testing; it is not presented as an established production rollout.",
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js / Express",
      "MongoDB / Mongoose",
      "Gemini",
      "OpenAI",
      "OpenRouter",
      "Tesseract.js",
      "Google Cloud TTS",
      "Socket.io",
      "Zustand",
      "Tailwind CSS",
      "PDF.js",
      "natural / compromise",
      "Docker / GCP"
    ],
    "outcome": "Built the full LMS end to end; deploying for client testing while development continues.",
    "challenges": [
      "Extracted PDF and PowerPoint content with multiple fallbacks, including Tesseract.js OCR for image-based PDFs and pdf2pic/sharp image processing.",
      "Built screen-aware voice Q&A using full-document and page/slide-specific context, transcription, fuzzy matching, and spoken responses.",
      "Generated adaptive MCQs from document chunks, with quality controls and new question pools for retakes.",
      "Synchronized PDF-page, video-time, and slide progress with CPD hours, certificates, dashboards, and manager notifications."
    ],
    "decisions": [
      "Used a multi-provider AI service supporting Gemini, OpenAI, and OpenRouter with provider detection and fallback.",
      "Cached extracted content and document context, with queue management and metadata to support contextual responses.",
      "Combined JWT authentication, role-based access, secure document streaming, and viewer download restrictions.",
      "Used Socket.io for progress synchronization and notifications, with Zustand for frontend state and React Hook Form for forms."
    ],
    "learnings": [
      "Reliable document understanding needs format-aware extraction, OCR fallbacks, and cached context.",
      "Assessment feedback is more useful when explanations identify the topic and reference learning context.",
      "Client testing during development provides a feedback loop for learning and administration workflows."
    ],
    "features": [
      "Course management: PDF, PowerPoint, and video content; progressive module unlocking; secure PDF/PPT viewing; content updates and notifications.",
      "AI voice assistant: voice input, real-time transcription, screen-content context, full-document understanding, spelling/synonym matching, and Google Cloud Text-to-Speech playback.",
      "AI assessments: Gemini-generated MCQs, adaptive difficulty, dynamic retake pools, answer review, score tracking, and performance analytics.",
      "Intelligent tutoring: immediate feedback, expanded explanations for correct and incorrect answers, topic identification, and targeted learning support.",
      "Progress and CPD: page/slide/video tracking, CPD hours, learner statistics, admin analytics, and completion certificates.",
      "User management: student/admin/manager roles, professional role tracking, enrollment management, and team-progress notifications.",
      "AI/NLP architecture: natural for tokenization and TF-IDF, compromise for text analysis, skill/topic extraction, document context caching, and provider fallbacks.",
      "Deployment foundations: REST APIs, file upload/processing, secure streaming, error handling, Docker support, GCP deployment configuration, and monitoring services."
    ],
    "imageGradient": "from-slate-800 via-blue-950 to-slate-900"
  },

  // === S-TIER PORTFOLIO — Strongest engineering ===
  {
    title: "YGC — Your Guided Care: Medical Report Intelligence",
    shortTitle: "YGC",
    screenshots: ["/screenshots/YGC.png"],
    thumbnail: "/screenshots/YGC.png",
    description:
      "Clinical document intelligence for medical reports: upload lab results and prescriptions, extract structured facts with page-level provenance, run deterministic safety checks, then ask questions that cite the source page.",
    longDescription:
      "A three-service system \u2014 React/Vite dashboard, Node/Express API, and a FastAPI RAG service \u2014 over a single MongoDB. Documents pass through an OCR chain with fallbacks (pdfplumber, PyMuPDF, EasyOCR, Tesseract, TrOCR, then a vision LLM), and a deterministic rules engine checks drug\u2013drug interactions against curated tables plus RxNav and openFDA, allergy cross-reactivity, duplicate same-class prescribing, dose limits across renal eGFR bands, drug\u2013lab contradictions such as metformin with raised creatinine, and unit-normalised trends over time. The LLM only explains what extraction and rules already established: it never invents a lab value or a diagnosis, self-consistency is sampled twice, and confidence is capped at 60%. Every claim links back to the source page with a highlighted snippet, and corrections leave an audit trail. A /demo mode runs with no account and no database using seven synthetic patients, each exercising one safety path, and 589 Python tests pass offline against mongomock.",
    technologies: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express",
      "React",
      "Vite",
      "MongoDB",
      "EasyOCR",
      "PyMuPDF",
      "pdfplumber",
      "Groq",
      "Tesseract",
      "Tailwind",
      "TypeScript",
      "Docker",
    ],
    categories: ["Full Stack", "AI", "Machine Learning", "Backend"],
    githubUrl: "https://github.com/Inkithai/YGC",
    liveUrl: null,
    featured: true,
    isSelectedWork: true,
    outcome:
      "Deterministic safety checking with no LLM in the critical path, answers capped at 60% confidence, and 589 offline tests covering seven synthetic safety cases.",
    challenges: [
      "Made extraction reliable across document quality by chaining engines \u2014 pdfplumber, PyMuPDF, EasyOCR, Tesseract, TrOCR and finally a vision LLM \u2014 while every extracted fact keeps its page, line and snippet provenance. Unreadable input is flagged rather than guessed, and where engines disagree the fact is marked uncorroborated and routed for human verification.",
      "Kept clinical safety entirely deterministic, with no LLM in the path: curated interaction tables combined with RxNav and openFDA, an allergy cross-reactivity matrix, duplicate same-class detection, dose limits across adult, elderly and paediatric renal eGFR bands, drug\u2013lab contradiction checks, reference-range and critical lab risk, longitudinal unit-normalised trends, and prompt-injection stripping before anything reaches a model.",
      "Built grounded chat where the LLM only explains and never invents a lab value or diagnosis: 110 curated lab templates, an intent state machine with pronoun resolution instead of chat-memory guessing, self-consistency sampled twice with divergence lowering confidence, a hard cap of 60% on LLM confidence, and degradation to templates when Groq is unavailable so an answer is never empty.",
      "Consolidated on a single Mongo source after removing the SQLite dual-store hazard, which had caused one real class of bugs and hidden another: the refactor deleted 1,360 lines, extracted 10 pure DB-agnostic summary views, rewrote memory_engine from 643 to 300 lines and dropped a corrupted sqlite3 connection-integrity path. It is now enforced by test_storage_architecture, which forbids importing sqlite3.",
    ],
    decisions: [
      "Chose a three-service topology \u2014 browser \u2192 Node/Express proxy \u2192 FastAPI RAG service \u2192 a single MongoDB \u2014 where the browser only ever talks to Node and Node forwards to FastAPI with an x-internal-api-key, both writing to the same Mongo. Node owns auth, rate limiting, CORS, users, report metadata, the chat proxy and demo mode; FastAPI owns the OCR parser, rules engine, intent templates, Groq calls, validator and memory. No SQLite anywhere.",
      "Implemented a zero-hallucination principle as a pipeline rather than a prompt instruction: uploaded documents plus a signed curated knowledge base and RxNav/openFDA/Medline feed a facts database in Mongo, a rules engine with no LLM produces the findings, and the LLM sits only in an explanation layer guarded by self-consistency, a fact validator and a 60% confidence cap. Every claim carries a click-to-verify citation with a PDF.js snippet highlight, corrections are recorded in an audit trail, and a sync-audit page exposes the state.",
      "Used mongomock with an automatic TEST_MONGO_URI handle so the whole suite runs offline, and a /demo scenario loader that needs neither an account nor a database. Public reference data lives in a medlineplus_cache collection with a TTL index and is never mixed into patient data, while clinical_sync_events records audit and retry state.",
    ],
    learnings: [
      "Clinical safety has to be deterministic \u2014 zero LLM. Curated tables, a cross-reactivity matrix, renal dose bands and unit normalisation are checkable; a model inventing a value is not, so the LLM never gets a vote on safety.",
      "Running a dual store (SQLite plus Mongo) created one real class of bugs and hid another, because only one backend ever got exercised in practice. Consolidating on Mongo as the single source of truth removed 1,360 lines and is now enforced by test_storage_architecture, which fails if sqlite3 is imported or a .db file appears.",
      "Hallucination mitigation only works in layers: multi-engine cross-check \u2192 uncorroborated flag \u2192 self-consistency sampled twice \u2192 fact validator \u2192 60% confidence cap \u2192 graceful degradation to templates \u2192 click-to-verify citations \u2192 a human correction audit trail. Remove any one layer and the others cannot compensate.",
    ],
    imageGradient: "from-zinc-800 via-slate-800 to-blue-950",
  },
  {
    title: "Oyster360 — Multi-tenant Mushroom Farm SaaS",
    shortTitle: "Oyster360",
    screenshots: ["/screenshots/Oyster360.png"],
    thumbnail: "/screenshots/Oyster360.png",
    description:
      "Multi-tenant SaaS for mushroom farms \u2014 cultivation batches, environmental records, inventory, purchasing, harvest grading, analytics, AI assistance and Stripe billing, with isolation enforced by both role and organization.",
    longDescription:
      "A modular monolith: FastAPI backend and Next.js 16 frontend shipped as independently deployable containers, organised into 27 models, 24 routers and 28 services. Each farm lives inside an isolated organization and authorization is enforced twice \u2014 by RBAC role (admin, farm manager, worker, viewer) and by tenant ownership, with parent records verified before nested ones. Cultivation runs as a multi-stage batch lifecycle from preparation through inoculation, colonization and fruiting to harvest, with versioned substrate recipes, growth logs, health scores and temperature, humidity and CO2 readings. Auth covers rotating refresh tokens, Argon2 hashing, TOTP multi-factor, rate limiting, audit logs and GDPR export and deletion. Billing uses server-controlled Stripe price IDs so a client cannot substitute a cheaper plan, with signature-verified, idempotent webhooks. Background work runs on Celery with Redis, plus Alembic migrations, multi-stage non-root Docker images and GitHub Actions dependency and container scanning.",
    technologies: [
      "FastAPI",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Celery",
      "Stripe",
      "Argon2",
      "JWT",
      "MFA TOTP",
      "Docker",
      "Tailwind",
    ],
    categories: ["Full Stack", "Backend", "AI"],
    githubUrl: "https://github.com/Inkithai/Oyster360",
    liveUrl: null,
    featured: true,
    isSelectedWork: true,
    outcome:
      "Tenant-isolated SaaS with dual role and tenant enforcement, idempotent Stripe billing, Celery background jobs, and containerised deploys behind CI security scanning.",
    challenges: [
      "Implemented organization_id as the primary tenant boundary, backed by cooperating pieces \u2014 tenant_middleware, tenant_enforcer, tenant_decorators, tenant_scope, a base_tenant_service and a tenant_repository \u2014 so every query is enforced at organization level across tenant-owned resources. Parent records are verified before nested ones, so inspections, logs, grades and AI operations cannot be reached through an id belonging to another farm.",
      "Built the auth and security layer: JWT access tokens with rotating refresh tokens and revocation on logout, password change and reset, separate email-verification and password-reset token flows, Argon2 hashing, MFA via TOTP with QR enrolment, and RBAC across four roles. Around it sit rate limiting at 100 requests/min per IP in memory, a UUID request ID per call, security headers (nosniff, frame DENY, strict-origin-when-cross-origin, Permissions-Policy, HSTS, CSP), an audit log, feature flags, and GDPR data export and deletion.",
      "Designed billing on Stripe with the customer and checkout created server-side and price IDs controlled by the server, so a client cannot substitute a cheaper plan or price. Webhooks are signature-verified and subscription synchronisation is idempotent, with explicit lifecycle states including cancellation-at-period-end, plus admin SaaS analytics covering growth, revenue, retention, usage and AI activity.",
      "Created the AI layer as an abstract factory over OpenAIProvider, GeminiProvider and a RuleBasedProvider fallback, so assistance still works with no API key configured. Retrieval-augmented answers are restricted to documents owned by the authenticated user, and the same layer powers image inspection for contamination findings, yield prediction with expected harvest estimates, and farm dashboards for production success rate and SaaS analytics.",
    ],
    decisions: [
      "Chose a modular monolith with independently deployable frontend and backend containers sharing Postgres and Redis, rather than microservices: the API is domain-separated into 24 routers, 27 models, 28 services and 28 pages, using a repository pattern, services injected through FastAPI Depends, an abstract factory for AI providers and Pydantic schemas as DTOs. That keeps boundaries clear without the operational cost of running many services.",
      "Used Argon2 rather than bcrypt for memory-hard password hashing, rotating refresh tokens revoked on logout, password change and reset, MFA via TOTP QR enrolment, and rate limiting with request IDs, CORS, security headers, an audit log and feature flags. Stripe webhooks are signature-verified with idempotent sync, and the service runs as a non-root Docker image with Alembic migrations and separate health endpoints \u2014 /ready running SELECT 1, /live for liveness and celery-status for the workers.",
      "Implemented tenancy as middleware plus enforcer plus scope plus base service plus repository, so parent resources are verified before nested ones such as inspections, logs, grades and AI operations. The frontend role guard exists to improve navigation, but the backend stays the authoritative security boundary, and RAG retrieval is limited to documents owned by the authenticated user.",
    ],
    learnings: [
      "Multi-tenant SaaS needs organization_id treated as the primary boundary at every layer, not only in the schema: parent verification before nested resources, global scope enforcement, repository and service enforcement, database isolation, authorization boundaries and tenant-aware queries all have to agree.",
      "Production SaaS billing is far more than a checkout: server-controlled price IDs so a client cannot substitute a plan, webhook signature verification, idempotent subscription sync, explicit lifecycle states including cancellation-at-period-end, GDPR export and deletion, retention rules, and analytics that make all of it visible.",
      "An AI layer should still work with no external key \u2014 a RuleBased fallback inside an abstract provider pattern (OpenAI / Gemini / rule-based) buys both resilience and cost control. And restricting RAG to user-owned documents is what prevents cross-tenant leakage; it has to be enforced at retrieval, not in the prompt.",
    ],
    imageGradient: "from-slate-900 via-slate-800 to-blue-900",
  },

  // === A-TIER ===
  {
    title: "MediMind — Anonymous Medical Intelligence",
    shortTitle: "MediMind",
    screenshots: ["/screenshots/medimind.png"],
    thumbnail: "/screenshots/medimind.png",
    description:
      "Medical document intelligence in an anonymous workspace \u2014 no signup, just a session id in the browser. Uploads become a timeline of visits, medications, labs and allergies, with deterministic trend checks and grounded answers that cite their source.",
    longDescription:
      "Everything lives inside a private, anonymous workspace: the browser holds a session id issued by POST /api/v1/anonymous/session, so one browser sees exactly one isolated patient view with no account and no password. Uploads (PDF or image) are extracted to structured JSON by a provider-abstracted LLM \u2014 Groq with GPT-OSS 120B and Qwen vision, Gemini Flash, or any OpenAI-compatible endpoint, switched by environment variable alone \u2014 then stored in Supabase behind row-level security reached only through the service role, with files in a per-user Cloudinary path. The timeline feeds a pure-Python lab trend engine that parses dates and values, computes direction, detects range crossings and flags approaching thresholds, plus a retrieval layer that runs against local Chroma or Supabase-stored chunks. Answers return as JSON with citations, conversation queries are rewritten for retrieval, and a post-extraction filter discards non-medical documents without a second LLM call. Extraction jobs are thread-safe and move through queued, reading, extracting, saving and ready states, while the provider layer retries down a ladder from strict JSON schema to plain text and strips reasoning tags.",
    technologies: [
      "FastAPI",
      "React",
      "Vite",
      "TypeScript",
      "Supabase",
      "Cloudinary",
      "Groq",
      "Gemini",
      "ChromaDB",
      "ONNX",
      "Python",
      "Tailwind",
      "JWT",
      "Docker",
    ],
    categories: ["Full Stack", "AI", "Machine Learning", "Backend"],
    githubUrl: "https://github.com/Inkithai/medimind",
    liveUrl: "https://medimind-murex-nu.vercel.app/",
    featured: true,
    isSelectedWork: true,
    outcome:
      "Private by construction: no signup, session-scoped isolation, Supabase RLS with service-role-only access, per-user storage paths, and provider and embedding fallbacks so the pipeline degrades instead of failing.",
    challenges: [
      "Built the anonymous workspace so one browser sees exactly one isolated patient view: a session id is issued by POST /api/v1/anonymous/session as an anonymous JWT held in localStorage, with no signup and no password, which shrinks the attack surface. Supabase has RLS enabled but exposes no public policies \u2014 the database is reached only through the service role from the backend.",
      "Created an LLM provider abstraction where every backend goes through the OpenAI SDK and only base_url, api_key and model differ: Groq with GPT-OSS 120B plus Qwen 27B for vision, Gemini Flash as a single multimodal model for vision and text, or a generic OpenAI-compatible endpoint such as Cerebras or OpenRouter. Extraction reliability came from a retry ladder (strict json_schema \u2192 json_object \u2192 plain text), stripping of <think> reasoning tags, a tolerant parser, and provider-aware token budgets and rate-limit caps.",
      "Implemented a vector_store abstraction so retrieval works with or without persistent disk: VECTOR_STORE=chroma runs a local Chroma with a configurable CHROMA_DIR, while VECTOR_STORE=supabase stores chunks in a table and searches them with brute-force cosine \u2014 the recommended setting on Railway, which has no volume. Embeddings fall back from OpenAI text-embedding-3-small to a local ONNX MiniLM model, and switching provider means deleting chroma_db and re-uploading.",
      "Designed extraction as thread-safe parent jobs with independent per-file progress moving through queued \u2192 reading \u2192 extracting \u2192 saving \u2192 ready/failed, with optional Supabase persistence. Conversations are held in memory, follow-up questions are rewritten into self-contained retrieval queries, summarization is bounded, and a session can be resumed by ID with 404 handling after a restart. Lab trends run as a pure-Python engine computing direction, range crossings and approaching thresholds, rendered as SVG sparklines against a reference band.",
    ],
    decisions: [
      "Chose an anonymous JWT session (localStorage key medimind.session.v1) over traditional accounts: no password and no signup reduces the attack surface and removes onboarding friction for a privacy-sensitive tool, at the cost of session recovery. Isolation is enforced by Supabase RLS with service-role-only access and per-user Cloudinary paths under mediscan/<user>/, CORS was fixed to avoid wildcard-with-credentials, and JWT_SECRET is random. A fast document_filter drops non-medical uploads without spending another LLM call.",
      "Used the OpenAI SDK's base_url switch as the single integration point for every provider \u2014 Groq, Gemini and any generic endpoint \u2014 so changing provider is an environment change with no code edit, only a restart. Vision and text share one Gemini model while Groq needs two OpenAI-compatible calls; the retry ladder, <think> stripping, tolerant parser and provider-aware token budgets (including GEMINI_MAX_TOKENS) keep structured output working across all of them.",
      "Selected the vector_store abstraction so the deployment shape dictates storage: local Chroma with CHROMA_DIR overridden to /data/chroma_db when a Railway volume exists, otherwise Supabase chunks with brute-force cosine, which is what to use when there is no volume. UPLOAD_FILE_CONCURRENCY caps shared-worker pressure against provider quotas, CORS_ORIGINS is explicit, and an embeddings fallback chain exists because Groq and Gemini have no embeddings API.",
    ],
    learnings: [
      "An anonymous workspace genuinely reduces signup friction for medical data, but it moves the burden onto session handling: the session id in localStorage must be scoped so one browser can only ever see one patient view, with Supabase RLS reached through the service role only and per-user Cloudinary isolation.",
      "Abstracting providers behind the OpenAI SDK's base_url makes switching between Groq, Gemini or a generic endpoint (Cerebras, OpenRouter, custom) an environment-only change. What makes it work in practice is the shared retry ladder \u2014 strict json_schema, then json_object, then plain text \u2014 plus tolerant parsing, because each provider fails structured output differently.",
      "A vector-store abstraction only pays off when IDs are deterministic, so re-indexing overwrites instead of duplicating. Thread-safe jobs with per-file progress (queued \u2192 reading \u2192 extracting \u2192 saving \u2192 ready) make failures visible; storing _source.file as the original filename rather than a sanitised temp path keeps citations meaningful; and a deterministic pure-Python trend engine that robustly parses values like 70-99 mg/dL beats asking an LLM to read a reference range.",
    ],
    imageGradient: "from-slate-800 via-blue-900 to-slate-900",
  },
  {
    title: "BookWise — Multi-tenant Accounting SaaS",
    shortTitle: "BookWise",
    screenshots: ["/screenshots/BookWise.png"],
    thumbnail: "/screenshots/BookWise.png",
    description:
      "Double-entry accounting SaaS for Sri Lankan SMBs \u2014 chart of accounts, journal entries, live balances, banking reconciliation, payables and expenses, with financial statements computed on the fly from posted entries.",
    longDescription:
      "A Laravel 12 backend using nwidart/modules (14 modules, repository and service patterns) with a Next.js 16 frontend. Every record carries a host_id and a global Eloquent scope, so a request can only read or write its own organization's data; a TenantManager resolves the active tenant for the request lifetime and super-admins can impersonate one through an X-Host-Id header. The ledger is the core: postings must balance before they are accepted, account balances are derived live, and invoices post their receivables and receipts idempotently so a retry cannot double-count. Banking handles LKR deposits and withdrawals with reconciliation, each movement posted to the ledger, alongside vendor bills, payments and categorised expenses. Trial Balance, Profit & Loss, Balance Sheet and Cash Flow are computed from posted entries rather than stored, localised for LKR and Asia/Colombo. Repurposed CRM modules supply clients as customers and vendors and invoices as receivables; unrelated modules were left intact as known cleanup.",
    technologies: [
      "Laravel 12",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PHP 8.2",
      "MySQL",
      "PostgreSQL",
      "Redux Toolkit",
      "shadcn/ui",
      "Tailwind",
      "Stripe",
      "Passport",
      "Docker",
    ],
    categories: ["Full Stack", "Backend"],
    githubUrl: "https://github.com/Inkithai/BookWise",
    liveUrl: null,
    featured: true,
    isSelectedWork: false,
    outcome:
      "A guaranteed-balanced double-entry ledger with row-level tenancy, idempotent invoice posting, and four financial statements computed live from posted entries.",
    challenges: [
      "Implemented the double-entry general ledger: a Chart of Accounts, journal entries and live account balances behind a balanced-posting guarantee. JournalService owns the entry lifecycle (draft \u2192 posted \u2192 reversed), posting is the only moment balances change, and every posting is guarded by a \u03a3debit == \u03a3credit check so an unbalanced entry cannot be saved. AccountBalanceService maintains the running balances.",
      "Built the four financial statements \u2014 Trial Balance, Profit & Loss, Balance Sheet and Cash Flow \u2014 computed on the fly from posted entries through GET /api/v1/admin/accounting/reports/..., plus fiscal-year accounting settings. The data layer is interface-driven (AccountInterface and JournalEntryInterface with their repositories) across five migrations.",
      "Designed row-level multi-tenancy on a shared database: a global Eloquent scope and a TenantScoped trait add where host_id = TenantManager::id() to every query, host_id is auto-stamped on create and hard-required outside the console, and an OwnerTrait records created_by and updated_by. TenantManager resolves the active tenant for the request, super-admins can impersonate one through an X-Host-Id header, and ResolveTenant middleware runs inside the auth.verified group registered in bootstrap/app.php.",
      "Integrated invoicing into the ledger idempotently, so receivables and receipts post exactly once, with an artisan invoice:sync-ledger command to back-post existing invoices and accounting:seed-defaults to provision a new tenant's books. Banking handles LKR deposits and withdrawals with reconciliation and posts every movement to the ledger, alongside accounts payable for vendor bills and categorised overhead capture.",
    ],
    decisions: [
      "Chose Laravel 12 with nwidart/modules \u2014 a modular monolith of 14 modules using the repository, service, form-request and API-resource controller pattern. Accounting holds the double-entry core, Banking the cash and reconciliation, Purchases the payables, Expenses the overheads and Invoice the receivables, each linking into journal_entries through a journal_entry_id.",
      "Used row-level tenant scoping on a shared database (global Eloquent scope on host_id, TenantManager resolution, auto-stamping, a hard requirement outside the console, OwnerTrait, super-admin X-Host-Id impersonation, ResolveTenant inside the auth.verified group) rather than schema-per-tenant, trading some isolation for far simpler migrations and queries. The roadmap keeps schema-per-tenant isolation, multi-currency beyond LKR, fixed-asset depreciation, bank feeds, mobile and Sri Lanka VAT/tax handling.",
      "Implemented the double-entry mechanics so JournalService owns the lifecycle (draft \u2192 posted \u2192 reversed), posting is the only point at which balances change, and the \u03a3debit == \u03a3credit guard runs before anything is written. AccountBalanceService keeps running balances while FinancialStatementService derives Trial Balance, P&L, Balance Sheet and Cash Flow from posted entries instead of storing them \u2014 caching is the obvious next step if statement queries become a bottleneck.",
    ],
    learnings: [
      "Double-entry accounting stands or falls on the balanced-posting guarantee: \u03a3debit == \u03a3credit, an unbalanced entry cannot post, posting is the only moment balances change, and running balances are maintained rather than recomputed. Deriving the financial statements on the fly from posted entries keeps them consistent by construction.",
      "Row-level multi-tenancy on a shared database only holds if isolation is structural rather than conventional: a global scope on host_id, a TenantManager that resolves and stores the active tenant, ResolveTenant middleware inside auth.verified, an OwnerTrait for created_by and updated_by, and host_id hard-required outside the console. Super-admin impersonation then becomes an explicit X-Host-Id exception instead of a hole.",
      "A modular monolith with nwidart/modules (14 modules, repository and service patterns) made it practical to repurpose CRM pieces \u2014 clients became customers and vendors, invoices became receivables \u2014 but the unrelated modules left in place are visible tech debt for a later cleanup. Proper localisation means LKR with Asia/Colombo and en_LK DD/MM/YYYY formatting; multi-currency belongs on the roadmap, not in the first release.",
    ],
    imageGradient: "from-zinc-800 via-slate-700 to-slate-900",
  },
  {
    title: "RouteIQ — Transit Telemetry SaaS",
    shortTitle: "RouteIQ",
    screenshots: ["/screenshots/RouteIQ.png"],
    thumbnail: "/screenshots/RouteIQ.png",
    description:
      "Transit platform with real-time vehicle tracking and seat reservation \u2014 drivers broadcast GPS over WebSockets, riders watch the bus move and book from a live 32-seat grid, with Stripe checkout and an offline PWA ticket vault.",
    longDescription:
      "Built for Sri Lanka's Western Province: eight pre-seeded Colombo routes (Fort to Kandy, Galle, Negombo, Matara, Nuwara Eliya, Jaffna, Gampaha and a local Kadawatha corridor) with real bus-stop coordinates, LKR pricing, +94 phone formats, SLTB-style registration plates and a trilingual UI in English, Sinhala and Tamil. Drivers switch on broadcast mode and stream latitude, longitude and calculated speed over a bidirectional Socket.IO channel using HTML5 Geolocation, so riders see telemetry without polling; corridor polylines for the A1, E01 and A3 are drawn over CartoDB dark tiles in Leaflet. Booking runs on a 32-seat grid that locks seats in real time per travel date, with Stripe card checkout and an offline ticket vault \u2014 a service worker plus IndexedDB lets a ticket be verified with no signal. Firebase Cloud Messaging sends proximity alerts when the bus is two stops away. An AI module estimates arrival times from traffic and weather, forecasts occupancy and answers rider questions, while X-Tenant-Slug headers partition fleets so several operators can share one deployment. The backend is Node/Express with Mongoose, JWT access and rotating refresh tokens, tenant guard, rate limiting and error middleware; the frontend is React with Vite and Tailwind, shipped as a PWA and containerised behind Nginx.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Leaflet",
      "Stripe",
      "Firebase FCM",
      "PWA",
      "IndexedDB",
      "Tailwind",
      "TypeScript",
      "Docker",
    ],
    categories: ["Full Stack", "Backend", "AI", "Frontend"],
    githubUrl: "https://github.com/Inkithai/RouteIQ",
    liveUrl: null,
    featured: true,
    isSelectedWork: true,
    outcome:
      "Real-time telemetry end to end \u2014 driver broadcast to rider map \u2014 with live seat locking, offline ticket verification, proximity alerts, and multi-operator tenancy on one deployment.",
    challenges: [
      "Implemented zero-latency telemetry: a bidirectional Socket.IO WebSocket channel carries driver broadcasts from HTML5 Geolocation \u2014 latitude, longitude and calculated speed in km/h \u2014 to every connected rider, while a Geo/Haversine library measures proximity and Firebase Cloud Messaging dispatches an alert when the bus is two stops away.",
      "Built the live map layer: CartoDB dark tiles for high visibility, dashed Leaflet polylines for active corridors, bus-stop markers showing stop order with arrival tooltips, and custom HTML/SVG marker badges with green live-status indicators. Multi-corridor overlays draw the A1, the E01 Southern Expressway, the A3 Negombo Road and the southern coastal route in distinct colours, using accurate GPS for real Colombo stops \u2014 Fort, Pettah, Kadawatha, Katunayake Airport, Wellawatte, Panadura, Kalutara, Galle and Matara.",
      "Created the AI transit intelligence module behind /api/ai: an ETA regressor that factors urban traffic levels and weather such as rain and storms, an occupancy predictor that forecasts peak passenger load as percentages and crowd-density categories, and a floating passenger chatbot answering questions about schedules, fares and delays.",
      "Designed the commercial booking and operations side: a 32-seat grid matrix with real-time seat locking and per-date availability checks, 256-bit encrypted Stripe card-intent checkout, and a PWA offline ticket vault (service worker plus IndexedDB) so a ticket verifies instantly without cellular. For operators, X-Tenant-Slug headers partition fleets across organizations and a metrics dashboard aggregates average trip delay, fuel use at 4.2 km/L and peak-hour passenger density histograms. Localisation covers a trilingual UI in English, Sinhala and Tamil, LKR pricing, +94 phone formats and SLTB-style registrations such as WP-CA-1001, with realistic route names and distances and durations tuned to local traffic.",
    ],
    decisions: [
      "Chose Socket.IO on both server and client for bidirectional, zero-latency telemetry instead of polling: drivers broadcast latitude, longitude and speed from HTML5 Geolocation, Firebase Cloud Messaging handles the two-stop proximity alert, and the map pairs CartoDB dark tiles with dashed Leaflet polylines and custom HTML/SVG live-status icons. Seed data uses eight real Colombo routes with accurate GPS and twelve sample buses following SLTB and private-operator naming, with distances and durations tuned to local traffic.",
      "Used a 32-seat grid matrix with real-time lock state per travel date for availability, 256-bit encrypted Stripe card-intent checkout for payment, and a PWA offline ticket vault (service worker plus IndexedDB) so verification works without a connection. Multi-tenancy rides on an X-Tenant-Slug header and an Organization model, with fleet metrics for average delay, fuel economy at 4.2 km/L and peak-hour histograms.",
      "Implemented a modular, domain-driven backend: src/modules for ai (ETA regression, occupancy forecasting, chatbot), auth (JWT with 15-minute access and 7-day rotating refresh), analytics (fleet KPIs), booking (seat conflict locks), bus (CRUD plus GPS telemetry patch endpoints), payment (Stripe intent service) and route (waypoints), behind Auth, TenantGuard, RateLimiter and ErrorHandler middleware. Models use Mongoose ODM (User, Bus, Booking, Organization) and services wrap Firebase Cloud Messaging. The stack ships in containers \u2014 an Alpine backend image, a multi-stage Nginx frontend build and docker-compose orchestration with GitHub Actions CI/CD \u2014 while the frontend is a PWA with manifest and service worker, Auth, Geo/Haversine and IndexedDB libraries, and Admin Dashboard, Live Tracking and Customer Booking pages typed by shared TypeScript contracts.",
    ],
    learnings: [
      "Real-time transit only feels real when every layer is accurate: bidirectional WebSockets rather than polling, HTML5 Geolocation so any driver's phone can broadcast, Haversine distance for the two-stop proximity alert, high-visibility dark map tiles, distinct colours per corridor, real Colombo stop coordinates, and localisation that matches the market \u2014 trilingual en/si/ta, LKR, +94 numbers and local registration formats with tuned distances and durations.",
      "Seat booking at scale is a concurrency problem before it is a payment problem: the 32-seat grid needs real-time lock state per travel date and explicit handling of race conditions, then encrypted Stripe card intents, then an offline PWA vault so a ticket still verifies without cellular coverage.",
      "Multi-tenant fleet SaaS partitions cleanly on a tenant header (X-Tenant-Slug) plus an Organization model, and the operator value comes from aggregated metrics \u2014 average delay, fuel at 4.2 km/L, peak-hour histograms. A modular domain-driven backend with Auth, TenantGuard, RateLimiter and ErrorHandler middleware, Mongoose ODM, Helmet, rate limiting and Zod validation, deployed as multi-stage Docker containers behind GitHub Actions, is what makes it production-shaped rather than a demo.",
    ],
    imageGradient: "from-slate-800 via-blue-950 to-blue-900",
  },

  // === B-TIER + C-TIER — Supporting / More builds ===
  {
    title: "CRM System — Multi-tenant Django",
    shortTitle: "CRM System",
    description:
      "Multi-tenant CRM built with Django REST Framework, React, PostgreSQL and S3 \u2014 organizations on BASIC or PRO plans, role-based access for admin, manager and staff, soft-deleted companies, contacts unique per company, and a full activity audit log.",
    longDescription:
      "A Django REST Framework and React CRM where tenancy is enforced at several layers: every query is filtered by organization at the ViewSet level, custom permission classes validate membership, and serializer-level validation blocks cross-organization writes. A custom user model extends AbstractUser with an organization foreign key and an ADMIN / MANAGER / STAFF role \u2014 admins get full CRUD, managers can create, read and update but not delete, staff get create, read and limited write. Companies soft-delete through an is_deleted flag instead of disappearing, contacts are constrained by unique_together on company and email, and an ActivityLogMixin records every create, update and delete with model, object id, user, organization and timestamp, exposed as a read-only audit trail. Files go to AWS S3 through signed URLs rather than public buckets. Auth uses JWT with a one-hour access token and seven-day refresh, held in memory instead of localStorage. The API covers auth, organizations, nested company and contact CRUD, activity logs and user administration with pagination and search on name and email; the React app provides login, an organization dashboard, company list and detail with nested contacts, create and edit forms, an activity log viewer and user management.",
    technologies: ["Django", "React", "PostgreSQL", "AWS S3", "Django REST Framework", "Python", "JWT", "Vite", "Tailwind"],
    categories: ["Full Stack", "Backend"],
    githubUrl: "https://github.com/Inkithai/CRM",
    liveUrl: null,
    featured: false,
    isSelectedWork: false,
    outcome: "Tenant isolation enforced at the ViewSet, permission and serializer layers, with RBAC, soft deletes, a complete audit trail and signed-URL file storage.",
    challenges: [
      "Implemented the multi-tenant architecture: an Organization model with a BASIC/PRO subscription plan, a custom user carrying an organization foreign key and an ADMIN/MANAGER/STAFF role, companies that soft-delete through is_deleted, contacts constrained by unique_together on company and email, and an ActivityLogMixin that automatically records every CREATE, UPDATE and DELETE with the user, action, model, object id, timestamp and organization.",
      "Integrated AWS S3 using signed URLs rather than public access, so files are served through temporary, secure links. Access is IAM-based with no hardcoded credentials \u2014 .env is git-ignored and only a template with placeholders is committed, with separate dev and prod configurations.",
      "Designed RBAC so admins get full CRUD, managers can create, read and update but never delete, and staff get create, read and limited write. Organization filtering is enforced at the ViewSet level, custom permission classes validate membership, and serializer-level validation blocks cross-organization writes. JWT uses a one-hour access token with a seven-day refresh, held in memory/context rather than localStorage.",
    ],
    decisions: [
      "Chose Django for its robust ORM and built-in admin, which mapped directly onto the domain: a custom User extending AbstractUser with an organization foreign key, Company soft deletes via is_deleted, a unique_together constraint on contacts, and audit logging delivered through a mixin.",
      "Used PostgreSQL for relational integrity and complex queries, S3 signed URLs for temporary IAM-based file links instead of public buckets, and JWT with configurable expiry \u2014 one-hour access, seven-day refresh \u2014 stored in memory/context rather than localStorage.",
      "Implemented tenant isolation at three levels rather than one: Organization filtering in the database, ViewSet-level filtering with custom permission classes that validate membership, and serializer-level validation that prevents cross-organization manipulation. On top of that sit an automatic activity-logging system for audit and a soft-delete pattern that marks records deleted and filters them out of normal queries.",
    ],
    learnings: [
      "Multi-tenant systems need data isolation designed in rather than bolted on: organization filtering at the ViewSet, custom permission classes checking membership, and serializer-level validation are what actually prevent cross-organization manipulation \u2014 any one of them alone can be bypassed.",
      "Cloud storage integration is mostly a security exercise: signed URLs for temporary access instead of public buckets, IAM-based permissions with no hardcoded credentials, .env ignored with only a placeholder template committed, and separate dev and prod configs.",
      "Django's ORM carries a lot of this weight for free \u2014 a custom User on AbstractUser, soft deletes on Company, unique_together on contacts, and audit logging that becomes automatic once it lives in a mixin instead of in each view.",
    ],
    imageGradient: "from-slate-900 via-slate-800 to-blue-900",
  },
  {
    title: "Liya — Kapruka MCP Shopping Assistant",
    shortTitle: "Liya",
    screenshots: ["/screenshots/Liya.png"],
    thumbnail: "/screenshots/Liya.png",
    description:
      "Conversational shopping assistant for Kapruka built on the Model Context Protocol \u2014 an orchestrator calls plan, shelf, comparison, cart and checkout tools, with language detection across English, Sinhala and Tamil.",
    longDescription:
      "A Next.js 15 App Router prototype that puts the MCP pattern into a real shopping flow. An /api/mcp route declares the server's tools, resources and prompts, and an orchestrator decides which to call \u2014 planning, product shelf, comparison, cart or checkout \u2014 while separate modules handle personality, delivery estimates, language detection and fallback products. The interface is built from small focused components: ChatPanel and TypingIndicator for conversation, ProductCard, ProductShelf and ReliabilityBar for results, FloatingCart and MobileCartBar for the cart, plus Button, Card, EmptyState and Skeleton primitives, with state in a Zustand store. A how-it-works page walks through the flow in six illustrated steps from first message to checkout, alongside demo, shop, review, track and checkout pages.",
    technologies: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind",
      "Zustand",
      "MCP",
      "OpenAI",
      "Figma",
      "shadcn/ui",
    ],
    categories: ["Full Stack", "AI", "Frontend"],
    githubUrl: "https://github.com/Inkithai/Liya",
    liveUrl: "https://liya-ten.vercel.app/",
    featured: false,
    isSelectedWork: false,
    outcome: "A working reference for MCP-style tool orchestration in e-commerce: the model plans, compares and checks out through declared tools rather than free-form text.",
    challenges: [
      "Built the MCP server as an /api/mcp route, declaring the tool definitions, resources and prompts the assistant is allowed to use.",
      "Implemented the conversation layer as separate modules \u2014 orchestrator, personality, delivery, fallback products and language \u2014 so each concern can change without touching the others.",
      "Designed the shopping UI around the conversation: floating and mobile cart bars, product cards and shelves with a reliability bar, a chat panel with a typing indicator, and a six-step illustrated how-it-works flow.",
    ],
    decisions: [
      "Chose Next.js 15 App Router with TypeScript, Tailwind and a Zustand store for rapid e-commerce prototyping.",
      "Used the Model Context Protocol as the integration pattern, so shopping actions are explicit tool calls rather than free-form model output.",
      "Implemented trilingual language detection across English, Sinhala and Tamil to match Kapruka's Sri Lankan market.",
    ],
    learnings: [
      "The MCP pattern only works when the tool, resource and prompt definitions are explicit \u2014 the orchestrator, personality, delivery, language and fallback modules all depend on that contract.",
      "Conversational shopping needs a UI that keeps up with the model: cart state has to stay visible while the conversation continues, which is why the cart bars, product shelf, reliability bar and typing indicator matter as much as the chat itself.",
      "An e-commerce prototype is far easier to evaluate when the flow is shown visually \u2014 six how-it-works steps from first conversation to checkout explain the product faster than a demo session.",
    ],
    imageGradient: "from-zinc-900 via-slate-800 to-blue-950",
  },
  {
    title: "ConvertLab — Privacy File Converter",
    shortTitle: "ConvertLab",
    screenshots: ["/screenshots/ConvertLab.png"],
    thumbnail: "/screenshots/ConvertLab.png",
    description:
      "Universal file converter that runs entirely in the browser \u2014 no upload, no backend, no account. Documents, images and developer formats convert client-side, so nothing leaves the device.",
    longDescription:
      "A privacy-first utility built with Next.js 15 and React 19 where every conversion happens client-side: there is no backend, database, auth layer or queue, so files never leave the device. Converters are grouped into data, documents and office modules using markdown-it, js-yaml, papaparse, jspdf, html2canvas, mammoth, fast-xml-parser and docx. The app is organised around a dynamic /conversion/[type] route with a conversion client and picker, a hero format picker on the landing page and a tools directory; categories and entries are declared in a single constants file with their icon and colour, so adding a format is one edit. Styling is Tailwind 4 with clsx and tailwind-merge helpers, and the landing page was refined through dedicated UI and UX audit passes.",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "jspdf", "mammoth", "papaparse", "docx", "html2canvas"],
    categories: ["Frontend", "Other"],
    githubUrl: "https://github.com/Inkithai/ConvertLab",
    liveUrl: "https://convertlab-gamma.vercel.app/",
    featured: false,
    isSelectedWork: false,
    outcome: "File conversion with a hard privacy guarantee \u2014 zero server uploads \u2014 and a converter registry that makes adding a format a one-file change.",
    challenges: [
      "Built every converter to run client-side \u2014 data.ts, documents.ts and office.ts using jspdf, html2canvas, mammoth, papaparse, js-yaml, fast-xml-parser and docx \u2014 so there is no backend upload at all and privacy is structural rather than a policy promise.",
      "Implemented universal conversion across three categories \u2014 documents, images and developer formats \u2014 driven by a hero format picker and a single registry of conversion entries.",
      "Ran dedicated landing-page UI and UX audit passes, documented in the repo, covering icons, the hero format picker, the conversion picker and the tool directory.",
    ],
    decisions: [
      "Chose Next.js 15, React 19, TypeScript and Tailwind for a privacy-first, client-side-only converter: with no backend, everything runs in the browser and nothing leaves the device.",
      "Used markdown-it, js-yaml, papaparse, jspdf, html2canvas, mammoth, fast-xml-parser and docx so that data, document and office conversions all run in the browser.",
      "Implemented one declarative registry \u2014 categories and conversion entries with their key, icon, colour and border \u2014 so the tool directory, picker and routes are all generated from the same source.",
    ],
    learnings: [
      "Privacy-first file conversion means client-side only \u2014 there is no upload path left to secure. The browser plus jspdf, html2canvas, mammoth, papaparse, js-yaml, fast-xml-parser and docx covers a surprisingly wide format matrix.",
      "A universal conversion tool needs a clear category structure (documents, images, developer formats) and a discoverable front door; the hero format picker, conversion picker and tool directory do that work.",
      "Auditing the landing page for UI and UX improved tool discovery: icons, the hero picker and the directory are what turn a utility into something people can navigate.",
    ],
    imageGradient: "from-zinc-900 via-slate-800 to-zinc-900",
  },
  {
    title: "StudyPal — RAG Study Assistant",
    shortTitle: "StudyPal",
    description:
      "RAG study assistant: upload a syllabus PDF and get a personalised study plan, grounded Q&A and learning resources, with answers tied to your own documents.",
    longDescription:
      "An earlier, deliberately simple retrieval-augmented generation pipeline. A Python backend (main.py with rag/chain.py and ingest.py) ingests uploaded syllabus PDFs, chunks them, embeds the chunks with OpenAI and retrieves by semantic similarity to build a study plan, answer questions and suggest resources grounded in that material. The frontend is a React app built with Vite. The lasting lesson was how much answer quality depends on preprocessing: chunking strategy and embedding quality directly shape retrieval accuracy, and an education tool needs explicit fallbacks for the cases where the documents simply do not contain an answer. This is the starting point the considerably deeper retrieval work in YGC and MediMind grew out of.",
    technologies: ["Next.js", "OpenAI", "RAG", "Embeddings", "React", "Supabase", "TypeScript", "Python"],
    categories: ["Full Stack", "AI", "Machine Learning"],
    githubUrl: "https://github.com/Inkithai/StudyPal",
    liveUrl: null,
    featured: false,
    isSelectedWork: false,
    outcome: "Grounded answers from a student's own syllabus, plus the chunking and embedding lessons that shaped later RAG work.",
    challenges: [
      "Implemented the document chunking and embedding pipeline that retrieval depends on \u2014 an earlier, simpler version of the RAG work later done in YGC and MediMind.",
      "Built context-aware AI responses from uploaded syllabus content",
      "Optimized retrieval accuracy for personalized study plan generation",
    ],
    decisions: [
      "Chose RAG architecture for grounded accurate AI responses earlier",
      "Used OpenAI embeddings for semantic similarity search",
      "Implemented chunking strategies for large document processing",
    ],
    learnings: [
      "RAG systems live or die on preprocessing: chunking strategy and embedding quality decide retrieval accuracy. These were the lessons the more advanced pipelines in YGC and MediMind were built on.",
      "Embedding quality directly impacts retrieval accuracy and response relevance",
      "AI-powered education tools need robust fallback mechanisms for edge cases",
    ],
    imageGradient: "from-zinc-800 via-slate-800 to-blue-950",
  },
  {
    title: "Sri Lankan SMART-GPT",
    shortTitle: "SMART-GPT",
    description:
      "MERN chatbot using Groq inference that converses in Sinhala, Tamil and English, with culturally contextual responses for Sri Lankan users.",
    longDescription:
      "A full-stack AI chatbot on the MERN stack \u2014 MongoDB, Express, React, Node \u2014 using Groq for low-latency inference. The backend is TypeScript throughout, with a Groq config, chat and user controllers, Conversation and User models, separate chat and user routes, and utilities for constants, token management and validation. The React frontend (Vite, TypeScript) provides home, login, signup and chat pages with an AuthContext, an api-communicator helper and reusable components for the header, footer, chat items, customised inputs, navigation links, logo and a typing animation. Conversation history is stored per user in MongoDB, which suits the flexible document shape of multilingual chat. Supporting Sinhala, Tamil and English turned out to be mostly a prompt-engineering problem: culturally contextual answers needed careful instruction design rather than a different model.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Groq AI", "TypeScript", "Tailwind"],
    categories: ["Full Stack", "AI", "Frontend"],
    githubUrl: "https://github.com/Inkithai/Sri-Lankan-SMART-GPT",
    liveUrl: null,
    featured: false,
    isSelectedWork: false,
    outcome: "Trilingual conversation with low-latency Groq inference and per-user history, plus a practical lesson in prompt design for culturally contextual replies.",
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
    imageGradient: "from-slate-900 via-zinc-800 to-slate-900",
  },
  {
    title: "DigiBeat — Browser Clock Collection",
    shortTitle: "DigiBeat",
    screenshots: ["/screenshots/DigiBeat.png"],
    thumbnail: "/screenshots/DigiBeat.png",
    description:
      "A collection of browser-based clocks and time tools \u2014 alarm, binary, flip, neon, pixel and world clocks plus pomodoro, stopwatch and timer. Runs fullscreen on any device with no signup and no ads.",
    longDescription:
      "A TypeScript React app built with Vite that gathers eight time tools in one place: alarm, binary, flip, neon, pixel and world clocks alongside a pomodoro, stopwatch and timer. A ClockContext shares time state across the app and a useTime hook drives the ticking, while each clock is its own component (AlarmClock, BinaryClock, FlipClock, NeonClock, PixelClock, WorldClock) built on shared Controls, DateDisplay, Navigation and SettingsPanel pieces, with a page per tool. It installs as a PWA \u2014 manifest.json, a service worker and 192/512 icons \u2014 so it runs fullscreen on any device with no signup, no ads and no backend. The repo also carries design documentation covering architecture, design patterns, user flow, AI feature ideas, a monetisation plan and a SaaS roadmap.",
    technologies: ["React", "TypeScript", "Vite", "PWA", "Tailwind", "Service Worker"],
    categories: ["Frontend", "Other"],
    githubUrl: "https://github.com/Inkithai/DigiBeat",
    liveUrl: "https://inkithai.github.io/DigiBeat",
    featured: false,
    isSelectedWork: false,
    outcome: "An offline-capable PWA covering eight time tools with no backend, plus design documentation for how it would grow into a product.",
    challenges: [
      "Built a collection of browser-based clocks and time tools \u2014 alarm, binary, flip, neon, pixel and world clocks plus pomodoro, stopwatch and timer \u2014 all running fullscreen on any device.",
      "Implemented PWA support with a manifest and a service worker so the app is installable and works offline in fullscreen.",
      "Designed shared state and documentation alongside the app: a ClockContext with a useTime hook driving every clock, plus repo docs covering architecture, design patterns, user flow, AI feature ideas, monetisation and a SaaS roadmap.",
    ],
    decisions: [
      "Chose React with TypeScript, Vite, Tailwind and a PWA service worker so the collection runs fullscreen on any device with no signup, no ads and no backend.",
      "Used one component per clock (AlarmClock, BinaryClock, FlipClock, NeonClock, PixelClock, WorldClock) built on shared Clocks, Controls, DateDisplay, Navigation and SettingsPanel pieces, a useTime hook for ticking state, and a page per tool \u2014 Alarm, Home, Pomodoro, Stopwatch, Timer and World Clock.",
      "Wrote the product documentation up front \u2014 architecture, design patterns, user flow, AI features, monetisation and a SaaS roadmap \u2014 so the project has a defined path if it grows.",
    ],
    learnings: [
      "A collection of clocks stays maintainable when shared behaviour is centralised: one ClockContext plus a useTime hook, with common Controls, DateDisplay, Navigation and SettingsPanel pieces under each clock component.",
      "PWA support \u2014 manifest plus service worker \u2014 is what makes a browser utility feel like an app: installable, offline-capable and fullscreen, with no signup and no ads in the way.",
      "Even hobby projects benefit from writing down the architecture, design patterns, user flow and a monetisation or SaaS roadmap; it turns a collection of demos into something with a next step.",
    ],
    imageGradient: "from-zinc-900 via-slate-800 to-zinc-900",
  },
  {
    title: "VoucherRush — HTML5 Game",
    shortTitle: "VoucherRush",
    screenshots: ["/screenshots/VoucherRush.png"],
    thumbnail: "/screenshots/VoucherRush.png",
    description:
      "HTML5 canvas game written in vanilla ES6 JavaScript with no game framework \u2014 a locked 60 FPS loop, collision and particle systems, a Web Audio synthesizer for asset-free sound, and a scratch-card reward reveal that issues coupons by score tier.",
    longDescription:
      "Built for the Vouchermatic game development challenge in pure HTML5, CSS3 and ES6 JavaScript \u2014 no Phaser, Pixi or jQuery \u2014 and structured as a DOM wrapper and state router (index.html), responsive dark glassmorphism styling (style.css), a canvas physics and particle engine (game.js), a Web Audio synthesizer (audio.js) and a scratch-card reward module (rewards.js). The render loop runs on requestAnimationFrame with delta-time stepping to hold 60 FPS and avoid clipping on low-spec mobile processors, and the canvas scales for high-DPI screens. Input covers arrow keys and A/D, mouse drag, and high-frequency touch swipe. Instead of a plain game-over screen the session ends in a conversion funnel: the score is recorded and a scratch-and-win card reveals a promotional coupon (VM-INTERN-300, VM-FRENZY-1000) matched to the scoring tier, showing how a brand would distribute rewards through a gamification platform. Shipping it meant fixing real browser bugs \u2014 an audio freeze and burst solved with a master gain node and ramped volume, a 0x0 NaN scratch canvas falling back to 300x160 after a short delay, a roundRect polyfill for older browsers, confetti clipped by its parent modal, and a flash-on-reset caused by a transition on the freeze backdrop.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Canvas", "Web Audio API", "PWA"],
    categories: ["Frontend", "Other"],
    githubUrl: "https://github.com/Inkithai/VoucherRush",
    liveUrl: "https://inkithai.github.io/VoucherRush/",
    featured: false,
    isSelectedWork: false,
    outcome:
      "A dependency-free 60 FPS canvas game with synthesised audio and a working reward funnel, plus the browser fixes needed to ship it: audio gain ramping, a roundRect polyfill, scratch-canvas fallback sizing and confetti clipping.",
    challenges: [
      "Built the 60 FPS render loop on requestAnimationFrame with delta-time-safe stepping so physics stay consistent across refresh rates, then layered fluid input on top \u2014 keyboard (arrows and A/D), mouse drag and high-frequency touch swipe \u2014 using lerp-based basket glide instead of snapping to the pointer. Power-ups needed real vector maths (the magnet applies a radial pull), and frenzy mode drives a difficulty curve that raises spawn frequency and fall speed as a score climbs.",
      "Implemented a Web Audio API synthesizer so the game has zero-latency, asset-free sound: dynamic effects plus a looping chiptune BGM built from oscillators. Muting exposed a Freeze & Burst bug \u2014 suspending the AudioContext froze the audio clock, so BGM notes queued up on their interval and exploded in a loud blast when it resumed (and iOS Safari sometimes refused to resume at all). The fix was a masterVolumeNode with a gain ramp via setTargetAtTime. Alongside it: devicePixelRatio scaling for high-DPI screens, multi-tier particle systems for smoke, embers and stars, and screen shake as a decaying translate offset.",
      "Fixed six critical QA defects found before submission: (1) the audio Freeze & Burst, solved with the master gain node; (2) a 0x0 NaN scratch canvas because getBoundingClientRect returns 0 while the element is hidden, now falling back to 300x160 after a 50ms reflow delay; (3) a roundRect TypeError on older devices, covered by a polyfill using quadratic arcs; (4) confetti clipped by an overflow-hidden parent modal; (5) a flash-on-reset that leaked the previous coupon, fixed by setting transition to none so the silver coating snaps back instantly; (6) a jarring state transition, fixed by only drawing game objects in the PLAYING or GAMEOVER states and freezing the backdrop behind the glassmorphism modal.",
    ],
    decisions: [
      "Chose pure vanilla HTML5, CSS3 and ES6 JavaScript \u2014 no Phaser, Pixi or jQuery and no bulky dependencies \u2014 and still locked 60 FPS with high-DPI Retina scaling and mobile screen support. The reward flow was deliberately built as a commercial conversion funnel matching Vouchermatic's product line: instead of a plain game-over screen, Claim Reward opens a scratch-card modal that issues a promotional coupon (VM-INTERN-300 or VM-FRENZY-1000) based on the scoring tier. Game feel came from oscillator-driven chiptune BGM, multi-tier particle systems with high-velocity radial collisions, bomb screen shake and DPI-aware rendering.",
      "Used a modular architecture: index.html as the DOM wrapper, state router and orchestrator; style.css for a custom responsive dark-mode glassmorphism UI that works on desktop and in a smartphone bezel; game.js for the canvas physics, collision and particle loops; audio.js for the Web Audio synthesizer; and rewards.js for the interactive canvas scratch-and-win card that reveals coupons \u2014 the piece that maps directly onto a gamification platform distributing rewards to drive engagement.",
      "Treated QA as a shipping gate rather than post-launch cleanup \u2014 each of the six critical defects was reproduced, fixed and verified before submission: the master gain node instead of suspending the AudioContext, the 300x160 fallback with a reflow delay for the hidden scratch canvas, the roundRect polyfill for older devices, confetti re-parented out of the clipping modal, transition removed so the coating resets instantly, and state-guarded rendering with a frozen backdrop.",
    ],
    learnings: [
      "A high-performance HTML5 game lives or dies on its loop: 60 FPS through requestAnimationFrame with delta-time-safe stepping, input smoothed by lerp glide physics rather than direct assignment, power-ups computed as real vectors (the magnet's radial pull), and a frenzy-mode difficulty curve that increases spawn frequency and fall speed \u2014 that progression is the addictive hook.",
      "Web Audio synthesis buys zero-latency, asset-free effects and looping chiptune BGM from oscillators alone. Mute by ramping a masterVolumeNode's gain with setTargetAtTime, never by suspending the context: suspension freezes the audio clock, queued notes burst on resume, and iOS Safari can fail to resume entirely. Pair it with devicePixelRatio scaling to keep vector visuals crisp on Retina screens.",
      "Calling a game production-grade means surviving a QA audit: six real defects \u2014 the audio freeze and burst, a 0x0 NaN scratch canvas needing a reflow-delayed fallback, roundRect compatibility, confetti clipped by its parent modal, a flash-on-reset coupon leak and a jarring state transition. The commercial part matters equally: the Claim Reward scratch card that clears 50% and explodes into confetti is the conversion funnel, not a decoration.",
    ],
    imageGradient: "from-slate-900 via-blue-950 to-slate-900",
  },
  {
    title: "Legal Docs Summarization (XYGen.ai)",
    shortTitle: "Legal Docs AI",
    description:
      "Internal AI pipeline for legal documents at XYGen.ai \u2014 automated summarization, LLM-based extraction, and validation layers that keep summaries accurate.",
    longDescription:
      "An internal tool built at XYGen.ai to streamline legal document workflows. Documents go through automated summarization and LLM-based extraction on OpenAI APIs, with validation layers that check summary accuracy before anything is returned \u2014 in legal work a wrong summary is worse than no summary, so validation is part of the pipeline rather than an afterthought. The architecture is modular, so new document types can be added without rewriting the extraction path.",
    technologies: ["Next.js", "Node.js", "OpenAI APIs", "TypeScript", "LLM Integration", "PostgreSQL"],
    categories: ["AI", "Machine Learning", "Backend"],
    githubUrl: "https://github.com/Inkithai",
    liveUrl: null,
    featured: false,
    isSelectedWork: false,
    outcome: "Automated legal summarization with validation for accuracy, built as a modular internal pipeline at XYGen.ai.",
    challenges: [
      "Built accurate document summarization for legal content at XYGen.ai",
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
    imageGradient: "from-zinc-800 via-slate-700 to-slate-900",
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
    link: "https://medium.com/@inkithai/from-idea-to-award-stage-my-thalir-seed-funding-journey-74f8849225ec",
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
