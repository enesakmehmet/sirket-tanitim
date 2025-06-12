import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Modern Şirket Tanıtım Sitesi | Dijital Çözümler",
  description: "Yenilikçi, mobil uyumlu ve SEO dostu şirket tanıtım sitesiyle dijital dünyada öne çıkın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 min-h-screen flex flex-col w-full dark:text-gray-200`}
      >
        <Header />
        <main className="flex-1 w-full flex flex-col items-center justify-start bg-transparent">
          {children}
        </main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
