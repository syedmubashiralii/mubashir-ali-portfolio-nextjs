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
    description: "Experience, skills, selected work, and resume.",
    href: "/portfolio",
    icon: "briefcase",
  },
  {
    title: "Flutter Packages",
    description: "Reusable Flutter plugins, libraries, and developer tools.",
    href: "/packages",
    icon: "package",
  },
  {
    title: "Apps & Projects",
    description: "Production apps and selected product work.",
    href: "/projects",
    icon: "panels",
  },
  {
    title: "Contact",
    description: "Email, WhatsApp, social profiles, and resume.",
    href: "/contact",
    icon: "mail",
  },
];

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
