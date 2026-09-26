"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2, Mail, MapPin, Phone, Rocket, ShieldCheck, Smartphone } from "lucide-react";
import Link from "next/link";
import { contact, focusAreas, stats } from "../data/portfolio";

const strengths = [
  {
    icon: <Rocket size={18} />,
    title: "End-to-end delivery",
    text: "From architecture and implementation through release builds, App Store deployment, and production support.",
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Production discipline",
    text: "Clean architecture, scalable modules, performance-aware code, and pragmatic issue resolution.",
  },
  {
    icon: <Smartphone size={18} />,
    title: "Cross-platform craft",
    text: "Flutter, React Native, native iOS and Android, responsive web, desktop, payments, maps, and media tools.",
  },
  {
    icon: <Bot size={18} />,
    title: "AI-native workflow",
    text: "Agentic AI, coding agents, and MCP tools used with deliberate review, verification, and production accountability.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#eef2f3] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">About</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-5xl dark:text-white">
              Product-focused app engineering across every major screen.
            </h2>
          </div>
          <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
            Results-driven app developer with 5+ years of hands-on experience architecting and shipping 20+
            production-ready mobile, web, and desktop applications. Deep Flutter expertise is complemented by React
            Native, native Android and iOS delivery, and modern web development for complete product ownership.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-100 bg-[#f7f9f9] p-4 dark:border-slate-800 dark:bg-slate-950">
                  <div className="mb-3 grid h-9 w-9 place-items-center rounded-md bg-slate-950 text-cyan-300 dark:bg-cyan-300 dark:text-slate-950">{item.icon}</div>
                  <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Link
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 rounded-md border border-slate-200 p-3 text-sm text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700 dark:border-slate-800 dark:text-slate-300"
              >
                <Mail size={17} /> Email
              </Link>
              <Link
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-md border border-slate-200 p-3 text-sm text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700 dark:border-slate-800 dark:text-slate-300"
              >
                <Phone size={17} /> Call
              </Link>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-300">
                <MapPin size={17} /> {contact.location}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-xl border border-slate-800 bg-[#061019] p-6 text-white shadow-xl shadow-slate-900/10"
          >
            <h3 className="text-lg font-semibold">Where I create impact</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-white/10 p-4">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-2">
              {focusAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 size={16} className="text-cyan-300" />
                  {area}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
