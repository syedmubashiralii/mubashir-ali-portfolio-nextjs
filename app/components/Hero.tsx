"use client";

import { motion } from "framer-motion";
import profileImage from "../../public/profile-image.png";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Apps Published" },
  { value: "5+", label: "Industries" },
  { value: "3", label: "Platforms" },
];

const socials = [
  { href: "https://github.com/syedmubashiralii", icon: <Github size={18} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/syed-mubashir-ali-796122177", icon: <Linkedin size={18} />, label: "LinkedIn" },
  { href: "mailto:smubashirali620@gmail.com", icon: <Mail size={18} />, label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-10 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 90 }}
        className="relative mb-7"
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-blue-500/40 shadow-xl">
          <Image
            alt="Syed Mubashir Ali"
            className="w-full h-full object-cover"
            src={profileImage}
            priority
          />
        </div>
      </motion.div>

      {/* Name + Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
          Syed <span className="text-blue-600 dark:text-blue-400">Mubashir</span> Ali
        </h1>
        <p className="mt-2 text-base md:text-lg text-gray-500 dark:text-gray-400 font-medium tracking-wide">
          Senior Flutter Developer &nbsp;·&nbsp; Mobile · Web · Desktop
        </p>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5 max-w-xl text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed"
      >
        Results-driven developer with <span className="font-semibold text-gray-800 dark:text-gray-200">4+ years</span> of experience
        shipping <span className="font-semibold text-gray-800 dark:text-gray-200">20+ production-ready apps</span> across
        fintech, POS, travel, healthcare &amp; consumer platforms.
      </motion.p>

      {/* Tech badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-5 flex flex-wrap justify-center gap-2"
      >
        {["Flutter", "Dart", "Firebase", "Next.js", "TypeScript", "Node.js"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-7 flex flex-wrap justify-center gap-3"
      >
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-full px-6"
        >
          <Link href="#contact">
            Contact Me <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 rounded-full px-6"
        >
          <Link href="#resume">
            Download CV <Download className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex gap-3"
      >
        {socials.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-110"
          >
            {s.icon}
          </Link>
        ))}
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-lg w-full border-t border-gray-100 dark:border-gray-800 pt-10"
      >
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
