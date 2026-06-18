import type { Metadata } from "next";
import Projects from "@/app/components/Projects";
import JsonLd from "@/app/components/site/JsonLd";
import SiteShell from "@/app/components/site/SiteShell";
import { buildProjectListJsonLd, projectsMetadata } from "@/app/data/seo";

export const metadata: Metadata = projectsMetadata;

export default function ProjectsPage() {
  return (
    <SiteShell>
      <JsonLd id="projects-jsonld" data={buildProjectListJsonLd()} />
      <Projects />
    </SiteShell>
  );
}
