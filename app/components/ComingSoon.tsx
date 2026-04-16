"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

// const socials = [
//   { href: "https://github.com/syedmubashiralii", icon: <Github size={20} />, label: "GitHub" },
//   { href: "https://www.linkedin.com/in/syed-mubashir-ali-796122177", icon: <Linkedin size={20} />, label: "LinkedIn" },
//   { href: "mailto:smubashirali620@gmail.com", icon: <Mail size={20} />, label: "Email" },
// ];

const socials = [
  { href: "", icon: <Github size={20} />, label: "GitHub" },
  { href: "", icon: <Linkedin size={20} />, label: "LinkedIn" },
  { href: "", icon: <Mail size={20} />, label: "Email" },
];

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full">
            Something Special is Coming
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            New Portfolio <br /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
              In The Works
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed">
            Crafting a unique digital experience for <span className="text-gray-900 dark:text-gray-200 font-medium">Syed Mubashir Ali</span>. 
            Stay tuned as I rebuild my digital home.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            {socials.map((s) => (
              <div key={s.label} className="group">
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    {s.icon}
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {s.label}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Minimal Loader */}
          <div className="flex items-center justify-center gap-2">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }} 
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }} 
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }} 
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-400" 
            />
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-8 left-0 w-full text-center">
        <p className="text-xs text-gray-400 dark:text-gray-600 font-medium tracking-wide">
          © {new Date().getFullYear()} Syed Mubashir Ali. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
