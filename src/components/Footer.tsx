"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div>
          <span className="font-bold">© {new Date().getFullYear()} ŞirketTanıtım</span> — Tüm hakları saklıdır.
        </div>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:underline">Gizlilik Politikası</a>
          <a href="/terms" className="hover:underline">Kullanım Şartları</a>
        </div>
      </div>
    </footer>
  );
}
