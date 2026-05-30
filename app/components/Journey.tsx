"use client";

import { motion } from "framer-motion";
import { Award, BriefcaseBusiness, Calendar, ExternalLink, GraduationCap, MapPin } from "lucide-react";
import Link from "next/link";
import { certifications, education, experiences } from "../data/portfolio";

export default function Journey() {
  return (
    <section id="experience" className="bg-white px-4 py-20 dark:bg-slate-900/60 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-300">Experience</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
            Work history built around shipped products.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            A practical timeline across telecom, fintech, POS, travel, e-commerce, ML/media, and consumer platforms.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="grid gap-5 rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:border-blue-300 hover:bg-white dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-800 dark:hover:bg-slate-900 md:grid-cols-[0.36fr_0.64fr]"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-600 text-white">
                    <BriefcaseBusiness size={18} />
                  </div>
                  {experience.badge && (
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      {experience.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-950 dark:text-white">{experience.title}</h3>
                <p className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">{experience.company}</p>
                <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <p className="flex items-center gap-2">
                    <Calendar size={15} /> {experience.period}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={15} /> {experience.location}
                  </p>
                </div>
                {experience.documentLink && (
                  <Link
                    href={experience.documentLink}
                    target="_blank"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-300"
                  >
                    View Letter <ExternalLink size={13} />
                  </Link>
                )}
              </div>

              <div>
                <ul className="space-y-3">
                  {experience.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900/60 dark:bg-emerald-950/30"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-600 text-white">
              <GraduationCap size={18} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-950 dark:text-white">{education.degree}</h3>
            <p className="mt-1 text-sm font-semibold text-emerald-700 dark:text-emerald-300">{education.institution}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2">
                <Calendar size={15} /> {education.period}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} /> {education.location}
              </span>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/60 dark:bg-amber-950/30"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-amber-500 text-white">
                <Award size={18} />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">Certifications</h3>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {certifications.map((certification) => (
                <Link
                  key={certification.title}
                  href={certification.link}
                  target="_blank"
                  className="rounded-lg border border-amber-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-amber-400 dark:border-amber-900/60 dark:bg-slate-950 dark:hover:border-amber-600"
                >
                  <p className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">{certification.title}</p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    {certification.issuer} · {certification.period}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                    View <ExternalLink size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
