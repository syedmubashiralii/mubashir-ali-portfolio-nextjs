import type { Metadata } from "next";
import { contact, focusAreas, projects, skillCategories } from "./portfolio";
import { packages } from "./site";

export const siteUrl = "https://syedmubashirali.com";

const profileImage = "/profile-image.png";
const profileImageUrl = `${siteUrl}${profileImage}`;
const siteName = "Syed Mubashir Ali";

export const seoKeywords = [
  "Senior Flutter Developer",
  "hire Flutter developer",
  "Flutter app development",
  "Flutter fintech developer",
  "Flutter telecom app developer",
  "Flutter POS developer",
  "Flutter web developer",
  "Dart developer",
  "mobile app developer Pakistan",
  "cross-platform app developer",
];

const leadDescription =
  "Hire a Senior Flutter Developer for production mobile, web, and desktop apps across fintech, telecom, POS, travel, healthcare, marketplaces, and app rescue work.";

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
          url: profileImage,
          width: 1024,
          height: 1024,
          alt: `${contact.name}, ${contact.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [profileImage],
    },
  };
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Hire Senior Flutter Developer | Syed Mubashir Ali",
    template: `%s | ${siteName}`,
  },
  description: leadDescription,
  keywords: seoKeywords,
  authors: [{ name: contact.name, url: siteUrl }],
  creator: contact.name,
  publisher: contact.name,
  category: "Technology",
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
    title: "Hire Senior Flutter Developer | Syed Mubashir Ali",
    description: leadDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: profileImage,
        width: 1024,
        height: 1024,
        alt: `${contact.name}, ${contact.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Senior Flutter Developer | Syed Mubashir Ali",
    description: leadDescription,
    images: [profileImage],
  },
};

export const homeMetadata = createPageMetadata({
  title: "Hire Senior Flutter Developer for Production Apps",
  description: leadDescription,
  path: "/",
});

export const portfolioMetadata = createPageMetadata({
  title: "Flutter Developer Portfolio",
  description:
    "Review Syed Mubashir Ali's Flutter experience, production projects, certifications, skills, resume, and delivery proof for senior mobile app work.",
  path: "/portfolio",
});

export const packagesMetadata = createPageMetadata({
  title: "Flutter Packages and Plugins",
  description:
    "Explore Flutter plugin development and reusable Dart packages by Syed Mubashir Ali, including native Android and iOS contact picker tooling.",
  path: "/packages",
});

export const projectsMetadata = createPageMetadata({
  title: "Flutter Apps and Product Projects",
  description:
    "Selected Flutter projects across fintech, telecom, POS, travel, healthcare, marketplaces, streaming, e-commerce, and location utilities.",
  path: "/projects",
});

export const contactMetadata = createPageMetadata({
  title: "Start a Flutter Project",
  description:
    "Start a Flutter project with Syed Mubashir Ali for app development, product delivery, Flutter Web, app rescue, or senior engineering support.",
  path: "/contact",
});

const knowsAbout = [
  "Flutter",
  "Dart",
  "Fintech apps",
  "Telecom self-care",
  "POS systems",
  "Flutter Web",
  "Firebase",
  "Mobile app architecture",
  "App Store deployment",
  "Google Play deployment",
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
    "@id": `${siteUrl}/#flutter-development-service`,
    name: "Senior Flutter app development",
    serviceType: "Flutter app development",
    provider: { "@id": `${siteUrl}/#person` },
    areaServed: "Worldwide",
    description:
      "Production Flutter app development, rescue work, performance hardening, Flutter Web dashboards, native integrations, and store release support.",
    audience: {
      "@type": "Audience",
      audienceType: "founders, product teams, agencies, and engineering teams",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Flutter engineering services",
      itemListElement: [
        "Production Flutter app builds",
        "Flutter app rescue and debugging",
        "Fintech, telecom, POS, and marketplace workflows",
        "Flutter Web admin panels",
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

> Senior Flutter Developer for production mobile, web, and desktop apps.

Hire Syed for Flutter app development, app rescue, fintech workflows, telecom self-care, POS systems, Flutter Web dashboards, Firebase products, native integrations, and store release support.

## Best-fit project work
- Production Flutter mobile apps for Android and iOS
- Flutter Web admin panels and product dashboards
- Fintech, wallet, telecom, POS, travel, healthcare, marketplace, and utility apps
- App rescue, debugging, performance hardening, and release readiness
- Native Android and iOS integrations through Flutter plugins

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
