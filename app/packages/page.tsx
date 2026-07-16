import type { Metadata } from "next";
import { BadgeCheck, ExternalLink, Github, PackageOpen, Sparkles } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/app/components/site/JsonLd";
import SiteShell from "@/app/components/site/SiteShell";
import { buildPackageListJsonLd, packagesMetadata } from "@/app/data/seo";
import { packages } from "@/app/data/site";

function getStatusBadgeClassName(status: string) {
  if (status === "Published") {
    return "rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300";
  }

  return "rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950 dark:text-amber-300";
}

export const metadata: Metadata = packagesMetadata;

export default function PackagesPage() {
  return (
    <SiteShell>
      <JsonLd id="packages-jsonld" data={buildPackageListJsonLd()} />
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300">
            Packages
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Flutter packages and developer tools.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Production-focused Flutter packages published by the verified syedmubashirali.com publisher, with clear
            APIs and practical native integrations.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {packages.map((item) => (
              <article
                key={item.slug}
                className={`relative overflow-hidden rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  item.featured
                    ? "border-violet-300 bg-gradient-to-br from-violet-50 via-white to-cyan-50 shadow-violet-900/10 dark:border-violet-800 dark:from-violet-950/50 dark:via-slate-900 dark:to-cyan-950/40"
                    : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                }`}
              >
                {item.featured && (
                  <div className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2 text-xs font-bold text-white">
                    <span className="inline-flex items-center gap-1.5">
                      <Sparkles size={13} /> New release
                    </span>
                  </div>
                )}
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <PackageOpen size={22} />
                  </span>
                  <span className={`${getStatusBadgeClassName(item.status)} ${item.featured ? "mt-5" : ""}`}>
                    {item.status}
                  </span>
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-bold text-slate-950 dark:text-white">{item.name}</h2>
                  {item.version && (
                    <span className="rounded-full border border-violet-200 bg-violet-100 px-2.5 py-1 font-mono text-xs font-bold text-violet-700 dark:border-violet-800 dark:bg-violet-950 dark:text-violet-300">
                      v{item.version}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                {item.publisher && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300">
                    <BadgeCheck size={14} /> Verified publisher · {item.publisher}
                  </p>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  {item.githubUrl && (
                    <Link
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.name} source`}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
                    >
                      <Github size={15} /> View source
                    </Link>
                  )}
                  {item.pubUrl && (
                    <Link
                      href={item.pubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.name} on pub.dev`}
                      className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
                    >
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
