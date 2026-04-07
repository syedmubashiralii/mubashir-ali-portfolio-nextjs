"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core Technologies",
    color: "blue",
    skills: ["Flutter", "Dart", "Firebase Firestore", "Firebase Auth", "Firebase Analytics", "Crashlytics", "Cloud Messaging"],
  },
  {
    title: "State Management",
    color: "purple",
    skills: ["Flutter BLoC", "Provider", "GetX"],
  },
  {
    title: "Networking & APIs",
    color: "cyan",
    skills: ["REST APIs", "HTTP", "Dio", "JSON Serialization"],
  },
  {
    title: "Local Storage",
    color: "green",
    skills: ["SQLite", "Hive", "SharedPreferences"],
  },
  {
    title: "Payments & Subscriptions",
    color: "emerald",
    skills: ["Stripe", "PhonePay", "Linkly", "In-App Purchases", "Subscription Management"],
  },
  {
    title: "Notifications",
    color: "orange",
    skills: ["FCM", "OneSignal", "Flutter Local Notifications", "Awesome Notifications"],
  },
  {
    title: "Location & Maps",
    color: "red",
    skills: ["Google Maps", "Geolocator", "GeoCoding"],
  },
  {
    title: "ML & Media",
    color: "pink",
    skills: ["Google ML Kit", "OpenCV", "FFmpeg"],
  },
  {
    title: "Web & Backend",
    color: "indigo",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Express.js"],
  },
  {
    title: "Ads & Monetization",
    color: "yellow",
    skills: ["Google AdMob", "AppLovin", "Meta Audience Network"],
  },
  {
    title: "Tools & Practices",
    color: "slate",
    skills: ["Git", "Clean Architecture", "MVVM", "REST API Design", "Agile / Scrum"],
  },
  {
    title: "Deployment",
    color: "teal",
    skills: ["Google Play Store", "Apple App Store", "CI/CD Pipelines"],
  },
];

type ColorKey = "blue" | "purple" | "cyan" | "green" | "emerald" | "orange" | "red" | "pink" | "indigo" | "yellow" | "slate" | "teal";

const colorMap: Record<ColorKey, { header: string; dot: string; tag: string; border: string }> = {
  blue:    { header: "text-blue-600 dark:text-blue-400",    dot: "bg-blue-500",    tag: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",       border: "border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700" },
  purple:  { header: "text-purple-600 dark:text-purple-400", dot: "bg-purple-500",  tag: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800", border: "border-purple-100 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700" },
  cyan:    { header: "text-cyan-600 dark:text-cyan-400",    dot: "bg-cyan-500",    tag: "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",       border: "border-cyan-100 dark:border-cyan-900/50 hover:border-cyan-300 dark:hover:border-cyan-700" },
  green:   { header: "text-green-600 dark:text-green-400",  dot: "bg-green-500",   tag: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",   border: "border-green-100 dark:border-green-900/50 hover:border-green-300 dark:hover:border-green-700" },
  emerald: { header: "text-emerald-600 dark:text-emerald-400", dot: "bg-emerald-500", tag: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800", border: "border-emerald-100 dark:border-emerald-900/50 hover:border-emerald-300 dark:hover:border-emerald-700" },
  orange:  { header: "text-orange-600 dark:text-orange-400", dot: "bg-orange-500",  tag: "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800", border: "border-orange-100 dark:border-orange-900/50 hover:border-orange-300 dark:hover:border-orange-700" },
  red:     { header: "text-red-600 dark:text-red-400",      dot: "bg-red-500",     tag: "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800",             border: "border-red-100 dark:border-red-900/50 hover:border-red-300 dark:hover:border-red-700" },
  pink:    { header: "text-pink-600 dark:text-pink-400",    dot: "bg-pink-500",    tag: "bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800",       border: "border-pink-100 dark:border-pink-900/50 hover:border-pink-300 dark:hover:border-pink-700" },
  indigo:  { header: "text-indigo-600 dark:text-indigo-400", dot: "bg-indigo-500",  tag: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800", border: "border-indigo-100 dark:border-indigo-900/50 hover:border-indigo-300 dark:hover:border-indigo-700" },
  yellow:  { header: "text-yellow-600 dark:text-yellow-400", dot: "bg-yellow-500",  tag: "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800", border: "border-yellow-100 dark:border-yellow-900/50 hover:border-yellow-300 dark:hover:border-yellow-700" },
  slate:   { header: "text-slate-600 dark:text-slate-400",  dot: "bg-slate-500",   tag: "bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700",   border: "border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600" },
  teal:    { header: "text-teal-600 dark:text-teal-400",    dot: "bg-teal-500",    tag: "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800",       border: "border-teal-100 dark:border-teal-900/50 hover:border-teal-300 dark:hover:border-teal-700" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-md mx-auto text-sm">
          A comprehensive toolkit built across 4+ years of professional development spanning mobile, web, and desktop.
        </p>
      </motion.div>

      {/* Category grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
        className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skillCategories.map((cat) => {
          const c = colorMap[cat.color as ColorKey];
          return (
            <motion.div
              key={cat.title}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className={`bg-white dark:bg-gray-900 rounded-xl border p-5 transition-all duration-300 hover:shadow-md ${c.border}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                <h3 className={`text-sm font-semibold ${c.header}`}>{cat.title}</h3>
              </div>
              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-2 py-1 rounded-md border font-medium ${c.tag}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
