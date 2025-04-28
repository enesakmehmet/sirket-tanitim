"use client";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        {/* Logo ve açıklama */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Web Sitesi Çözümleri" width={160} height={45} className="invert" />
          </Link>
          <p className="text-slate-300 mt-2 text-sm">
            Modern, yenilikçi ve sürdürülebilir dijital çözümler ile işletmenizi büyütün.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-pink-400 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Hızlı erişim */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white border-b border-slate-700 pb-2">Hızlı Erişim</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors">Hakkımızda</Link>
            <Link href="/services" className="text-slate-300 hover:text-white transition-colors">Hizmetler</Link>
            <Link href="/projects" className="text-slate-300 hover:text-white transition-colors">Projeler</Link>
            <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">İletişim</Link>
          </nav>
        </div>

        {/* Hizmetler */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white border-b border-slate-700 pb-2">Hizmetlerimiz</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/services/corporate-websites" className="text-slate-300 hover:text-white transition-colors">Kurumsal Web Sitesi</Link>
            <Link href="/services/e-commerce" className="text-slate-300 hover:text-white transition-colors">E-Ticaret Çözümleri</Link>
            <Link href="/services/seo" className="text-slate-300 hover:text-white transition-colors">SEO & Dijital Pazarlama</Link>
            <Link href="/services/mobile-apps" className="text-slate-300 hover:text-white transition-colors">Mobil Uygulamalar</Link>
            <Link href="/services/support" className="text-slate-300 hover:text-white transition-colors">Teknik Destek</Link>
          </nav>
        </div>

        {/* İletişim */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white border-b border-slate-700 pb-2">İletişim</h3>
          <div className="flex flex-col space-y-4">
            <a href="tel:+902121234567" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" /> +90 (212) 123 45 67
            </a>
            <a href="mailto:info@sirket.com" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> info@sirket.com
            </a>
            <p className="text-slate-300 flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-400 mt-1" /> İstanbul, Levent, Büyükdere Cad. No:123
            </p>
          </div>
        </div>
      </div>
      
      {/* Alt bilgi */}
      <div className="max-w-7xl mx-auto border-t border-slate-700 mt-10 pt-6 px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-slate-400 text-sm">
          © {new Date().getFullYear()} ŞirketTanıtım — Tüm hakları saklıdır.
        </div>
        <div className="flex gap-4 mt-4 md:mt-0 text-sm">
          <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Gizlilik Politikası</Link>
          <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Kullanım Şartları</Link>
          <Link href="/cookies" className="text-slate-400 hover:text-white transition-colors">Çerez Politikası</Link>
        </div>
      </div>
    </footer>
  );
}
