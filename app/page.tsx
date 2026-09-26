import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DirectoryCard from "@/app/components/site/DirectoryCard";
import SiteShell from "@/app/components/site/SiteShell";
import { contact } from "@/app/data/portfolio";
import { homeMetadata } from "@/app/data/seo";
import { directoryLinks, leadServices } from "@/app/data/site";

export const metadata: Metadata = homeMetadata;

const aiCapabilities = [
  {
    icon: Bot,
    eyebrow: "Build faster",
    title: "Agentic development",
    description:
      "I work comfortably with AI coding agents to explore codebases, plan changes, implement features, and shorten feedback loops.",
  },
  {
    icon: Network,
    eyebrow: "Connect context",
    title: "MCP workflows",
    description:
      "I use Model Context Protocol tools to connect engineering work with repositories, product context, services, and team workflows.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Keep the judgment",
    title: "Human-led quality",
    description:
      "AI accelerates the work; senior engineering judgment, security, testing, and production accountability stay firmly in the loop.",
  },
] as const;

const workingStyle = ["Architecture first", "AI-accelerated execution", "Production verification"] as const;

export default function HomePage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden bg-[#061019] px-4 pb-16 pt-14 text-white sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_18%,rgba(14,165,233,0.2),transparent_30%),radial-gradient(circle_at_14%_76%,rgba(34,211,238,0.1),transparent_24%),linear-gradient(135deg,#061019_0%,#0a1620_48%,#061019_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(125,211,252,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.08)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              Available for selected projects
            </div>

            <p className="mt-8 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              <span className="h-px w-8 bg-cyan-400" /> Senior app engineer · AI-native workflow
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Senior app engineering, <span className="text-cyan-300">accelerated by agentic AI.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
              I&apos;m {contact.name}, a senior developer shipping reliable mobile, web, and desktop products. I&apos;m
              comfortable working with AI coding agents, Agentic AI systems, and MCPs—using them to move faster without
              compromising engineering judgment.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-6 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Explore my work <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              >
                Start a project <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              {workingStyle.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-cyan-300" /> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:justify-self-end">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/profile-image.png"
                  alt={`${contact.name}, senior app engineer`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061019] via-transparent to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-md border border-white/15 bg-slate-950/70 px-3 py-2 font-mono text-xs text-cyan-200 backdrop-blur">
                  <Sparkles size={14} /> AI-augmented engineer
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    Based in Islamabad · Working worldwide
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight">{contact.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Flutter · Native · Web · Agentic AI · MCP</p>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-[#08141e]">
                <div className="p-4 text-center">
                  <strong className="block text-xl text-white">5+</strong>
                  <span className="mt-1 block text-[11px] uppercase tracking-wide text-slate-500">Years</span>
                </div>
                <div className="p-4 text-center">
                  <strong className="block text-xl text-white">20+</strong>
                  <span className="mt-1 block text-[11px] uppercase tracking-wide text-slate-500">Apps</span>
                </div>
                <div className="p-4 text-center">
                  <strong className="block text-xl text-white">4</strong>
                  <span className="mt-1 block text-[11px] uppercase tracking-wide text-slate-500">Platforms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-slate-200">
          {leadServices.map((service, index) => (
            <article key={service.title} className={index === 0 ? "md:pr-8" : index === 1 ? "md:px-8" : "md:pl-8"}>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">0{index + 1}</p>
              <h2 className="mt-2 text-base font-bold text-slate-950">{service.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eef2f3] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">AI-native delivery</p>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl">
                AI is part of my toolkit—not a substitute for the craft.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
              I use modern AI systems where they create leverage: understanding unfamiliar code, coordinating tools,
              accelerating implementation, and tightening feedback. Every output still passes through deliberate review,
              testing, and product judgment.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {aiCapabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl hover:shadow-slate-900/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-md bg-slate-950 text-cyan-300">
                      <Icon size={20} />
                    </span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      {capability.eyebrow}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-slate-950">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{capability.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Selected paths</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl">
                See the work behind the words.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              Explore shipped products, open-source Flutter tooling, professional experience, or start a direct
              conversation about your next build.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {directoryLinks.map((item, index) => (
              <DirectoryCard key={item.href} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#061019] p-7 text-white sm:p-10 lg:p-14">
          <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Ready to build</p>
              <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
                Bring me the product idea, the difficult codebase, or the blocked release.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
                I can help you turn it into a stable, thoughtful product—with modern AI leverage and senior-level
                ownership from first commit to production.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href={`mailto:${contact.email}?subject=Project%20Inquiry`}
                className="inline-flex h-12 items-center gap-2 rounded-md bg-cyan-300 px-5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                <Mail size={17} /> Email me
              </Link>
              <Link
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-12 w-12 place-items-center rounded-md border border-white/15 text-slate-300 transition hover:border-cyan-300/60 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-12 w-12 place-items-center rounded-md border border-white/15 text-slate-300 transition hover:border-cyan-300/60 hover:text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
