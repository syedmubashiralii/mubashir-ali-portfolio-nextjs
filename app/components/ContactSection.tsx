"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { contact } from "../data/portfolio";
import { Button } from "./ui/button";

const socialLinks = [
  { href: contact.linkedin, label: "LinkedIn", icon: <Linkedin size={18} /> },
  { href: contact.github, label: "GitHub", icon: <Github size={18} /> },
  { href: contact.instagram, label: "Instagram", icon: <Instagram size={18} /> },
  { href: contact.x, label: "X", icon: <Twitter size={18} /> },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Subject: ${formData.subject}`,
      `Message: ${formData.message}`,
    ].join("\n");

    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-semibold uppercase text-blue-300">Start a Flutter project</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Need a Flutter product built, rescued, or shipped?
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Share the app idea, broken flow, deadline, or release blocker. The form opens WhatsApp with your message
            pre-filled, so the fastest path from search visitor to project conversation stays simple.
          </p>

          <div className="mt-8 space-y-3">
            <Link
              href={`mailto:${contact.email}?subject=Portfolio%20Inquiry`}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-slate-200 transition hover:border-blue-300 hover:bg-white/10"
            >
              <Mail size={18} /> {contact.email}
            </Link>
            <Link
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-slate-200 transition hover:border-blue-300 hover:bg-white/10"
            >
              <Phone size={18} /> {contact.phone}
            </Link>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
              <MapPin size={18} /> {contact.location}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-white"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-lg border border-white/10 bg-white p-5 text-slate-950 shadow-2xl shadow-black/20 dark:bg-slate-900 dark:text-white"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white p-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950"
                required
              />
            </label>
            <label className="text-sm font-medium">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white p-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950"
                required
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium">
            Subject
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project, role, consultation..."
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white p-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950"
              required
            />
          </label>
          <label className="mt-4 block text-sm font-medium">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share the app, timeline, stack, or problem you want to solve."
              rows={6}
              className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white p-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950"
              required
            />
          </label>
          <Button type="submit" className="mt-5 w-full rounded-full bg-emerald-600 text-white hover:bg-emerald-700">
            <Send className="h-4 w-4" /> Send via WhatsApp
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
