import type { Metadata } from "next";
import { certifications, contact, focusAreas, projects, skillCategories } from "./portfolio";
import { packages } from "./site";

export const siteUrl = "https://syedmubashirali.com";

const profileImage = "/profile-image.png";
const profileImageUrl = `${siteUrl}${profileImage}`;
const socialImage = "/og.png";
const siteName = "Syed Mubashir Ali";

export const seoKeywords = [
  "Senior Mobile App Developer",
  "mobile app developer",
  "Senior Flutter Developer",
  "hire Flutter developer",
  "Flutter app development",
  "React Native developer",
  "native Android developer",
  "native iOS developer",
  "web app developer",
  "desktop app developer",
  "Flutter fintech developer",
  "Flutter telecom app developer",
  "Flutter POS developer",
  "Flutter web developer",
  "Dart developer",
  "mobile app developer Pakistan",
  "cross-platform app developer",
  "Agentic AI developer",
  "AI-assisted software engineer",
  "Model Context Protocol developer",
  "MCP integrations",
  "AI coding agents",
];

const leadDescription =
  "Hire a senior app engineer for Flutter, native mobile, Next.js, Agentic AI and MCP workflows, production delivery, and complex app rescue work.";

function routeUrl(path: string) {
  return `${siteUrl}${path === "/" ? "" : path}`;
}

function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: "/" | "/portfolio" | "/packages" | "/projects" | "/contact";
}): Metadata {
  const url = routeUrl(path);

  return {
    title,
    description,
    keywords: seoKeywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      type: path === "/portfolio" ? "profile" : "website",
      locale: "en_US",
      images: [
        {
          url: socialImage,
          width: 1734,
          height: 907,
          alt: `${contact.name} — Senior App Engineer, Agentic AI and MCPs`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [socialImage],
    },
  };
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Senior App & Agentic AI Engineer | Syed Mubashir Ali",
    template: `%s | ${siteName}`,
  },
  description: leadDescription,
  keywords: seoKeywords,
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
    title: "Senior App & Agentic AI Engineer | Syed Mubashir Ali",
    description: leadDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: socialImage,
        width: 1734,
        height: 907,
        alt: `${contact.name} — Senior App Engineer, Agentic AI and MCPs`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior App & Agentic AI Engineer | Syed Mubashir Ali",
    description: leadDescription,
    images: [socialImage],
  },
};

export const homeMetadata = createPageMetadata({
  title: "Senior App Engineer for Flutter, Agentic AI & MCPs",
  description: leadDescription,
  path: "/",
});

export const portfolioMetadata = createPageMetadata({
  title: "App Engineering, Agentic AI & MCP Portfolio",
  description:
    "Explore Syed Mubashir Ali's app engineering experience, Agentic AI and MCP workflow, production projects, certifications, skills, and delivery proof.",
  path: "/portfolio",
});

export const packagesMetadata = createPageMetadata({
  title: "Flutter Packages and Plugins",
  description:
    "Explore Flutter packages by verified publisher syedmubashirali.com, including the Nexio networking runtime and native Android and iOS contact picker tooling.",
  path: "/packages",
});

export const projectsMetadata = createPageMetadata({
  title: "Flutter Apps and Product Projects",
  description:
    "Selected Flutter projects across fintech, telecom, POS, travel, healthcare, marketplaces, streaming, e-commerce, and location utilities.",
  path: "/projects",
});

export const contactMetadata = createPageMetadata({
  title: "Start an App, Agentic AI or MCP Project",
  description:
    "Start a mobile, web, desktop, Agentic AI, or MCP-enabled project with Syed Mubashir Ali for new product delivery, app rescue, or senior engineering support.",
  path: "/contact",
});

const knowsAbout = [
  "Flutter",
  "Dart",
  "Fintech apps",
  "Telecom self-care",
  "POS systems",
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
      url: certification.link,
      ...(certification.credentialId ? { identifier: certification.credentialId } : {}),
    })),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "project inquiries",
      email: contact.email,
      telephone: contact.phone,
      availableLanguage: ["en", "ur"],
    },
    sameAs: [contact.github, contact.linkedin, contact.instagram, contact.x],
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
        programmingLanguage: "Dart",
        runtimePlatform: "Flutter",
        keywords: project.tags.join(", "),
        url: project.liveLink || `${siteUrl}/projects`,
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

> Senior app engineer with deep Flutter expertise and a confident Agentic AI and MCP-enabled workflow.

Hire Syed for Flutter and React Native apps, native iOS and Android development, web and desktop products, Agentic AI and MCP workflows, app rescue, fintech systems, telecom self-care, POS platforms, and store release support.

## Best-fit project work
- Production Flutter mobile apps for Android and iOS
- React Native and native Android or iOS development
- Flutter Web admin panels and product dashboards
- Responsive web and desktop applications
- Fintech, wallet, telecom, POS, travel, healthcare, marketplace, and utility apps
- App rescue, debugging, performance hardening, and release readiness
- Native Android and iOS integrations through Flutter plugins
- Agentic AI workflows with senior human review and production accountability
- MCP integrations that connect AI agents with repositories, tools, documentation, and services

## Priority pages
- [Start a Flutter project](${siteUrl}/contact): Fast WhatsApp, email, phone, and social contact paths.
- [Portfolio](${siteUrl}/portfolio): Experience, resume, skills, certifications, and project proof.
- [Apps and projects](${siteUrl}/projects): Selected shipped product work by domain.
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
