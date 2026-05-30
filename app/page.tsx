"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import ResumeViewer from "./components/ResumeViewer";
import Skills from "./components/Skills";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 520);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-50">
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <ResumeViewer />
      <ContactSection />

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-slate-950 text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-200"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
