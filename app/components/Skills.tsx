"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Cloud, Rocket, Github } from "lucide-react";

const skills = [
  { name: "Flutter", icon: <Smartphone size={22} /> },
  { name: "Dart", icon: <Code2 size={22} /> },
  { name: "Next.js", icon: <Rocket size={22} /> },
  { name: "React", icon: <Rocket size={22} /> },
  { name: "TypeScript", icon: <Code2 size={22} /> },
  { name: "Firebase", icon: <Cloud size={22} /> },
  { name: "Node.js", icon: <Code2 size={22} /> },
  { name: "Git/GitHub", icon: <Github size={22} /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100"
      >
        My <span className="text-blue-600 dark:text-blue-400">Skills</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-3 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
      >
        The technologies I use to build beautiful, scalable, and reliable digital
        products.
      </motion.p>

      {/* Skills Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative group rounded-xl p-6 flex flex-col items-center 
                      justify-center text-center cursor-pointer
                      bg-white/70 dark:bg-gray-800/60 
                      backdrop-blur-lg border border-gray-200 dark:border-gray-700 
                      shadow-md hover:shadow-xl 
                      transition-all duration-500 hover:-translate-y-2"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-400/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

            {/* Icon */}
            <div className="text-blue-600 dark:text-blue-400 mb-3">
              {skill.icon}
            </div>

            {/* Name */}
            <p className="font-semibold text-gray-800 dark:text-gray-200 z-10">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
