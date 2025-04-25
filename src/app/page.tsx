import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-24 bg-gradient-to-br from-blue-50 via-white to-gray-100">
      {/* HERO */}
      <section className="w-full max-w-6xl mx-auto flex flex-col gap-6 items-center text-center pt-16 pb-20 animate-fade-in-up">
        <h1 className="text-6xl font-extrabold tracking-tight text-blue-700 mb-4 drop-shadow-lg">Dijitalde Gücünüzü Artırın</h1>
        <p className="text-2xl text-gray-700 max-w-3xl mb-2">Modern, yenilikçi ve sürdürülebilir web çözümleriyle markanızı dijitalde öne çıkarıyoruz.</p>
        <div className="flex gap-4 mt-4">
          <a href="/contact" className="cta-btn">Teklif Alın</a>
          <a href="/projects" className="cta-btn bg-secondary text-gray-900 hover:bg-yellow-400">Projelerimiz</a>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-blue-600 text-4xl font-extrabold mb-2">7/24</span>
          <span className="text-lg font-semibold mb-1">Destek</span>
          <span className="text-gray-500">Her zaman ulaşılabilir teknik destek</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-blue-600 text-4xl font-extrabold mb-2">100+</span>
          <span className="text-lg font-semibold mb-1">Başarılı Proje</span>
          <span className="text-gray-500">Farklı sektörlerde tamamlanan projeler</span>
        </div>
      </section>
      {/* HİZMETLER */}
      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in">
        <div className="card">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Kurumsal Web Sitesi</h3>
          <p>Şirketiniz için modern, güvenli ve hızlı web siteleri tasarlıyoruz.</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold mb-2 text-blue-600">E-Ticaret Çözümleri</h3>
          <p>Satışlarınızı artıracak, mobil uyumlu ve kullanıcı dostu e-ticaret siteleri.</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold mb-2 text-blue-600">SEO & Dijital Pazarlama</h3>
          <p>Arama motorlarında üst sıralar ve dijitalde görünürlük için tam kapsamlı çözümler.</p>
        </div>
      </section>

      {/* REFERANSLAR */}
      <section className="w-full max-w-6xl mx-auto mb-16 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center mb-8">Referanslarımız</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <img src="/ref1.png" alt="Referans 1" className="h-16 object-contain mx-auto grayscale hover:grayscale-0 transition" />
          <img src="/ref2.png" alt="Referans 2" className="h-16 object-contain mx-auto grayscale hover:grayscale-0 transition" />
          <img src="/ref3.png" alt="Referans 3" className="h-16 object-contain mx-auto grayscale hover:grayscale-0 transition" />
          <img src="/ref4.png" alt="Referans 4" className="h-16 object-contain mx-auto grayscale hover:grayscale-0 transition" />
        </div>
      </section>

      {/* MÜŞTERİ YORUMLARI */}
      <section className="w-full max-w-4xl mx-auto mb-16 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-8">Müşteri Yorumları</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <p className="italic mb-3">“Hızlı teslimat ve harika iletişim. Web sitemiz beklentimizin çok üzerinde oldu!”</p>
            <span className="font-semibold">- Ayşe K.</span>
          </div>
          <div className="card">
            <p className="italic mb-3">“SEO çalışmaları sayesinde Google’da üst sıralara çıktık. Teşekkürler!”</p>
            <span className="font-semibold">- Cem Y.</span>
          </div>
        </div>
      </section>

      {/* GALERİ */}
      <section className="w-full max-w-6xl mx-auto mb-16 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center mb-8">Proje Galerisi</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/gallery1.jpg" alt="Proje 1" className="rounded-lg shadow hover:scale-105 transition" />
          <img src="/gallery2.jpg" alt="Proje 2" className="rounded-lg shadow hover:scale-105 transition" />
          <img src="/gallery3.jpg" alt="Proje 3" className="rounded-lg shadow hover:scale-105 transition" />
          <img src="/gallery4.jpg" alt="Proje 4" className="rounded-lg shadow hover:scale-105 transition" />
        </div>
      </section>

      {/* EKİBİMİZ */}
      <section className="w-full max-w-4xl mx-auto mb-16 animate-fade-in">
        <TeamSection />
      </section>

      {/* BLOG ÖNE ÇIKANLAR */}
      <section className="w-full max-w-6xl mx-auto mb-16 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center mb-8">Blogdan Öne Çıkanlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="font-bold text-lg mb-2">Kurumsal Web Sitesi Neden Önemli?</h3>
            <p>Kurumlar için dijital varlık oluşturmanın avantajları ve ipuçları.</p>
            <a href="/blog/kurumsal-web-site" className="text-blue-600 hover:underline mt-2 inline-block">Devamını Oku</a>
          </div>
          <div className="card">
            <h3 className="font-bold text-lg mb-2">E-Ticarette Başarı Stratejileri</h3>
            <p>Satışlarınızı artıracak modern e-ticaret trendleri ve uygulamaları.</p>
            <a href="/blog/e-ticaret-stratejileri" className="text-blue-600 hover:underline mt-2 inline-block">Devamını Oku</a>
          </div>
          <div className="card">
            <h3 className="font-bold text-lg mb-2">SEO ile Dijitalde Yükselin</h3>
            <p>Arama motoru optimizasyonunda dikkat edilmesi gerekenler.</p>
            <a href="/blog/seo-dijital" className="text-blue-600 hover:underline mt-2 inline-block">Devamını Oku</a>
          </div>
        </div>
      </section>

      {/* İLETİŞİM CTA */}
      <section className="w-full max-w-3xl mx-auto mb-20 animate-fade-in">
        <div className="card flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-2">Siz de Dijitalde Fark Yaratın!</h2>
          <p className="mb-4">Hemen iletişime geçin, işletmeniz için en uygun dijital çözümü birlikte bulalım.</p>
          <a href="/contact" className="cta-btn">İletişime Geç</a>
        </div>
      </section>
    </main>
  );
}
