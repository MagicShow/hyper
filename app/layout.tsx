import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Hyper Intelligent — AI Phone Agents, Agent Solutions & Websites for Local Business",
  description:
    "AI phone agents, smart business agents, and websites that turn browsers into buyers — for local shops, service businesses, and growing companies. No enterprise minimums. Results in days.",
  keywords:
    "AI phone agent, AI for small business, local business AI, AI lead generation, AI answering service",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-gray-10 text-gray-90`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
