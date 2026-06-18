import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import { portfolioMetadata } from "@/app/data/seo";

export const metadata: Metadata = portfolioMetadata;

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
