import type { Metadata } from "next";
import { GithubNote, ProjectGrid } from "@/app/components/Projects";
import CtaBand from "@/app/components/site/CtaBand";
import JsonLd from "@/app/components/site/JsonLd";
import PageHero from "@/app/components/site/PageHero";
import SiteShell from "@/app/components/site/SiteShell";
import { buildBreadcrumbJsonLd, buildProjectListJsonLd, projectsMetadata } from "@/app/data/seo";

export const metadata: Metadata = projectsMetadata;

export default function ProjectsPage() {
  return (
    <SiteShell>
      <JsonLd id="projects-jsonld" data={buildProjectListJsonLd()} />
      <JsonLd id="breadcrumb-jsonld" data={buildBreadcrumbJsonLd("Projects", "/projects")} />
      <PageHero
        eyebrow="Apps & projects"
        title="Flutter apps built for real operations."
        description="Production work across telecom, fintech, enterprise POS, student platforms, travel, healthcare, marketplaces, streaming, e-commerce, and location utilities."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ProjectGrid />
          <GithubNote />
        </div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
