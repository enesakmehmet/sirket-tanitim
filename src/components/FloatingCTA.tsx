"use client";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/905555555555"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white rounded-full shadow-lg font-bold text-lg hover:bg-green-600 transition-all cta-float-btn"
        aria-label="WhatsApp ile iletişime geç"
      >
        <FaWhatsapp className="text-2xl" /> WhatsApp
      </a>
      {/* Form CTA */}
      <Link
        href="/contact"
        className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full shadow-lg font-bold text-lg hover:bg-blue-700 transition-all cta-float-btn"
        aria-label="Teklif Al veya Bize Ulaşın"
      >
        <FaEnvelope className="text-2xl" /> Teklif Al
      </Link>
    </div>
  );
}
