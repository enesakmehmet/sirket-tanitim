import TeamSection from "@/components/TeamSection";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Hakkımızda</h1>
        <p className="mb-2 text-lg">Web Sitesi Çözümleri sektöründe modern, yenilikçi ve güvenilir projeler üretiyoruz.</p>
        <p className="mb-2">Vizyonumuz, dijital dünyada müşterilerimizin ihtiyaçlarına en uygun, hızlı ve etkili çözümler sunmak.</p>
        <p className="mb-2">Misyonumuz, her sektöre özel, kullanıcı dostu ve sürdürülebilir web çözümleri geliştirmek.</p>
      </section>
      <TeamSection />
    </main>
  );
}
