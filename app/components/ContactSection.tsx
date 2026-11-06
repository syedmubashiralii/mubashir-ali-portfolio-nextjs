import { Github, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter } from "lucide-react";
import { contact } from "@/app/data/portfolio";
import ContactForm from "./ContactForm";

const socialLinks = [
  { href: contact.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: contact.github, label: "GitHub", icon: Github },
  { href: contact.x, label: "X", icon: Twitter },
  { href: contact.instagram, label: "Instagram", icon: Instagram },
];

const rowClass = "flex items-center gap-3 border-b border-white/15 py-4 break-all";

export default function ContactSection({ as: Heading = "h2" }: Readonly<{ as?: "h1" | "h2" }>) {
  return (
    <section id="contact" className="bg-pine-950 px-4 py-16 text-paper sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow text-volt">Hire a senior Flutter developer</p>
          <Heading className="mt-4 text-[clamp(2.6rem,5.5vw,4.5rem)] leading-[1] font-bold">
            Need a product built, rescued, or sped up?
          </Heading>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-sage">
            Share the idea, platform, broken flow, deadline, or release blocker. Flutter, React Native, native iOS and
            Android, web, desktop, Agentic AI, and MCP work are all on the table.
          </p>

          <div className="mt-8 border-t border-white/15">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className={`${rowClass} transition-colors hover:text-volt`}>
              <MessageCircle size={18} className="shrink-0" aria-hidden="true" /> Chat on WhatsApp
            </a>
            <a href={`mailto:${contact.email}?subject=Project%20Inquiry`} className={`${rowClass} transition-colors hover:text-volt`}>
              <Mail size={18} className="shrink-0" aria-hidden="true" /> {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={`${rowClass} transition-colors hover:text-volt`}>
              <Phone size={18} className="shrink-0" aria-hidden="true" /> {contact.phone}
            </a>
            <p className={rowClass}>
              <MapPin size={18} className="shrink-0" aria-hidden="true" /> {contact.location}, working worldwide
            </p>
          </div>

          <ul className="mt-6 flex gap-2">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-colors hover:border-volt hover:text-volt">
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
