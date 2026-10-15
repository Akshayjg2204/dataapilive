import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import AOSInit from "@/components/AOSInit";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DataAPI — Intelligent Web Data Extraction API",
  description:
    "Extract structured data from any website automatically with our intelligent AutoEx technology. No selectors, no maintenance — just clean JSON at scale.",
  authors: [{ name: "Akshay Gaikwad", url: "https://stream-line.dev/" }],
  keywords: [
    "web scraping",
    "data extraction",
    "API",
    "AutoEx",
    "Next.js",
    "structured data",
    "JSON",
    "automation",
  ],
  openGraph: {
    title: "DataAPI — Intelligent Web Data Extraction API",
    description:
      "Extract structured data from any website automatically with AutoEx technology. Clean JSON at scale — no selectors, no maintenance.",
    url: "https://dataapilive1.netlify.app/",
    siteName: "DataAPI",
    images: [
      {
        url: "/preview.png",
        width: 1280,
        height: 720,
        alt: "DataAPI Platform Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataAPI — Intelligent Web Data Extraction API",
    description:
      "Extract structured data from any website automatically with AutoEx technology.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#130a32] text-white overflow-x-hidden`}
      >
        <AOSInit />
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
