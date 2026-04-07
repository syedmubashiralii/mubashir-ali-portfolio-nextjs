"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ResumeViewer from "./components/ResumeViewer";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ResumeViewer />
        <ContactSection />
      </main>

      {/* Scroll-to-top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
