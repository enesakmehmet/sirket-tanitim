import TeamSection from "@/components/TeamSection";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaStar, FaLaptopCode, FaShoppingCart, FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-24 bg-gradient-to-br from-blue-50 via-white to-gray-100">
      {/* HERO */}
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-16 animate-fade-in-up">
        <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-start">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-700 mb-4 leading-tight">
            Dijitalde <span className="text-blue-500">Gücünüzü</span> Artırın
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Modern, yenilikçi ve sürdürülebilir web çözümleriyle markanızı dijitalde öne çıkarıyoruz.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="/contact" className="cta-btn flex items-center gap-2">
              <span>Teklif Alın</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/projects" className="cta-btn bg-secondary text-gray-900 hover:bg-yellow-400 flex items-center gap-2">
              <span>Projelerimiz</span>
              <FaStar className="text-sm" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center transform transition-all hover:scale-105">
              <span className="text-blue-600 text-3xl font-extrabold mb-1">7/24</span>
              <span className="text-sm font-semibold mb-1">Destek</span>
              <p className="text-sm text-gray-500">&quot;Çalışmalarımızdan çok memnun kaldık. Profesyonel ekip ve kaliteli hizmet.&quot;</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center transform transition-all hover:scale-105">
              <span className="text-blue-600 text-3xl font-extrabold mb-1">100+</span>
              <span className="text-sm font-semibold mb-1">Başarılı Proje</span>
              <p className="text-sm text-gray-500">&quot;E-ticaret sitemizin dönüşüm oranları arttı. Teşekkürler!&quot;</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-4 left-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=500&h=500&fit=crop"
                alt="Digital Solutions"
                width={500}
                height={500}
                className="object-contain drop-shadow-2xl rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* HİZMETLER */}
      <section className="w-full max-w-6xl mx-auto mb-16 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Hizmetlerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Dijital dünyada ihtiyacınız olan her çözüm</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card group relative overflow-hidden rounded-xl bg-white">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-100 transition-all duration-500 group-hover:scale-150"></div>
            <div className="relative p-8">
              <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3">
                <FaLaptopCode className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Kurumsal Web Sitesi</h3>
              <p className="text-gray-600 mb-4">Modern, hızlı ve mobil uyumlu kurumsal web siteleri geliştiriyoruz.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-blue-600" /> Responsive Tasarım
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-blue-600" /> SEO Dostu
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-blue-600" /> Hızlı Yükleme
                </li>
              </ul>
              <Link href="/services/corporate-websites" className="mt-4 inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                Detaylı Bilgi
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="card group relative overflow-hidden rounded-xl bg-white">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-100 transition-all duration-500 group-hover:scale-150"></div>
            <div className="relative p-8">
              <div className="mb-4 inline-flex rounded-lg bg-yellow-100 p-3">
                <FaShoppingCart className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">E-Ticaret Çözümleri</h3>
              <p className="text-gray-600 mb-4">Satışlarınızı artıran, kullanıcı dostu e-ticaret sistemleri.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-blue-600" /> Güvenli Ödeme
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-blue-600" /> Stok Yönetimi
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-blue-600" /> Mobil Uyumluluk
                </li>
              </ul>
              <Link href="/services/e-commerce" className="mt-4 inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                Detaylı Bilgi
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="card group relative overflow-hidden rounded-xl bg-white">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-green-100 transition-all duration-500 group-hover:scale-150"></div>
            <div className="relative p-8">
              <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3">
                <FaSearch className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">SEO & Dijital Pazarlama</h3>
              <p className="text-gray-600 mb-4">Arama motorlarında görünürlüğünüzü artıracak stratejik çözümler.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-blue-600" /> Anahtar Kelime Analizi
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-blue-600" /> İçerik Stratejisi
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-blue-600" /> Performans Takibi
                </li>
              </ul>
              <Link href="/services/seo" className="mt-4 inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                Detaylı Bilgi
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REFERANSLAR */}
      <section className="w-full max-w-6xl mx-auto mb-16 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center mb-8">Referanslarımız</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <Image src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" alt="Referans 1" width={200} height={100} className="w-full h-auto object-contain" />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop" alt="Referans 2" width={200} height={100} className="w-full h-auto object-contain" />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop" alt="Referans 3" width={200} height={100} className="w-full h-auto object-contain" />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <Image src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=200&h=100&fit=crop" alt="Referans 4" width={200} height={100} className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* MÜŞTERİ YORUMLARI */}
      <section className="w-full max-w-5xl mx-auto mb-20 animate-fade-in">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Müşteri Yorumları</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Müşterilerimizin memnuniyeti başarımızın temelidir</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center z-10">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                  AK
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ayşe Kaya</h4>
                  <p className="text-gray-500 text-sm">ABC Holding CEO</p>
                </div>
              </div>
              <div className="mb-3 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-700">"Hızlı teslimat ve harika iletişim. Web sitemiz beklentimizin çok üzerinde oldu! Modern tasarım ve kullanım kolaylığı sayesinde web sitemize gelen ziyaretçi sayısı %60 arttı."</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center z-10">
              <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-xl mr-4">
                  CY
                </div>
                <div>
                  <h4 className="font-bold text-lg">Cem Yılmaz</h4>
                  <p className="text-gray-500 text-sm">XYZ E-Ticaret Müdürü</p>
                </div>
              </div>
              <div className="mb-3 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-700">"SEO çalışmaları sayesinde Google'da üst sıralara çıktık ve satışlarımız %120 arttı! Ayrıca düzenli raporlamalar sayesinde stratejimizi sürekli iyileştirebildik. Destek ekibi her zaman yanımızda oldu."</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERİ */}
      <section className="w-full max-w-6xl mx-auto mb-20 animate-fade-in-up">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Proje Galerisi</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Başarıyla tamamladığımız projelerden örnekler</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop" 
              alt="Kurumsal Web Sitesi Projesi" 
              width={400} 
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg">Finansal Danışmanlık Sitesi</h3>
              <p className="text-blue-100 text-sm">Modern tasarım, hızlı ve SEO dostu</p>
              <Link href="/projects/finance" className="mt-2 inline-flex items-center text-white font-medium">
                Projeyi İncele
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=350&fit=crop" 
              alt="E-Ticaret Projesi" 
              width={400} 
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg">Mobilya E-Ticaret Sitesi</h3>
              <p className="text-yellow-100 text-sm">Kullanıcı dostu ve güvenli ödeme sistemi</p>
              <Link href="/projects/furniture" className="mt-2 inline-flex items-center text-white font-medium">
                Projeyi İncele
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500&h=350&fit=crop" 
              alt="Mobil Uygulama Projesi" 
              width={400} 
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg">Sağlık Uygulaması</h3>
              <p className="text-green-100 text-sm">Cross-platform mobil uygulama</p>
              <Link href="/projects/health" className="mt-2 inline-flex items-center text-white font-medium">
                Projeyi İncele
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop" 
              alt="SEO Projesi" 
              width={400} 
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg">Turizm Sitesi SEO</h3>
              <p className="text-purple-100 text-sm">%300 trafik artışı sağlandı</p>
              <Link href="/projects/tourism" className="mt-2 inline-flex items-center text-white font-medium">
                Projeyi İncele
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EKİBİMİZ */}
      <section className="w-full max-w-4xl mx-auto mb-16 animate-fade-in">
        <TeamSection />
      </section>

      {/* BLOG ÖNE ÇIKANLAR */}
      <section className="w-full max-w-6xl mx-auto mb-20 animate-fade-in-up">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Blogdan Öne Çıkanlar</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Dijital dünyada size yol gösterecek bilgiler</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/blog/kurumsal-web-site" className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl">
              <div className="h-44 bg-gradient-to-r from-blue-50 to-blue-100 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300"></div>
                <div className="text-5xl text-blue-600 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2H4v-1h16v1h-1zm-2 2v-2H7v2h6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">Kurumsal Web Sitesi Neden Önemli?</h3>
                <p className="text-gray-600 mb-4">Kurumlar için dijital varlık oluşturmanın avantajları ve ipuçları. Profesyonel bir web sitesi nasıl olmalı?</p>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="text-sm text-gray-500">15 Haziran 2023</span>
                  <span className="inline-flex items-center text-blue-600 group-hover:translate-x-1 transition-transform duration-200">
                    Devamını Oku
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/e-ticaret-stratejileri" className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl">
              <div className="h-44 bg-gradient-to-r from-yellow-50 to-yellow-100 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors duration-300"></div>
                <div className="text-5xl text-yellow-600 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-yellow-600 transition-colors duration-200 mb-2">E-Ticarette Başarı Stratejileri</h3>
                <p className="text-gray-600 mb-4">Satışlarınızı artıracak modern e-ticaret trendleri ve uygulamaları. Müşteri deneyimini optimize etmenin yolları.</p>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="text-sm text-gray-500">3 Temmuz 2023</span>
                  <span className="inline-flex items-center text-yellow-600 group-hover:translate-x-1 transition-transform duration-200">
                    Devamını Oku
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/seo-dijital" className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl">
              <div className="h-44 bg-gradient-to-r from-green-50 to-green-100 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300"></div>
                <div className="text-5xl text-green-600 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-green-600 transition-colors duration-200 mb-2">SEO ile Dijitalde Yükselin</h3>
                <p className="text-gray-600 mb-4">Arama motoru optimizasyonunda dikkat edilmesi gerekenler. Google sıralamanızı artırmanın etkili yöntemleri.</p>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="text-sm text-gray-500">22 Ağustos 2023</span>
                  <span className="inline-flex items-center text-green-600 group-hover:translate-x-1 transition-transform duration-200">
                    Devamını Oku
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* İLETİŞİM CTA */}
      <section className="w-full max-w-4xl mx-auto mb-20 animate-fade-in">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-10 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Siz de Dijitalde Fark Yaratın!</h2>
              <p className="text-blue-100 mb-6 text-lg">İşletmeniz için en uygun dijital çözümü sunabilmemiz için hemen şimdi iletişime geçin. Size özel teklif oluşturalım.</p>
              <div className="space-y-4">
                <div className="flex items-center text-blue-50">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ücretsiz Keşif Görüşmesi</span>
                </div>
                <div className="flex items-center text-blue-50">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Size Özel Çözümler</span>
                </div>
                <div className="flex items-center text-blue-50">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Hızlı Teslimat</span>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="mt-8 inline-block px-8 py-4 rounded-full bg-white text-blue-700 font-bold text-lg shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1"
              >
                Hemen İletişime Geç
              </Link>
            </div>
            <div className="md:w-1/2 bg-blue-700/30 p-10 md:p-12 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-white/10 rounded-full"></div>
                <Image 
                  src="/window.svg" 
                  alt="Dijital Çözümler" 
                  width={300} 
                  height={300}
                  className="relative z-10 drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
