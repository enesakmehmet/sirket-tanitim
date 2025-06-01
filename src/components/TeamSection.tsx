"use client";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const teamMembers = [
  {
    name: "Ahmet Yılmaz",
    title: "CEO & Kurucu",
    bio: "10+ yıl yazılım geliştirme ve proje yönetimi deneyimi ile şirketimizin vizyonunu şekillendiriyor.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:ahmet@sirket.com"
    }
  },
  {
    name: "Elif Demir",
    title: "UI/UX Designer",
    bio: "Kullanıcı odaklı tasarım anlayışıyla modern ve etkileyici arayüzler oluşturuyor.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:elif@sirket.com"
    }
  },
  {
    name: "Mehmet Kaya",
    title: "Frontend Developer",
    bio: "En güncel teknolojilerle performanslı ve erişilebilir web uygulamaları geliştiriyor.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=500&fit=crop",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:mehmet@sirket.com"
    }
  },
  {
    name: "Zeynep Aksoy",
    title: "SEO Specialist",
    bio: "Arama motorlarında üst sıralara çıkmanız için stratejik çözümler üretiyor.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=500&fit=crop",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:zeynep@sirket.com"
    }
  }
];

export default function TeamSection() {
  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Uzman Ekibimiz</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Deneyimli ekibimiz ile dijital dünyada fark yaratıyoruz</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
              <Image 
                src={member.photo}
                alt={member.name}
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.title}</p>
              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
              
              <div className="flex justify-center gap-3 pt-2 border-t">
                <a href={member.social.linkedin} className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                  <FaLinkedin size={18} />
                </a>
                <a href={member.social.twitter} className="text-gray-500 hover:text-blue-400 transition-colors" aria-label="Twitter">
                  <FaTwitter size={18} />
                </a>
                <a href={member.social.email} className="text-gray-500 hover:text-red-500 transition-colors" aria-label="Email">
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
