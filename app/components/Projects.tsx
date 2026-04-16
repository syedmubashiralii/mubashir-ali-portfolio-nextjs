"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  // {
  //   title: "iPOS",
  //   description:
  //     "Enterprise-grade Point of Sale system deployed across multiple outlets at the University of Wollongong, Australia. Covers inventory management, purchasing automation, cashier & kitchen modules, and Linkly payment integration.",
  //   image:
  //     "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
  //   tags: ["Flutter", "Dart", "Linkly", "POS", "Inventory"],
  //   liveLink: "",
  //   category: "Enterprise",
  // },
  // {
  //   title: "Pulse",
  //   description:
  //     "Student super-app for University of Wollongong students — food ordering, book purchasing, vouchers, coupons, event information, and membership subscriptions.",
  //   image:
  //     "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80",
  //   tags: ["Flutter", "Dart", "Firebase", "Vouchers", "IAP"],
  //   liveLink: "",
  //   category: "Consumer",
  // },
  // {
  //   title: "Neo One",
  //   description:
  //     "Modern fintech platform integrating bank account linking and cryptocurrency wallet management with secure, real-time transactions. Features IBAN generation, card issuance via Weavr/Satchel, and crypto wallet (BTC/ETH) via Striga.",
  //   image:
  //     "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/neo-one-1.jpg",
  //   tags: ["Flutter", "Fintech", "Plaid", "Striga", "Weavr", "Crypto"],
  //   liveLink: "https://apps.apple.com/sk/app/neo-one/id6475296925",
  //   category: "Fintech",
  // },
  // {
  //   title: "Neo Pass",
  //   description:
  //     "Web-based international flight booking platform with integrated cryptocurrency payment gateway, built in Flutter Web. Supports crypto + bank transfers and pixel-perfect Figma UI implementation.",
  //   image:
  //     "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/neopass-1.png",
  //   tags: ["Flutter Web", "Dart", "Crypto Payments", "Travel", "Stripe"],
  //   liveLink: "https://neopass.club/key",
  //   category: "Fintech",
  // },
  // {
  //   title: "Elemed",
  //   description:
  //     "Doctor appointment scheduling app with Firebase-powered real-time sync, secure authentication, and seamless patient-doctor communication. Features smart scheduling and real-time notifications.",
  //   image:
  //     "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
  //   tags: ["Flutter", "Firebase", "Healthcare", "Real-time", "FCM"],
  //   liveLink: "",
  //   category: "Healthcare",
  // },
  // {
  //   title: "MyClickerr",
  //   description:
  //     "Photographer booking marketplace with in-app chat, Stripe payment processing, custom order management, and FCM/OneSignal push notifications for real-time updates.",
  //   image:
  //     "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
  //   tags: ["Flutter", "Stripe", "FCM", "OneSignal", "Marketplace"],
  //   liveLink: "",
  //   category: "Marketplace",
  // },
  // {
  //   title: "BrightFlixx",
  //   description:
  //     "Cross-platform Netflix-style streaming app featuring personalized recommendations, user profiles, content filtering, and a polished entertainment experience.",
  //   image:
  //     "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/brightflixx-1.jpg",
  //   tags: ["Flutter", "Dart", "Streaming", "Firebase"],
  //   liveLink: "https://play.google.com/store/apps/details?id=com.stream.brightflixx&hl=en",
  //   category: "Entertainment",
  // },
  // {
  //   title: "Buddy Tracker",
  //   description:
  //     "Real-time location sharing and group tracking app with built-in chat, route finding, and travel history. Built with Google Maps and Firebase for live updates.",
  //   image:
  //     "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/buddy-tracker-1.jpg",
  //   tags: ["Flutter", "Google Maps", "Firebase", "Geolocator"],
  //   liveLink:
  //     "https://play.google.com/store/apps/details?id=com.charisma.trackassistant.GPStrackingprofiling.guide&hl=en",
  //   githubLink: "https://github.com/syedmubashiralii/BuddyTracker",
  //   category: "Utilities",
  // },
  // {
  //   title: "Pacer",
  //   description:
  //     "Personal step counter and walking tracker powered by a built-in pedometer. Tracks every step, distance walked, and walking path with location history.",
  //   image:
  //     "https://raw.githubusercontent.com/syedmubashiralii/syed-mubashir-ali/main/images/pacer-1.jpg",
  //   tags: ["Flutter", "Dart", "Pedometer", "Google Maps"],
  //   liveLink:
  //     "https://play.google.com/store/apps/details?id=charisma.motiondetectorpedometer.steptrackercounter&hl=en",
  //   category: "Health",
  // },
];

const categoryColors: Record<string, string> = {
  Enterprise:    "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
  Consumer:      "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  Fintech:       "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
  Healthcare:    "bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  Marketplace:   "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  Entertainment: "bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
  Utilities:     "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300",
  Health:        "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900/40"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Selected <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm">
          Production applications shipped across fintech, POS, travel, healthcare, and consumer platforms.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-44 overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Category badge */}
              <div className="absolute top-3 left-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[project.category] ?? ""}`}>
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(project.liveLink || project.githubLink) && (
                <div className="mt-4 flex gap-2">
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white text-xs font-medium transition-colors"
                    >
                      <Github size={13} /> Code
                    </Link>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12"
      >
        <Link
          {/* href="https://github.com/syedmubashiralii" */}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
        >
          <Github size={16} /> View More on GitHub
        </Link>
      </motion.div>
    </section>
  );
}
