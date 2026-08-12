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
      "Developed and deployed production-ready AI products under WIS Sri Lanka, including EduFlow (AI LMS) and Drafty.AI (AI Email Automation).",
    achievements: [
      {
        title: "EduFlow — AI-Powered Learning Management System",
        description:
          "Developed and deployed a production-ready LMS with AI-powered learning and assessment capabilities, intelligent tutoring, voice assistant with OCR fallback, and multi-LLM document extraction pipelines.",
        bullets: [
          "Developed and deployed a **production-ready LMS** with AI-powered learning and assessment capabilities.",
          "Built an **AI voice assistant** supporting contextual question answering, OCR fallback, and Google Text-to-Speech.",
          "Developed AI-based **assessment and adaptive MCQ generation** using PDF/PPT document extraction.",
          "Implemented an **intelligent tutoring system** with real-time learner feedback.",
          "Built document-processing pipelines for **PDF, PowerPoint, OCR, text extraction, and AI reasoning**.",
          "Integrated multiple LLM providers including **OpenAI, Gemini, and OpenRouter**, with provider fallback logic.",
        ],
        technologies: [
          "React",
          "Node.js",
          "OpenAI",
          "Gemini",
          "OpenRouter",
          "Tesseract.js",
          "Google TTS",
          "PDF/PPT Extraction",
        ],
        impact:
          "Deployed a production LMS featuring multi-LLM pipelines with provider fallback logic, adaptive assessments, and real-time AI tutoring.",
      },
      {
        title: "Drafty.AI — AI Email Automation Platform",
        description:
          "Built a real-time voice-to-email dictation module, integrated Gemini for email summarization and content generation, developed email classification with confidence scoring, and integrated Google Calendar API.",
        bullets: [
          "Built a real-time **voice-to-email dictation** module.",
          "Integrated **Gemini** for email summarization and AI-powered content generation.",
          "Developed an email filtering and classification system using **classification labels and confidence scoring**.",
          "Integrated **Google Calendar API** for scheduling and meeting automation.",
        ],
        technologies: [
          "Next.js",
          "Gemini API",
          "Google Calendar API",
          "Voice Dictation",
          "Node.js",
          "TypeScript",
        ],
        impact:
          "Delivered intelligent email automation with voice dictation, smart classification, and Google Calendar scheduling automation.",
      },
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
    title: "Draftlee — AI Email Assistant (Mortgage AI Toolkit)",
    shortTitle: "Draftlee",
    description:
      "Work project at WIS Sri Lanka — AI email assistant for mortgage industry. Reads incoming emails, drafts replies in your writing style, automates replies/forwarding/summaries/reminders. Voice email drafting, newsletter creation, FCA compliance, works inside existing inbox.",
    longDescription:
      "Draftlee is a production AI-powered email assistant built for mortgage professionals at Mortgage AI Toolkit (WIS Sri Lanka). It understands incoming emails, drafts responses in your own writing style, and can automatically reply, forward messages, or attach relevant documents when required. Features: Newsletter Creation (professional newsletters quickly), Voice Assistant (voice commands to manage emails), AI Voice Email Drafting (speak → well-structured professional email in seconds), Email Summary (long emails summarized), Automatic Meeting Reminders (day in advance). Flow: Email detected → Response generated in your style → Intelligent automation (auto-reply/forward/enhance with attachments) → Send with confidence — review or allow auto-send when confidence high, FCA compliant. Built with FCA compliance in mind, learns your writing style, works inside existing inbox. See live product at https://www.mortgageaitoolkit.com/products/draftlee — work project, no public code shareable due to company IP.",
    technologies: [
      "Next.js",
      "Gemini API",
      "OpenAI",
      "Voice-to-Email",
      "Gmail API",
      "Google Calendar API",
      "FCA Compliance",
      "Newsletter Engine",
      "TypeScript",
      "Node.js",
    ],
    categories: ["Full Stack", "AI", "Other"],
    githubUrl: "https://www.mortgageaitoolkit.com/products/draftlee",
    liveUrl: "https://www.mortgageaitoolkit.com/products/draftlee",
    featured: true,
    isSelectedWork: true,
    isWorkProject: true,
    company: "WIS Sri Lanka (Mortgage AI Toolkit)",
    workType: "wis-sri-lanka",
    outcome:
      "Shipped production email automation used by mortgage brokers — voice dictation, AI summaries, auto-forwarding, FCA-compliant drafts, newsletter creation",
    challenges: [
      "Learned user's writing style from past emails — tone, formality, phrases — to generate authentic replies",
      "Built FCA-compliant drafting with disclaimers, documentation, regulatory requirements for mortgage industry",
      "Implemented voice-to-email dictation with low latency + newsletter creation + meeting reminders automation",
      "Integrated with existing inbox — Gmail-like filtering with classification and confidence scoring",
    ],
    decisions: [
      "Chose multi-LLM approach with Gemini for summarization (multilingual) + writing-style adaptation",
      "Implemented confidence scoring to allow auto-send when high confidence, review when low — FCA safe",
      "Designed 4-step flow: Email detected → response generated → intelligent automation → send with confidence",
    ],
    learnings: [
      "Work projects in regulated industries require compliance by design — FCA considerations shape AI decisions",
      "Writing-style learning needs careful analysis of past emails + progressive improvement",
      "Email automation ROI is highest when it handles summaries, reminders, newsletters, not just replies",
    ],
    imageGradient: "from-slate-800 via-slate-700 to-blue-900",
  },
  {
    title: "EduFlow — AI Training & CPD Tracking (Mortgage AI Toolkit)",
    shortTitle: "EduFlow",
    description:
      "Work project at WIS Sri Lanka — AI-powered training with CPD tracking for mortgage teams. Mortgage-specific courses, automatic CPD logging, audit-ready compliance reporting, certification management.",
    longDescription:
      "EduFlow is an AI-powered training platform designed for mortgage professionals at Mortgage AI Toolkit (WIS Sri Lanka). It provides mortgage-specific training content, automatic CPD tracking, and certification management so teams stay compliant and skilled. Flow: Assign training → Team completes courses (learning tracked, CPD hours logged automatically) → Compliance reporting (reports and certificates for audits and FCA). Powerful features: Mortgage-Specific Training (courses designed for brokers/advisors), CPD Tracking (automatic hour logging + compliance reporting), Certification Management (track completions/certificates/renewal deadlines), Team Progress (see who completed, who needs catch-up). Built FCA compliant — training records, CPD evidence, certification data stored and reported for regulatory audits. See live product at https://www.mortgageaitoolkit.com/products/eduflow — work project, no public code.",
    technologies: [
      "React",
      "Node.js",
      "OpenAI",
      "Gemini",
      "Tesseract.js",
      "Google TTS",
      "CPD Engine",
      "FCA Compliance",
      "Supabase",
    ],
    categories: ["Full Stack", "AI", "Machine Learning"],
    githubUrl: "https://www.mortgageaitoolkit.com/products/eduflow",
    liveUrl: "https://www.mortgageaitoolkit.com/products/eduflow",
    featured: true,
    isSelectedWork: true,
    isWorkProject: true,
    company: "WIS Sri Lanka (Mortgage AI Toolkit)",
    workType: "wis-sri-lanka",
    outcome: "Shipped production CPD tracking with FCA-ready reporting — mortgage-specific training content, team progress, certification renewal",
    challenges: [
      "Designed mortgage-specific training content for brokers/advisors with compliance requirements",
      "Implemented automatic CPD hour logging and audit-ready reporting for FCA",
      "Built certification management tracking completions, certificates, renewal deadlines",
      "Created team progress visibility — who completed, who needs catch-up",
    ],
    decisions: [
      "Chose AI-powered training content generation + human-curated mortgage compliance curriculum",
      "Implemented automatic CPD logging to reduce manual tracking overhead for teams",
      "Built reporting module with certificates for audits and FCA requirements",
    ],
    learnings: [
      "Compliance products need clear audit trails — reports and certificates must be audit-ready",
      "Training platforms require balancing AI content generation with curated domain accuracy",
      "CPD tracking automatic logging significantly reduces admin burden for mortgage firms",
    ],
    imageGradient: "from-slate-800 via-blue-950 to-slate-900",
  },

  // === S-TIER PORTFOLIO — Strongest engineering ===
  {
    title: "YGC — Your Guided Care: Medical Report Intelligence",
    shortTitle: "YGC",
    description:
      "S-Tier: Full-stack medical-report platform. Upload lab PDFs/prescriptions/scans → extract structured facts with page/line/snippet provenance → deterministic safety checks (drug-drug, allergy, dose renal bands, drug-lab, lab risk, trends, prompt-injection defence) → grounded Q&A citing page. 26k lines Python + 589 tests, single Mongo after SQLite removal.",
    longDescription:
      "YGC is a three-service clinical system: Browser React Vite dashboard → Node Express backend :4000 JWT auth rate limits CORS users/sessions/2FA report metadata chat proxy demo synthetic → RAG FastAPI :8000 OCR parser (pdfplumber/PyMuPDF/EasyOCR/Tesseract/TrOCR/vision-LLM fallback) + Rules engine (drug-drug curated+RxNav+openFDA, allergy cross-reactivity, duplicate same-class, dose limits adult/elderly/pediatric renal eGFR bands, drug-lab contradictions metformin+creatinine ARB+hyperkalemia, lab risk reference-range critical, longitudinal unit-normalised slope range-crossing, prompt-injection stripping) + Intent templates Groq + Validator + Memory health profile → MongoDB single source users reports chats labs meds allergies pages issue flags memory. LLM is explanation layer only never invents lab value diagnosis. 110 curated lab templates, intent state machine pronoun resolution not chat-memory guessing, self-consistency called twice divergence lowers confidence hard cap LLM ≤60% deterministic/crisis own bounds, if Groq missing degrades templates never empty. Demo mode /demo no account no MongoDB 7 synthetic patients warfarin bleed penicillin allergy renal metformin hyperkalemia ARB mixed-unit glucose no-hallucination troponin prompt injection. Timeline drift markers sparkline auto-built health profile trends+risk no inferred diagnoses click-to-verify citations PDF.js snippet highlight human correction audit trail sync-audit resync clean orphaned stale clinician-review curated safety tables account email verification password reset optional TOTP 2FA session list data export account delete PDF medical-history export. 589 Python tests pass offline mongomock, conftest auto Mongo handle, test_storage_architecture enforces no import sqlite3 no .db file stray caught 2, demo harness measure latency seed dataset, competition dataset 7 patients case.json pdf/txt.",
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
      "High-complexity AI Systems: 26k Python lines, 589 tests, deterministic safety 0% LLM, hallucination-resistant chat 60% cap, 7 synthetic judge patients proving no-hallucination + prompt-injection defence, single Mongo after -1360 lines refactor",
    challenges: [
      "Multi-engine extraction pdfplumber/PyMuPDF/EasyOCR/Tesseract/TrOCR/vision-LLM fallback each fact keeps page line snippet provenance unreadable flagged not guessed engine disagreement marked uncorroborated requires human verification",
      "Deterministic safety 0% LLM curated tables + RxNav/openFDA allergy cross-reactivity duplicate same-class dose renal eGFR bands drug-lab lab risk longitudinal unit-normalised prompt-injection stripping",
      "Grounded chat LLM explanation only never invents lab value 110 templates intent state machine pronoun resolution self-consistency twice divergence lowers confidence hard cap 60% degradation to templates when Groq missing never empty",
      "Single Mongo source after removing SQLite dual-store hazard that caused real bug class and hid others — refactored -1360 lines, extracted 10 pure DB-agnostic summary views, rewrote memory_engine 643→300 lines, dropped corrupted sqlite3 connect integrity, enforced no import sqlite3 test_storage_architecture",
    ],
    decisions: [
      "Chose 3-service topology Browser → Node Express proxy (auth rate limit CORS users report metadata chat proxy demo) → FastAPI RAG (OCR parser Rules Intent templates Groq Validator Memory) → Mongo single store — browser talks only Node, Node proxies x-internal-api-key to FastAPI, both write same Mongo, no SQLite",
      "Implemented zero-hallucination principle: uploaded docs + curated KB signed + RxNav/openFDA/Medline → Facts DB Mongo → Rules engine 0% LLM → LLM explanation layer only with self-consistency fact validator confidence cap 60% + click-to-verify citations PDF.js snippet highlight + human correction audit trail + sync-audit page",
      "Used mongomock automatic handle TEST_MONGO_URI or mongomock so suite runs offline, demo mode /demo no account no MongoDB scenario loader, medlineplus_cache collection TTL index public reference only never patient, clinical_sync_events collection audit/retry value",
    ],
    learnings: [
      "Clinical safety must be deterministic 0% LLM — curated tables + cross-reactivity matrix + renal bands + unit normalization cannot rely on LLM inventing values",
      "Dual-store SQLite+Mongo caused real class of bugs hid others only one backend exercised — single source of truth Mongo removed 1360 lines and enforced via test_storage_architecture no sqlite3 import no .db file",
      "Hallucination mitigation requires multiple layers: multi-engine cross-check → uncorroborated flag → self-consistency twice → fact validator → confidence cap 60% → graceful degradation templates → click-to-verify citations → human correction audit trail",
    ],
    imageGradient: "from-zinc-800 via-slate-800 to-blue-950",
  },
  {
    title: "Oyster360 — Multi-tenant Mushroom Farm SaaS",
    shortTitle: "Oyster360",
    description:
      "S-Tier: AI-powered multi-tenant farm management SaaS — cultivation operations, environmental records, inventory IN/OUT/ADJUSTMENT, purchasing, harvest grading, analytics, AI assistance, subscription billing, platform admin. Modular monolith FastAPI + Next.js 16, 27 models, 24 routers, 28 services, tenant middleware/enforcer, RBAC 4 roles, MFA TOTP, Stripe billing idempotent webhooks, Celery Redis, Docker multi-stage GH Actions.",
    longDescription:
      "Oyster360 combines cultivation operations, environmental records, inventory, purchasing, harvest quality, analytics, AI assistance, subscription billing, platform administration in one SaaS app. Each farm operates inside isolated organization, API authorization enforced by both role and tenant. Features: org/farm onboarding registration multi-stage batch lifecycle preparation inoculation colonization fruiting harvest completion room grow-space strain catalogue metadata versioned substrate recipes performance growth logs health scores images timelines environmental temp humidity CO2 harvest recording grading quality scores revenue; inventory tenant-isolated items stock IN OUT ADJUSTMENT low-stock reorder thresholds tenant-isolated suppliers purchase orders line items totals expected dates status; AI analytics rule-based assistant works without AI key optional external provider RAG user knowledge docs image inspection contamination findings yield prediction expected harvest estimates farm dashboards production success rate environment strains recipes SaaS analytics growth revenue retention usage AI activity; auth security JWT access rotating refresh revocation logout/change/reset separate email-verification password-reset Argon2 MFA TOTP QR RBAC ADMIN FARM_MANAGER WORKER VIEWER org-level query enforcement tenant-owned resources parent verification rate limiting request IDs CORS security headers audit-log feature-flag GDPR export deletion billing server-controlled Stripe price IDs preventing client substitution verified webhooks idempotent sync subscription lifecycle cancellation-at-period-end admin SaaS analytics; background Redis cache Celery workers Beat scheduled background email AI-analysis token-cleanup reports Alembic migrations multi-stage non-root Docker images Compose frontend API Postgres Redis migration worker scheduler GH Actions backend frontend docker security scanning. Architecture: modular monolith independently deployable frontend/backend containers domain-separated API service schema persistence sharing Postgres+Redis 24 API router modules 27 model modules 28 service modules 28 App Router pages. Request flow: browser relative /api → Next.js proxy BACKEND_URL → FastAPI Pydantic validates → auth deps decode JWT load user enforce role resolve org → domain services tenant-scoped SQLAlchemy queries → Postgres operational Redis cache Celery transport long-running Celery outside API request. Data/security boundaries organization_id primary tenant boundary parent verified before nested inspections logs grades AI operations frontend role guard but backend authoritative Stripe webhook signature verified RAG restricted to authenticated user docs. Patterns: Repository services DI Depends Abstract Factory AIProvider→OpenAI/Gemini/RuleBased DTO Pydantic schemas. Frontend Next.js16 App Router TanStack Query server state Zustand client React Hook Form Zod Radix UI Chart.js Vitest Testing Library Playwright ESLint. Backend FastAPI Pydantic v2 SQLAlchemy2 Alembic Postgres16+pgvector PyJWT Argon2 Stripe Redis Celery. 190 files 11k lines, 12 test files conftest test_ai auth batches billing integration model_imports registry multi_tenant organizations recipes tenant_enforcement. Docker Compose core web stack Postgres Redis backend frontend migration alembic upgrade head front al build Start Next.js --profile workers Celery.",
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
      "Most production-ready SaaS: 27 models 24 routers 28 services 28 pages, tenant middleware/enforcer, RBAC 4 roles, MFA TOTP, Stripe server-controlled price IDs verified webhooks idempotent sync, Celery Redis, Docker multi-stage non-root, GH Actions, health ready live celery-status",
    challenges: [
      "Implemented organization_id primary tenant boundary tenant_middleware tenant_enforcer tenant_decorators tenant_scope base_tenant_service tenant_repository parent verification before nested inspections logs grades AI operations — organization-level query enforcement across tenant-owned resources",
      "Built auth security JWT access rotating refresh revocation logout password change reset separate email-verification password-reset token flows Argon2 MFA TOTP QR RBAC 4 roles rate limiting 100/min IP in-memory request ID uuid security headers nosniff DENY block strict-origin Permissions Policy HSTS CSP audit-log feature-flag GDPR export deletion",
      "Designed billing Stripe customer checkout server-controlled price IDs preventing client plan/price substitution verified Stripe webhooks idempotent subscription synchronization lifecycle states cancellation-at-period-end admin SaaS analytics growth revenue retention usage AI activity",
      "Created AI provider abstract factory OpenAIProvider GeminiProvider RuleBasedProvider fallback rule-based works without AI key RAG retrieval restricted to authenticated user docs image inspection contamination findings yield prediction expected harvest farm dashboards production success rate SaaS analytics",
    ],
    decisions: [
      "Chose modular monolith independently deployable frontend/backend containers sharing Postgres+Redis over microservices — domain-separated API service schema persistence 24 routers 27 models 28 services 28 pages Repository pattern services DI Depends Abstract Factory AI DTO Pydantic schemas",
      "Used Argon2 password hashing vs bcrypt for stronger memory-hard security, rotating refresh revocation on logout/change/reset, MFA TOTP QR codes, rate limiting request IDs CORS security headers audit-log feature-flag, Stripe webhook signature verification idempotent sync non-root Docker images Alembic migrations readiness /ready SELECT 1 liveness /live health celery-status",
      "Implemented tenant middleware + enforcer + scope + base service + repository pattern — parent resources verified before nested resources such as inspections logs grades AI operations, frontend role guard improves navigation but backend remains authoritative security boundary, RAG retrieval restricted to documents owned by authenticated user",
    ],
    learnings: [
      "Multi-tenant SaaS requires organization_id as primary boundary everywhere — parent verification before nested, global scope enforcement, repository/service enforcement, database isolation, authorization boundaries, tenant-aware queries all layers",
      "Production SaaS billing needs server-controlled price IDs preventing client substitution + webhook signature verification + idempotent sync + lifecycle states cancellation-at-period-end + GDPR export/deletion + retention + SaaS analytics — not just checkout",
      "AI layer should work without external key via RuleBased fallback — abstract provider pattern OpenAI/Gemini/RuleBased provides resilience cost optimization, RAG restricted to user-owned docs prevents cross-tenant leakage",
    ],
    imageGradient: "from-slate-900 via-slate-800 to-blue-900",
  },

  // === A-TIER ===
  {
    title: "MediMind — Anonymous Medical Intelligence",
    shortTitle: "MediMind",
    description:
      "A-Tier: Anonymous workspace medical doc intelligence — private session_id localStorage no signup, LLM provider abstraction Groq GPT-OSS 120B+Qwen 27B vision OR Gemini 3.6 Flash multimodal structured JSON, Supabase RLS service_role only, Cloudinary per user, lab trends deterministic engine, vector_store abstraction Chroma vs Supabase chunks, jobs thread-safe queued→reading→extracting→saving→ready, conversation query rewrite.",
    longDescription:
      "MediMind converts private medical files into navigatable timeline safety checks lab trend grounded Q&A. All lives inside private anonymous workspace no signup no password just session_id stored locally browser. Pipeline: Original file PDF/JPG → Extraction LLM_PROVIDER Groq GPT-OSS 120B + Qwen3.6 27B vision or Gemini 3.6 Flash multimodal structured JSON → Supabase JSON documents+patient_snapshots + Cloudinary file mediscan/<user_id>/ → Timeline visits meds labs allergies → Safety check lab trends vector store Chroma local or Supabase chunks → RAG Q&A conversations query rewrite → JSON answer with citations. One browser one isolated patient view scoping user_id issued POST /api/v1/anonymous/session. LLM Provider Groq or Gemini all OpenAI SDK only base_url/api_key/model differ select LLM_PROVIDER default groq. Vision+text same Gemini model Groq needs two OpenAI-compatible retry ladder strict json_schema→json_object→plain text <think> stripping tolerant parser token budgets rate-limit caps provider-aware GEMINI_MAX_TOKENS. Backend modules medical_extractor LLM_PROVIDER layer vision/text extraction patient grouping timeline safety LLM plus deterministic duplicate detection CLI persistence, document_filter fast post-extraction filter non-medical no extra LLM reuses document_type clinical fields, lab_trends pure Python trend engine parses dates/values computes direction detects range crossings flags approaching thresholds, retrieval chunks timeline Medication/Lab/ClinicalNote/Allergy texts embeds OpenAI text-embedding-3-small if set else local ONNX MiniLM indexes via vector_store abstraction single-shot Q&A, vector_store Abstraction over Chroma VECTOR_STORE=chroma local CHROMA_DIR vs Supabase chunks table VECTOR_STORE=supabase brute-force cosine no volume Railway recommended, jobs Thread-safe parent jobs independent per-file progress queued→reading→extracting→saving→ready/failed optional Supabase persistence, conversation In-memory store rewrites follow-ups like was that safe into self-contained retrieval queries summarizes older turns bounded context, api FastAPI lifespan startup CORS fixed *+credentials handling all /api/v1/ routes multipart upload handling sync201 async202 via USE_BACKGROUND_JOBS/?async merges new docs old fixes _source.file original filename, auth Validates Authorization Bearer JWT + X-User-Id plus issues anonymous JWTs via issue_anonymous_token, db Supabase Postgres persistence documents append-only patient snapshot upsert chained order uploaded_at order id, storage Uploads original file to Cloudinary mediscan/<user_id>/, supabase_schema.sql One-time table creation RLS enabled/no policies only service_role can access, inspect_chroma CLI list collections inspect chunks. Frontend React+TS Vite Tailwind zero-login anonymous model Landing / hero anonymous session Start My Health Record auto-creates workspace token localStorage.medimind.session.v1 Overview Dashboard docs/meds/labs/safety counts latest warnings recent history pipeline hint Upload drag-drop dedup name-size-lastModified shows each doc independent queue/read/extract/save then clearly separates one-time record finalization history→safety→search Documents list DocumentViewer Original iframe/img via Cloudinary split? fixes PDF query-param urls vs Structured tabs History year-grouped timeline 2026→Jul20 Blood Test etc full TimelineView Medicines current per ingredient most recent historical log table filterable source file traceable fixed original filename not temp sanitized path Test Results Lab Trends per-test direction flag sequence crossing point approaching-threshold badge SVG sparkline reference band robust parsing 70-99 mg/dL Safety allergy conflicts danger interactions severity dosage conflicts duplicates overall recommendation Ask single-shot RAG configurable top_k confidence sources recommend_professional_consult Conversations multi-turn query rewriting rewritten_query session resume by ID 404 handling when in-memory session expired after restart. Embeddings fallback chain Groq/Gemini have no embeddings API OpenAI text-embedding-3-small if OPENAI_API_KEY else Chroma ONNXMiniLM_L6_V2 If switch embedding backends delete chroma_db re-upload If switch LLM_PROVIDER no code change env restart. Supabase one-time setup Project URL service_role key. Anonymous session design Open App → Create Anonymous Session UUID Store localStorage → Upload → Process → Timeline/Medicines/Safety/Ask. Frontend never asks JWT calls POST /api/v1/anonymous/session → user_id token session_id Token. States distinguished loading empty 404 no record 401 auth 422 validation non-medical 502 ML pipeline network/CORS.",
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
      "Privacy-first anonymous workspace — no signup, session_id localStorage, Supabase RLS service_role only, Cloudinary per user isolated, LLM provider abstraction Groq/Gemini/generic retry ladder, embeddings fallback OpenAI→ONNX, vector_store Chroma vs Supabase, jobs thread-safe, query rewrite",
    challenges: [
      "Built anonymous workspace privacy one browser one isolated patient view scoping user_id via POST /api/v1/anonymous/session JWT anonymous token localStorage no signup password reduces attack surface Supabase RLS enabled/no policies service_role only",
      "Created LLM provider abstraction all via OpenAI SDK only base_url/api_key/model differ Groq GPT-OSS120B+Qwen27B vision vs Gemini 3.6 Flash multimodal generic Cerebras OpenRouter retry ladder strict json_schema→json_object→plain text <think> stripping tolerant parser token budgets rate-limit caps provider-aware",
      "Implemented vector_store abstraction Chroma VECTOR_STORE=chroma local CHROMA_DIR vs Supabase chunks table VECTOR_STORE=supabase brute-force cosine no volume Railway recommended embeddings fallback OpenAI text-embedding-3-small else local ONNX MiniLM switch embedding delete chroma_db re-upload",
      "Designed thread-safe parent jobs independent per-file progress queued→reading→extracting→saving→ready/failed optional Supabase persistence conversation in-memory query rewriting follow-ups self-contained retrieval queries bounded summarization session resume ID 404 handling after restart lab_trends pure Python direction crossing approaching thresholds SVG sparkline reference band",
    ],
    decisions: [
      "Chose anonymous JWT session_id localStorage.medimind.session.v1 no signup vs traditional account — tradeoffs privacy security Supabase RLS service_role only Cloudinary mediscan/<user>/ isolated CORS fix *+credentials JWT_SECRET random no password signup reduces attack surface document_filter fast non-medical no extra LLM",
      "Used OpenAI SDK base_url switch for all providers Groq Gemini generic — only base_url/api_key/model differ env only no code change restart vision+text same Gemini model Groq needs two OpenAI-compatible retry ladder <think> stripping tolerant parser provider-aware token budgets rate-limit caps GEMINI_MAX_TOKENS",
      "Selected vector_store abstraction Chroma local vs Supabase chunks brute-force cosine — Chroma local CHROMA_DIR override to /data/chroma_db on Railway volume vs Supabase supabase no volume recommended Railway UPLOAD_FILE_CONCURRENCY shared worker limit provider quota CORS_ORIGINS Embeddings fallback chain Groq/Gemini have no embeddings API",
    ],
    learnings: [
      "Anonymous workspace privacy one browser one isolated patient view reduces signup friction but requires careful session_id localStorage token handling Supabase RLS service_role only Cloudinary per user isolation",
      "LLM provider abstraction via OpenAI SDK base_url switch allows env-only provider switch no code change — Groq vs Gemini vs generic Cerebras OpenRouter OpenAI custom retry ladder strict json_schema→json_object→plain text works across providers",
      "Vector store abstraction Chroma vs Supabase chunks deterministic IDs overwrite not duplicate re-indexing safe jobs thread-safe per-file progress queued→reading→extracting→saving→ready fixes _source.file original filename not temp sanitized path lab_trends deterministic pure Python direction crossing approaching threshold SVG sparkline reference band robust parsing 70-99 mg/dL",
    ],
    imageGradient: "from-slate-800 via-blue-900 to-slate-900",
  },
  {
    title: "BookWise — Multi-tenant Accounting SaaS",
    shortTitle: "BookWise",
    description:
      "A-Tier: Comprehensive accounting SaaS for Sri Lankan SMBs — double-entry bookkeeping, Chart of Accounts, Journal Entries, live balances balanced postings guarantee, Trial Balance/P&L/Balance Sheet/Cash Flow computed on fly, Banking LKR deposits/withdrawals reconciliation, AP vendors bills, Expenses. Laravel 12 nwidart/modules 14 modules, row-level tenant scoping host_id global scope.",
    longDescription:
      "BookWise is multi-tenant Accounting & Bookkeeping platform for Sri Lankan SMBs built Laravel 12 nwidart/modules backend and Next.js 16 frontend. Overview double-entry general ledger Chart of Accounts Journal Entries live account balances balanced postings guarantee Banking bank/cash accounts LKR deposits withdrawals reconciliation each movement posted ledger Accounts Payable vendors supplier bills payments Expenses categorised overhead capture Financial statements Trial Balance Profit & Loss Balance Sheet Cash Flow computed from posted entries Invoicing→ledger invoices post AR receipts ledger idempotently Row-level multi-tenancy every record scoped to organisation host_id via global Eloquent scope hard tenant boundary. Architecture design decisions Multi-tenancy model row-level tenant scoping shared database enforced global Eloquent scope keyed host_id Existing non-accounting modules Repurposed CRM clients→customers/vendors invoices→AR unrelated modules left intact later cleanup Scope Full double-entry core Chart Accounts Journal Entries General Ledger Bank/Cash Bills AP Expenses Reconciliation four core financial statements tenant-scoped invoices wired ledger. Tenant model organization SMB represented hosts row every accounting table carries host_id column applies global scope request can only ever read/write own org data TenantManager resolves/stores active tenant request lifetime Super-admins may impersonate tenant via X-Host-Id header ResolveTenant registered auth.verified middleware group bootstrap/app.php TenantScoped applied every tenant-aware model adds global scope where host_id=TenantManager::id() auto-stamps host_id on create hard-requires host_id outside console OwnerTrait stamps created_by updated_by. Module map Accounting Double-entry core accounts Chart Accounts journal_entries journal_entry_lines fiscal_years accounting_settings Banking Bank/cash+reconciliation bank_accounts bank_transactions Purchases AP vendors bills bill_items bill_payments Expenses Overheads expense_categories expenses Invoice AR invoices link journal_entries via journal_entry_id All modules follow repository+service+form-request+resource+API controller pattern. Double-entry mechanics journal entry journal_entries+journal_entry_lines atomic unit ≥2 lines either debit or credit against CoA node JournalService owns lifecycle draft→posted→(reversed) Posting only moment account balances change guarded balanced check Σdebit==Σcredit unbalanced entry cannot post AccountBalanceService maintains each account running balance. Financial statements all computed on-the-fly from posted entries Trial Balance GET /api/v1/admin/accounting/reports/trial-balance Profit & Loss profit-loss Balance Sheet balance-sheet Cash Flow cash-flow. Frontend Next.js16 App Router React19 Redux Toolkit shadcn/ui Radix Tailwind4 teal primary recharts financial charts Key pages landing marketing dashboard financial overview accounting workspace invoices invoice clients Client management Frontend localized Sri Lanka Currency LKR Rs Rupee Timezone Asia/Colombo UTC+5:30 Date format DD/MM/YYYY Locale en_LK. Backend artisan key:generate passport:keys composer install migrate creates accounting module tables accounting:seed-defaults host_id provision tenant books invoice:sync-ledger host_id? back-post existing invoices test Feature AccountingLedgerTest.php serve port 8001 Frontend fe .env.local NEXT_PUBLIC_API_BASE_URL http://localhost:8001/api npm install dev localhost:3000 accounting workspace /accounting talks backend via accounting.service.ts Tech stack Backend Laravel12 nwidart/laravel-modules Passport/Sanctum spatie/laravel-permission Stripe dompdf DataTables l5-swagger Frontend Next.js16 App Router React19 Redux Toolkit shadcn/ui Radix Stripe recharts Env DB CONNECTION HOST DATABASE USERNAME PASSWORD AUTH PASSPORT PRIVATE PUBLIC KEY Optional STRIPE GOOGLE ADS GOOGLE CLIENT ID SECRET NEXT PUBLIC GOOGLE ADS ID Roadmap Schema-per-tenant isolation Multi-currency beyond LKR Fixed-asset depreciation Full bank-feed reconciliation UI Mobile React Native Tax reporting Sri Lankan VAT/SRL. 14 modules Accounting AdminAnalytics Analytics Banking Common CustomCRM Expenses GoogleAnalytics Invoice Purchases Role SuperAdmin SuperAdminAnalytics User. Accounting module Http Controllers API ChartOfAccountsController JournalEntryController ReportController Requests StoreAccountRequest StoreJournalEntryRequest UpdateAccountRequest Resources AccountResource JournalEntryLineResource JournalEntryResource Models Account AccountingSetting FiscalYear JournalEntry JournalEntryLine Providers AccountingServiceProvider EventServiceProvider RouteServiceProvider Repositories AccountInterface AccountRepository JournalEntryInterface JournalEntryRepository Services AccountBalanceService FinancialStatementService JournalService JournalServiceInterface Support SystemAccounts config config.php database migrations 2026_08_11_000001-000005 create accounting_settings fiscal_years accounts journal_entries journal_entry_lines seeders AccountingDatabaseSeeder routes api.php web.php. Frontend package bookwise version 0.1.0 private scripts dev next dev --turbopack build start lint overrides uuid 11.0.0 dependencies hookform/resolvers Radix accordion alert-dialog avatar checkbox collapsible dialog dropdown label popover radio scroll select separator slot switch tabs tooltip themes react-pdf renderer redux toolkit stripe tiptap core extension-image link placeholder table table-cell header row text-align underline react.",
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
      "Double-entry ledger balanced posting guarantee live balances financial statements computed on fly row-level tenant host_id global scope 14 Laravel modules repository service pattern invoice→ledger idempotent LKR localization Asia/Colombo",
    challenges: [
      "Implemented double-entry general ledger Chart of Accounts Journal Entries live account balances balanced postings guarantee JournalService lifecycle draft→posted→(reversed) posting only moment balances change guarded balanced check Σdebit==Σcredit unbalanced cannot post AccountBalanceService running balance",
      "Built financial statements Trial Balance Profit & Loss Balance Sheet Cash Flow computed on-the-fly from posted entries GET /api/v1/admin/accounting/reports/... Fiscal Year Accounting Setting 5 migrations AccountInterface AccountRepository JournalEntryInterface JournalEntryRepository",
      "Designed row-level multi-tenant architecture shared database global Eloquent scope TenantScoped trait where host_id=TenantManager::id() auto-stamps host_id create hard-requires host_id outside console OwnerTrait created_by updated_by TenantManager resolves active tenant Super-admins impersonate X-Host-Id header ResolveTenant middleware auth.verified bootstrap/app.php",
      "Integrated invoicing→ledger idempotent post AR receipts ledger idempotently artisan invoice:sync-ledger back-post existing accounting:seed-defaults provision tenant books Banking bank/cash LKR deposits withdrawals reconciliation each movement posted ledger AP vendors bills Expenses overheads",
    ],
    decisions: [
      "Chose Laravel 12 nwidart/modules modular monolith 14 modules repository service form-request resource API controller pattern — Accounting Banking Purchases Expenses Invoice etc Accounting double-entry core Bank cash reconciliation Purchases AP Expenses overheads Invoice AR link journal_entries via journal_entry_id",
      "Used row-level tenant scoping shared DB global Eloquent scope host_id TenantManager id auto-stamp hard-require outside console OwnerTrait Super-admins X-Host-Id impersonation ResolveTenant auth.verified group — tradeoffs vs schema-per-tenant isolation roadmap schema-per-tenant multi-currency fixed-asset depreciation bank-feed mobile tax VAT/SRL",
      "Implemented double-entry mechanics JournalService owns lifecycle draft→posted reversed Posting only moment balances change guarded balanced check Σdebit==Σcredit AccountBalanceService running balance FinancialStatementService Trial Balance P&L Balance Sheet Cash Flow computed on fly from posted entries not stored — performance caching future",
    ],
    learnings: [
      "Double-entry accounting requires balanced posting guarantee — Σdebit==Σcredit unbalanced cannot post posting only moment balances change running balance maintenance Financial statements on fly from posted entries",
      "Multi-tenant row-level shared DB global scope host_id TenantManager resolves/stores active tenant Super-admins impersonate X-Host-Id header ResolveTenant middleware auth.verified OwnerTrait created_by updated_by — hard-require outside console ensures isolation",
      "Modular monolith Laravel nwidart/modules 14 modules repository service pattern allows CRM clients→customers/vendors invoices→AR repurposing but unrelated modules left intact indicates tech debt for later cleanup LKR localization Asia/Colombo DD/MM/YYYY en_LK multi-currency beyond LKR roadmap",
    ],
    imageGradient: "from-zinc-800 via-slate-700 to-slate-900",
  },
  {
    title: "RouteIQ — Transit Telemetry SaaS",
    shortTitle: "RouteIQ",
    description:
      "A-Tier: Enterprise transit management real-time satellite tracking intelligent seat reservation. WebSocket Socket.IO zero-latency telemetry driver GPS broadcast lat/lng/km/h, CartoDB dark tiles, polyline corridors A1/E01/A3 distinct colors, 32-seat grid real-time lock per date, Stripe checkout, PWA offline vault IndexedDB sw.js, FCM proximity 2 stops, X-Tenant-Slug multi-tenant, Colombo 8 routes accurate GPS, trilingual en/si/ta LKR.",
    longDescription:
      "RouteIQ is enterprise-grade full-stack transit management real-time satellite vehicle tracking intelligent seat reservation SaaS-ready multi-tenant platform low-latency WebSocket coordinate streaming AI-driven traffic arrival estimation mobile driver location broadcasting Stripe card checkout PWA offline ticket vault storage storage. Sri Lanka Western Province Colombo focus Pre-seeded Colombo routes Colombo Fort ↔ Kandy Galle Negombo Matara Nuwara Eliya Jaffna Gampaha local Kadawatha corridor Real Colombo bus stops accurate GPS Fort Pettah Kadawatha Katunayake Airport Wellawatte Panadura Kalutara Galle Matara etc Multi-corridor map overlays A1 Highway E01 Southern Expressway A3 Negombo Road Southern coastal distinct color LKR pricing Sri Lankan phone +94 local operator trilingual i18n English si Sinhala ta Tamil bus registration WP-CA-1001 SP-GA-1501 realistic SLTB private operator route names distance/duration tuned local traffic conditions. Key features Real-Time Telemetry Driver GPS Broadcast Mode Zero-Latency Telemetry Bidirectional WebSocket Socket.IO HTML5 Geolocation Driver Mode Drivers toggle live tracking any mobile device streaming latitude longitude calculated speed km/h connected riders realtime Proximity Alerts Firebase Cloud Messaging FCM dispatching alerts when bus 2 stops away Dynamic Interactive Radar Maps CartoDB Dark Tiles Modern responsive dark-mode map tiles high visibility Route Polyline Overlay Dashed vector paths Leaflet <Polyline> displaying active transit corridors Bus Stop Markers Dynamic station markers displaying stop order names dynamic arrival tooltips Custom Marker Badges CSS HTML/SVG div icons live green status indicators AI Transit Intelligence Engine /api/ai Machine Learning ETA Regressor Computes travel times factoring urban traffic levels weather conditions rain storms Occupancy Demand Predictor Forecasts peak bus passenger load percentages crowd density categories Smart Passenger AI Chatbot Embedded floating assistant answering rider questions schedules fares delays Commercial Stripe Seat Booking System Interactive 32-Seat Grid Matrix Real-time seat lock state availability checking per travel date 256-Bit Encrypted Stripe Checkout Card intent processing via stripe integration PWA Offline Ticket Vault Service Worker caching sw.js IndexedDB local storage instant ticket verification without cellular connection SaaS Operations Analytics Multi-Tenancy Multi-Tenant Operator Headers Fleet partitioning X-Tenant-Slug headers Fleet Metrics Dashboard Aggregates average trip delays mins total fuel consumption Liters 4.2 km/L peak passenger hour density histograms. Architecture folder structure modular domain-driven repo backend src modules ai ETA regression occupancy forecasting chatbot auth JWT Access 15m Refresh Token 7d rotation analytics operational fleet KPI aggregations booking seat conflict locks reservation management bus CRUD GPS telemetry patch endpoints payment Stripe payment intent service route Waypoints transit stop definitions middleware Auth JWT TenantGuard RateLimiter ErrorHandler models Mongoose ODM User Bus Booking Organization services Firebase FCM proximity messaging tests Unit integration sanity tests Dockerfile Production Node Alpine container frontend public PWA Manifest sw.js Service Worker src components Driver tracking HUD BusMapPreview AI Chatbot Modal lib Auth storage Geo Haversine IndexedDB storage pages Admin Dashboard Live Tracking Customer Booking types TypeScript interface contracts Dockerfile Multi-stage Nginx builder container docker-compose.yml Full stack orchestration. Tech Stack Frontend React18 Vite5 Tailwind CSS v3 Lucide React Leaflet React-Leaflet Socket.IO Client Backend Node.js20 Express4.19 Mongoose ODM Socket.IO Server Helmet Express-Rate-Limit Zod Database MongoDB Atlas Local MongoDB Document Store DevOps PWA Multi-Stage Docker Docker Compose Service Workers IndexedDB GitHub Actions CI/CD. Quick Start Prerequisites Node v18 npm v9 MongoDB Connection URI Clone Repo Install backend frontend env PORT MONGO_URI JWT_SECRET JWT_REFRESH_SECRET ADMIN_SIGNUP_KEY FRONTEND_URL STRIPE_SECRET_KEY Frontend VITE_API_BASE_URL Seed Colombo Routes Buses npm run seed:colombo inserts 8 real Colombo transit routes Fort→Kandy Galle Negombo Matara Nuwara Eliya Jaffna Gampaha Kadawatha local accurate GPS waypoints 12 sample buses Sri Lankan registration numbers Run Dev Servers backend npm run dev frontend npm run dev Visit localhost:5173. Docker Deployment docker-compose up --build -d launch entire stack MongoDB+Express Backend+Nginx Static Frontend single command Access localhost. Testing QA audit npm test Backend Unit Tests frontend npm run lint ESLint Compile Production Asset Bundle build.",
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
      "Enterprise transit SaaS — WebSocket Socket.IO driver GPS broadcast, CartoDB dark tiles polyline corridors, 32-seat grid real-time lock, Stripe checkout, PWA offline vault, FCM proximity 2 stops, X-Tenant-Slug multi-tenant, Colombo 8 routes accurate GPS trilingual LKR trilingual",
    challenges: [
      "Implemented zero-latency telemetry bidirectional WebSocket Socket.IO HTML5 geolocation driver mode toggle mobile streaming lat lng speed km/h calculated real-time riders proximity Firebase FCM dispatching alerts when bus 2 stops away Geo Haversine library",
      "Built dynamic interactive radar maps CartoDB dark tiles high visibility route polyline dashed vector Leaflet Polyline active transit corridors bus stop markers stop order names arrival tooltips custom marker badges CSS HTML/SVG div icons live green status indicators multi-corridor overlays A1 Highway E01 Southern Expressway A3 Negombo Road Southern coastal distinct colors real Colombo bus stops accurate GPS Fort Pettah Kadawatha Katunayake Airport Wellawatte Panadura Kalutara Galle Matara",
      "Created AI transit intelligence /api/ai ML ETA regressor factoring urban traffic levels weather conditions rain storms occupancy demand predictor peak bus passenger load percentages crowd density categories smart passenger AI chatbot floating assistant schedules fares delays",
      "Designed commercial Stripe seat booking 32-seat grid matrix real-time seat lock state availability checking per travel date 256-bit encrypted Stripe checkout card intent processing PWA offline ticket vault ServiceWorker sw.js IndexedDB local storage instant ticket verification without cellular SaaS ops analytics multi-tenant operator headers X-Tenant-Slug fleet partitioning Organizations fleet metrics dashboard aggregates avg trip delays mins total fuel liters 4.2 km/L peak passenger hour density histograms trilingual i18n en si ta LKR pricing Sri Lankan phone +94 local operator bus registration WP-CA-1001 sltb private operator route names distance duration tuned local traffic",
    ],
    decisions: [
      "Chose Socket.IO Server/Client bidirectional WebSocket zero-latency telemetry HTML5 geolocation driver broadcast lat lng speed km/h + Firebase FCM proximity alerts 2 stops away + CartoDB dark tiles high visibility + Leaflet Polyline dashed vector + custom HTML/SVG div icons live green + multi-corridor overlays A1 E01 A3 distinct colors + Colombo 8 routes accurate GPS Fort Pettah Kadawatha Katunayake etc + 12 sample buses WP-CA SLTB private operator names distance duration tuned local traffic",
      "Used 32-seat grid matrix real-time seat lock state per travel date availability checking + 256-bit encrypted Stripe checkout card intent + PWA offline ticket vault ServiceWorker sw.js IndexedDB instant verification without cellular + SaaS ops multi-tenant X-Tenant-Slug header fleet partitioning Organization + fleet metrics avg delay fuel 4.2 km/L peak histogram",
      "Implemented modular DDD backend src modules ai ETA regression occupancy forecasting chatbot auth JWT access 15m refresh 7d rotation analytics operational fleet KPI booking seat conflict locks bus CRUD GPS telemetry patch payment Stripe intent route waypoints middleware Auth JWT TenantGuard RateLimiter ErrorHandler models Mongoose ODM User Bus Booking Organization services Firebase FCM proximity tests Dockerfile Alpine frontend PWA manifest sw.js components lib Auth Geo Haversine IndexedDB pages Admin Dashboard Live Tracking Customer Booking types TS interface contracts Dockerfile multi-stage Nginx builder docker-compose full stack Multi-Stage Docker Docker Compose Service Workers IndexedDB GitHub Actions CI/CD",
    ],
    learnings: [
      "Real-time transit needs zero-latency WebSocket bidirectional + HTML5 geolocation driver mode any mobile device streaming lat lng speed + Geo Haversine proximity 2 stops Firebase FCM dispatch + CartoDB dark tiles high visibility + polyline corridors distinct colors + custom div icons live green + accurate GPS real Colombo stops + multi-corridor overlays A1 E01 A3 + trilingual i18n en si ta + LKR +94 + bus registration WP-CA SLTB private operator names distance duration tuned local traffic",
      "Seat booking at scale requires 32-seat grid real-time lock per date availability checking + 256-bit Stripe checkout card intent + PWA offline ticket vault ServiceWorker sw.js IndexedDB instant verification without cellular + conflict handling race condition",
      "SaaS fleet partitioning X-Tenant-Slug header Organization model + fleet metrics avg delay fuel 4.2 km/L peak hour histogram + modular DDD ai auth analytics booking bus payment route middleware auth TenantGuard RateLimiter ErrorHandler Mongoose ODM Helmet RateLimit Zod MongoDB Atlas Local PWA Multi-Stage Docker Docker Compose Service Workers IndexedDB GitHub Actions — production containerized",
    ],
    imageGradient: "from-slate-800 via-blue-950 to-blue-900",
  },

  // === B-TIER + C-TIER — Supporting / More builds ===
  {
    title: "CRM System — Multi-tenant Django",
    shortTitle: "CRM System",
    description:
      "Multi-tenant CRM built with Django REST, React, PostgreSQL, and AWS S3. Organization subscription BASIC/PRO, Custom User org FK role ADMIN/MANAGER/STAFF, Company soft delete is_deleted, Contact unique_together company+email, ActivityLogMixin audit, S3 signed URLs, JWT 1h access 7d refresh.",
    longDescription:
      "A multi-tenant CRM system built with Django REST Framework, React, PostgreSQL, and AWS S3 integration. Organization name subscription_plan BASIC PRO created_at User AbstractUser organization FK role ADMIN MANAGER STAFF Company name industry country logo ImageField upload_to company_logos organization FK is_deleted soft delete created_at Contact full_name email phone role company FK related contacts organization FK is_deleted created_at unique_together company email ActivityLog user action CREATE UPDATE DELETE model_name object_id organization timestamp. API: Auth JWT Token Silent? accounts token, organizations CRUD, crm companies contacts CRUD companies/{id}/ contacts nested, activity-logs list read-only, users list create retrieve update delete. Query params page page_size search name email. Frontend pages Login Page /login JWT auth Dashboard / org overview Companies List /companies Browse search Company Detail /companies/:id View company nested contacts Create/Edit Company /companies/new /companies/:id/edit Contacts Management nested within company detail Activity Log /activity-log Audit trail viewer User Management administration. Security Authentication JWT tokens configurable expiration 1h access 7d refresh Tokens stored memory/context not localStorage security All protected endpoints require valid JWT Authorization Role-Based Access Control RBAC Admin Full CRUD Manager Create Read Update no delete Staff Create Read limited write Multi-Tenant Isolation Organization filtering enforced ViewSet level Custom permission classes validate organization membership Serializer-level validation prevents cross-organization data manipulation File Storage AWS S3 signed URLs not public access Temporary secure links file access No hardcoded AWS credentials IAM-based Environment Security .env files ignored git .env.example template placeholders Separate development/production configs. Project Structure backend .env.example manage.py requirements Python dependencies accounts models serializers views permissions token_serializer organizations models views crm models serializers views permissions mixins activity log mixin models views backend Django project settings settings urls /api/v1/ wsgi asgi frontend .env.example package Node dependencies vite config src App main entry components Layout Sidebar Loading Pagination context AuthContext pages Login Dashboard CompanyList CompanyDetail CompanyForm UserList UserForm ActivityLog routes ProtectedRoute Auth route wrapper services api centralized API client docker-compose Docker services config gitignore README. Key Implementation Highlights Activity Logging System Every CREATE UPDATE DELETE operation automatically generates audit record Automatic logging via ActivityLogMixin CompanyViewSet All CRUD logged User action model object_id timestamp org Soft Delete Pattern Mark deleted is_deleted save Filter out deleted records Company.objects.filter(is_deleted=False) Email Uniqueness Validation Email addresses unique within each company unique_together company email.",
    technologies: ["Django", "React", "PostgreSQL", "AWS S3", "Django REST Framework", "Python", "JWT", "Vite", "Tailwind"],
    categories: ["Full Stack", "Backend"],
    githubUrl: "https://github.com/Inkithai/CRM",
    liveUrl: null,
    featured: false,
    isSelectedWork: false,
    outcome: "Multi-tenant architecture with isolated data and scalable cloud storage — org filtering ViewSet, RBAC ADMIN/MANAGER/STAFF, soft delete, unique_together, ActivityLogMixin audit, S3 signed URLs",
    challenges: [
      "Implemented multi-tenant architecture Organization subscription BASIC/PRO Custom User org FK role ADMIN/MANAGER/STAFF Company soft delete is_deleted Contact unique_together company email ActivityLogMixin automatic CREATE/UPDATE/DELETE audit user action model object_id timestamp org",
      "Integrated AWS S3 with signed URLs not public access temporary secure links IAM-based no hardcoded credentials + .env ignored template placeholders dev/prod separate",
      "Designed RBAC Admin Full CRUD Manager Create Read Update no delete Staff Create Read limited write Organization filtering enforced ViewSet level custom permission classes validate org membership serializer-level prevents cross-org manipulation JWT 1h access 7d refresh tokens stored memory/context not localStorage",
    ],
    decisions: [
      "Chose Django for robust ORM built-in admin capabilities + custom User AbstractUser org FK + Company soft delete is_deleted + Contact unique_together + ActivityLogMixin audit",
      "Used PostgreSQL for relational data integrity complex queries + S3 signed URLs temporary secure links IAM-based + JWT configurable expiration 1h access 7d refresh memory/context not localStorage security",
      "Implemented tenant isolation database level Organization filtering ViewSet level custom permission classes validate org membership serializer-level validation prevents cross-org data manipulation + Activity Logging System automatic audit + Soft Delete Pattern mark deleted filter out deleted records",
    ],
    learnings: [
      "Multi-tenant systems require careful data isolation access control design org filtering ViewSet custom permission classes serializer-level prevents cross-org manipulation",
      "Cloud storage integration needs proper file handling security considerations S3 signed URLs temporary secure links IAM-based no hardcoded credentials .env ignored template placeholders",
      "Django ORM provides powerful tools complex database operations custom User AbstractUser Company soft delete Contact unique_together ActivityLog audit automatic via mixin",
    ],
    imageGradient: "from-slate-900 via-slate-800 to-blue-900",
  },
  {
    title: "Liya — Kapruka MCP Shopping Assistant",
    shortTitle: "Liya",
    description:
      "Kapruka MCP — e-commerce conversational shopping assistant with MCP pattern. Next.js 15, orchestrator, personality, delivery, fallback-products, language detection (English සිංහල தமிழ்), cart FloatingCart/MobileCartBar, ProductCard Shelf ReliabilityBar, ChatPanel TypingIndicator, /api/mcp route, Zustand store.",
    longDescription:
      "Liya is Kapruka MCP — a conversational e-commerce shopping assistant built with Next.js 15 App Router TypeScript Tailwind. Components: cart FloatingCart MobileCartBar, chat ChatPanel TypingIndicator, layout Header LandingJudgeCue Logo, product ProductCard ProductShelf ReliabilityBar, ui Button Card EmptyState Skeleton. App: api/mcp route.ts MCP server tool definitions, checkout page, demo page, how-it-works page with 6 SVGs step-1-conversation step-2-plan step-3-shelf step-4-comparison step-5-cart step-6-checkout, layout, not-found, page, review, shop, track. Lib: delivery.ts fallback-products.ts language.ts mcp.ts orchestrator.ts personality.ts utils.ts. Store: useAppStore Zustand. Types: index.ts. Public how-it-works SVGs. Implementation plan 1 and 2. Demonstrates MCP pattern Model Context Protocol tools resources prompts protocol shopping assistant — orchestrator calls tools plan shelf comparison cart checkout. Interesting AI product engineering prototype.",
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
    outcome: "MCP shopping assistant prototype — orchestrator + personality + delivery + language + fallback-products + cart + shelf + how-it-works 6 steps",
    challenges: [
      "Built MCP server /api/mcp route tool definitions resources prompts protocol",
      "Implemented orchestrator.ts personality.ts delivery.ts fallback-products.ts language.ts for conversational shopping",
      "Designed cart FloatingCart MobileCartBar ProductCard Shelf ReliabilityBar ChatPanel TypingIndicator how-it-works 6 SVGs",
    ],
    decisions: [
      "Chose Next.js 15 App Router TypeScript Tailwind Zustand store for rapid e-commerce prototyping",
      "Used MCP pattern Model Context Protocol for shopping assistant tool calling",
      "Implemented trilingual language detection English Sinhala Tamil for Sri Lankan market Kapruka",
    ],
    learnings: [
      "MCP pattern requires clear tool definitions resources prompts protocol — orchestrator personality delivery language fallback-products",
      "Conversational shopping needs cart FloatingCart MobileCartBar ProductCard Shelf ReliabilityBar ChatPanel TypingIndicator",
      "E-commerce prototype benefits from how-it-works visual steps step-1-conversation to step-6-checkout",
    ],
    imageGradient: "from-zinc-900 via-slate-800 to-blue-950",
  },
  {
    title: "ConvertLab — Privacy File Converter",
    shortTitle: "ConvertLab",
    description:
      "Universal file conversion — everything runs in your browser, nothing leaves device. Next.js 15, client-side converters data/documents/office, dependencies jspdf html2canvas mammoth papaparse js-yaml fast-xml-parser docx. Privacy-first no backend upload.",
    longDescription:
      "ConvertLab: The fastest most private way to convert files — everything runs in your browser Nothing leaves your device. Next.js 15.3.3 React 19.1.0 React DOM 19.1.0 lucide-react markdown-it js-yaml papaparse jspdf html2canvas mammoth fast-xml-parser docx clsx tailwind-merge typescript 5.8.3 tailwind 4.1 postcss autoprefixer types node react eslint config next. App: apple-icon.png conversion [type] conversion-client.tsx page.tsx conversion-picker.tsx page.tsx favicon.ico globals.css hero-format-picker.tsx icon.svg layout.tsx page.tsx tools page.tsx tool-directory.tsx. Components layout footer header. Constants app.ts CATEGORIES CONVERSION_ENTRIES CategoryKey icon color border iconColor documents images developer rose violet amber. Lib converters data.ts documents.ts office.ts. Types declarations.d.ts. Features: Privacy everything browser private zero server upload client-side converters markdown-it js-yaml papaparse jspdf html2canvas mammoth fast-xml-parser docx. Landing page UI audit docs LANDING_PAGE_UI_AUDIT UX_AUDIT. No backend DB auth queue. Useful utility demo quality high privacy value.",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "jspdf", "mammoth", "papaparse", "docx", "html2canvas"],
    categories: ["Frontend", "Other"],
    githubUrl: "https://github.com/Inkithai/ConvertLab",
    liveUrl: "https://convert-lab-qf7k-zeta.vercel.app/",
    featured: false,
    isSelectedWork: false,
    outcome: "Privacy file conversion — everything runs browser nothing leaves device — client-side converters data documents office",
    challenges: [
      "Built client-side converters data.ts documents.ts office.ts using jspdf html2canvas mammoth papaparse js-yaml fast-xml-parser docx — no backend upload privacy",
      "Implemented universal file conversion categories documents images developer rose violet amber hero-format-picker categories CATEGORIES CONVERSION_ENTRIES",
      "Designed landing page UI audit UX audit docs LANDING_PAGE_UI_AUDIT UX_AUDIT apple-icon favicon icon hero-format-picker conversion-picker tool-directory",
    ],
    decisions: [
      "Chose Next.js 15 React 19 TypeScript Tailwind for privacy-first client-side only conversion no backend — everything runs browser nothing leaves device",
      "Used dependencies markdown-it js-yaml papaparse jspdf html2canvas mammoth fast-xml-parser docx for data documents office conversions",
      "Implemented CATEGORIES CONVERSION_ENTRIES CategoryKey icon color border iconColor documents images developer for tool directory",
    ],
    learnings: [
      "Privacy-first file conversion requires client-side only converters no backend upload — jspdf html2canvas mammoth papaparse js-yaml fast-xml-parser docx browser APIs",
      "Universal conversion tool needs clear categories documents images developer hero-format-picker conversion-picker tool-directory",
      "Landing page UI audit UX audit improves conversion tool discovery apple-icon favicon icon hero-format-picker",
    ],
    imageGradient: "from-zinc-900 via-slate-800 to-zinc-900",
  },
  {
    title: "StudyPal — RAG Study Assistant",
    shortTitle: "StudyPal",
    description:
      "RAG-powered study assistant: upload syllabus PDFs, get personalized study plans, Q&A, and resources grounded in your documents. Earlier simple RAG vs YGC/medimind — chain.py ingest.py.",
    longDescription:
      "AI-powered study assistant using RAG Retrieval-Augmented Generation Users upload syllabus PDFs receive personalized study plans Q&A learning resources powered AI Backend main.py rag chain.py ingest.py requirements.txt Frontend README eslint config index.html package-lock public src App.css App.jsx assets index.css main.jsx Vite config vite.config.js public vite.svg src assets react.svg. Earlier simple RAG chain pipeline vs YGC medimind advanced RAG. Technologies Next.js OpenAI RAG Embeddings React Supabase TypeScript. Grounded AI responses chunking embeddings pipeline accurate retrieval context-aware AI responses uploaded syllabus content optimized retrieval accuracy personalized study plan generation RAG architecture grounded accurate AI responses OpenAI embeddings semantic similarity search chunking strategies large document processing RAG systems careful document preprocessing chunking strategies Embedding quality directly impacts retrieval accuracy response relevance AI-powered education tools need robust fallback mechanisms edge cases.",
    technologies: ["Next.js", "OpenAI", "RAG", "Embeddings", "React", "Supabase", "TypeScript", "Python"],
    categories: ["Full Stack", "AI", "Machine Learning"],
    githubUrl: "https://github.com/Inkithai/StudyPal",
    liveUrl: null,
    featured: false,
    isSelectedWork: false,
    outcome: "Grounded AI responses; chunking + embeddings pipeline for accurate retrieval — earlier simple RAG",
    challenges: [
      "Implemented document chunking and embedding pipelines for RAG earlier version vs YGC medimind",
      "Built context-aware AI responses from uploaded syllabus content",
      "Optimized retrieval accuracy for personalized study plan generation",
    ],
    decisions: [
      "Chose RAG architecture for grounded accurate AI responses earlier",
      "Used OpenAI embeddings for semantic similarity search",
      "Implemented chunking strategies for large document processing",
    ],
    learnings: [
      "RAG systems require careful document preprocessing and chunking strategies — earlier learnings before YGC medimind advanced",
      "Embedding quality directly impacts retrieval accuracy and response relevance",
      "AI-powered education tools need robust fallback mechanisms for edge cases",
    ],
    imageGradient: "from-zinc-800 via-slate-800 to-blue-950",
  },
  {
    title: "Sri Lankan SMART-GPT",
    shortTitle: "SMART-GPT",
    description:
      "MERN AI chatbot with Groq AI, supporting Sinhala, Tamil, and English with culturally contextual conversations for Sri Lankan users. Simple chat vs YGC — hobby.",
    longDescription:
      "A modern full-stack AI chatbot application built with the MERN stack, integrated with Groq AI for intelligent conversations. Supports Sinhala, Tamil, and English languages with culturally contextual responses. Backend README package src app.ts config groq-config.ts controllers chat-controllers.ts user-controllers.ts db connection.ts models Conversation.ts User.ts routes chat-routes.ts index.ts user-routes.ts utils constants.ts token-manager.ts validators.ts tsconfig.json. Frontend README index.html package public airobot.png chat.png neai.jpg nuclear.jpg openai.png robot.png robott.png vite.svg src App.css App.tsx assets react.svg components Header.tsx chat ChatItem.tsx footer Footer.tsx shared CustomizedInput.tsx Logo.tsx NavigationLink.tsx typer TypingAnim.tsx context AuthContext.tsx helpers api-communicator.ts pages Chat.tsx Home.tsx Login.tsx NotFound.tsx Signup.tsx index.css main.tsx vite-env.d.ts tsconfig.json tsconfig.node.json vite.config.ts install.log. Supports Sinhala Tamil English culturally contextual low-latency Groq inference MERN full JavaScript ecosystem consistency MongoDB flexible document storage conversation history Multilingual AI requires careful prompt engineering cultural context awareness Low-latency inference critical conversational AI user experience Full-stack JavaScript rapid development deployment cycles. Simple chat not RAG heavy vs YGC medimind.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Groq AI", "TypeScript", "Tailwind"],
    categories: ["Full Stack", "AI", "Frontend"],
    githubUrl: "https://github.com/Inkithai/Sri-Lankan-SMART-GPT",
    liveUrl: null,
    featured: false,
    isSelectedWork: false,
    outcome: "Trilingual support with low-latency Groq inference and cultural context — simple MERN chat hobby",
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
    description:
      "Stunning collection of browser-based clocks timers time tools — alarm/binary/flip/neon/pixel/world/pomodoro/stopwatch. Works fullscreen any device no signup no ads PWA manifest sw.js.",
    longDescription:
      "DigiBeat is stunning collection of browser-based clocks timers time tools Works fullscreen any device No signup no ads TypeScript README docs ai-features architecture design-patterns monetization saas-roadmap user-flow index.html package-lock package public favicon.svg icon-192.svg icon-512.svg manifest.json sw.js src App.tsx ClockContext.tsx components AlarmClock.tsx BinaryClock.tsx Clocks.tsx Controls.tsx DateDisplay.tsx FlipClock.tsx Navigation.tsx NeonClock.tsx PixelClock.tsx SettingsPanel.tsx WorldClock.tsx hooks useTime.ts pages Alarm.tsx Home.tsx Pomodoro.tsx Stopwatch.tsx Timer.tsx WorldClockPage.tsx styles.css sw.ts types.ts vite-env.d.ts tsconfig.json tsconfig.node.json vite.config.ts. Features collection browser clocks timers tools fullscreen any device no signup ads docs ai-features architecture design-patterns monetization saas-roadmap user-flow PWA manifest sw.js public favicon icon-192 512 manifest sw.js src App ClockContext components Alarm Binary Clocks Controls DateDisplay Flip Navigation Neon Pixel SettingsPanel WorldClock hooks useTime pages Alarm Home Pomodoro Stopwatch Timer WorldClockPage styles sw types. Hobby no backend.",
    technologies: ["React", "TypeScript", "Vite", "PWA", "Tailwind", "Service Worker"],
    categories: ["Frontend", "Other"],
    githubUrl: "https://github.com/Inkithai/DigiBeat",
    liveUrl: "https://inkithai.github.io/DigiBeat",
    featured: false,
    isSelectedWork: false,
    outcome: "Browser clocks collection fullscreen any device no signup no ads PWA manifest sw.js hobby",
    challenges: [
      "Built collection browser-based clocks timers time tools alarm/binary/flip/neon/pixel/world/pomodoro/stopwatch timer alarm",
      "Implemented PWA manifest sw.js sw.ts service worker offline installable fullscreen any device",
      "Designed docs ai-features architecture design-patterns monetization saas-roadmap user-flow ClockContext useTime hook",
    ],
    decisions: [
      "Chose React TypeScript Vite Tailwind PWA Service Worker for clocks collection fullscreen any device no signup no ads",
      "Used components AlarmClock BinaryClock Clocks Controls DateDisplay FlipClock Navigation NeonClock PixelClock SettingsPanel WorldClock hooks useTime pages Alarm Home Pomodoro Stopwatch Timer WorldClockPage",
      "Implemented docs ai-features architecture design-patterns monetization saas-roadmap user-flow for future SaaS roadmap",
    ],
    learnings: [
      "Browser clocks collection requires ClockContext useTime hook Controls DateDisplay Navigation SettingsPanel",
      "PWA manifest sw.js sw.ts service worker offline installable fullscreen any device no signup no ads",
      "Hobby projects benefit from docs ai-features architecture design-patterns monetization saas-roadmap user-flow future planning",
    ],
    imageGradient: "from-zinc-900 via-slate-800 to-zinc-900",
  },
  {
    title: "VoucherRush — HTML5 Game",
    shortTitle: "VoucherRush",
    description:
      "Production-grade HTML5 game vanilla JS no dependencies 60 FPS RAF, canvas physics collision particles, Web Audio synthesizer masterVolumeNode gain ramp fix audio freeze burst, roundRect polyfill, scratch card 0x0 NaN fallback 300x160 setTimeout 50ms, confetti overflow fix.",
    longDescription:
      "Interactive Production-Grade HTML5 Game Submission for Vouchermatic High-performance mobile-first HTML5 gamification custom-built Vouchermatic Game Development Challenge pure vanilla HTML5 CSS3 ES6 JavaScript no bulky dependencies no Phaser no Pixi no jQuery runs locked 60 FPS supports high-DPI Retina mobile screens advanced game-design juice integrates interactive Scratch and Win coupon reward overlay maps directly onto Vouchermatic product line Structure index.html Game DOM wrapper state router orchestrator style.css Custom responsive design dark-mode styling glassmorphism UI desktop smartphone bezel game.js High-performance HTML5 Canvas physics engine collision algorithms particle loops audio.js Web Audio API synthesizer zero-latency asset-free dynamic sound effects looping chiptune BGM rewards.js Full interactive canvas-based Scratch and Win card reveals promotional coupons Key Game Features Juice Perfectly Aligned with Vouchermatic Business Model Instead simple game-over screen Voucher Rush demonstrates end-to-end commercial conversion funnel As player session ends score recorded Invited Claim Reward opens custom digital Scratch Card modal Player scratches off silver surface reveal customized promotional coupon VM-INTERN-300 VM-FRENZY-1000 based scoring tier Perfectly highlights how brand would leverage HTML5 games Vouchermatic Gamification platform distribute rewards coupons drive engagement High-Performance Core Game Engine 60 FPS Render Loop Powered optimized requestAnimationFrame safe delta-time step tracking prevent clipping low-spec mobile processors Fluid Input Movement Controls support keyboard Arrow Keys A-D mouse-dragging high-frequency touch-swipe tracking Movement utilizes linear interpolation lerp make basket slide premium satisfying glide Physics Power-Ups Magnet Field When collected projects active radial grid Any positive falling item radius pulled towards basket using dynamic vector calculation Frenzy Mode Accelerates sky rain triggers screen-pulse backdrops showers gold tickets temporarily turning off hazards Difficulty Curve Progression Spawning frequency fall speed increase dynamically longer player survives creating addictive hook Professional Visual Audio Polish Juice Looping Chiptune Soundtrack BGM upbeat retro background track playing dynamically background fully generated using Web Audio oscillators Screen Shake Triggering bomb adds instantaneous canvas-level translate offset decays over time providing immediate tactical feedback Multi-Tiered Particle Systems Collisions spawn high-velocity radial particles smoke glowing embers bombs colorful sparkling stars coupons DPI Scaling Retina Sharpness Automatic detection browser devicePixelRatio scaling drawing matrices ensuring crisp vector visuals modern screens Dynamically Synthesized Web Audio API Sound effects generated mathematically real-time eliminates bulky audio file loading delays keeps game self-contained functions instantly any browser Comprehensive QA Refactoring Bug Fixes transition prototype into production-ready commercial product comprehensive engineering QA audit completed 6 critical bugs identified resolved 1 Web Audio API Freeze Burst Bug Fixed audio.js Bug Suspending AudioContext mute froze audio clock interval-based BGM notes continued queue Upon unmuting accumulated notes explode simultaneously loud audio blast iOS Safari often fails resume suspended contexts Fix Refactored keep context running Introduced master volume node masterVolumeNode handled muting smoothly ramping gain 0 or 1 using setTargetAtTime 2 Hidden Layout 0x0 NaN Scratch Percentage Bug Fixed rewards.js index.html Bug Since scratch card modal initially hidden measuring dimensions getBoundingClientRect right after removing hidden returned 0 due layout reflow delays Sized scratch canvas 0x0 caused scratch progress calculations divide zero resulting NaN breaking card Fix Added safe fallback dimensions 300x160 NaN guards inside resize Layout-safe setTimeout 50ms guarantee browser renders modal container before initializing canvas 3 Canvas roundRect Compatibility Crash Fixed game.js Bug Drawing basket rim used ctx.roundRect recent API 2022/2023 Running older legacy browsers standard corporate web wrappers threw fatal TypeError crashed rendering Fix Added lightweight robust roundRect polyfill CanvasRenderingContext2D beginning game.js ensuring flawless fallback drawing via quadratic vector arcs older devices 4 Confetti Clipping Bug Fixed rewards.js Bug Confetti appended inside #scratch-card-container styled overflow hidden Caused particles flying outward instantly sliced off borders looking highly unpolished Fix Refactored triggerConfetti append particles parent modal container scratch-modal-content Because modal no overflow restrictions confetti now floats beautifully all over screen 5 Flash-on-Reset Coupon Leak Bug Fixed rewards.js Bug When revealing coupon silver layer faded away using 0.6s transition When resetting card to play again setting canvas opacity back to 1 slowly fade back leaking coupon code half second Fix Added canvas.style.transition none instantly disable CSS transitions reset snapping silver coating back instantly 6 Jarring State Transition Bug Fixed game.js Bug Hitting Game Over immediately wiped all elements screen making player basket falling vouchers smoke particles disappear instantly Fix Updated render loop draw objects if state PLAYING or GAMEOVER Hitting Game Over elegantly freezes action visible gorgeous backdrop under semi-transparent glassmorphism modal How to Play Test Launch Double-click index.html or host folder local web server python -m http.server Desktop Click Start Challenge Move cursor left/right or Left/Right Arrow Keys A/D control basket Mobile Touch drag finger across screen glide basket Claiming Reward Upon Game Over click Claim Your Reward Click-and-drag finger-drag scratch off silver layer card Once 50% cleared coupon revealed custom confetti explosion.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Canvas", "Web Audio API", "PWA"],
    categories: ["Frontend", "Other"],
    githubUrl: "https://github.com/Inkithai/VoucherRush",
    liveUrl: "https://inkithai.github.io/VoucherRush/",
    featured: false,
    isSelectedWork: false,
    outcome:
      "Production-grade HTML5 game vanilla JS 60 FPS RAF canvas physics particles Web Audio synthesizer masterVolumeNode gain ramp roundRect polyfill scratch 0x0 NaN fallback 300x160 setTimeout confetti overflow fix flash-on-reset transition none freeze backdrop",
    challenges: [
      "Built 60 FPS render loop requestAnimationFrame delta-time safe fluid input keyboard Arrow A-D mouse-drag touch-swipe lerp basket glide physics power-ups magnet radial pull vector calc frenzy mode difficulty curve progression spawning frequency fall speed",
      "Implemented Web Audio API synthesizer masterVolumeNode gain ramp setTargetAtTime fix Freeze & Burst bug suspending AudioContext mute froze audio clock interval BGM notes queued explode loud blast iOS Safari resume fail + DPI scaling devicePixelRatio + particle systems smoke embers stars + screen shake translate offset decay",
      "Fixed 6 critical QA bugs: 1 Freeze Burst masterVolumeNode 2 0x0 NaN scratch getBoundingClientRect hidden 0 fallback 300x160 setTimeout 50ms reflow 3 roundRect compatibility TypeError polyfill quadratic arcs 4 confetti clipping overflow hidden parent modal 5 flash-on-reset coupon leak transition 0.6s none snap 6 jarring state transition Game Over wipe freeze PLAYING or GAMEOVER backdrop glassmorphism modal",
    ],
    decisions: [
      "Chose pure vanilla HTML5 CSS3 ES6 JavaScript no Phaser Pixi jQuery no bulky dependencies locked 60 FPS high-DPI Retina mobile screens advanced juice Scratch Win coupon reward overlay Vouchermatic product line commercial conversion funnel Claim Reward scratch card modal VM-INTERN-300 VM-FRENZY-1000 custom promotional coupon based scoring tier + looping chiptune BGM retro background Web Audio oscillators + multi-tiered particle systems collisions high-velocity radial + screen shake bomb translate offset decay + DPI scaling devicePixelRatio",
      "Used modularized architecture index.html Game DOM wrapper state router orchestrator style.css custom responsive dark-mode glassmorphism UI desktop smartphone bezel game.js high-performance Canvas physics engine collision particle loops audio.js Web Audio API synthesizer zero-latency asset-free dynamic sound looping chiptune BGM rewards.js full interactive canvas-based Scratch Win card reveals promotional coupons business model aligned Vouchermatic Gamification platform distribute rewards coupons drive engagement",
      "Implemented comprehensive QA refactoring bug fixes 6 critical: masterVolumeNode gain ramp not suspend AudioContext + 0x0 NaN fallback 300x160 setTimeout 50ms layout reflow + roundRect polyfill quadratic vector arcs older devices + confetti appended parent modal scratch-modal-content no overflow restrictions + flash-on-reset transition none snap silver coating instantly + jarring state transition draw objects PLAYING or GAMEOVER freeze backdrop glassmorphism modal",
    ],
    learnings: [
      "High-performance HTML5 game requires 60 FPS RAF delta-time safe step fluid input lerp glide physics magnet radial pull vector calc frenzy mode difficulty curve spawning frequency fall speed increase addictive hook",
      "Web Audio API synthesizer dynamic sound effects zero-latency asset-free looping chiptune BGM oscillators masterVolumeNode gain ramp setTargetAtTime mute not suspend freeze burst iOS Safari resume fail Retina DPI devicePixelRatio scaling crisp vector visuals",
      "Production-grade game needs QA audit 6 bugs: audio freeze burst, 0x0 NaN scratch fallback setTimeout reflow, roundRect compatibility polyfill, confetti clipping parent modal, flash-on-reset coupon leak transition none snap, jarring state transition freeze backdrop — commercial conversion funnel Claim Reward scratch card 50% cleared confetti explosion",
    ],
    imageGradient: "from-slate-900 via-blue-950 to-slate-900",
  },
  {
    title: "EduFlow - WIS (AI LMS)",
    shortTitle: "EduFlow WIS",
    description:
      "WIS work: AI-powered LMS with voice assistant, contextual Q&A, OCR fallback, Google TTS, adaptive assessments from PDF/PPT. Multi-LLM pipeline OpenAI Gemini OpenRouter fallback.",
    longDescription:
      "A production-ready AI-powered Learning Management System featuring an AI voice assistant with contextual Q&A, OCR fallback, and Google TTS. Includes intelligent tutoring with real-time feedback and adaptive MCQ generation from PDF/PPT documents. Work at WIS. Multi-LLM pipeline OpenAI Gemini OpenRouter fallback logic document processing for PDF PPT OCR. Voice assistant contextual Q&A OCR fallback Google TTS adaptive assessments.",
    technologies: ["React", "Node.js", "OpenAI", "Gemini", "Tesseract.js", "Google TTS", "Supabase"],
    categories: ["Full Stack", "AI", "Machine Learning"],
    githubUrl: "https://github.com/Inkithai",
    liveUrl: null,
    featured: false,
    isSelectedWork: false,
    outcome: "Built multi-LLM pipeline with fallback logic; document processing for 1000+ pages at WIS",
    challenges: [
      "Built document processing pipelines for PDF/PPT extraction with OCR fallback at WIS",
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
    imageGradient: "from-slate-800 via-blue-950 to-slate-900",
  },
  {
    title: "Draftly.AI - WIS (Email Automation)",
    shortTitle: "Draftly WIS",
    description:
      "WIS work: AI email automation with voice-to-email dictation, Gemini summarization, smart filtering, confidence scoring, Google Calendar integration.",
    longDescription:
      "An AI email automation platform featuring real-time voice-to-email dictation, intelligent email summarization powered by Gemini, Gmail-like filtering with classification and confidence scoring, and Google Calendar integration for scheduling. Work at WIS. Real-time voice dictation low latency intelligent classification transparency Next.js server-side rendering API route co-location.",
    technologies: ["Next.js", "Gemini API", "Google Calendar API", "Node.js", "TypeScript", "Tailwind"],
    categories: ["Full Stack", "AI", "Frontend"],
    githubUrl: "https://github.com/Inkithai",
    liveUrl: null,
    featured: false,
    isSelectedWork: false,
    outcome: "Real-time voice dictation <500ms latency; intelligent classification with transparency at WIS",
    challenges: [
      "Implemented real-time voice-to-email dictation with low latency at WIS",
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
    imageGradient: "from-slate-800 via-blue-900 to-slate-900",
  },
  {
    title: "Legal Docs Summarization (XYGen.ai)",
    shortTitle: "Legal Docs AI",
    description:
      "AI legal document pipeline with automated summarization, validation, and LLM extraction. Internal tool built at XYGen.ai.",
    longDescription:
      "An AI-powered legal document processing pipeline with automated summarization, validation, and LLM-based extraction. Built as an internal tool at XYGen.ai to streamline legal document workflows. OpenAI APIs high-quality text understanding generation validation layers ensure summary accuracy modular architecture easy extension new document types legal accuracy compliance AI validation essential modular architecture adaptation.",
    technologies: ["Next.js", "Node.js", "OpenAI APIs", "TypeScript", "LLM Integration", "PostgreSQL"],
    categories: ["AI", "Machine Learning", "Backend"],
    githubUrl: "https://github.com/Inkithai",
    liveUrl: null,
    featured: false,
    isSelectedWork: false,
    outcome: "Automated legal summarization with validation layers for accuracy at XYGen.ai",
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
