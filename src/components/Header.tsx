"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

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
    <header className="w-full border-b bg-white/95 dark:bg-gray-800/95 backdrop-blur sticky top-0 z-50 shadow-sm dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition">
          <Image src="/logo.svg" alt="Web Sitesi Çözümleri" width={180} height={50} className="dark:brightness-[2.5]" />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Social Icons */}
        <div className="hidden md:flex gap-4 items-center">
          <ThemeToggle />
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
            <FaLinkedin className="text-xl text-gray-600 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
            <FaInstagram className="text-xl text-gray-600 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
            <FaTwitter className="text-xl text-gray-600 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition" />
          </a>
          <Link href="/contact" className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
            İletişime Geç
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label={isOpen ? "Menüyü Kapat" : "Menüyü Aç"}
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 items-center pt-4 border-t dark:border-gray-700 mt-2">
              <ThemeToggle />
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-xl text-gray-600 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-xl text-gray-600 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-xl text-gray-600 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition" />
              </a>
            </div>
            <Link href="/contact" className="mt-4 bg-blue-600 text-white py-3 rounded-md text-center font-semibold hover:bg-blue-700 transition-all shadow-sm">
              İletişime Geç
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
