export interface StackItem {
  label: string;
  category: string;
}

export interface Project {
  number: string;
  name: string;
  description: string;
  tags: string[];
  year: string;
  status: string;
  image: string;
  imageAlt: string;
  href?: string;
}

export interface Social {
  name: string;
  href: string;
}

export interface CurrentlyItem {
  label: string;
  value: string;
}

export interface SiteInfo {
  name: string;
  title: string;
  availability: string;
  email: string;
}

export const SITE_INFO: SiteInfo = {
  name: "Pavlo Khytrov",
  title: "Full Stack Developer",
  availability: "Available for work",
  email: "hit.pasha@gmail.com",
};

export const NAV_LINKS: string[] = ["About", "Stack", "Projects"];

export const SECTION_LABELS = {
  about: "About",
  stack: "Stack",
  projects: "Projects",
  currently: "Currently",
};

export const ABOUT_CONTENT = {
  heading: "I build products end-to-end — from data models to the interfaces people actually use.",
  body: "Full-stack engineer with 2 years of professional experience building software across early-stage startups and mid-size companies. Blending traditional software craftsmanship with modern, cutting-edge tech, I care as much about solid API architecture as the polished interfaces consuming it—with a sharp eye for detail that turns good code into great user experiences.",
};

export const STACK_FILTER_ALL_LABEL = "All";

export const STACK: StackItem[] = [
  { label: "TypeScript", category: "lang" },
  { label: "JavaScript", category: "lang" },
  { label: "React", category: "frontend" },
  { label: "React Native", category: "frontend" },
  { label: "Astro", category: "frontend" },
  { label: "Next.js", category: "frontend" },
  { label: "Expo", category: "frontend" },
  { label: "Tailwind CSS", category: "frontend" },
  { label: "Node.js", category: "backend" },
  { label: "Bun", category: "backend" },
  { label: "Express.js", category: "backend" },
  { label: "Nest.js", category: "backend" },
  { label: "REST", category: "backend" },
  { label: "GraphQL", category: "backend" },
  { label: "Telegram Bot API", category: "backend" },
  { label: "Sanity", category: "data" },
  { label: "MongoDB", category: "data" },
  { label: "PostgreSQL", category: "data" },
  { label: "SQLite", category: "data" },
  { label: "Redis", category: "data" },
  { label: "Drizzle ORM", category: "data" },
  { label: "Docker", category: "infra" },
  { label: "AWS", category: "infra" },
  { label: "Claude", category: "ai" },
  { label: "Cursor", category: "ai" },
  { label: "Antigravity", category: "ai" },
  { label: "Ollama", category: "ai" },
];

export const CATEGORY_LABELS: Record<string, string> = {
  lang: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  data: "Data",
  infra: "Infra",
  ai: "AI",
};

export const PROJECTS: Project[] = [
  {
    number: "01",
    name: "Money Manager",
    description:
      "Local-first money-tracking app: multi-currency accounts, transfers, a full loan/debt tracker, recurring transactions, reports, PIN/biometric lock, and JSON backup — all on-device SQLite, no cloud backend.",
    tags: ["React Native", "Expo", "TypeScript", "Drizzle ORM"],
    year: "2026",
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=480&fit=crop&auto=format",
    imageAlt: "MacBook Pro on a clean minimal desk",
    href: "https://github.com/kh-pavlo/money-manager",
  },
  {
    number: "02",
    name: "Job Hunter Bot",
    description:
      "Personal job-hunting agent: collects listings from Greenhouse and Lever boards, dedupes and hard-filters them, scores survivors with an LLM evaluator + critic, and pushes a daily shortlist straight to Telegram on a scheduled run.",
    tags: ["Bun", "TypeScript", "Drizzle ORM", "Telegram Bot API"],
    year: "2026",
    status: "Personal",
    image: "https://images.unsplash.com/photo-1763568258533-d0597f86ce62?w=900&h=480&fit=crop&auto=format",
    imageAlt: "Code editor with context menu on screen",
  },
];

export const SOCIALS: Social[] = [
  { name: "GitHub", href: "https://github.com/kh-pavlo" },
  { name: "LinkedIn", href: "https://linkedin.com/in/pavlo-khytrov" },
  { name: "Twitter", href: "https://x.com/nuff02" },
];

export const CURRENTLY: CurrentlyItem[] = [
  { label: "Building", value: "a personal job-hunting agent that scores listings with an LLM and ships a daily shortlist to Telegram" },
  { label: "Reading", value: "Designing Data-Intensive Applications — Kleppmann" },
  { label: "Exploring", value: "LLM-as-judge evaluation pipelines — evaluator/critic scoring with few-shot examples from user feedback" },
  { label: "Open to", value: "Full-time remote roles across EU and US time zones (Frontend, Backend, or Full-Stack)." },
];
