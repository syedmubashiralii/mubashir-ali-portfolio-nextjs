"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";

const experiences = [
  // {
  //   title: "Senior Flutter Developer",
  //   company: "DPL (deployed to Axian Group)",
  //   location: "Islamabad, PK",
  //   period: "Jan 2026 – Present",
  //   documentLink: "",
  //   badge: "Current",
  //   description: [
  //     {
  //       title: "Key Responsibilities",
  //       details: [
  //         "Embedded within Axian Group, a pan-African telecom and fintech conglomerate, delivering Flutter solutions across multiple high-impact product lines.",
  //         "Developing the Tanzania Super App — a multi-service platform combining fintech, telecom, and daily utility services for the Tanzanian market.",
  //         "Building a fintech application for digital payments, wallet management, and financial services; and a self-care app enabling telecom subscribers to manage accounts, plans, and usage.",
  //         "Contributing to a telecom platform project, delivering cross-platform features for network service management and subscriber experience across African markets.",
  //       ],
  //     },
  //     {
  //       title: "Tools & Technologies",
  //       details: ["Flutter, Dart, Fintech APIs, Telecom SDKs, Clean Architecture, BLoC"],
  //     },
  //   ],
  // },
  // {
  //   title: "Flutter Developer",
  //   company: "Impact IT Solutions",
  //   location: "Islamabad, PK",
  //   period: "Apr 2025 – Dec 2025",
  //   documentLink: "#",
  //   badge: "",
  //   description: [
  //     {
  //       title: "Key Responsibilities",
  //       details: [
  //         "Managed and maintained a Flutter-based Point of Sale (POS) system deployed across multiple outlets at the University of Wollongong (UOW), Australia — covering items & categories, stock, supplier, purchase orders, cashier, and kitchen-side operations.",
  //         "Developed and maintained Pulse, a student mobile application serving UOW students for food ordering, book purchasing, vouchers, coupons, event information, and membership subscriptions.",
  //         "Implemented advanced discount and promotion systems including vouchers, coupons, and promotional offer management.",
  //         "Ensured system reliability through proactive performance monitoring, issue resolution, and cross-team collaboration.",
  //       ],
  //     },
  //     {
  //       title: "Tools & Technologies",
  //       details: ["Flutter, Dart, POS Systems, Linkly Payment, Inventory Management, Voucher & Coupon Systems"],
  //     },
  //   ],
  // },
  // {
  //   title: "Senior Flutter Developer",
  //   company: "KodersPoint",
  //   location: "Lahore, PK (Remote)",
  //   period: "Jul 2023 – Oct 2025",
  //   documentLink: "https://syed-mubashir-ali-portfolio.vercel.app/KP-Experience-Letter.jpg",
  //   badge: "",
  //   description: [
  //     {
  //       title: "Key Responsibilities",
  //       details: [
  //         "Architected and delivered cross-platform MVPs and full-scale applications for diverse clients using Flutter, with additional projects in React Native and Java (Android).",
  //         "Built and deployed multiple Flutter Web admin panels for business management workflows.",
  //         "Consistently delivered optimized, client-tailored solutions across varied industry verticals including e-commerce, services, and utilities.",
  //       ],
  //     },
  //     {
  //       title: "Tools & Technologies",
  //       details: ["Flutter, React Native, Java (Android), Flutter Web, Cross-Platform Development"],
  //     },
  //   ],
  // },
  // {
  //   title: "Flutter Developer",
  //   company: "HeapStash Global (for Sheikh Makhtoum Neo Technologies, UAE)",
  //   location: "Lahore, PK (Remote)",
  //   period: "Nov 2023 – Mar 2025",
  //   documentLink: "https://syed-mubashir-ali-portfolio.vercel.app/Experience-Letter-HeapStash.pdf",
  //   badge: "",
  //   description: [
  //     {
  //       title: "Neo One – Fintech Application",
  //       details: [
  //         "Engineered Neo One, a fintech mobile application integrating bank account linking and cryptocurrency wallet management with secure transaction handling.",
  //         "Integrated IBAN generation and card issuance via Weavr/Satchel; implemented crypto wallet (BTC/ETH) with Striga API.",
  //         "Open banking via Plaid + secure KYC & UX consistency.",
  //       ],
  //     },
  //     {
  //       title: "Neo Pass – Travel & Booking Platform",
  //       details: [
  //         "Built Neo Pass, a Flutter web application for international flight bookings with integrated cryptocurrency payment support, optimized for performance and seamless UX.",
  //         "Integrated crypto + bank transfers & cards; pixel-perfect UI from Figma designs.",
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Flutter Mobile App Developer",
  //   company: "Khas Tech",
  //   location: "Islamabad, PK",
  //   period: "Jul 2022 – Nov 2023",
  //   documentLink: "https://syed-mubashir-ali-portfolio.vercel.app/Experience-Letter-Khastech.pdf",
  //   badge: "",
  //   description: [
  //     {
  //       title: "Key Responsibilities",
  //       details: [
  //         "Developed and published 20+ Flutter applications to the Google Play Store and Apple App Store, growing the company's App Store presence from 0 to 20+ live apps.",
  //         "Delivered AI-powered image processing apps (Enhancer, Remover, Sketcher) leveraging Google ML Kit, OpenCV, and FFmpeg.",
  //         "Built ICR (Intelligent Character Recognition) applications for document scanning and text extraction.",
  //         "Created fitness tracking and pedometer applications for location-based and health services.",
  //         "Integrated ads & IAP monetization: Google AdMob, AppLovin, Meta Audience Network.",
  //       ],
  //     },
  //   ],
  // },
];

const education = [
  // {
  //   degree: "Bachelor of Science in Computer Science",
  //   institution: "PMAS Arid Agriculture University, Rawalpindi",
  //   location: "Rawalpindi, Pakistan",
  //   period: "Oct 2018 – Jun 2022",
  //   description: "Graduated with strong foundations in programming, algorithms, data structures, and software engineering.",
  // },
];

const certifications = [
  // {
  //   title: "Mastering Next.js with TypeScript",
  //   issuer: "Code With Mosh",
  //   period: "Aug 2025",
  //   link: "https://syed-mubashir-ali-portfolio.vercel.app/next-js-with-ts.pdf",
  // },
  // {
  //   title: "Node.js, Express & More: Complete Bootcamp",
  //   issuer: "Udemy",
  //   period: "Apr 2025",
  //   link: "https://www.udemy.com/certificate/UC-a0023ed1-5728-4812-89e8-1657c6e2c4c1/",
  // },
  // {
  //   title: "Flutter BLoC — Zero to Hero Complete Course",
  //   issuer: "Udemy",
  //   period: "May 2024",
  //   link: "https://www.udemy.com/certificate/UC-3cce47c1-9f06-4b31-bcfd-e70630c0a93a/",
  // },
];

export default function Journey() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/40">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto">
          Professional journey across fintech, telecom, POS, travel, and consumer platforms.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400 opacity-30 hidden md:block" />

        <div className="space-y-8">
          {/* Experience entries */}
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative md:pl-14"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-[14px] top-6 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20 items-center justify-center" />

              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all duration-300">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <Briefcase size={16} className="text-blue-500 flex-shrink-0" />
                        {exp.title}
                      </h3>
                      {exp.badge && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">{exp.company}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {exp.period}
                      </span>
                    </div>
                  </div>
                  {exp.documentLink && exp.documentLink !== "#" && (
                    <Link
                      href={exp.documentLink}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline flex-shrink-0"
                    >
                      View Letter <ExternalLink size={12} />
                    </Link>
                  )}
                </div>

                {/* Description */}
                <div className="mt-4 space-y-3">
                  {exp.description.map((proj, idx) => (
                    <div key={idx}>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                        {proj.title}
                      </p>
                      <ul className="space-y-1">
                        {proj.details.map((d, j) => (
                          <li key={j} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-blue-400 flex-shrink-0 mt-1">▸</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Education */}
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative md:pl-14"
            >
              <div className="hidden md:flex absolute left-[14px] top-6 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-emerald-200 dark:border-emerald-900 p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <GraduationCap size={16} className="text-emerald-500 flex-shrink-0" />
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">{edu.institution}</p>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {edu.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{edu.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:pl-14"
          >
            <div className="hidden md:flex absolute left-[14px] w-3 h-3 rounded-full bg-amber-500 ring-4 ring-amber-500/20" />
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4 flex items-center gap-2">
              <Award size={15} className="text-amber-500" /> Certifications
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-xl border border-amber-200 dark:border-amber-900/50 p-4 hover:shadow-sm transition-all duration-300"
                >
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-snug">{cert.title}</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {cert.issuer} · {cert.period}
                  </p>
                  <Link
                    href={cert.link}
                    target="_blank"
                    className="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Certificate <ExternalLink size={11} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
