"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Journey";
import Projects from "./components/Projects";
import ResumeViewer from "./components/ResumeViewer";
import ContactSection from "./components/ContactSection";

// Import sections as components

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <main>
       <Hero/>
       <Skills/>
       <Experience/>
       <Projects/>
       <ResumeViewer/>
       <ContactSection/>
      </main>

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
