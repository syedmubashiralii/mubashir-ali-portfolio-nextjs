# Personal Domain Directory Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the existing Vercel-hosted portfolio into a personal-domain directory with dedicated portfolio, package, project, and contact routes.

**Architecture:** Keep one Next.js App Router project and move the existing portfolio page under `/portfolio`. The root layout will provide theme and metadata foundations only; a lightweight shared site shell will wrap the directory-style pages, while a nested portfolio layout will own the existing fixed portfolio navigation.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4, Lucide React, next-themes, Vitest, Testing Library, jsdom

---

## File Map

**Create**

- `app/data/site.ts` - top-level route and package catalog data.
- `app/data/site.test.ts` - route and package data contracts.
- `app/components/site/SiteHeader.tsx` - shared directory-site header.
- `app/components/site/SiteShell.tsx` - shared header/main/footer wrapper.
- `app/components/site/SiteHeader.test.tsx` - shared navigation behavior.
- `app/components/site/DirectoryCard.tsx` - accessible destination card.
- `app/page.test.tsx` - directory homepage behavior.
- `app/portfolio/layout.tsx` - portfolio-only navigation layout.
- `app/portfolio/page.tsx` - relocated existing portfolio.
- `app/components/Navbar.test.tsx` - portfolio route-aware anchor contracts.
- `app/packages/page.tsx` - package catalog route and metadata.
- `app/packages/page.test.tsx` - package status and link behavior.
- `app/projects/page.tsx` - standalone projects route and metadata.
- `app/contact/page.tsx` - standalone contact route and metadata.
- `app/routes.test.tsx` - project/contact route smoke tests.
- `app/sitemap.ts` - canonical sitemap.
- `app/robots.ts` - robots policy.
- `app/seo.test.ts` - sitemap, robots, and redirect contracts.
- `test/setup.tsx` - jsdom and Next component test setup.
- `vitest.config.ts` - Vitest configuration.
- `docs/deployment/custom-domain.md` - exact Vercel and GoDaddy handoff.

**Modify**

- `app/page.tsx` - replace the old portfolio root with the approved directory.
- `app/layout.tsx` - remove global portfolio nav and add canonical metadata base.
- `app/components/Navbar.tsx` - make portfolio anchors route-aware.
- `app/components/Hero.tsx` - make portfolio section links route-aware.
- `app/components/Projects.tsx` - send contact CTAs to `/contact`.
- `next.config.ts` - redirect `www` requests to the apex hostname.
- `package.json` and `package-lock.json` - add test tooling and scripts.

---

### Task 1: Add the test harness and typed site data

**Files:**

- Create: `vitest.config.ts`
- Create: `test/setup.tsx`
- Create: `app/data/site.ts`
- Create: `app/data/site.test.ts`
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Install the test dependencies**

Run:

```bash
npm install --save-dev vitest jsdom @testing-library/react @testing-library/jest-dom
```

Expected: npm completes successfully and updates `package.json` and
`package-lock.json`.

- [ ] **Step 2: Add test scripts**

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

- [ ] **Step 3: Configure Vitest**

Create `vitest.config.ts`:

```ts
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(rootDir),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./test/setup.tsx"],
    include: ["app/**/*.test.{ts,tsx}"],
  },
});
```

Create `test/setup.tsx`:

```tsx
import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({
    alt,
    fill: _fill,
    priority: _priority,
    sizes: _sizes,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & {
    fill?: boolean;
    priority?: boolean;
    sizes?: string;
  }) => React.createElement("img", { alt, ...props }),
}));
```

- [ ] **Step 4: Write the failing site-data contract test**

Create `app/data/site.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { directoryLinks, packages } from "./site";

describe("site data", () => {
  it("exposes the four approved directory destinations", () => {
    expect(directoryLinks.map((item) => item.href)).toEqual([
      "/portfolio",
      "/packages",
      "/projects",
      "/contact",
    ]);
  });

  it("publishes only confirmed package links", () => {
    expect(packages).toContainEqual(
      expect.objectContaining({
        slug: "system-contact-picker",
        status: "In development",
        githubUrl: "https://github.com/syedmubashiralii/system_contact_picker",
        pubUrl: null,
      }),
    );
  });
});
```

- [ ] **Step 5: Run the test to verify it fails**

Run:

```bash
npm test -- app/data/site.test.ts
```

Expected: FAIL because `app/data/site.ts` does not exist.

- [ ] **Step 6: Implement the typed site data**

Create `app/data/site.ts`:

```ts
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
    status: "In development",
    tags: ["Flutter", "Android", "iOS", "Native APIs"],
    githubUrl: "https://github.com/syedmubashiralii/system_contact_picker",
    pubUrl: null,
  },
];

export const siteNavigation = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Packages", href: "/packages" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;
```

- [ ] **Step 7: Run the data test**

Run:

```bash
npm test -- app/data/site.test.ts
```

Expected: PASS with 2 tests.

- [ ] **Step 8: Commit the test foundation**

```bash
git add package.json package-lock.json vitest.config.ts test/setup.tsx app/data/site.ts app/data/site.test.ts
git commit -m "test: add site route data contracts"
```

---

### Task 2: Build the shared site shell and metadata foundation

**Files:**

- Create: `app/components/site/SiteHeader.tsx`
- Create: `app/components/site/SiteShell.tsx`
- Create: `app/components/site/SiteHeader.test.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Write the failing shared-header test**

Create `app/components/site/SiteHeader.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SiteHeader from "./SiteHeader";

describe("SiteHeader", () => {
  it("links to every top-level route", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "Syed Mubashir Ali" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Portfolio" })).toHaveAttribute("href", "/portfolio");
    expect(screen.getByRole("link", { name: "Packages" })).toHaveAttribute("href", "/packages");
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("href", "/projects");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact");
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm test -- app/components/site/SiteHeader.test.tsx
```

Expected: FAIL because `SiteHeader` does not exist.

- [ ] **Step 3: Implement the shared header**

Create `app/components/site/SiteHeader.tsx`:

```tsx
import Link from "next/link";
import { siteNavigation } from "@/app/data/site";

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-bold text-slate-950 dark:text-white">
          Syed Mubashir Ali
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap justify-end gap-x-5 gap-y-2">
          {siteNavigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
```

- [ ] **Step 4: Implement the shared site shell**

Create `app/components/site/SiteShell.tsx`:

```tsx
import SiteHeader from "./SiteHeader";

export default function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <SiteHeader />
      <main>{children}</main>
      <footer className="border-t border-slate-200 px-4 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        &copy; {new Date().getFullYear()} Syed Mubashir Ali
      </footer>
    </div>
  );
}
```

- [ ] **Step 5: Remove portfolio navigation from the root layout**

Replace `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syedmubashirali.com"),
  title: {
    default: "Syed Mubashir Ali | Senior Flutter Developer",
    template: "%s | Syed Mubashir Ali",
  },
  description:
    "Senior Flutter Developer building production mobile, web, and desktop products, Flutter packages, and cross-platform applications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-900 antialiased transition-colors duration-300 ease-in-out dark:bg-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Run the header test**

Run:

```bash
npm test -- app/components/site/SiteHeader.test.tsx
```

Expected: PASS.

- [ ] **Step 7: Run lint**

Run:

```bash
npm run lint
```

Expected: PASS with no ESLint errors.

- [ ] **Step 8: Commit the shared shell**

```bash
git add app/layout.tsx app/components/site/SiteHeader.tsx app/components/site/SiteShell.tsx app/components/site/SiteHeader.test.tsx
git commit -m "feat: add shared personal site shell"
```

---

### Task 3: Replace the root page with the Professional Directory

**Files:**

- Create: `app/components/site/DirectoryCard.tsx`
- Create: `app/page.test.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Write the failing homepage test**

Create `app/page.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the approved professional directory", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: "Everything I build, in one place." })).toBeVisible();
    expect(screen.getByText("Available for selected opportunities")).toBeVisible();
    expect(screen.getByRole("link", { name: /Portfolio/ })).toHaveAttribute("href", "/portfolio");
    expect(screen.getByRole("link", { name: /Flutter Packages/ })).toHaveAttribute("href", "/packages");
    expect(screen.getByRole("link", { name: /Apps & Projects/ })).toHaveAttribute("href", "/projects");
    expect(screen.getByRole("link", { name: /Contact/ })).toHaveAttribute("href", "/contact");
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm test -- app/page.test.tsx
```

Expected: FAIL because the current root still renders the portfolio.

- [ ] **Step 3: Implement the reusable directory card**

Create `app/components/site/DirectoryCard.tsx`:

```tsx
import { ArrowUpRight, BriefcaseBusiness, LayoutGrid, Mail, PackageOpen } from "lucide-react";
import Link from "next/link";
import type { DirectoryLink } from "@/app/data/site";

const icons = {
  briefcase: BriefcaseBusiness,
  package: PackageOpen,
  panels: LayoutGrid,
  mail: Mail,
};

export default function DirectoryCard({ item }: Readonly<{ item: DirectoryLink }>) {
  const Icon = icons[item.icon];

  return (
    <Link
      href={item.href}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-900/10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700"
    >
      <div className="flex items-start justify-between gap-5">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
          <Icon size={20} />
        </span>
        <ArrowUpRight className="text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" size={19} />
      </div>
      <h2 className="mt-8 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
    </Link>
  );
}
```

- [ ] **Step 4: Implement the approved homepage**

Replace `app/page.tsx` with:

```tsx
import type { Metadata } from "next";
import { BadgeCheck, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DirectoryCard from "@/app/components/site/DirectoryCard";
import SiteShell from "@/app/components/site/SiteShell";
import { contact } from "@/app/data/portfolio";
import { directoryLinks } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Developer, Packages, and Projects",
  description:
    "Explore Syed Mubashir Ali's Flutter portfolio, open-source packages, production projects, and contact details.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Syed Mubashir Ali | Senior Flutter Developer",
    description: "Portfolio, Flutter packages, production projects, and contact details.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)]" />
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-xl dark:border-slate-900">
              <Image src="/profile-image.png" alt={contact.name} fill priority sizes="96px" className="object-cover" />
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300">
              <BadgeCheck size={14} />
              Available for selected opportunities
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
              Senior Flutter Developer
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
              Everything I build, in one place.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
              Explore my professional experience, reusable Flutter packages, production apps, and ways to work with me.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {directoryLinks.map((item) => (
              <DirectoryCard key={item.href} item={item} />
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-3">
            <Link href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <Github size={18} />
            </Link>
            <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
```

- [ ] **Step 5: Run the homepage test**

Run:

```bash
npm test -- app/page.test.tsx
```

Expected: PASS.

- [ ] **Step 6: Commit the directory homepage**

```bash
git add app/page.tsx app/page.test.tsx app/components/site/DirectoryCard.tsx
git commit -m "feat: add professional directory homepage"
```

---

### Task 4: Move the existing portfolio to `/portfolio`

**Files:**

- Create: `app/portfolio/layout.tsx`
- Create: `app/portfolio/page.tsx`
- Create: `app/components/Navbar.test.tsx`
- Modify: `app/components/Navbar.tsx`
- Modify: `app/components/Hero.tsx`
- Modify: `app/components/Projects.tsx`

- [ ] **Step 1: Write failing portfolio navigation tests**

Create `app/components/Navbar.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("uses route-aware portfolio anchors", () => {
    render(<Navbar />);

    expect(screen.getAllByRole("link", { name: "Home" })[0]).toHaveAttribute("href", "/portfolio#home");
    expect(screen.getAllByRole("link", { name: "Projects" })[0]).toHaveAttribute("href", "/portfolio#projects");
    expect(screen.getAllByRole("link", { name: "Contact" })[0]).toHaveAttribute("href", "/portfolio#contact");
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm test -- app/components/Navbar.test.tsx
```

Expected: FAIL because the links still use fragment-only URLs.

- [ ] **Step 3: Create the portfolio layout**

Create `app/portfolio/layout.tsx`:

```tsx
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Professional experience, skills, projects, certifications, and resume of Senior Flutter Developer Syed Mubashir Ali.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Syed Mubashir Ali",
    description: "Professional Flutter experience, selected work, and resume.",
    url: "/portfolio",
    type: "profile",
  },
};

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
```

- [ ] **Step 4: Relocate the existing portfolio page**

Create `app/portfolio/page.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import About from "@/app/components/About";
import ContactSection from "@/app/components/ContactSection";
import Hero from "@/app/components/Hero";
import Journey from "@/app/components/Journey";
import Projects from "@/app/components/Projects";
import ResumeViewer from "@/app/components/ResumeViewer";
import Skills from "@/app/components/Skills";

export default function PortfolioPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 520);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-50">
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <ResumeViewer />
      <ContactSection />

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-slate-950 text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-200"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
```

- [ ] **Step 5: Make portfolio links route-aware**

In `app/components/Navbar.tsx`, replace `navLinks` with:

```ts
const navLinks = [
  { name: "Home", href: "/portfolio#home" },
  { name: "About", href: "/portfolio#about" },
  { name: "Experience", href: "/portfolio#experience" },
  { name: "Skills", href: "/portfolio#skills" },
  { name: "Projects", href: "/portfolio#projects" },
  { name: "Resume", href: "/portfolio#resume" },
  { name: "Contact", href: "/portfolio#contact" },
];
```

Also change the brand link:

```tsx
<Link href="/portfolio#home">Syed Mubashir Ali</Link>
```

In `app/components/Hero.tsx`, change:

```tsx
<Link href="/portfolio#contact">
```

and:

```tsx
<Link href="/portfolio#projects">View Projects</Link>
```

In `app/components/Projects.tsx`, change the contact CTA to:

```tsx
<Link href="/contact">
  Discuss Similar Work
</Link>
```

- [ ] **Step 6: Run portfolio navigation tests**

Run:

```bash
npm test -- app/components/Navbar.test.tsx
```

Expected: PASS.

- [ ] **Step 7: Run the build**

Run:

```bash
npm run build
```

Expected: PASS and route output includes `/portfolio`.

- [ ] **Step 8: Commit the portfolio migration**

```bash
git add app/portfolio app/components/Navbar.tsx app/components/Navbar.test.tsx app/components/Hero.tsx app/components/Projects.tsx
git commit -m "feat: move portfolio to dedicated route"
```

---

### Task 5: Add the Flutter packages catalog

**Files:**

- Create: `app/packages/page.tsx`
- Create: `app/packages/page.test.tsx`

- [ ] **Step 1: Write the failing package-page tests**

Create `app/packages/page.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PackagesPage from "./page";

describe("PackagesPage", () => {
  it("shows the confirmed package and honest publication status", () => {
    render(<PackagesPage />);

    expect(screen.getByRole("heading", { name: "Flutter packages and developer tools." })).toBeVisible();
    expect(screen.getByText("system_contact_picker")).toBeVisible();
    expect(screen.getByText("In development")).toBeVisible();
    expect(screen.getByRole("link", { name: "View source" })).toHaveAttribute(
      "href",
      "https://github.com/syedmubashiralii/system_contact_picker",
    );
    expect(screen.queryByRole("link", { name: "View on pub.dev" })).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm test -- app/packages/page.test.tsx
```

Expected: FAIL because the route does not exist.

- [ ] **Step 3: Implement the packages page**

Create `app/packages/page.tsx`:

```tsx
import type { Metadata } from "next";
import { ExternalLink, Github, PackageOpen } from "lucide-react";
import Link from "next/link";
import SiteShell from "@/app/components/site/SiteShell";
import { packages } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Flutter Packages",
  description: "Flutter plugins, packages, and reusable developer tools built by Syed Mubashir Ali.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Flutter Packages | Syed Mubashir Ali",
    description: "Cross-platform Flutter plugins and reusable developer tools.",
    url: "/packages",
    type: "website",
  },
};

export default function PackagesPage() {
  return (
    <SiteShell>
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300">
            Packages
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Flutter packages and developer tools.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Cross-platform plugins designed around practical production requirements and clear APIs.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {packages.map((item) => (
              <article key={item.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-600 text-white">
                    <PackageOpen size={22} />
                  </span>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                    {item.status}
                  </span>
                </div>
                <h2 className="mt-7 text-2xl font-bold text-slate-950 dark:text-white">{item.name}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  {item.githubUrl && (
                    <Link href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">
                      <Github size={15} /> View source
                    </Link>
                  )}
                  {item.pubUrl && (
                    <Link href={item.pubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                      View on pub.dev <ExternalLink size={15} />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
```

- [ ] **Step 4: Run package-page tests**

Run:

```bash
npm test -- app/packages/page.test.tsx
```

Expected: PASS.

- [ ] **Step 5: Commit the package catalog**

```bash
git add app/packages
git commit -m "feat: add Flutter packages catalog"
```

---

### Task 6: Add standalone projects and contact routes

**Files:**

- Create: `app/projects/page.tsx`
- Create: `app/contact/page.tsx`
- Create: `app/routes.test.tsx`

- [ ] **Step 1: Write failing route smoke tests**

Create `app/routes.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactPage from "./contact/page";
import ProjectsPage from "./projects/page";

describe("top-level content routes", () => {
  it("renders projects from the shared portfolio data", () => {
    render(<ProjectsPage />);
    expect(screen.getByRole("heading", { name: "Selected work from shipped product environments." })).toBeVisible();
    expect(screen.getByText("Neo One")).toBeVisible();
  });

  it("renders the existing contact experience", () => {
    render(<ContactPage />);
    expect(screen.getByText("smubashirali620@gmail.com")).toBeVisible();
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run:

```bash
npm test -- app/routes.test.tsx
```

Expected: FAIL because the two routes do not exist.

- [ ] **Step 3: Implement the projects route**

Create `app/projects/page.tsx`:

```tsx
import type { Metadata } from "next";
import Projects from "@/app/components/Projects";
import SiteShell from "@/app/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Apps & Projects",
  description: "Production Flutter apps and selected product work by Syed Mubashir Ali.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Apps & Projects | Syed Mubashir Ali",
    description: "Selected fintech, telecom, POS, travel, healthcare, and consumer product work.",
    url: "/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <Projects />
    </SiteShell>
  );
}
```

- [ ] **Step 4: Implement the contact route**

Create `app/contact/page.tsx`:

```tsx
import type { Metadata } from "next";
import ContactSection from "@/app/components/ContactSection";
import SiteShell from "@/app/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Syed Mubashir Ali for Flutter development, product engineering, and collaboration.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Syed Mubashir Ali",
    description: "Email, WhatsApp, social profiles, and resume access.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactSection />
    </SiteShell>
  );
}
```

- [ ] **Step 5: Run the route tests**

Run:

```bash
npm test -- app/routes.test.tsx
```

Expected: PASS.

- [ ] **Step 6: Commit the standalone routes**

```bash
git add app/projects app/contact app/routes.test.tsx
git commit -m "feat: add project and contact routes"
```

---

### Task 7: Add sitemap, robots, and canonical-host redirect

**Files:**

- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Create: `app/seo.test.ts`
- Modify: `next.config.ts`

- [ ] **Step 1: Write failing SEO and redirect tests**

Create `app/seo.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import nextConfig from "../next.config";
import robots from "./robots";
import sitemap from "./sitemap";

describe("SEO configuration", () => {
  it("publishes every canonical route", () => {
    expect(sitemap().map((entry) => entry.url)).toEqual([
      "https://syedmubashirali.com",
      "https://syedmubashirali.com/portfolio",
      "https://syedmubashirali.com/packages",
      "https://syedmubashirali.com/projects",
      "https://syedmubashirali.com/contact",
    ]);
  });

  it("allows indexing and advertises the sitemap", () => {
    expect(robots()).toEqual(
      expect.objectContaining({
        sitemap: "https://syedmubashirali.com/sitemap.xml",
      }),
    );
  });

  it("redirects www traffic to the apex hostname", async () => {
    expect(await nextConfig.redirects?.()).toContainEqual({
      source: "/:path*",
      has: [{ type: "host", value: "www.syedmubashirali.com" }],
      destination: "https://syedmubashirali.com/:path*",
      permanent: true,
    });
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run:

```bash
npm test -- app/seo.test.ts
```

Expected: FAIL because sitemap, robots, and redirect configuration are absent.

- [ ] **Step 3: Implement the sitemap**

Create `app/sitemap.ts`:

```ts
import type { MetadataRoute } from "next";

const baseUrl = "https://syedmubashirali.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/portfolio", "/packages", "/projects", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
```

- [ ] **Step 4: Implement robots policy**

Create `app/robots.ts`:

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://syedmubashirali.com/sitemap.xml",
    host: "https://syedmubashirali.com",
  };
}
```

- [ ] **Step 5: Add the hostname redirect**

Extend `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.syedmubashirali.com" }],
        destination: "https://syedmubashirali.com/:path*",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "play-lh.googleusercontent.com" },
    ],
  },
};
```

- [ ] **Step 6: Run SEO tests**

Run:

```bash
npm test -- app/seo.test.ts
```

Expected: PASS with 3 tests.

- [ ] **Step 7: Commit SEO and hostname behavior**

```bash
git add app/sitemap.ts app/robots.ts app/seo.test.ts next.config.ts
git commit -m "feat: add canonical domain SEO configuration"
```

---

### Task 8: Add deployment guidance and run full verification

**Files:**

- Create: `docs/deployment/custom-domain.md`
- Modify only files required by failures found during verification.

- [ ] **Step 1: Write the deployment guide**

Create `docs/deployment/custom-domain.md`:

```md
# Connect syedmubashirali.com to Vercel

The app remains hosted on Vercel. GoDaddy manages the domain's DNS.

## 1. Deploy the application

Push the completed route changes to the branch connected to the existing Vercel
project. Verify these routes on the generated Vercel production URL:

- `/`
- `/portfolio`
- `/packages`
- `/projects`
- `/contact`

## 2. Add domains in Vercel

Open the Vercel project, then open **Settings > Domains**.

Add:

- `syedmubashirali.com`
- `www.syedmubashirali.com`

Set `syedmubashirali.com` as the primary domain. Configure `www` to redirect to
the apex domain.

## 3. Update GoDaddy DNS

Open the domain in GoDaddy and select **DNS**.

Delete only existing records for `@` or `www` that conflict with Vercel. Do not
delete MX or TXT records used for email and domain verification.

Add the exact records shown by Vercel. Vercel's current general-purpose values
are:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns-0.com` |

If the Vercel dashboard displays project-specific values, use those instead.

## 4. Verify

Wait for Vercel to mark both domains as valid and provision HTTPS. DNS changes
usually appear quickly but can take up to 48 hours globally.

Confirm:

- `https://syedmubashirali.com`
- `https://syedmubashirali.com/portfolio`
- `https://syedmubashirali.com/packages`
- `https://syedmubashirali.com/projects`
- `https://syedmubashirali.com/contact`
- `https://www.syedmubashirali.com` redirects to the apex domain
```

- [ ] **Step 2: Run all automated tests**

Run:

```bash
npm test
```

Expected: all tests PASS.

- [ ] **Step 3: Run lint**

Run:

```bash
npm run lint
```

Expected: PASS with no errors.

- [ ] **Step 4: Run the production build**

Run:

```bash
npm run build
```

Expected: PASS and output includes `/`, `/portfolio`, `/packages`, `/projects`,
`/contact`, `/robots.txt`, and `/sitemap.xml`.

- [ ] **Step 5: Start the local production server**

Run:

```bash
npm run start
```

Expected: Next.js starts successfully on the displayed localhost port. Keep the
session running through browser verification.

- [ ] **Step 6: Verify desktop routes in the in-app browser**

Open each route and confirm:

- `/` shows the Professional Directory with four working destination cards.
- `/portfolio` shows the existing portfolio and fixed portfolio navigation.
- `/packages` shows `system_contact_picker`, `In development`, and its GitHub
  source link without a pub.dev link.
- `/projects` shows the shared project catalog.
- `/contact` shows email and other contact actions.
- `/portfolio#projects` and `/portfolio#contact` scroll to their sections.
- Resume and experience document links still load.

- [ ] **Step 7: Verify mobile layout**

Set the browser viewport to `390x844` and confirm:

- Directory cards render in one column.
- Shared header links remain usable without horizontal overflow.
- Portfolio mobile menu opens and its route-aware anchors work.
- Package, project, and contact content fits without clipped text or controls.

Reset the viewport override after verification.

- [ ] **Step 8: Stop the local server and inspect the diff**

Run:

```bash
git diff --check
git status --short
```

Expected: no whitespace errors and only intended files are modified.

- [ ] **Step 9: Commit deployment guidance and final fixes**

```bash
git add docs/deployment/custom-domain.md
git commit -m "docs: add custom domain deployment guide"
```

If verification required a code fix, stage only the exact fixed files in a
separate commit before committing the deployment guide.

- [ ] **Step 10: Review the final commit range**

Run:

```bash
git log --oneline 19389aa..HEAD
git status --short
```

Expected: the implementation commits are present and the worktree is clean.
