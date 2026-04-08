import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Hyper Intelligent — AI Transformation for Businesses That Actually Work",
  description:
    "We integrate AI into small and mid-sized companies. Not presentations. Not reports. Working AI systems that cut costs, save time, and give you an edge.",
  keywords: "AI consulting, AI implementation, business automation, AI integration, small business AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} antialiased bg-gray-10 text-gray-90`}>
        {children}
      </body>
    </html>
  );
}
