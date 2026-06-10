"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contact } from "../data/portfolio";
import { cn } from "../utils/utils";

const navLinks = [
  { name: "Home", href: "/portfolio#home" },
  { name: "About", href: "/portfolio#about" },
  { name: "Experience", href: "/portfolio#experience" },
  { name: "Skills", href: "/portfolio#skills" },
  { name: "Projects", href: "/portfolio#projects" },
  { name: "Resume", href: "/portfolio#resume" },
  { name: "Contact", href: "/portfolio#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-slate-200/80 bg-white/90 py-3 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/portfolio#home" className="text-base font-bold text-slate-950 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-300">
          Syed Mubashir Ali
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={contact.resumeUrl}
            download="Syed_Mubashir_Ali_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-300"
          >
            <Download size={15} /> CV
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-700 md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.18 }}
              >
                <X size={21} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.18 }}
              >
                <Menu size={21} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-full mt-2 rounded-lg border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-slate-950 md:hidden"
          >
            <nav className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-blue-950/40 dark:hover:text-blue-300"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={contact.resumeUrl}
                download="Syed_Mubashir_Ali_Resume.pdf"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                <Download size={15} /> Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
