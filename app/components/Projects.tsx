"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Buddy Tracker",
    description:
      "Live Location & Buddy Tracker is a powerful app for real-time location sharing, group tracking, chat, route finding, and travel history.",
    image:
      "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/buddy-tracker-1.jpg",
    tags: ["Flutter", "Dart", "Google Map", "Firebase"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.charisma.trackassistant.GPStrackingprofiling.guide&hl=en",
    githubLink: "https://github.com/syedmubashiralii/BuddyTracker",
  },
  {
    title: "Pacer",
    description:
      "Pacer is your personal step counter and walking tracker. Using a built-in pedometer, it records every step, distance walked, and your walking path.",
    image:
      "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/pacer-1.jpg",
    tags: ["Flutter", "Dart", "Google Map", "Firebase"],
    liveLink:
      "https://play.google.com/store/apps/details?id=charisma.motiondetectorpedometer.steptrackercounter&hl=en",
    githubLink: "https://github.com/syedmubashiralii/Pacer-Android",
  },
  {
    title: "BrightFlixx",
    description:
      "BrightFlixx is your personalized entertainment hub – stream your favorite movies and shows, just like Netflix.",
    image: "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/brightflixx-1.jpg",
    tags: ["Flutter", "Dart"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.stream.brightflixx&hl=en",
  },
  {
    title: "Neo Pass",
    description:
      "Neopass is a modern travel booking platform built with Flutter Web, offering seamless travel experiences powered by cryptocurrency payments.",
    image: "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/neopass-1.png",
    tags: ["Flutter", "Dart", "Stripe", "Crypto-Payments", "Flutter Web"],
    liveLink: "https://neopass.club/key",
    githubLink: "#",
  },
  {
    title: "Neo One",
    description:
      "Neo One is a modern Flutter fintech app offering virtual cards, IBANs, and a secure multi-currency crypto wallet. Link your bank accounts seamlessly using Plaid-powered Open Banking.",
    image: "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/neo-one-1.jpg",
    tags: ["Flutter", "Fintech", "Dart", "Plaid", "Striga", "Weavr"],
    liveLink: "https://apps.apple.com/sk/app/neo-one/id6475296925",
    githubLink: "#",
  },
  {
    title: "Real Estate Platform",
    description:
      "A platform for listing and searching real estate properties with virtual tours and location analytics.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    tags: ["Next.js", "MongoDB", "Google Maps API", "Cloudinary", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          A collection of applications and platforms I have built — from fintech
          and travel to entertainment and real estate.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-3">
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                )}
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium transition-all"
                  >
                    <Github size={16} /> Code
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      
      </div>
        <div className="text-center mt-20 items-center">
          <Button 
            asChild
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white group shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <Link href="https://github.com/syedmubashiralii" target="_blank" rel="noopener noreferrer" className="flex items-center">
              View More on GitHub <Github className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </Link>
          </Button>
        </div>
    </section>
  );
}
