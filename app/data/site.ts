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
    description: "Mobile, web, and desktop app experience, skills, certifications, and resume.",
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
    description: "Start a mobile, web, or desktop app project through WhatsApp, email, or LinkedIn.",
    href: "/contact",
    icon: "mail",
  },
];

export const leadServices = [
  {
    title: "Mobile apps",
    description: "Flutter, React Native, native Android, and native iOS products from MVP to store release.",
  },
  {
    title: "Web & desktop",
    description: "Responsive web apps, admin dashboards, and desktop products with production-ready architecture.",
  },
  {
    title: "Build, rescue & scale",
    description: "Senior engineering support for new builds, difficult bugs, performance, and blocked releases.",
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
