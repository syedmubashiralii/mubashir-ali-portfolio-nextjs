"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Smartphone } from "lucide-react";

const highlights = [
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Apps on Play/App Store" },
  { value: "5+", label: "Industries Served" },
  { value: "3", label: "Platforms (Mobile/Web/Desktop)" },
];

const info = [
  { icon: <MapPin size={14} />, label: "Location", value: "Islamabad, Pakistan" },
  { icon: <Mail size={14} />, label: "Email", value: "" },
  { icon: <Smartphone size={14} />, label: "Phone", value: "" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-sm">
            A brief look at who I am and what drives me professionally.
          </p>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 md:p-10 shadow-sm"
        >
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Results-driven{" "}
            <span className="font-semibold text-gray-900 dark:text-white">Senior Flutter Developer</span> with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">4+ years</span> of hands-on experience
            architecting and shipping{" "}
            <span className="font-semibold text-gray-900 dark:text-white">20+ production-ready applications</span> across
            fintech, POS, travel, healthcare, and consumer platforms.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Proven ability to own the full development lifecycle — from architecture to App Store deployment — while
            delivering clean, scalable, and performance-optimized code. Experienced in cross-functional and remote team
            environments with a strong track record of translating complex business requirements into polished,
            user-centric solutions across mobile, web, and desktop.
          </p>

          {/* Contact info row */}
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-6">
            {info.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm">
                <span className="text-blue-500">{item.icon}</span>
                <span className="text-gray-500 dark:text-gray-400">{item.label}:</span>
                <span className="text-gray-800 dark:text-gray-200 font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 text-center hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300"
            >
              <p className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">{h.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-snug">{h.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
