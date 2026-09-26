export type DirectoryIcon = "briefcase" | "package" | "panels" | "mail";

export type DirectoryLink = {
  title: string;
  description: string;
  href: "/portfolio" | "/packages" | "/projects" | "/contact";
  icon: DirectoryIcon;
};

export const directoryLinks: DirectoryLink[] = [
  {
    title: "Portfolio",
    description: "Experience, production engineering, AI-native workflow, certifications, and resume.",
    href: "/portfolio",
    icon: "briefcase",
  },
  {
    title: "Flutter Packages",
    description: "Reusable Flutter plugins, native integrations, and Dart tools.",
    href: "/packages",
    icon: "package",
  },
  {
    title: "Apps & Projects",
    description: "Production mobile, web, and desktop apps across fintech, POS, telecom, and more.",
    href: "/projects",
    icon: "panels",
  },
  {
    title: "Contact",
    description: "Start an app, Agentic AI, automation, or product engineering conversation.",
    href: "/contact",
    icon: "mail",
  },
];

export const leadServices = [
  {
    title: "Product engineering",
    description: "Flutter, native mobile, React, Next.js, and desktop products from architecture to production.",
  },
  {
    title: "Agentic AI & MCPs",
    description: "AI-assisted development and Model Context Protocol workflows that connect tools, context, and action.",
  },
  {
    title: "Build, rescue & scale",
    description: "Senior ownership for new builds, complex codebases, difficult bugs, performance, and blocked releases.",
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
    version: null,
  },
];

export const siteNavigation = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Packages", href: "/packages" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;
