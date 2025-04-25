export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Projeler & Referanslar</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Tamamlanan Projeler</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Kurumsal Web Sitesi - ABC Holding</li>
          <li>E-Ticaret Platformu - XYZ Mağaza</li>
          <li>Portföy Sitesi - Freelance Tasarımcı</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Müşteri Yorumları</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>"Hızlı teslimat ve profesyonel yaklaşım!"</li>
          <li>"Web sitemiz hem hızlı hem de çok şık oldu."</li>
        </ul>
      </section>
    </main>
  );
}
