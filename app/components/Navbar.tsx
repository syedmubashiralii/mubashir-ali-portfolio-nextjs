"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "../utils/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";



export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "flex items-center space-x-2 text-2xl font-bold transition-colors",
            isScrolled ? "text-blue-600 dark:text-blue-400" : "text-white"
          )}
        >
        
          <span>Syed <span className="text-blue-600">Mubashir</span> Ali</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "hover:text-blue-500 dark:hover:text-blue-300 font-medium relative group transition-colors",
                isScrolled ? "text-gray-800 dark:text-gray-100" : "text-white"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {mounted && (
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-md border px-3 py-1 text-sm 
                hover:bg-gray-200 dark:hover:bg-gray-700 
                transition-all duration-300 ease-in-out"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn("md:hidden p-2 transition-colors rounded-md", isScrolled ? "text-gray-800 dark:text-gray-100" : "text-white")}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Modal */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex items-start justify-center mt-20 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>

          {/* Menu Card */}
          <div className="relative  z-50 w-11/12 max-w-sm rounded-2xl mt-5 bg-white dark:bg-gray-900 shadow-xl p-6 animate-in fade-in-0 zoom-in-95">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-300 transition-colors py-2 font-medium border-b border-gray-200 dark:border-gray-700 last:border-0"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {mounted && (
                <button
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                    setMenuOpen(false);
                  }}
                  className="rounded-md border px-3 py-2 text-sm 
                    hover:bg-gray-200 dark:hover:bg-gray-700 
                    transition-all duration-300 ease-in-out"
                >
                  {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </button>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
