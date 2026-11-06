import { ArrowUpRight, BadgeCheck, Boxes, Github, ShieldCheck, Terminal } from "lucide-react";
import type { Metadata } from "next";
import CtaBand from "@/app/components/site/CtaBand";
import JsonLd from "@/app/components/site/JsonLd";
import PageHero from "@/app/components/site/PageHero";
import SiteShell from "@/app/components/site/SiteShell";
import { buildBreadcrumbJsonLd, buildPackageListJsonLd, packagesMetadata } from "@/app/data/seo";
import { packages } from "@/app/data/site";

export const metadata: Metadata = packagesMetadata;

const principles = [
  { icon: ShieldCheck, title: "Production-minded", text: "APIs and behavior designed for real app constraints.", tone: "bg-sun" },
  { icon: Boxes, title: "Cross-platform", text: "Flutter interfaces backed by native platform integration.", tone: "bg-lilac" },
  { icon: Github, title: "Open development", text: "Source, issues, and releases available to the community.", tone: "bg-coral" },
];

export default function PackagesPage() {
  return (
    <SiteShell>
      <JsonLd id="packages-jsonld" data={buildPackageListJsonLd()} />
      <JsonLd id="breadcrumb-jsonld" data={buildBreadcrumbJsonLd("Packages", "/packages")} />

      <PageHero
        eyebrow="Open-source engineering"
        title="Flutter packages and developer tools."
        description="Production-focused packages from the verified syedmubashirali.com publisher, built around clean APIs, native platform behavior, and the edge cases that show up after launch."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-2">
            {packages.map((item) => (
              <article key={item.slug} className="flex min-w-0 flex-col rounded-3xl border border-rule bg-paper p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-volt px-2.5 py-1 text-xs font-semibold text-pine-950">{item.status}</span>
                  {item.version && <span className="chip font-mono !text-xs">v{item.version}</span>}
                </div>
                <h2 className="mt-6 font-mono text-2xl font-bold tracking-normal break-words">{item.name}</h2>
                <p className="mt-3 leading-7 text-moss">{item.description}</p>

                <p className="mt-6 flex items-center gap-2 overflow-x-auto rounded-xl bg-pine-950 px-4 py-3 font-mono text-sm whitespace-nowrap text-volt">
                  <Terminal size={15} className="shrink-0" aria-hidden="true" /> flutter pub add {item.name}
                </p>

                {item.publisher && (
                  <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-pine-600">
                    <BadgeCheck size={16} className="shrink-0" aria-hidden="true" />
                    <span>Verified publisher · {item.publisher}</span>
                  </p>
                )}

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <li key={tag} className="chip !text-xs">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  {item.githubUrl && (
                    <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.name} source`} className="btn btn-pine">
                      <Github size={16} aria-hidden="true" /> View source
                    </a>
                  )}
                  {item.pubUrl && (
                    <a href={item.pubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.name} on pub.dev`} className="btn btn-ghost">
                      pub.dev <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text, tone }) => (
              <div key={title} className={`rounded-3xl p-7 text-pine-950 ${tone}`}>
                <Icon size={24} aria-hidden="true" />
                <h2 className="mt-6 text-xl font-bold">{title}</h2>
                <p className="mt-2 leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
