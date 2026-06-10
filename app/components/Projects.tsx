"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Camera,
  Clapperboard,
  ExternalLink,
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
  { icon: Building2, className: "from-slate-900 via-blue-900 to-cyan-700" },
  { icon: GraduationCap, className: "from-blue-700 via-indigo-700 to-violet-700" },
  { icon: WalletCards, className: "from-emerald-700 via-teal-700 to-slate-900" },
  { icon: Plane, className: "from-cyan-700 via-blue-700 to-slate-900" },
  { icon: HeartPulse, className: "from-rose-700 via-red-600 to-orange-600" },
  { icon: Camera, className: "from-violet-700 via-fuchsia-700 to-slate-900" },
  { icon: Clapperboard, className: "from-pink-700 via-rose-700 to-slate-950" },
  { icon: ShoppingCart, className: "from-amber-600 via-orange-700 to-slate-900" },
  { icon: MapPinned, className: "from-teal-700 via-emerald-700 to-slate-900" },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-4 py-20 dark:bg-slate-900/60 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-300">Projects</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
            Selected work from shipped product environments.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Real-world apps from the resume: enterprise POS, student platforms, fintech, travel, healthcare,
            marketplaces, streaming, e-commerce, and location utilities.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const visual = visuals[index] ?? visuals[0];
            const Icon = visual.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-800 dark:hover:bg-slate-900"
              >
                <div className={`relative min-h-44 bg-gradient-to-br ${visual.className} p-5 text-white`}>
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:28px_28px] opacity-35" />
                  <div className="relative flex h-full min-h-32 flex-col justify-between">
                    <div className="flex items-center justify-between gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-lg bg-white/15 ring-1 ring-white/25 backdrop-blur">
                        <Icon size={24} />
                      </div>
                      <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold ring-1 ring-white/25 backdrop-blur">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mt-8 text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="min-h-24 text-sm leading-7 text-slate-700 dark:text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                      >
                        Open Project <ExternalLink size={13} />
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                      >
                        Code <Github size={13} />
                      </Link>
                    )}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-300"
                    >
                      Discuss Similar Work
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://github.com/syedmubashiralii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-300"
          >
            <Github size={16} /> View More on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
