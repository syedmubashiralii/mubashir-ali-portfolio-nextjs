import type { Metadata } from "next";
import { portfolioMetadata } from "@/app/data/seo";

export const metadata: Metadata = portfolioMetadata;

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
