import type { Metadata } from "next";
import ContactSection from "@/app/components/ContactSection";
import SiteShell from "@/app/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Syed Mubashir Ali for Flutter development, product engineering, and collaboration.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Syed Mubashir Ali",
    description: "Email, WhatsApp, social profiles, and resume access.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactSection />
    </SiteShell>
  );
}
