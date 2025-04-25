"use client";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/services", label: "Hizmetler" },
  { href: "/projects", label: "Projeler" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Kariyer" },
  { href: "/faq", label: "SSS" },
  { href: "/contact", label: "İletişim" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold tracking-tight text-blue-700 hover:text-blue-900 transition">
          Web Sitesi Çözümleri
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-gray-800 hover:text-blue-700 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-3 items-center">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-xl text-gray-700 hover:text-blue-700 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-xl text-gray-700 hover:text-pink-600 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-xl text-gray-700 hover:text-blue-500 transition" />
          </a>
        </div>
      </div>
    </header>
  );
}
