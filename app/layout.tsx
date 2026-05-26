import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Playfair_Display } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorFollower from "@/components/CursorFollower";
import ScrollProgress from "@/components/ScrollProgress";
import { site } from "@/lib/site";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Builder of agentic AI, real-time ML & production infra`,
  description: site.metaDescription,
  keywords: [
    "Sagnik Mukherjee",
    "portfolio",
    "machine learning",
    "MLOps",
    "agentic AI",
    "LangChain",
    "PyTorch",
    "Next.js",
    "IIIT Naya Raipur",
    "SRE",
    "competitive programming",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: site.name,
    description: site.metaDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.metaDescription,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="relative bg-ink text-cream antialiased">
        <LenisProvider>
          <ScrollProgress />
          <CursorFollower />
          <div className="noise-bg" />
          <Navbar />
          <main className="relative z-[2]">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
