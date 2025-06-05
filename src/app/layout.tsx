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
    <html lang="tr">
      <body
        className={`${inter.variable} antialiased bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen flex flex-col w-full`}
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
