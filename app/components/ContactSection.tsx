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
    <section id="contact" className="relative overflow-hidden bg-[#061019] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(103,232,249,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.08)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_right,black,transparent)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Start a product conversation</p>
          <h2 className="mt-4 text-balance text-4xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl">
            Need a product built, rescued, or accelerated with AI?
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Share the idea, platform, broken flow, deadline, or release blocker. I can support Flutter, React Native,
            native iOS or Android, modern web apps, desktop delivery, Agentic AI workflows, and MCP integrations. The
            form opens WhatsApp with your message pre-filled for a fast project conversation.
          </p>

          <div className="mt-8 space-y-3">
            <Link
              href={`mailto:${contact.email}?subject=Portfolio%20Inquiry`}
              className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200 transition hover:border-cyan-300/60 hover:bg-white/[0.08]"
            >
              <Mail size={18} /> {contact.email}
            </Link>
            <Link
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200 transition hover:border-cyan-300/60 hover:bg-white/[0.08]"
            >
              <Phone size={18} /> {contact.phone}
            </Link>
            <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200">
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
                className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:text-cyan-300"
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
          className="rounded-xl border border-cyan-300/20 bg-[#0a1721] p-6 text-white shadow-2xl shadow-black/30"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-200">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-2 w-full rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/10"
                required
              />
            </label>
            <label className="text-sm font-medium text-slate-200">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/10"
                required
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium text-slate-200">
            Subject
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="App, Agentic AI, MCP, role, consultation..."
              className="mt-2 w-full rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/10"
              required
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-slate-200">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share the app, timeline, stack, or problem you want to solve."
              rows={6}
              className="mt-2 w-full resize-none rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/10"
              required
            />
          </label>
          <Button type="submit" className="mt-5 h-12 w-full rounded-md bg-cyan-300 font-bold text-slate-950 hover:bg-cyan-200">
            <Send className="h-4 w-4" /> Send via WhatsApp
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
