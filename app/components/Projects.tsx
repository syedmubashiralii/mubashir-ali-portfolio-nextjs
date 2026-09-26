"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Camera,
  Clapperboard,
  Github,
  GraduationCap,
  HeartPulse,
  MapPinned,
  Plane,
  ShoppingCart,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { projects } from "../data/portfolio";

const visuals = [
  { icon: Building2, glow: "bg-cyan-300/15" },
  { icon: GraduationCap, glow: "bg-sky-300/15" },
  { icon: WalletCards, glow: "bg-emerald-300/15" },
  { icon: Plane, glow: "bg-cyan-300/15" },
  { icon: HeartPulse, glow: "bg-rose-300/15" },
  { icon: Camera, glow: "bg-violet-300/15" },
  { icon: Clapperboard, glow: "bg-pink-300/15" },
  { icon: ShoppingCart, glow: "bg-amber-300/15" },
  { icon: MapPinned, glow: "bg-teal-300/15" },
] as const;

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Selected projects</p>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl">
              Selected work from shipped product environments.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
            Production work across enterprise POS, student platforms, fintech, travel, healthcare, marketplaces,
            streaming, e-commerce, and location utilities—built around real operational constraints.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const visual = visuals[index] ?? visuals[0];
            const Icon = visual.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: index * 0.035 }}
                className="group flex min-h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-[#f7f9f9] transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-white hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="relative min-h-40 overflow-hidden bg-[#061019] p-5 text-white">
                  <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full ${visual.glow} blur-2xl`} />
                  <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(103,232,249,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
                  <div className="relative flex min-h-32 flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                        <Icon size={21} />
                      </span>
                      <span className="font-mono text-4xl font-black text-white/10">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="mt-8">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-300">{project.category}</p>
                      <h3 className="mt-2 text-2xl font-bold tracking-tight">{project.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm leading-7 text-slate-700">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.liveLink && (
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-xs font-bold text-white transition hover:bg-cyan-300 hover:text-slate-950">
                        Open project <ArrowUpRight size={13} />
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700">
                        <Github size={13} /> Code
                      </Link>
                    )}
                    {!project.liveLink && !project.githubLink && (
                      <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-cyan-700 transition hover:text-cyan-900">
                        Discuss similar work <ArrowUpRight size={13} />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-xl bg-[#061019] p-6 text-white sm:flex-row sm:items-center lg:p-8">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">More engineering work</p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
              Open-source packages, experiments, and public code live on GitHub alongside these production case studies.
            </p>
          </div>
          <Link href={contactGithub} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
            <Github size={16} /> Visit GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

const contactGithub = "https://github.com/syedmubashiralii";
