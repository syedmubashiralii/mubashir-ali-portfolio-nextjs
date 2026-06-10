import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Professional experience, skills, projects, certifications, and resume of Senior Flutter Developer Syed Mubashir Ali.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Syed Mubashir Ali",
    description: "Professional Flutter experience, selected work, and resume.",
    url: "/portfolio",
    type: "profile",
  },
};

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
