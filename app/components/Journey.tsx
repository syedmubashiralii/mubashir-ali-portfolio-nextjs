"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, BriefcaseBusiness, Calendar, ExternalLink, GraduationCap, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { certifications, education, experiences } from "../data/portfolio";

export default function Journey() {
  return (
    <section id="experience" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Experience</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl dark:text-white">
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
              className="group grid gap-6 rounded-xl border border-slate-200 bg-[#f7f9f9] p-6 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-white hover:shadow-xl hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950 md:grid-cols-[0.36fr_0.64fr]"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-slate-950 text-cyan-300 dark:bg-cyan-300 dark:text-slate-950">
                    <BriefcaseBusiness size={18} />
                  </div>
                  {experience.badge && (
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      {experience.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-950 dark:text-white">{experience.title}</h3>
                <p className="mt-1 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                  {experience.companyUrl ? (
                    <a href={experience.companyUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      {experience.company}
                    </a>
                  ) : (
                    experience.company
                  )}
                </p>
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
                    className="mt-4 inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700 dark:border-slate-700 dark:text-slate-300"
                  >
                    View Letter <ExternalLink size={13} />
                  </Link>
                )}
              </div>

              <div>
                <ul className="space-y-3">
                  {experience.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
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
            className="rounded-xl border border-slate-800 bg-[#061019] p-6 text-white"
          >
            <div className="grid h-10 w-10 place-items-center rounded-md bg-cyan-300 text-slate-950">
              <GraduationCap size={18} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">{education.degree}</h3>
            <p className="mt-1 text-sm font-semibold text-cyan-300">{education.institution}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
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
            className="rounded-xl border border-slate-200 bg-[#f7f9f9] p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-slate-950 text-cyan-300 dark:bg-cyan-300 dark:text-slate-950">
                <Award size={18} />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">Certifications</h3>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {certifications.map((certification) => (
                <Link
                  key={certification.title}
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-xl border p-4 transition hover:-translate-y-1 hover:shadow-lg ${
                    certification.featured
                      ? "sm:col-span-2 border-cyan-300/30 bg-[#061019] text-white shadow-lg shadow-slate-900/20 hover:border-cyan-300"
                      : "border-slate-200 bg-white hover:border-cyan-400 dark:border-slate-800 dark:bg-slate-950"
                  }`}
                >
                  {certification.featured ? (
                    <div className="relative grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                      <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur">
                        <span className="text-xl font-black">M</span>
                        <Sparkles className="absolute -right-1 -top-1 text-cyan-200" size={16} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-cyan-100">
                          <span>Code With Mosh</span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-1 text-white ring-1 ring-white/20">
                            <BadgeCheck size={12} /> New certification
                          </span>
                        </div>
                        <p className="mt-2 text-lg font-bold leading-6">{certification.title}</p>
                        <p className="mt-2 text-xs text-slate-400">
                          Issued {certification.period} · Credential ID {certification.credentialId}
                        </p>
                      </div>
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-md bg-cyan-300 px-3 py-2 text-xs font-bold text-slate-950 transition group-hover:bg-cyan-200">
                        View credential <ExternalLink size={12} />
                      </span>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">{certification.title}</p>
                      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                        {certification.issuer} · {certification.period}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300">
                        View <ExternalLink size={12} />
                      </span>
                    </>
                  )}
                </Link>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
