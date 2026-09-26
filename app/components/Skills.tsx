"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Database, Map, Megaphone, Server, Shield, Smartphone, Store, Wallet, Zap } from "lucide-react";
import { skillCategories } from "../data/portfolio";

const iconMap = [Smartphone, Zap, Server, Database, Wallet, Megaphone, Map, Code2, Server, Store, Shield, Bot, Store];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#eef2f3] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Skills</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl dark:text-white">
            One toolkit for mobile, web, and desktop delivery.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Flutter and Dart expertise with React Native, native Android and iOS, modern web development, backend
            integration, payments, media tooling, and production release workflows.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category, index) => {
            const Icon = iconMap[index] ?? Code2;

            return (
              <motion.article
                key={category.title}
                variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-slate-950 text-cyan-300 dark:bg-cyan-300 dark:text-slate-950">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-950 dark:text-white">{category.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-200 bg-[#f7f9f9] px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
