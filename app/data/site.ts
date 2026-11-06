export const leadServices = [
  {
    title: "Product engineering",
    description: "Flutter apps for mobile, web, and desktop, plus native mobile and Next.js products, from architecture to production.",
    points: ["New Flutter and React Native apps", "Native iOS and Android integrations", "Flutter Web and desktop apps"],
  },
  {
    title: "Agentic AI & MCPs",
    description: "AI-assisted delivery and Model Context Protocol workflows that connect tools, context, and action.",
    points: ["AI coding agents with senior review", "MCP integrations for your tools", "Shorter build and feedback loops"],
  },
  {
    title: "Build, rescue & scale",
    description: "Senior ownership for complex codebases, difficult bugs, performance problems, and blocked releases.",
    points: ["App takeovers and debugging", "Performance hardening", "App Store and Google Play releases"],
  },
] as const;

export const industries = [
  "Fintech & wallets",
  "Telecom self-care",
  "Student platforms",
  "Enterprise POS",
  "Travel",
  "Healthcare",
  "Marketplaces",
  "Streaming",
  "E-commerce",
  "ML & media",
] as const;

/** Rendered visibly on the home page and mirrored in FAQPage JSON-LD. */
export const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "New product builds, takeovers of existing apps, and senior engineering support. My core is Flutter on mobile, web, and desktop, and I also work in React Native, native iOS and Android, and Next.js.",
  },
  {
    question: "Can you take over an existing or struggling app?",
    answer:
      "Yes. Bring me the difficult codebase, the hard-to-reproduce bug, the performance problem, or the release that keeps getting blocked. I work through the code first, then fix it in small verified steps.",
  },
  {
    question: "How do you use AI in development, and who is accountable for the code?",
    answer:
      "I use AI coding agents and Model Context Protocol tools to explore codebases, plan changes, and shorten feedback loops. I review and test what ships, and architecture, security, and production decisions stay with me.",
  },
  {
    question: "Which industries have you shipped apps for?",
    answer:
      "Fintech and wallets, telecom self-care, enterprise POS, student super apps, travel, healthcare, marketplaces, streaming, e-commerce, and ML-powered media tools.",
  },
  {
    question: "Do you work remotely with international teams?",
    answer:
      "Yes. I'm based in Islamabad, Pakistan, and I've worked on products for Africa, the UAE, and Australia. I work in English and Urdu.",
  },
  {
    question: "Do you handle App Store and Google Play releases?",
    answer:
      "Yes. Release builds, store deployment, and production support are part of how I deliver. I've published 20+ Flutter apps to Google Play and the Apple App Store.",
  },
] as const;

export type PackageStatus = "Published" | "In development" | "Coming soon";

export type FlutterPackage = {
  slug: string;
  name: string;
  description: string;
  status: PackageStatus;
  tags: string[];
  githubUrl: string | null;
  pubUrl: string | null;
  publisher: string | null;
  version: string | null;
  featured?: boolean;
};

export const packages: FlutterPackage[] = [
  {
    slug: "nexio",
    name: "nexio",
    description:
      "A production-grade Flutter networking runtime for Dio with environments, encryption, isolate parsing, retries, caching, offline queues, transfers, and observability.",
    status: "Published",
    tags: ["Flutter", "Dio", "Networking", "Caching", "Observability"],
    githubUrl: "https://github.com/syedmubashiralii/nexio",
    pubUrl: "https://pub.dev/packages/nexio",
    publisher: "syedmubashirali.com",
    version: "0.2.0",
    featured: true,
  },
  {
    slug: "system-contact-picker",
    name: "system_contact_picker",
    description:
      "Native Flutter contact picker for Android 17+, legacy Android devices, and iOS ContactsUI.",
    status: "Published",
    tags: ["Flutter", "Android", "iOS", "Native APIs"],
    githubUrl: "https://github.com/syedmubashiralii/system_contact_picker",
    pubUrl: "https://pub.dev/packages/system_contact_picker",
    publisher: "syedmubashirali.com",
    version: "0.0.4",
  },
];

export const siteNavigation = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Projects", href: "/projects" },
  { label: "Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
] as const;

export const portfolioSections = [
  { label: "Overview", href: "/portfolio#home" },
  { label: "About", href: "/portfolio#about" },
  { label: "AI & MCP", href: "/portfolio#ai" },
  { label: "Experience", href: "/portfolio#experience" },
  { label: "Skills", href: "/portfolio#skills" },
  { label: "Credentials", href: "/portfolio#credentials" },
  { label: "Projects", href: "/portfolio#projects" },
  { label: "Resume", href: "/portfolio#resume" },
  { label: "Contact", href: "/portfolio#contact" },
] as const;
