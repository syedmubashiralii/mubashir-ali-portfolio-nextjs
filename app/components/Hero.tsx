"use client";

import { motion } from "framer-motion";
import profileImage from "../../public/profile-image.png";
import Image from "next/image";

import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-portfolio-teal/30 rounded-full blur-xl animate-pulse"></div>
        <div className="relative w-42 h-42 md:w-62 md:h-62 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl hover:scale-105 transition-all duration-500 hover:border-green-400">
          <Image alt="Profile" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src={profileImage} />
        </div>
      </div>
      {/* Name with typing effect */}
      <h1 className="animate-typing text-3xl md:text-5xl font-extrabold leading-tight text-blue-600 dark:text-blue-400 mt-6">Syed Mubashir Ali</h1>

      {/* Intro / Motive */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 max-w-2xl text-lg md:text-xl text-gray-700 dark:text-gray-300"
      >
        A passionate <span className="font-semibold">Flutter</span> and <span className="font-semibold">Next.js</span> developer who loves building
        elegant, scalable, and user-friendly digital experiences with 3+ years of industry experience.
      </motion.p>

      {/* Tech stack badges */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 flex flex-wrap justify-center gap-3">
        {["Flutter", "Dart", "Next.js", "React", "TypeScript", "Firebase", "TailwindCSS"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm hover:scale-105 transition-transform"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* Call to action */}

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-wrap justify-center gap-3">
        <Button
          asChild
          className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-portfolio-teal/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Link href="#contact">
            Contact Me <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="bg-transparent border-slate-400 text-white hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105"
        >
          <Link href="#resume">
            Download CV <Download className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>

      {/* Social Icons */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex space-x-4 pt-4 mt-4">
        <Link
          href="https://github.com/syedmubashiralii"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-800"
        >
          <Github size={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/syed-mubashir-ali-796122177"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-800"
        >
          <Linkedin size={20} />
        </Link>
      </motion.div>
    </section>
  );
}
