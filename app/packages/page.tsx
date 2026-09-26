import type { Metadata } from "next";
import { ArrowUpRight, BadgeCheck, Boxes, Github, PackageOpen, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/app/components/site/JsonLd";
import SiteShell from "@/app/components/site/SiteShell";
import { buildPackageListJsonLd, packagesMetadata } from "@/app/data/seo";
import { packages } from "@/app/data/site";

export const metadata: Metadata = packagesMetadata;

export default function PackagesPage() {
  return (
    <SiteShell>
      <JsonLd id="packages-jsonld" data={buildPackageListJsonLd()} />

      <section className="relative isolate overflow-hidden bg-[#061019] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(103,232,249,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Open-source engineering</p>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl">
              Flutter packages and developer tools.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Production-focused packages from the verified syedmubashirali.com publisher—built around clean APIs,
              native platform behavior, and the hard edge cases that show up after launch.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
            <div className="bg-[#08141e] p-4"><strong className="block text-2xl">2</strong><span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-slate-500">Packages</span></div>
            <div className="bg-[#08141e] p-4"><strong className="block text-2xl">100%</strong><span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-slate-500">Open source</span></div>
            <div className="bg-[#08141e] p-4"><strong className="block text-2xl">Dart</strong><span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-slate-500">Ecosystem</span></div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef2f3] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {packages.map((item, index) => (
              <article key={item.slug} className="group relative flex min-h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl hover:shadow-slate-900/10 sm:p-7">
                <div className="absolute right-5 top-4 font-mono text-6xl font-black text-slate-100 transition group-hover:text-cyan-50">0{index + 1}</div>
                <div className="relative flex items-start justify-between gap-5">
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-slate-950 text-cyan-300">
                    <PackageOpen size={22} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {item.status}
                  </span>
                </div>

                <div className="relative mt-8 flex flex-wrap items-center gap-3">
                  <h2 className="font-mono text-2xl font-bold text-slate-950">{item.name}</h2>
                  {item.version && <span className="rounded-md bg-cyan-100 px-2.5 py-1 font-mono text-xs font-bold text-cyan-800">v{item.version}</span>}
                  {item.featured && <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700"><Sparkles size={13} /> Featured</span>}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>

                <div className="mt-5 flex items-center gap-2 rounded-md border border-slate-200 bg-[#f7f9f9] px-3 py-2.5 font-mono text-xs text-slate-700">
                  <Terminal size={14} className="text-cyan-700" /> flutter pub add {item.name}
                </div>

                {item.publisher && (
                  <p className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-bold text-emerald-700">
                    <BadgeCheck size={14} /> Verified publisher · {item.publisher}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-600">{tag}</span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  {item.githubUrl && (
                    <Link href={item.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.name} source`} className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-300 hover:text-slate-950">
                      <Github size={15} /> View source
                    </Link>
                  )}
                  {item.pubUrl && (
                    <Link href={item.pubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.name} on pub.dev`} className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700">
                      pub.dev <ArrowUpRight size={15} />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Production-minded", text: "APIs and behavior designed for real app constraints." },
              { icon: Boxes, title: "Cross-platform", text: "Flutter interfaces backed by native platform integration." },
              { icon: Github, title: "Open development", text: "Source, issues, and releases available to the community." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5">
                  <Icon size={19} className="text-cyan-700" />
                  <h3 className="mt-4 font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
