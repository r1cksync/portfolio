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
    role: "MLOps Intern",
    company: "SmartMe",
    period: "Feb 2026 — Present",
    location: "Remote",
    tag: "MLOps",
    bullets: [
      "Owning training infrastructure, model registry and serving pipelines for production ML.",
      "Building reproducible CI/CD for model artifacts with automated evaluation gates.",
    ],
  },
  {
    role: "R&D Intern",
    company: "Samsung R&D Institute India — Bangalore",
    period: "Oct 2025 — Present",
    location: "Remote",
    tag: "Research",
    bullets: [
      "Applied research at Samsung's largest R&D centre outside Korea.",
      "Prototyping novel on-device intelligence pipelines.",
    ],
  },
  {
    role: "FullStack / MLOps Intern",
    company: "AmbujaNeotia Group",
    period: "Dec 2025 — Feb 2026",
    location: "Remote",
    tag: "Full-Stack + MLOps",
    bullets: [
      "Built full-stack features and shipped ML workflows into production.",
      "Bridged the gap between data-science notebooks and live customer-facing systems.",
    ],
  },
  {
    role: "DevOps / MLOps Intern",
    company: "MetroMax Group",
    period: "Oct 2025 — Dec 2025",
    location: "Remote",
    tag: "DevOps",
    bullets: [
      "Operated CI/CD, container infrastructure and ML deployment pipelines.",
      "Hardened observability and rollout automation across services.",
    ],
  },
  {
    role: "FullStack Intern",
    company: "Ayatrio Furnishing",
    period: "Mar 2025 — May 2025",
    location: "Remote",
    tag: "Full-Stack",
    bullets: [
      "Integrated Instagram automation that surfaces real customer purchases tagged to the official Ayatrio handle, directly inside the products tab.",
      "Performed multiple SEO optimisations — overall >50% reduction in LCP, INP and CLS.",
    ],
  },
  {
    role: "FullStack Intern",
    company: "SOFI",
    period: "Mar 2024 — May 2024",
    location: "Remote",
    tag: "Full-Stack + ML",
    bullets: [
      "Built a trade-tracking system for alt-accounts, mapping 95% of inter-account transactions and identifying ~1,500 potential policy violations in-game.",
      "Developed a neural-network-based chatbot offering interactive in-game mechanic guidance.",
    ],
  },
];
