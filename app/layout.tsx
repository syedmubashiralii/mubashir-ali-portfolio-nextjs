import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import JsonLd from "@/app/components/site/JsonLd";
import { buildPersonJsonLd, buildServiceJsonLd, buildWebsiteJsonLd, siteMetadata } from "@/app/data/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-900 antialiased transition-colors duration-300 ease-in-out dark:bg-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <JsonLd id="person-jsonld" data={buildPersonJsonLd()} />
          <JsonLd id="website-jsonld" data={buildWebsiteJsonLd()} />
          <JsonLd id="service-jsonld" data={buildServiceJsonLd()} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
