const posts = [
  {
    title: "Web Tasarımında 2025 Trendleri",
    desc: "Modern web tasarımında öne çıkan yenilikler ve ipuçları.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "Tasarım",
    author: "Enes Yılmaz",
    date: "25 Nisan 2025",
  },
  {
    title: "SEO Neden Önemli?",
    desc: "Arama motorlarında öne çıkmak için SEO’nun önemi ve temel stratejiler.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    category: "SEO",
    author: "Ayşe Demir",
    date: "22 Nisan 2025",
  },
  {
    title: "Minimalist UI Tasarımının Gücü",
    desc: "Az, çoktur! Minimalist tasarım ile kullanıcı deneyimini artırın.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    category: "UI/UX",
    author: "Ali Vural",
    date: "18 Nisan 2025",
  },
  {
    title: "Renk Paletleri ile Marka Kimliği",
    desc: "Doğru renk seçimiyle markanızı öne çıkarın.",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    category: "Markalaşma",
    author: "Zeynep Kaya",
    date: "15 Nisan 2025",
  },
  // Daha fazla blog ekleyebilirsiniz
];

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 py-16 px-4 flex flex-col items-center overflow-hidden">
      {/* SVG Dalga Efekti */}
      <svg className="absolute top-0 left-0 w-full h-32 -z-10" viewBox="0 0 1440 320">
        <path fill="#a5b4fc" fillOpacity="0.25" d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,138.7C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <h1 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 drop-shadow-lg">
        Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="group relative rounded-3xl bg-white/90 shadow-xl border-t-4 border-b-4 border-transparent hover:border-blue-400 hover:scale-105 hover:shadow-2xl transition-all duration-300 p-0 flex flex-col gap-0 cursor-pointer backdrop-blur-md overflow-hidden"
          >
            {/* Köşe Ribbon */}
            <div className="absolute top-0 left-0 bg-gradient-to-r from-pink-400 to-blue-400 text-white text-xs px-4 py-1 rounded-br-2xl font-semibold shadow-lg z-20">
              {post.category}
            </div>
            {/* Kart Görseli */}
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-300" />
            <div className="p-7 flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-gray-800 mb-1 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-2">
                {post.desc}
              </p>
              {/* Yazar ve Tarih */}
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.657 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {post.author}
                <span className="mx-2">•</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {post.date}
              </div>
              <button className="self-start px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 text-white font-semibold shadow hover:from-pink-400 hover:to-blue-500 transition-all duration-200">
                Devamını Oku
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex gap-2 mt-12">
        <button className="px-4 py-2 rounded-full bg-white/80 border border-blue-200 text-blue-500 font-bold shadow hover:bg-blue-100 transition">&lt;</button>
        <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 text-white font-bold shadow">1</button>
        <button className="px-4 py-2 rounded-full bg-white/80 border border-blue-200 text-blue-500 font-bold shadow hover:bg-blue-100 transition">2</button>
        <button className="px-4 py-2 rounded-full bg-white/80 border border-blue-200 text-blue-500 font-bold shadow hover:bg-blue-100 transition">3</button>
        <button className="px-4 py-2 rounded-full bg-white/80 border border-blue-200 text-blue-500 font-bold shadow hover:bg-blue-100 transition">&gt;</button>
      </div>
    </main>
  );
}
