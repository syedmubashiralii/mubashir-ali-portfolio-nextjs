"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    title: "Flutter Developer",
    company: "HeapStash Global",
    location: "Lahore (Remote)",
    period: "Nov 2023 - Mar 2025",
    documentLink: "https://syed-mubashir-ali-portfolio.vercel.app/Experience-Letter-HeapStash.pdf",
    description: [
      {
        title: "Neo One – Fintech Application",
        details: [
          "Developed a full-featured fintech application using Flutter.",
          "Integrated IBAN generation and card issuance via Weavr/Satchel.",
          "Implemented crypto wallet (BTC/ETH) with Striga API.",
          "Open banking via Plaid + secure KYC & UX consistency.",
        ],
      },
      {
        title: "Neo Pass – Travel & Booking Platform",
        details: [
          "Built responsive booking platform for flights & multi-currency payments.",
          "Integrated crypto + bank transfers & cards.",
          "Pixel-perfect UI with responsive Figma designs.",
        ],
      },
    ],
  },
  {
    title: "Flutter Mobile App Developer",
    company: "Khas Tech",
    location: "Islamabad",
    period: "Jun 2022 - Nov 2023",
    documentLink: "https://syed-mubashir-ali-portfolio.vercel.app/Experience-Letter-Khastech.pdf",
    description: [
      {
        title: "AI-Powered Editing & Utility Apps",
        details: [
          "Published AI image processing apps (Enhancer, Remover, Sketcher).",
          "Developed ICR scanning apps for text extraction.",
          "Built pedometer & tracking apps.",
          "Integrated ads & IAP (AdMob, AppLovin, Meta).",
          "Full deployment on Google Play & App Store.",
        ],
      },
    ],
  },
];

const education = [
  {
    degree: "BS in Computer Science",
    institution: "BIIT (Barani Institute of Information Technology)",
    location: "Rawalpindi, Pakistan",
    period: "Oct 2018 - Jun 2022",
    description: "Graduated with strong foundations in programming, algorithms, data structures, and software development.",
  },
];

const certifications = [
  {
    title: "Mastering Next.js 13 with TypeScript",
    issuer: "Code With Mosh",
    period: "Aug 2025",
    link: "https://syed-mubashir-ali-portfolio.vercel.app/next-js-with-ts.pdf",
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issuer: "Udemy",
    period: "Apr 2025",
    link: "https://www.udemy.com/certificate/UC-a0023ed1-5728-4812-89e8-1657c6e2c4c1/",
  },
  {
    title: "Flutter Bloc - From Zero to Hero Complete Course",
    issuer: "Udemy",
    period: "May 2024",
    link: "https://www.udemy.com/certificate/UC-3cce47c1-9f06-4b31-bcfd-e70630c0a93a/",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
          My <span className="text-blue-600 dark:text-blue-400">Journey</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          My professional journey and academic background that have shaped my expertise and knowledge.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="mt-16 relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

        <div className="space-y-12 pl-12">
          {/* Experience */}
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute -left-[34px] top-6 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white dark:border-gray-900 shadow-md"></div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                <Briefcase size={20} /> {exp.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                {exp.company} · <MapPin size={16} /> {exp.location}
              </p>
              <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2 text-sm">
                <Calendar size={16} /> {exp.period}
              </p>

              {exp.documentLink && (
                <Link
                  href={exp.documentLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Letter <ExternalLink size={16} />
                </Link>
              )}

              <div className="mt-4 space-y-4">
                {exp.description.map((proj, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">{proj.title}</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                      {proj.details.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Education */}
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-800/20 backdrop-blur-lg border border-green-200 dark:border-green-700 shadow-lg rounded-2xl p-6"
            >
              <div className="absolute -left-[34px] top-6 w-6 h-6 rounded-full bg-green-500 border-4 border-white dark:border-gray-900 shadow-md"></div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                <GraduationCap size={20} /> {edu.degree}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
              <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2 text-sm">
                <Calendar size={16} /> {edu.period}
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{edu.description}</p>
            </motion.div>
          ))}

          {/* Certifications */}
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-r from-yellow-50 to-orange-100 dark:from-yellow-900/40 dark:to-orange-800/20 backdrop-blur-lg border border-yellow-200 dark:border-yellow-700 shadow-lg rounded-2xl p-6"
            >
              <div className="absolute -left-[34px] top-6 w-6 h-6 rounded-full bg-yellow-500 border-4 border-white dark:border-gray-900 shadow-md"></div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                <Award size={18} /> {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {cert.issuer} · {cert.period}
              </p>
              <Link
                href={cert.link}
                target="_blank"
                className="inline-flex items-center gap-2 mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                View Certificate <ExternalLink size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
