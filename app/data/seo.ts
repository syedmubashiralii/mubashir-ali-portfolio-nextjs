import type { Metadata } from "next";
import { certifications, contact, education, focusAreas, projects, skillCategories } from "./portfolio";
import { faqs, packages } from "./site";

export const siteUrl = "https://syedmubashirali.com";

const profileImage = "/profile-image.jpg";
const profileImageUrl = `${siteUrl}${profileImage}`;
const socialImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: `${contact.name}, ${contact.role}`,
};
const siteName = "Syed Mubashir Ali";
const xHandle = "@sydmubashirali";

type RoutePath = "/" | "/portfolio" | "/packages" | "/projects" | "/contact";

/** Terms every page shares. Each page adds its own via `keywords` below. */
export const coreKeywords = [
  "Syed Mubashir Ali",
  "senior Flutter developer",
  "hire Flutter developer",
  "AI-native engineer",
  "mobile app developer",
];

const homeKeywords = [
  "AI-native product engineer",
  "Flutter app development",
  "remote Flutter developer",
  "freelance Flutter developer",
  "Flutter consultant",
  "Flutter developer Pakistan",
  "Flutter developer Islamabad",
  "cross-platform app developer",
  "React Native developer",
  "native Android developer",
  "native iOS developer",
  "Agentic AI developer",
  "AI-assisted software engineer",
  "Model Context Protocol integrations",
  "MCP workflows",
  "AI coding agents",
  "Flutter app rescue",
  "Flutter performance optimization",
];

const portfolioKeywords = [
  "Flutter developer portfolio",
  "senior Flutter engineer resume",
  "Dart developer",
  "Flutter BLoC developer",
  "Clean Architecture Flutter",
  "Firebase developer",
  "Next.js developer",
  "TypeScript developer",
  "Claude Code developer",
];

const projectKeywords = [
  "Flutter app projects",
  "Flutter fintech developer",
  "fintech app developer",
  "wallet app developer",
  "Flutter desktop developer",
  "Flutter desktop POS",
  "Flutter telecom app developer",
  "telecom self-care app",
  "Flutter POS developer",
  "POS app development",
  "Flutter web developer",
  "Flutter web admin panel",
  "Plaid Flutter integration",
  "Stripe Flutter integration",
  "healthcare app developer",
  "marketplace app developer",
];

const packageKeywords = [
  "Flutter packages",
  "Flutter plugins",
  "open source Flutter",
  "pub.dev verified publisher",
  "Flutter networking package",
  "Dio networking runtime",
  "nexio Flutter",
  "system_contact_picker",
  "Flutter contact picker",
  "Android 17 contact picker",
  "native Flutter plugin developer",
];

const contactKeywords = [
  "hire senior Flutter developer",
  "hire mobile app developer",
  "hire Flutter consultant",
  "Flutter developer for hire",
  "start a mobile app project",
  "Flutter app rescue services",
  "hire AI-native engineer",
];

const leadDescription =
  "Senior Flutter and AI-native product engineer building fintech, telecom, and POS apps. 5+ years, 20+ production apps. Hire for new builds and app rescue.";

function routeUrl(path: RoutePath) {
  return `${siteUrl}${path === "/" ? "" : path}`;
}

function absoluteUrl(url: string) {
  return url.startsWith("/") ? `${siteUrl}${url}` : url;
}

function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: RoutePath;
  keywords: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: [...coreKeywords, ...keywords],
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: routeUrl(path),
      siteName,
      type: "website",
      locale: "en_US",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      creator: xHandle,
      title: `${title} | ${siteName}`,
      description,
      images: [socialImage.url],
    },
  };
}

const homeTitle = "Senior Flutter & AI-Native Engineer";

export const homeMetadata: Metadata = {
  ...createPageMetadata({
    title: homeTitle,
    description: leadDescription,
    path: "/",
    keywords: homeKeywords,
  }),
  // A layout's title template skips pages in its own segment, so "/" needs the full title.
  title: { absolute: `${homeTitle} | ${siteName}` },
};

export const portfolioMetadata = createPageMetadata({
  title: "Flutter Engineer Portfolio & Resume",
  description:
    "Syed Mubashir Ali's experience across Axian Group, fintech, telecom, and POS products, plus skills, certifications, shipped projects, and a downloadable resume.",
  path: "/portfolio",
  keywords: portfolioKeywords,
});

export const packagesMetadata = createPageMetadata({
  title: "Open-Source Flutter Packages",
  description:
    "Flutter packages from verified pub.dev publisher syedmubashirali.com, including the Nexio networking runtime for Dio and a native Android and iOS contact picker.",
  path: "/packages",
  keywords: packageKeywords,
});

export const projectsMetadata = createPageMetadata({
  title: "Flutter Projects: Fintech, Telecom & POS",
  description:
    "Selected Flutter apps across fintech, telecom, POS, travel, healthcare, marketplaces, streaming, e-commerce, and location utilities by Syed Mubashir Ali.",
  path: "/projects",
  keywords: projectKeywords,
});

export const contactMetadata = createPageMetadata({
  title: "Hire a Senior Flutter Developer",
  description:
    "Start a Flutter, native mobile, web, or AI-assisted project with Syed Mubashir Ali. Reach out on WhatsApp or email about a new build, app rescue, or senior support.",
  path: "/contact",
  keywords: contactKeywords,
});

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `Senior Flutter & AI-Native Engineer | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description: leadDescription,
  keywords: [...coreKeywords, ...homeKeywords],
  authors: [{ name: contact.name, url: siteUrl }],
  creator: contact.name,
  publisher: contact.name,
  category: "Technology",
  classification: "Software engineering portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `Senior Flutter & AI-Native Engineer | ${siteName}`,
    description: leadDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    creator: xHandle,
    title: `Senior Flutter & AI-Native Engineer | ${siteName}`,
    description: leadDescription,
    images: [socialImage.url],
  },
};

const knowsAbout = [
  "Flutter",
  "Dart",
  "Fintech apps",
  "Telecom self-care",
  "POS systems",
  "Flutter Desktop",
  "Flutter Web",
  "React Native",
  "Native Android development",
  "Native iOS development",
  "Web app development",
  "Desktop app development",
  "Firebase",
  "Mobile app architecture",
  "App Store deployment",
  "Google Play deployment",
  "Agentic AI",
  "Model Context Protocol",
  "AI coding agents",
  "AI-assisted software development",
];

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: contact.name,
    jobTitle: contact.role,
    description: leadDescription,
    url: siteUrl,
    image: profileImageUrl,
    email: `mailto:${contact.email}`,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.institution,
    },
    knowsLanguage: ["en", "ur"],
    knowsAbout,
    hasOccupation: {
      "@type": "Occupation",
      name: contact.role,
      skills: skillCategories.flatMap((category) => category.skills).slice(0, 32),
    },
    hasCredential: certifications.map((certification) => ({
      "@type": "EducationalOccupationalCredential",
      name: certification.title,
      recognizedBy: {
        "@type": "Organization",
        name: certification.issuer,
      },
      url: absoluteUrl(certification.link),
      ...(certification.credentialId ? { identifier: certification.credentialId } : {}),
    })),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "project inquiries",
      email: contact.email,
      telephone: contact.phone,
      availableLanguage: ["en", "ur"],
    },
    sameAs: [
      contact.github,
      contact.linkedin,
      contact.instagram,
      contact.x,
      "https://pub.dev/publishers/syedmubashirali.com",
    ],
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    inLanguage: "en",
    description: leadDescription,
    about: ["Flutter app development", "Production mobile apps", ...focusAreas],
    publisher: { "@id": `${siteUrl}/#person` },
  };
}

export function buildServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#app-development-service`,
    name: "Senior app engineering and AI-assisted product delivery",
    serviceType: "Mobile, web, desktop, Agentic AI, and MCP-enabled software development",
    provider: { "@id": `${siteUrl}/#person` },
    areaServed: "Worldwide",
    description:
      "Production Flutter, native mobile, web, and desktop engineering with Agentic AI and MCP workflows, app rescue, performance hardening, and release support.",
    audience: {
      "@type": "Audience",
      audienceType: "founders, product teams, agencies, and engineering teams",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "App engineering services",
      itemListElement: [
        "Production Flutter app builds",
        "React Native mobile app development",
        "Native Android and iOS development",
        "Web and desktop application development",
        "Flutter app rescue and debugging",
        "Fintech, telecom, POS, and marketplace workflows",
        "Flutter Web admin panels",
        "Agentic AI engineering workflows",
        "Model Context Protocol integrations",
        "App Store and Google Play release support",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
  };
}

export function buildProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/portfolio#profile`,
    url: `${siteUrl}/portfolio`,
    name: portfolioMetadata.title,
    mainEntity: { "@id": `${siteUrl}/#person` },
  };
}

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(name: string, path: Exclude<RoutePath, "/">) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name, item: routeUrl(path) },
    ],
  };
}

export function buildProjectListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/projects#project-list`,
    name: "Flutter app development projects",
    description: projectsMetadata.description,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        applicationCategory: project.category,
        runtimePlatform: "Flutter",
        keywords: project.tags.join(", "),
        url: project.liveLink || `${siteUrl}/projects`,
        author: { "@id": `${siteUrl}/#person` },
      },
    })),
  };
}

export function buildPackageListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/packages#package-list`,
    name: "Flutter packages and plugins",
    description: packagesMetadata.description,
    itemListElement: packages.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareSourceCode",
        name: item.name,
        description: item.description,
        programmingLanguage: "Dart",
        codeRepository: item.githubUrl,
        url: item.pubUrl || `${siteUrl}/packages`,
        version: item.version,
        author: { "@id": `${siteUrl}/#person` },
        publisher: item.publisher
          ? {
              "@type": "Organization",
              name: item.publisher,
              url: `https://pub.dev/publishers/${item.publisher}`,
            }
          : undefined,
        keywords: item.tags.join(", "),
      },
    })),
  };
}

export function buildLlmsText() {
  const proof = projects
    .slice(0, 6)
    .map((project) => `- ${project.title}: ${project.category}. ${project.description}`)
    .join("\n");

  return `# Syed Mubashir Ali

> Senior Flutter and AI-native product engineer with 5+ years of experience and 20+ production apps across fintech, telecom, and POS.

Hire Syed for Flutter and React Native apps, native iOS and Android development, web and Flutter desktop products, Agentic AI and MCP workflows, app rescue, fintech systems, telecom self-care, POS platforms, and store release support.

## Best-fit project work
- Production Flutter mobile apps for Android and iOS
- React Native and native Android or iOS development
- Flutter Web admin panels and product dashboards
- Flutter desktop apps and responsive web applications
- Fintech, wallet, telecom, POS, travel, healthcare, marketplace, and utility apps
- App rescue, debugging, performance hardening, and release readiness
- Native Android and iOS integrations through Flutter plugins
- Agentic AI workflows with senior human review and production accountability
- MCP integrations that connect AI agents with repositories, tools, documentation, and services

## Priority pages
- [Hire Syed](${siteUrl}/contact): WhatsApp, email, phone, and social contact paths.
- [Portfolio](${siteUrl}/portfolio): Experience, resume, skills, certifications, and project proof.
- [Apps and projects](${siteUrl}/projects): Selected product work by domain.
- [Flutter packages](${siteUrl}/packages): Reusable Flutter plugins and Dart developer tools.

## Selected proof
${proof}

## Contact
- Email: ${contact.email}
- WhatsApp: https://wa.me/${contact.whatsapp}
- LinkedIn: ${contact.linkedin}
- GitHub: ${contact.github}
`;
}
