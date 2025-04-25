export default function FaqPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Sıkça Sorulan Sorular</h1>
      <ul className="space-y-6">
        <li>
          <h2 className="text-2xl font-semibold">Web sitesi teslim süresi nedir?</h2>
          <p>Proje kapsamına göre değişmekle birlikte genellikle 2-4 hafta arasıdır.</p>
        </li>
        <li>
          <h2 className="text-2xl font-semibold">SEO hizmeti sunuyor musunuz?</h2>
          <p>Evet, teknik ve içerik bazlı SEO hizmetleri sunuyoruz.</p>
        </li>
        <li>
          <h2 className="text-2xl font-semibold">Destek sonrası bakım sağlanıyor mu?</h2>
          <p>Evet, web siteniz yayında olduğu sürece bakım ve destek hizmeti veriyoruz.</p>
        </li>
      </ul>
    </main>
  );
}
