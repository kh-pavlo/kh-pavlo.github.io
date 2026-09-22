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

export interface ExperienceItem {
  role: string;
  company: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string[];
  skills: string[];
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

export const NAV_LINKS: string[] = ["About", "Stack", "Experience", "Projects"];

export const SECTION_LABELS = {
  about: "About",
  experience: "Experience",
  stack: "Stack",
  projects: "Projects",
  currently: "Currently",
};

export const ABOUT_CONTENT = {
  heading: "I build products end-to-end — from data models to the interfaces people actually use.",
  body: "Full-stack engineer with 2 years of professional experience designing and building software across early-stage startups and mid-size companies — React, TypeScript, and Node.js on the product side, REST APIs and modular, maintainable architecture underneath. I pair traditional software craftsmanship with AI-assisted development, using tools like Claude to move faster without cutting corners on code quality — with a sharp eye for detail that turns good architecture into great user experiences.",
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Full Stack Engineer",
    company: "dudecode",
    employmentType: "Full-time",
    startDate: "Jul 2025",
    endDate: "Present",
    duration: "1 yr 3 mos",
    description: [
        "Architected and deployed end-to-end full-stack features using TypeScript, bridging high-throughput REST API architecture with responsive, accessible web applications.",
        "Engineered scalable microservices and robust frontend interfaces in a fast-paced, high-growth startup environment, pivoting rapidly to ship mission-critical product capabilities.",
        "Optimized client-server data flow and state management across Next.js and React frameworks, cutting initial page load latency and improving overall user retention."
      ],
    skills: ["TypeScript", "REST API", "React.js", "Next.js", "Nest.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    role: "QA Specialist",
    company: "Dogteampro",
    employmentType: "Full-time",
    startDate: "Nov 2023",
    endDate: "Feb 2025",
    duration: "1 yr 4 mos",
   description: [
        "Spearheaded the transformation of quality assurance operations by building low-code automated testing pipelines, slashing manual testing overhead by 60%.",
        "Streamlined continuous integration and delivery (CI/CD) workflows by embedding automated regression suites directly into pre-release validation pipelines.",
        "Collaborated closely with cross-functional engineering teams to establish automated edge-case coverage and elevate baseline software reliability across production environments."
      ],
    skills: ["Test Automation", "CI/CD", "Low-Code Tools"],
  },
  {
    role: "QA Engineer",
    company: "Post Inc.",
    employmentType: "Full-time",
    startDate: "Feb 2023",
    endDate: "Oct 2023",
    duration: "9 mos",
    description: [
        "Designed comprehensive end-to-end test strategies and execution matrixes to ensure high-fidelity software releases across complex product lines.",
        "Identified, documented, and triaged critical high-priority bugs, accelerating root-cause resolution times and decreasing production defect rates.",
        "Championed quality-first practices within sprint cycles, partnering with developers to enforce rigorous acceptance criteria and seamless release governance."
      ],
    skills: ["QA Testing", "Bug Triage", "Agile"],
  },
];

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
  { label: "Zod", category: "data" },
  { label: "Docker", category: "infra" },
  { label: "AWS", category: "infra" },
  { label: "Git", category: "infra" },
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
    href: "https://github.com/kh-pavlo/money-manager",
  },
  {
    number: "02",
    name: "Job Hunter Bot",
    description:
      "Personal job-hunting agent: modular collector architecture across 8 job sources, cross-source deduplication and hard filtering, then an LLM evaluator + critic — Anthropic or local Ollama — ships a ranked shortlist to Telegram on schedule.",
    tags: ["Bun", "TypeScript", "Drizzle ORM", "SQLite", "LLM Integration", "Telegram Bot API"],
    year: "2026",
    status: "Personal",
  },
];

export const SOCIALS: Social[] = [
  { name: "GitHub", href: "https://github.com/kh-pavlo" },
  { name: "LinkedIn", href: "https://linkedin.com/in/pavlo-khytrov" },
  { name: "Twitter", href: "https://x.com/nuff02" },
  { name: "WhatsApp", href: "https://wa.me/kh_pavlo" },
];

export const CURRENTLY: CurrentlyItem[] = [
  { label: "Building", value: "a personal job-hunting agent that scores listings with an LLM and ships a daily shortlist to Telegram" },
  { label: "Reading", value: "Designing Data-Intensive Applications — Kleppmann" },
  { label: "Exploring", value: "LLM-as-judge evaluation pipelines — evaluator/critic scoring with few-shot examples from user feedback" },
  { label: "Open to", value: "Full-time remote roles across EU and US time zones (Frontend, Backend, or Full-Stack)." },
];
