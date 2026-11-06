import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import AgenticAI from "@/app/components/AgenticAI";
import { ProjectGrid } from "@/app/components/Projects";
import Faq from "@/app/components/home/Faq";
import HomeHero from "@/app/components/home/HomeHero";
import IndustryMarquee from "@/app/components/home/IndustryMarquee";
import PackagesStrip from "@/app/components/home/PackagesStrip";
import Services from "@/app/components/home/Services";
import WorkHistory from "@/app/components/home/WorkHistory";
import CtaBand from "@/app/components/site/CtaBand";
import JsonLd from "@/app/components/site/JsonLd";
import SectionHeading from "@/app/components/site/SectionHeading";
import SiteShell from "@/app/components/site/SiteShell";
import { projects } from "@/app/data/portfolio";
import { buildFaqJsonLd, homeMetadata } from "@/app/data/seo";

export const metadata: Metadata = homeMetadata;

const featuredTitles = ["Yas SelfCare App", "iPOS", "Neo One"];
const featuredProjects = projects.filter((project) => featuredTitles.includes(project.title));

export default function HomePage() {
  return (
    <SiteShell>
      <JsonLd id="faq-jsonld" data={buildFaqJsonLd()} />
      <HomeHero />
      <IndustryMarquee />
      <Services />

      <section className="bg-paper px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Software that moves money and keeps stores open."
            intro="Payments, wallets, telecom self-care, and point-of-sale: products where a bug costs someone real money or a day of trading."
          />
          <div className="mt-12">
            <ProjectGrid items={featuredProjects} />
          </div>
          <Link href="/projects" className="btn btn-ghost mt-8">
            See all projects <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <AgenticAI />
      <WorkHistory />
      <PackagesStrip />
      <Faq />
      <CtaBand />
    </SiteShell>
  );
}
