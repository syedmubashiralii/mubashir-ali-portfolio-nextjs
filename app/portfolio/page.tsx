"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import About from "@/app/components/About";
import AgenticAI from "@/app/components/AgenticAI";
import ContactSection from "@/app/components/ContactSection";
import Hero from "@/app/components/Hero";
import Journey from "@/app/components/Journey";
import Projects from "@/app/components/Projects";
import ResumeViewer from "@/app/components/ResumeViewer";
import Skills from "@/app/components/Skills";

export default function PortfolioPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 520);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      const sectionId = window.location.hash.slice(1);
      if (!sectionId) return;

      const section = document.getElementById(sectionId);
      if (!section) return;

      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      section.scrollIntoView({ behavior: "auto", block: "start" });
      root.style.scrollBehavior = previousScrollBehavior;
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-[#eef2f3] text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-50">
      <Hero />
      <About />
      <AgenticAI />
      <Journey />
      <Skills />
      <Projects />
      <ResumeViewer />
      <ContactSection />

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-md border border-white/20 bg-slate-950 text-cyan-300 shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
