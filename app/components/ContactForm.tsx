"use client";

import { Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { contact } from "@/app/data/portfolio";

const emptyForm = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");

  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const body = [`Name: ${form.name}`, `Email: ${form.email}`, "", form.message].join("\n");

    // The fields stay filled in, so nothing is lost if a pop-up gets blocked.
    if (submitter?.value === "email") {
      const subject = encodeURIComponent(form.subject);
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
      setStatus("Your email app should open with this message ready to send.");
      return;
    }

    const text = encodeURIComponent(`${form.subject}\n\n${body}`);
    window.open(`https://wa.me/${contact.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    setStatus("WhatsApp should open in a new tab with this message ready to send.");
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-bone p-6 text-pine-950 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Name
          <input type="text" name="name" autoComplete="name" value={form.name} onChange={update} placeholder="Your name" className="field font-normal" required />
        </label>
        <label className="text-sm font-semibold">
          Email
          <input type="email" name="email" autoComplete="email" value={form.email} onChange={update} placeholder="you@company.com" className="field font-normal" required />
        </label>
      </div>
      <label className="mt-5 block text-sm font-semibold">
        What do you need?
        <input type="text" name="subject" value={form.subject} onChange={update} placeholder="New app, app rescue, senior support, AI workflow..." className="field font-normal" required />
      </label>
      <label className="mt-5 block text-sm font-semibold">
        Message
        <textarea name="message" value={form.message} onChange={update} placeholder="Share the product, stack, timeline, or problem." rows={6} className="field resize-y font-normal" required />
      </label>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button type="submit" name="channel" value="whatsapp" className="btn btn-pine cursor-pointer">
          <MessageCircle size={17} aria-hidden="true" /> Send via WhatsApp
        </button>
        <button type="submit" name="channel" value="email" className="btn btn-ghost cursor-pointer">
          <Mail size={17} aria-hidden="true" /> Send via email
        </button>
      </div>
      <p role="status" className="mt-4 min-h-5 text-sm text-moss">
        {status}
      </p>
    </form>
  );
}
