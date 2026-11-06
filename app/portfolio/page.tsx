import { Download, Mail } from "lucide-react";
import Link from "next/link";
import About from "@/app/components/About";
import AgenticAI from "@/app/components/AgenticAI";
import ContactSection from "@/app/components/ContactSection";
import Credentials from "@/app/components/Credentials";
import Journey from "@/app/components/Journey";
import { GithubNote, ProjectGrid } from "@/app/components/Projects";
import ResumeViewer from "@/app/components/ResumeViewer";
import Skills from "@/app/components/Skills";
import JsonLd from "@/app/components/site/JsonLd";
import PageHero from "@/app/components/site/PageHero";
import SectionHeading from "@/app/components/site/SectionHeading";
import SiteShell from "@/app/components/site/SiteShell";
import { contact, stats } from "@/app/data/portfolio";
import { buildBreadcrumbJsonLd, buildProfilePageJsonLd } from "@/app/data/seo";
import { portfolioSections } from "@/app/data/site";

export default function PortfolioPage() {
  return (
    <SiteShell>
      <JsonLd id="profile-jsonld" data={buildProfilePageJsonLd()} />
      <JsonLd id="breadcrumb-jsonld" data={buildBreadcrumbJsonLd("Portfolio", "/portfolio")} />

      <PageHero
        id="home"
        eyebrow="Portfolio"
        title="Five years of shipped products, in one place."
        description={`I'm ${contact.name}, a senior engineer working across fintech, telecom, POS, travel, and consumer products. Here's the experience, the skills, and the work behind it.`}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={contact.resumeUrl} download="Syed_Mubashir_Ali_Resume.pdf" className="btn btn-volt">
            <Download size={17} aria-hidden="true" /> Download resume
          </a>
          <Link href="/portfolio#contact" className="btn btn-ghost-dark">
            <Mail size={17} aria-hidden="true" /> Get in touch
          </Link>
        </div>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-pine-950 p-5">
              <dd className="font-display text-4xl font-bold text-paper">{stat.value}</dd>
              <dt className="mt-1 text-sm text-sage">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      <nav aria-label="Portfolio sections" className="sticky top-16 z-40 border-b border-rule bg-paper/95 backdrop-blur">
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
          {portfolioSections.map((section) => (
            <li key={section.href}>
              <Link
                href={section.href}
                className="block rounded-full px-3 py-1.5 text-sm font-medium whitespace-nowrap text-moss transition-colors hover:bg-pine-950 hover:text-paper"
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <About />
      <AgenticAI id="ai" />
      <Journey />
      <Skills />
      <Credentials />

      <section id="projects" className="bg-bone px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work from production environments."
            intro="Telecom self-care, enterprise POS, student platforms, fintech, travel, healthcare, marketplaces, streaming, e-commerce, and location utilities."
          />
          <div className="mt-12">
            <ProjectGrid />
          </div>
          <GithubNote />
        </div>
      </section>

      <ResumeViewer />
      <ContactSection />
    </SiteShell>
  );
}
