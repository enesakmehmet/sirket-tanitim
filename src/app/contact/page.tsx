export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">İletişim</h1>
      <form className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded shadow">
        <div>
          <label className="block mb-1 font-medium">Adınız</label>
          <input type="text" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">E-posta</label>
          <input type="email" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Mesajınız</label>
          <textarea className="w-full border rounded px-3 py-2" rows={4} required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Gönder</button>
      </form>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">İletişim Bilgileri</h2>
        <ul>
          <li>Email: info@websitesicozumleri.com</li>
          <li>Telefon: +90 555 555 55 55</li>
          <li>Adres: İstanbul, Türkiye</li>
        </ul>
      </div>
      <div className="mt-10">
        <iframe
          title="Harita"
          src="https://www.openstreetmap.org/export/embed.html?bbox=28.9784%2C41.0082%2C28.9784%2C41.0082&amp;layer=mapnik"
          className="w-full h-64 border rounded"
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
}
