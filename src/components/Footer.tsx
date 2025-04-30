"use client";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        {/* Logo ve açıklama */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Web Sitesi Çözümleri" width={160} height={45} className="brightness-[2.5]" />
          </Link>
          <p className="text-white font-bold mt-2 text-base">
            Modern, yenilikçi ve sürdürülebilir dijital çözümler ile işletmenizi büyütün.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Hızlı erişim */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Hızlı Erişim</h3>
          <nav className="flex flex-col space-y-3">
            <Link href="/about" className="text-white font-bold text-base hover:text-blue-400 transition-colors">Hakkımızda</Link>
            <Link href="/services" className="text-white font-bold text-base hover:text-blue-400 transition-colors">Hizmetler</Link>
            <Link href="/projects" className="text-white font-bold text-base hover:text-blue-400 transition-colors">Projeler</Link>
            <Link href="/blog" className="text-white font-bold text-base hover:text-blue-400 transition-colors">Blog</Link>
            <Link href="/contact" className="text-white font-bold text-base hover:text-blue-400 transition-colors">İletişim</Link>
          </nav>
        </div>

        {/* Hizmetler */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Hizmetlerimiz</h3>
          <nav className="flex flex-col space-y-3">
            <Link href="/services/corporate-websites" className="text-white font-bold text-base hover:text-blue-400 transition-colors">Kurumsal Web Sitesi</Link>
            <Link href="/services/e-commerce" className="text-white font-bold text-base hover:text-blue-400 transition-colors">E-Ticaret Çözümleri</Link>
            <Link href="/services/seo" className="text-white font-bold text-base hover:text-blue-400 transition-colors">SEO & Dijital Pazarlama</Link>
            <Link href="/services/mobile-apps" className="text-white font-bold text-base hover:text-blue-400 transition-colors">Mobil Uygulamalar</Link>
            <Link href="/services/support" className="text-white font-bold text-base hover:text-blue-400 transition-colors">Teknik Destek</Link>
          </nav>
        </div>

        {/* İletişim */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2">İletişim</h3>
          <div className="flex flex-col space-y-4">
            <a href="tel:+902121234567" className="text-white font-bold text-base hover:text-blue-400 transition-colors flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" size={18} /> +90 (212) 123 45 67
            </a>
            <a href="mailto:info@sirket.com" className="text-white font-bold text-base hover:text-blue-400 transition-colors flex items-center gap-2">
              <FaEnvelope className="text-blue-400" size={18} /> info@sirket.com
            </a>
            <p className="text-white font-bold text-base flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-400 mt-1" size={18} /> İstanbul, Levent, Büyükdere Cad. No:123
            </p>
          </div>
        </div>
      </div>
      
      {/* Alt bilgi */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-10 pt-6 px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white font-bold text-base">
          © {new Date().getFullYear()} ŞirketTanıtım — Tüm hakları saklıdır.
        </div>
        <div className="flex gap-6 mt-4 md:mt-0 text-base">
          <Link href="/privacy" className="text-white font-bold hover:text-blue-400 transition-colors">Gizlilik Politikası</Link>
          <Link href="/terms" className="text-white font-bold hover:text-blue-400 transition-colors">Kullanım Şartları</Link>
          <Link href="/cookies" className="text-white font-bold hover:text-blue-400 transition-colors">Çerez Politikası</Link>
        </div>
      </div>
    </footer>
  );
}
