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
  title: "DataAPI — Intelligent Web Data Extraction Platform (Frontend Demo)",
  description:
    "Interactive frontend demo showcase for an intelligent web data extraction API platform. Extract structured data automatically with AutoEx technology.",
  authors: [{ name: "Akshay Gaikwad", url: "https://stream-line.dev/" }],
  keywords: [
    "web scraping",
    "data extraction",
    "API",
    "AutoEx",
    "Next.js",
    "structured data",
    "JSON",
    "frontend demo",
    "automation",
  ],
  openGraph: {
    title: "DataAPI — Intelligent Web Data Extraction Platform (Frontend Demo)",
    description:
      "Interactive frontend demo showcase for an intelligent web data extraction API platform with AutoEx technology.",
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
    title: "DataAPI — Intelligent Web Data Extraction Platform (Frontend Demo)",
    description:
      "Interactive frontend demo showcase for an intelligent web data extraction API platform with AutoEx technology.",
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
