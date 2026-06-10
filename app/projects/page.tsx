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
