"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Rocket, ShieldCheck, Smartphone } from "lucide-react";
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
    text: "Mobile, Flutter Web, admin panels, Firebase-backed apps, payment flows, notifications, maps, and media tools.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-300">About</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl dark:text-white">
              Product-focused Flutter engineering with real deployment history.
            </h2>
          </div>
          <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
            Results-driven Senior Flutter Developer with 4+ years of hands-on experience architecting and shipping 20+
            production-ready applications across fintech, POS, travel, healthcare, and consumer platforms. Experienced
            in cross-functional and remote teams, with a track record of turning complex business requirements into
            polished, user-centric products.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {strengths.map((item) => (
                <div key={item.title} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-950">
                  <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-blue-600 text-white">{item.icon}</div>
                  <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Link
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:text-blue-300"
              >
                <Mail size={17} /> Email
              </Link>
              <Link
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:text-blue-300"
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
            className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm dark:border-slate-800"
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
                  <CheckCircle2 size={16} className="text-emerald-300" />
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
