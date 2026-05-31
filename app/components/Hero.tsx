"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contact, focusAreas, stats } from "../data/portfolio";
import { Button } from "./ui/button";

const socialLinks = [
  { href: contact.github, icon: <Github size={17} />, label: "GitHub" },
  { href: contact.linkedin, icon: <Linkedin size={17} />, label: "LinkedIn" },
  { href: `mailto:${contact.email}`, icon: <Mail size={17} />, label: "Email" },
];

const proofPoints = [
  "Production Flutter apps",
  "Fintech and telecom delivery",
  "Store release ownership",
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-slate-50 dark:bg-slate-950" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60 dark:bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] dark:opacity-45" />

      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-5xl flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white bg-slate-200 shadow-xl shadow-slate-900/10 ring-4 ring-white dark:border-slate-800 dark:bg-slate-900 dark:ring-slate-900 sm:h-28 sm:w-28">
              <Image
                src="/profile-image.png"
                alt={contact.name}
                fill
                priority
                sizes="112px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full border border-white bg-emerald-500 text-white shadow-md dark:border-slate-950">
              <BadgeCheck size={16} />
            </div>
          </div>

          <div className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm dark:border-blue-900 dark:bg-slate-900 dark:text-blue-300">
            <Sparkles size={14} />
            {contact.role} | {contact.tagline}
          </div>

          <h1 className="mt-6 max-w-4xl text-balance text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            I build polished Flutter products that survive real users, deadlines, and production scale.
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-700 sm:text-lg dark:text-slate-300">
            {contact.name} is a Senior Flutter Developer with 4+ years of experience shipping mobile, web, and desktop
            apps across fintech, telecom, POS, travel, healthcare, and consumer platforms.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {proofPoints.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {point}
              </span>
            ))}
          </div>

          <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="h-11 rounded-full bg-blue-600 px-6 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
            >
              <Link href="#contact">
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-slate-300 bg-white px-6 text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <a href={contact.resumeUrl} download="Syed_Mubashir_Ali_Resume.pdf">
                Download Resume <Download className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-slate-300 bg-white px-6 text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-slate-600 dark:text-slate-300">
            <Link className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-300" href={`mailto:${contact.email}`}>
              <Mail size={15} /> {contact.email}
            </Link>
            <Link className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-300" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              <Phone size={15} /> {contact.phone}
            </Link>
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} /> {contact.location}
            </span>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:text-blue-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-12 w-full rounded-lg border border-slate-200 bg-white/85 p-3 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
        >
          <div className="grid gap-2 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-md px-4 py-3 text-center">
                <p className="text-2xl font-bold text-slate-950 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-200 px-2 pt-3 dark:border-slate-800">
            <div className="flex flex-wrap justify-center gap-2">
              {focusAreas.map((area) => (
                <span key={area} className="rounded-full px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
