import type { Metadata } from "next";
import { BadgeCheck, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DirectoryCard from "@/app/components/site/DirectoryCard";
import SiteShell from "@/app/components/site/SiteShell";
import { homeMetadata } from "@/app/data/seo";
import { contact } from "@/app/data/portfolio";
import { directoryLinks, leadServices } from "@/app/data/site";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)]" />
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-xl dark:border-slate-900">
              <Image
                src="/profile-image.png"
                alt={contact.name}
                fill
                priority
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300">
              <BadgeCheck size={14} />
              Available for selected Flutter projects
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
              Senior Flutter Developer for production teams
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
              Hire a Flutter developer who can ship, rescue, and scale your app.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
              I help founders, agencies, and product teams build reliable Flutter apps across fintech, telecom, POS,
              marketplaces, dashboards, and store-ready mobile products.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {leadServices.map((service) => (
              <article
                key={service.title}
                className="rounded-lg border border-slate-200 bg-white/85 p-4 text-left shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
              >
                <h2 className="text-sm font-bold text-slate-950 dark:text-white">{service.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {directoryLinks.map((item) => (
              <DirectoryCard key={item.href} item={item} />
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-3">
            <Link
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              <Github size={18} />
            </Link>
            <Link
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
