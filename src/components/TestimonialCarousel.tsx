"use client";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Image from "next/image";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Ayşe Kaya",
    position: "ABC Holding CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "Web sitemizin yenilenmesi sürecinde gösterdikleri profesyonel yaklaşım ve sonuç odaklı çalışma için teşekkür ederiz. Mobil uyumlu tasarım ve SEO çalışmaları sayesinde ziyaretçi sayımız %40 arttı."
  },
  {
    id: 2,
    name: "Mehmet Yılmaz",
    position: "XYZ E-ticaret Direktörü",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
    rating: 5,
    text: "E-ticaret sitemizin dönüşüm oranları arttı, kullanıcı deneyimi iyileşti. Teknik destek ekibi her zaman yanımızda oldu. Kesinlikle tavsiye ediyorum!"
  },
  {
    id: 3,
    name: "Zeynep Demir",
    position: "Demir Mobilya Sahibi",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    rating: 4,
    text: "Kurumsal kimliğimize uygun, modern ve kullanıcı dostu bir web sitesi tasarladılar. Özellikle mobil uyumluluk konusundaki hassasiyetleri takdire şayan."
  },
  {
    id: 4,
    name: "Ahmet Şahin",
    position: "Teknoloji Danışmanı",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5,
    text: "Dijital pazarlama stratejileri ve SEO çalışmaları ile markamızın online görünürlüğünü artırdılar. Arama motorlarında üst sıralara çıkmamızı sağladılar."
  },
  {
    id: 5,
    name: "Elif Yıldız",
    position: "Moda Tasarımcısı",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    rating: 5,
    text: "Portfolyo sitemizin tasarımı beklentilerimizin ötesinde oldu. Görsel odaklı ve hızlı bir site ile müşterilerimize çalışmalarımızı daha etkili sunabiliyoruz."
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      <div className="overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
        <div className="relative p-8 md:p-12">
          {/* Quote icon */}
          <div className="absolute top-6 left-6 text-blue-100 dark:text-blue-900 opacity-50">
            <FaQuoteLeft size={60} />
          </div>
          
          {/* Testimonial content */}
          <div className="flex flex-col md:flex-row gap-8 items-center z-10 relative">
            {/* Image */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 flex-shrink-0 shadow-lg">
              <Image 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Text content */}
            <div className="flex-1">
              {/* Rating */}
              <div className="flex mb-3">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-gray-300 dark:text-gray-600" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              
              {/* Author info */}
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-between mt-6">
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-blue-600 w-8" 
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-700"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
