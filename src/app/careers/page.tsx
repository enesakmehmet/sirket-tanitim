export default function CareersPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Kariyer</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Açık Pozisyonlar</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Frontend Developer</li>
          <li>UI/UX Designer</li>
        </ul>
      </section>
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
          <label className="block mb-1 font-medium">Pozisyon</label>
          <input type="text" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Mesajınız</label>
          <textarea className="w-full border rounded px-3 py-2" rows={4} required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Başvur</button>
      </form>
    </main>
  );
}
