export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tag: string;
};

export const experience: Experience[] = [
  {
    role: "MLOps + Full-Stack Intern",
    company: "Chhattisgarh State Industrial Development Corporation (CSIDC)",
    period: "Feb 2026 \u2014 Present",
    location: "Remote",
    tag: "Govt · MLOps + Full-Stack",
    bullets: [
      "Engineered a full-stack industrial-land monitoring system (Next.js 14, FastAPI, MongoDB) digitising land allotment, violation tracking and compliance workflows.",
      "Integrated interactive satellite monitoring with an automated compliance-scoring engine for state industrial parks.",
      "Built a React Native mobile app with 9 offline-first capabilities, AR boundary overlays and live Leaflet.js GPS tracking for field inspectors across 20+ industrial companies.",
    ],
  },  {
    role: "Machine Learning Engineer Intern",
    company: "SmartMe",
    period: "Feb 2026 — Present",
    location: "Remote",
    tag: "On-Device ML · Edge LLMs",
    bullets: [
      "Trained and deployed two on-device models served by local LLMs running entirely on edge hardware — no cloud inference, no telemetry leakage.",
      "Task 1 — document intelligence: classification, summarisation and multi-hop reasoning over uploaded PDFs / scans, all on-device.",
      "Task 2 — visual intelligence: image classification + natural-language description, fine-tuned for low-latency offline inference on edge devices.",
    ],
  },  {
    role: "Machine Learning Intern",
    company: "Samsung R&D Institute India \u2014 Bangalore",
    period: "Oct 2025 \u2014 Mar 2026",
    location: "Remote",
    tag: "Research · ML",
    bullets: [
      "Developed a GAN-based image-enhancement pipeline in PyTorch + OpenCV with granular comparative QA across sharpness, noise and contrast.",
      "Deployed the model behind a FastAPI service \u2014 sub-2-second inference per image pair and \u226525% PSNR improvement over baseline.",
    ],
  },
  {
    role: "AI Engineer & DevOps Intern",
    company: "MetroMax Group",
    period: "Oct 2025 \u2014 Dec 2025",
    location: "Remote",
    tag: "AI · DevOps",
    bullets: [
      "Architected an automated B2B lead-generation platform on self-hosted n8n workflows running on AWS EC2, streaming prospects from the Apollo API into AWS RDS (PostgreSQL).",
      "Configured Amazon SES with strict SPF/DKIM/DMARC for high-deliverability outreach and orchestrated Dockerised microservices driving LLM-personalised email sequences with reply classification.",
    ],
  },
  {
    role: "MLOps Intern",
    company: "AmbujaNeotia Group",
    period: "May 2025 \u2014 Aug 2025",
    location: "Remote",
    tag: "MLOps · RAG",
    bullets: [
      "Architected a RAG chatbot on Groq LLM API + sentence transformers + Pinecone for real-time querying of construction rulebooks.",
      "Built an automated PDF-parsing pipeline and overlaid geospatial maps so builders get location-aware, context-specific semantic search.",
    ],
  },
  {
    role: "Full-Stack Intern",
    company: "Ayatrio Furnishing",
    period: "Mar 2025 \u2014 May 2025",
    location: "Remote",
    tag: "Full-Stack",
    bullets: [
      "Integrated automated webhook endpoints that surface Instagram posts tagging the official Ayatrio handle directly inside the live products tab.",
      "Executed deep frontend SEO + performance work \u2014 overall >50% reduction in LCP, INP and CLS Core Web Vitals.",
    ],
  },
  {
    role: "Full-Stack Intern",
    company: "SOFI",
    period: "Mar 2024 \u2014 May 2024",
    location: "Remote",
    tag: "Full-Stack + ML",
    bullets: [
      "Built a trade-tracking system for alt-accounts, mapping 95% of inter-account transactions and surfacing ~1,500 potential policy violations in-game.",
      "Developed a neural-network-based chatbot offering interactive in-game mechanic guidance.",
    ],
  },
];
