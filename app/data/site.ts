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
    description: "Senior Flutter experience, skills, selected work, and resume.",
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
    description: "Production Flutter apps across fintech, POS, telecom, and more.",
    href: "/projects",
    icon: "panels",
  },
  {
    title: "Contact",
    description: "Start a Flutter project through WhatsApp, email, or LinkedIn.",
    href: "/contact",
    icon: "mail",
  },
];

export const leadServices = [
  {
    title: "Build from zero",
    description: "MVPs, production apps, Flutter Web dashboards, Firebase backends, and store releases.",
  },
  {
    title: "Rescue an app",
    description: "Debug crashes, fix slow flows, harden architecture, and get blocked releases moving again.",
  },
  {
    title: "Scale delivery",
    description: "Senior Flutter support for fintech, telecom, POS, marketplaces, and agency delivery teams.",
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
};

export const packages: FlutterPackage[] = [
  {
    slug: "system-contact-picker",
    name: "system_contact_picker",
    description:
      "Native Flutter contact picker for Android 17+, legacy Android devices, and iOS ContactsUI.",
    status: "Published",
    tags: ["Flutter", "Android", "iOS", "Native APIs"],
    githubUrl: "https://github.com/syedmubashiralii/system_contact_picker",
    pubUrl: "https://pub.dev/packages/system_contact_picker",
  },
];

export const siteNavigation = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Packages", href: "/packages" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;
