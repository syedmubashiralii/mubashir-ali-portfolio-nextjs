"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contact, focusAreas, stats } from "../data/portfolio";
import { Button } from "./ui/button";

const proofPoints = ["Flutter & native mobile", "Web & desktop products", "Agentic AI & MCP workflows"] as const;

const socialLinks = [
  { href: contact.github, icon: Github, label: "GitHub" },
  { href: contact.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${contact.email}`, icon: Mail, label: "Email" },
] as const;

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#061019] px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_77%_25%,rgba(14,165,233,0.2),transparent_30%),radial-gradient(circle_at_8%_75%,rgba(34,211,238,0.1),transparent_22%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(103,232,249,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.08)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_94%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-200">
            <BadgeCheck size={14} /> Available for selected product work
          </div>

          <p className="mt-8 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            <span className="h-px w-8 bg-cyan-300" /> Portfolio · 2026
          </p>
          <h1 className="mt-5 max-w-3xl text-balance text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl">
            Engineering products that stay <span className="text-cyan-300">reliable after launch.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
            I&apos;m {contact.name}, a senior app engineer with 5+ years of experience across fintech, telecom, POS,
            travel, and consumer products. I combine deep Flutter delivery with native, web, desktop, Agentic AI, and
            MCP-enabled workflows.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {proofPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> {point}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-12 rounded-md bg-cyan-300 px-6 font-bold text-slate-950 hover:bg-cyan-200">
              <Link href="/portfolio#contact">
                Start a conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-md border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
              <a href={contact.resumeUrl} download="Syed_Mubashir_Ali_Resume.pdf">
                Download resume <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-cyan-300" /> {contact.location}</span>
            <Link href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 transition hover:text-cyan-300">
              <Mail size={15} /> {contact.email}
            </Link>
            <div className="flex gap-2">
              {socialLinks.slice(0, 2).map((social) => {
                const Icon = social.icon;
                return (
                  <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="grid h-8 w-8 place-items-center rounded-md border border-white/10 transition hover:border-cyan-300/60 hover:text-cyan-300">
                    <Icon size={14} />
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a1721] shadow-2xl shadow-black/40">
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image src="/profile-image.png" alt={`${contact.name}, senior app engineer`} fill priority sizes="(max-width: 1024px) 90vw, 460px" className="object-cover object-top grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061019] via-transparent to-transparent" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-md border border-white/15 bg-slate-950/70 px-3 py-2 font-mono text-xs text-cyan-200 backdrop-blur">
                <Sparkles size={14} /> Senior engineer · AI-native
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-2xl font-bold">{contact.name}</p>
                <p className="mt-1 text-sm text-slate-300">{contact.role}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#08141e] p-4">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 p-5">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300">Working across</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {focusAreas.slice(0, 5).map((area) => (
                  <span key={area} className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-[11px] text-slate-400">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
