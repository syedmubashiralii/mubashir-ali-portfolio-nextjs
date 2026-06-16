import type { Metadata } from "next";
import { ExternalLink, Github, PackageOpen } from "lucide-react";
import Link from "next/link";
import SiteShell from "@/app/components/site/SiteShell";
import { packages } from "@/app/data/site";

function getStatusBadgeClassName(status: string) {
  if (status === "Published") {
    return "rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300";
  }

  return "rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950 dark:text-amber-300";
}

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
              <article
                key={item.slug}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-600 text-white">
                    <PackageOpen size={22} />
                  </span>
                  <span className={getStatusBadgeClassName(item.status)}>
                    {item.status}
                  </span>
                </div>
                <h2 className="mt-7 text-2xl font-bold text-slate-950 dark:text-white">{item.name}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
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
