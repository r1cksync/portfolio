export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  blurb: string;
  description: string;
  cover: string;
  tags: string[];
  github?: string;
  live?: string;
  year: string;
  category: "AI / ML" | "Full-Stack" | "Distributed Systems" | "Agentic AI" | "Geospatial / Data" | "RL / Systems";
  highlights: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "credivo",
    title: "Credivo",
    subtitle: "India's next-gen lending OS — BRE, Textract OCR, Bedrock risk, six-role console",
    blurb:
      "A production loan-management platform built like a banking-grade product. Borrower onboarding + server-side Bureau Risk Engine, AWS Textract OCR on salary slips, AWS Bedrock (Claude 3 Haiku) risk summaries with DTI + Low/Med/High classification, and five operations dashboards — Sales, Sanction, Disbursement, Collection, Admin — each with full RBAC and live analytics.",
    description:
      "End-to-end lending operations platform with six role-scoped consoles. Borrowers register and run through a server-side Bureau Risk Engine (PAN format, age 23–50, salary ≥ ₹25k, employment mode) with real-time rejection reasoning, then upload salary slips to S3 where AWS Textract extracts name / PAN / gross & net salary. Sanction queue invokes AWS Bedrock (Claude 3 Haiku) to generate a DTI-aware risk summary and Low/Medium/High classification with a sanction recommendation. Disbursement issues PDFKit-generated sanction letters; Collection records UTR payments and auto-closes loans at zero balance. Every API route is gated by `authenticate + requireRole(...)` — UI hiding is never trusted. Frontend is Next.js 14 (App Router) with Framer Motion + Recharts; backend is Express 4 + TypeScript on serverless Vercel with a cached-promise Mongoose connection (`bufferCommands: false`) so cold starts never hang.",
    cover: "/projects/credivo/cover.png",
    tags: ["Next.js 14", "Express 4", "TypeScript", "MongoDB Atlas", "AWS S3", "AWS Textract", "AWS Bedrock", "Claude 3 Haiku", "Recharts", "PDFKit", "JWT", "RBAC"],
    github: "https://github.com/r1cksync/Credivo",
    live: "https://credivo.vercel.app",
    year: "2026",
    category: "Full-Stack",
    highlights: [
      "Six role-scoped consoles — Borrower, Sales, Sanction, Disbursement, Collection, Admin",
      "Bureau Risk Engine runs server-side with traceable rejection reasons",
      "AWS Textract OCR + Bedrock (Claude 3 Haiku) risk summaries with DTI",
      "Serverless-safe Mongo (cached promise, no buffering) + RBAC on every route",
    ],
    featured: true,
  },
  {
    slug: "incident-commander",
    title: "Incident Commander",
    subtitle: "OpenEnv RL environment where LLM agents learn to be on-call SREs",
    blurb:
      "An OpenEnv reinforcement-learning playground where language model agents learn to triage real-world SRE incidents — diagnosing live Prometheus / Loki / Chaos-Mesh failures on a 5-microservice Kubernetes cluster. Phi-3.5-mini actor, DeepSeek-R1 critic, GRPO + PPO trained over 381 procedural scenarios. Built for the Meta PyTorch OpenEnv Hackathon × Scaler School of Technology 2026.",
    description:
      "A production-grade RL environment that turns SRE incident response into a curriculum-driven training ground for LLM agents. A FastAPI gym server exposes 7 hand-curated incident tasks plus 381 procedurally generated scenarios, complete with a curriculum controller (warmup → expert tiers), an adversarial LLM scenario designer, a 3-persona judge (junior / senior / principal SRE), and context-gated rewards. Training stack: TRL (GRPO), vLLM rollouts, LoRA r=16/α=32 fine-tuning of Phi-3.5-mini as the actor, DeepSeek-R1 as the critic. Trained across 3 Kaggle shards with a 3-way LoRA merge. The whole live cluster (k3s, Prometheus, Loki, Chaos Mesh, 5 fault-injectable microservices) is provisioned reproducibly with Terraform on Hetzner.",
    cover: "/projects/incident-commander/cover.png",
    tags: ["PyTorch", "TRL", "GRPO/PPO", "vLLM", "LoRA", "FastAPI", "Kubernetes", "Terraform", "Hetzner", "Chaos Mesh", "Prometheus", "Loki"],
    github: "https://github.com/r1cksync/meta-rl-hack",
    live: "https://huggingface.co/spaces/sagnik-mukherjee/incodent-commander",
    year: "2026",
    category: "RL / Systems",
    highlights: [
      "381 procedural scenarios + 7 hand-curated incident tasks",
      "Curriculum controller: warmup → core → expert tiers",
      "GRPO actor + DeepSeek-R1 critic with context-gated rewards",
      "Real Chaos-Mesh fault injection on a live 5-service k3s cluster",
    ],
    featured: true,
  },
  {
    slug: "doc-ai",
    title: "Doc AI",
    subtitle: "Agentic RAG over your document library — with citations, contradictions and a knowledge graph",
    blurb:
      "A LangChain agent platform for documents that goes way past chat-with-PDF. Twelve specialist tools — AWS Textract OCR, Pinecone vector search, citation tracer, multi-doc comparator, contradiction finder, hallucination guard — plus an auto-generated D3 knowledge graph, quiz & flashcard generator and 30+ analytics metrics over your entire library.",
    description:
      "Production agentic-RAG platform with deep document intelligence. Built on LangChain + LangGraph with 12 specialist tools (document_retriever, citation_tracer, contradiction_finder, multi_doc_comparator, quiz_generator, flashcard_generator, summarizer, entity_extractor, knowledge_graph_builder, hallucination_guard, analytics_engine, confidence_scorer). AWS Textract for OCR, Pinecone for vector search, Prisma + PostgreSQL for state, NextAuth for auth. Every answer ships with traceable citations, confidence scores and a hallucination guard. The library view renders an interactive D3 force-directed knowledge graph linking concepts across docs, and the analytics dashboard surfaces 30+ metrics on reading depth, contradiction density, citation overlap and more.",
    cover: "/projects/doc-ai/cover.png",
    tags: ["LangChain", "LangGraph", "Pinecone", "AWS Textract", "Next.js", "Prisma", "PostgreSQL", "NextAuth", "D3.js", "OpenAI"],
    github: "https://github.com/r1cksync/agentic-ai-doc-assignment",
    year: "2025",
    category: "Agentic AI",
    highlights: [
      "12 specialist LangChain tools wired through a planner agent",
      "Citation tracer + contradiction finder + hallucination guard",
      "D3 force-directed knowledge graph across the document library",
      "30+ analytics metrics on reading depth, contradictions and overlap",
    ],
    featured: true,
  },
  {
    slug: "mindsync",
    title: "MindSync",
    subtitle: "Multimodal mental-health analytics across five behavioural signals",
    blurb:
      "Mental-health analytics platform that fuses five independent signals — Spotify listening, social-media usage, written essays, academic performance and facial cues — into one wellbeing portrait. ResNet (85% stress accuracy), CatBoost (90% academic accuracy), LLM essay reasoning. Five Flask microservices behind a single Next.js + Clerk-AI experience on MongoDB.",
    description:
      "Five-module mental-health platform delivering a single multimodal wellbeing signal. Each module is a standalone Flask backend: (1) Spotify — audio-feature trends mapped to mood; (2) Social Media — YouTube/Reddit usage patterns; (3) Essay — LLM-driven sentiment reasoning over free-text (82% sentiment accuracy); (4) Academic — CatBoost classifier hitting 90% on academic stress; (5) Facial — ResNet stress detector at 85% on FER-style data. The Next.js frontend stitches everything together with Clerk AI auth + OAuth 2.0, MongoDB for state, and a unified dashboard that triangulates risk across signals rather than trusting any single modality.",
    cover: "/projects/mindsync/cover.svg",
    tags: ["Flask", "Next.js", "ResNet", "CatBoost", "LLM", "MongoDB", "Clerk AI", "OAuth 2.0", "Spotify API", "YouTube API"],
    github: "https://github.com/r1cksync/mind-sync",
    year: "2025",
    category: "AI / ML",
    highlights: [
      "5 multimodal modules — Spotify, Social, Essay, Academic, Facial",
      "ResNet stress detector at 85% accuracy",
      "CatBoost academic-stress classifier at 90% accuracy",
      "LLM essay sentiment reasoning at 82% accuracy",
    ],
    featured: true,
  },
  {
    slug: "shayak",
    title: "Shayak",
    subtitle: "Google Classroom, rebuilt with real-time CNN engagement detection",
    blurb:
      "A drop-in replacement for Google Classroom with an AI core. Computer-vision engagement monitoring in 6 categories (TensorFlow CNN), adaptive quizzes, automated attendance via join/leave detection, recorded video classes and 120+ Framer-Motion scroll animations. Next.js 14 + Node/Express + MongoDB + AWS S3, with a separate Flask service serving the engagement model.",
    description:
      "A full educational platform that replaces Google Classroom with a tighter, AI-native experience. Frontend in Next.js 14 (Tailwind, shadcn/ui, Framer Motion with 120+ scroll animations, Zustand, TanStack Query). Backend in Node/Express with MongoDB Atlas, JWT auth, Socket.IO for live features, AWS S3 for media, node-cron for scheduled jobs. The differentiator is a TensorFlow/Keras CNN that runs in a separate Flask microservice and classifies student engagement live during video classes into 6 buckets — Actively Looking, Confused, Talking to Peers, Distracted, Bored, Drowsy — feeding both attendance and per-student engagement analytics back to the teacher dashboard.",
    cover: "/projects/shayak/cover.png",
    tags: ["Next.js 14", "Node.js", "Express", "MongoDB", "TensorFlow", "Socket.IO", "AWS S3", "Framer Motion", "shadcn/ui", "Zustand"],
    github: "https://github.com/r1cksync/edu-a",
    live: "https://sahayak-deployment-frontend.onrender.com",
    year: "2025",
    category: "Full-Stack",
    highlights: [
      "Real-time engagement detection in 6 classes via TensorFlow CNN",
      "Auto-attendance from join/leave + engagement signal",
      "Adaptive quizzes, daily practice problems & refresher AI",
      "120+ Framer-Motion scroll animations with spring physics",
    ],
    featured: true,
  },
  {
    slug: "thinksync",
    title: "ThinkSync",
    subtitle: "Meetings that finish themselves — 60+ AI agents shipping work after every call",
    blurb:
      "ThinkSync joins your Google Meet, Zoom and Teams calls, transcribes and analyses them in real time, and orchestrates 60+ AI agents that turn every conversation into shipped JIRA tickets, Linear issues, Slack updates, CRM logs and follow-ups. Currently in private beta.",
    description:
      "A meetings layer that treats every call as the start of a workflow. ThinkSync silently joins Google Meet / Zoom / MS Teams, streams transcription, and then hands the structured transcript to a swarm of 60+ specialised AI agents (action-item extractor, ticket writer, Slack summariser, CRM updater, follow-up scheduler, decision-log archivist, risk flagger…). Each agent owns one downstream system. The result: meetings finish with the work already started — JIRA tickets created, Linear issues filed, Slack threads summarised, CRM logged, follow-ups scheduled — without anyone touching a keyboard afterwards.",
    cover: "/projects/thinksync/cover.png",
    tags: ["Next.js", "TypeScript", "AI Agents", "LangChain", "Google Meet API", "Zoom API", "Slack API", "JIRA API", "Linear API"],
    github: "https://github.com/r1cksync/Think-Sync",
    year: "2026",
    category: "Agentic AI",
    highlights: [
      "60+ specialised agents — one per downstream system",
      "Real-time transcription + analysis during the call",
      "Auto-ships JIRA tickets, Linear issues, Slack updates, CRM logs",
      "Drop-in for Google Meet, Zoom & Microsoft Teams",
    ],
  },
  {
    slug: "creditlens",
    title: "CreditLens",
    subtitle: "Credit analysis redefined — 18 specialised agents underwriting in real time",
    blurb:
      "A production-grade multi-agent platform that transforms banking credit analysis. 18 specialised AI agents process applications in real time, surface hidden risk signals, run regulatory-compliance checks and explain every score with traceable feature attribution — so underwriters get answers they can actually defend.",
    description:
      "Multi-agent credit underwriting platform built for production banking workflows. Eighteen specialised agents — document_ingestor, kyc_validator, income_normalizer, bureau_aggregator, fraud_signaler, dti_calculator, collateral_assessor, behavioural_scorer, sector_risk_analyst, peer_benchmarker, regulatory_compliance_checker, ecl_estimator, stress_tester, narrative_writer, decision_committee, audit_logger, explanation_generator, escalation_router — coordinate through a planner that respects regulatory boundaries. Every score ships with traceable feature attribution and a regulator-ready audit trail. Built on Next.js + TypeScript with a multi-tenant architecture, employee + customer portals, and an editorial design language inspired by financial broadsheets.",
    cover: "/projects/creditlens/cover.png",
    tags: ["Next.js", "TypeScript", "LangChain", "Multi-Agent", "PostgreSQL", "Regulatory Compliance", "Banking", "RBAC"],
    github: "https://github.com/r1cksync/creditlens-aws-infra-deployment",
    year: "2025",
    category: "Agentic AI",
    highlights: [
      "18 specialised credit-analysis agents under one planner",
      "Real-time underwriting with regulator-ready audit trail",
      "Traceable feature attribution behind every decision",
      "Multi-tenant: separate employee and applicant portals",
    ],
  },
  {
    slug: "logical-clocks",
    title: "Logical Clock Visualization",
    subtitle: "Lamport timestamps & vector clocks rendered as a live distributed system",
    blurb:
      "An interactive visualisation of Lamport and vector-clock semantics across distributed processes. Spin up arbitrary processes, fire events, send messages with tunable network delay and watch causality emerge — physical clocks, Lamport scalars, vector clocks and a causality DAG all update in real time.",
    description:
      "A teaching-grade simulator for the foundations of distributed time. Each process card surfaces its physical clock, Lamport scalar and full vector clock side-by-side, and every local event / send / receive updates them according to Lamport's and Mattern's rules. A controllable message-sending panel lets you queue inter-process messages with custom network delay; events are stamped with delivery times and the resulting happened-before relation is rendered as a live causality DAG. Designed for the moment students stop treating vector clocks as abstract notation and start *seeing* concurrency.",
    cover: "/projects/logical-clocks/cover.png",
    tags: ["React", "TypeScript", "Distributed Systems", "Visualization", "Lamport Clocks", "Vector Clocks"],
    github: "https://github.com/r1cksync/Distributed-Systems-Mini-Project",
    year: "2025",
    category: "Distributed Systems",
    highlights: [
      "Lamport & vector clocks rendered side-by-side per process",
      "Tunable network delay on every message",
      "Live happened-before causality DAG",
      "Built as a teaching aid for distributed-systems coursework",
    ],
  },
  {
    slug: "math-agent",
    title: "Math Agent",
    subtitle: "Agentic AI tutor that decomposes problems, calls solver tools and shows its work",
    blurb:
      "A LangChain-based math tutor that doesn't hallucinate answers. It decomposes word problems, dispatches to specialised solver tools (symbolic algebra, calculus, numeric, plotter, unit-converter) and reconstructs a step-by-step working — so every answer is auditable.",
    description:
      "An agentic calculus / algebra tutor wired together with LangChain tool-use. A planner LLM parses the natural-language problem, decides which solver tools to call (SymPy for symbolic, NumPy/SciPy for numeric, a step-explainer, a plotter, a unit-converter) and stitches a structured solution back together. The student never gets a one-shot model guess — they get a transparent chain of tool invocations and intermediate states, which is exactly the difference between a chatbot and a tutor.",
    cover: "/projects/math-agent/cover.png",
    tags: ["LangChain", "Python", "SymPy", "NumPy", "Tool Use", "Agents", "Next.js"],
    github: "https://github.com/r1cksync/agentic-ai-calc-assignment",
    year: "2025",
    category: "Agentic AI",
    highlights: [
      "Planner LLM dispatches to symbolic + numeric solvers",
      "Step-by-step working reconstructed from tool calls",
      "Built-in plotter and unit-converter tools",
      "Every answer is auditable — no one-shot hallucinations",
    ],
  },
  {
    slug: "india-nightlight",
    title: "India Nightlight Analysis",
    subtitle: "Pincode-level economic activity extracted from NASA VIIRS night-lights",
    blurb:
      "Pincode-resolution nighttime-light intensity for every PIN in India, extracted from NASA's VIIRS Day/Night Band imagery via Google Earth Engine. A geospatial-economics layer that translates orbiting photons into a proxy for electrification, urbanisation and economic activity at hyperlocal granularity.",
    description:
      "A geospatial pipeline that ingests NASA's VIIRS DNB nighttime-light imagery through Google Earth Engine, clips it against India's pincode boundary shapefiles, and emits a per-PIN time-series of mean radiance. The output is a hyperlocal proxy for electrification, urbanisation and economic activity that complements (and often beats) census data for off-cycle years. Pipeline handles cloud masking, stray-light correction and pincode boundary edge cases, and exports clean GeoJSON / CSV for downstream economic modelling.",
    cover: "/projects/india-nightlight/cover.webp",
    tags: ["Google Earth Engine", "VIIRS DNB", "Python", "GeoPandas", "Remote Sensing", "Geospatial"],
    github: "https://github.com/r1cksync/India-Nightlight-Analysis",
    year: "2024",
    category: "Geospatial / Data",
    highlights: [
      "NASA VIIRS DNB clipped to every Indian pincode boundary",
      "Per-PIN time-series of mean nighttime radiance",
      "Cloud masking + stray-light correction built in",
      "Hyperlocal proxy for electrification & urbanisation",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
