"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2, Network, ShieldCheck, Sparkles, Workflow } from "lucide-react";

const capabilities = [
  {
    icon: Bot,
    title: "AI coding agents",
    text: "Confident with agentic planning, codebase exploration, implementation, refactoring, and review workflows.",
  },
  {
    icon: Network,
    title: "MCP integrations",
    text: "Comfortable connecting agents to repositories, documentation, tools, services, and structured product context.",
  },
  {
    icon: Workflow,
    title: "AI-assisted delivery",
    text: "Use AI to shorten feedback loops across discovery, implementation, testing, documentation, and release work.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering guardrails",
    text: "Keep architecture, privacy, security, verification, and human accountability at the center of every delivery.",
  },
] as const;

const workflow = [
  "Understand the product and codebase",
  "Connect the right context and tools",
  "Build in small verified slices",
  "Review, test, and ship",
] as const;

export default function AgenticAI() {
  return (
    <section id="ai" className="relative overflow-hidden bg-[#061019] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(103,232,249,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
              <Sparkles size={14} /> Agentic AI &amp; MCPs
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Comfortable collaborating with AI—and accountable for what ships.
            </h2>
          </div>
          <p className="text-base leading-8 text-slate-300">
            I work confidently with AI coding agents, agentic workflows, and Model Context Protocol tools. They help me
            understand systems faster, coordinate richer context, and execute with speed; senior engineering judgment
            still drives every architectural choice and production decision.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                  className="rounded-xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-cyan-300 text-slate-950">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-5 font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{item.text}</p>
                </motion.article>
              );
            })}
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-cyan-300/20 bg-[#0a1721] p-6 shadow-2xl shadow-black/20"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-cyan-200">
                <Workflow size={15} /> Delivery loop
              </div>
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
            </div>
            <ol className="mt-5 space-y-3">
              {workflow.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] p-3 text-sm text-slate-300"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded bg-white/10 font-mono text-xs font-bold text-cyan-300">
                    {index + 1}
                  </span>
                  <span className="flex-1">{step}</span>
                  <CheckCircle2 size={15} className="text-emerald-300" />
                </li>
              ))}
            </ol>
            <p className="mt-5 border-t border-white/10 pt-5 text-xs leading-6 text-slate-500">
              The goal is not more generated code. It is a shorter path to reliable product outcomes.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
