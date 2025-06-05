"use client";
import { useEffect, useState } from "react";

interface Stat {
  title: string;
  value: number;
  suffix?: string;
  icon?: React.ReactNode;
  duration?: number; // ms
}

const stats: Stat[] = [
  { title: "Tamamlanan Proje", value: 120, suffix: "+" },
  { title: "Mutlu Müşteri", value: 85, suffix: "+" },
  { title: "Yıllık Deneyim", value: 10, suffix: "+" },
  { title: "Uzman Ekip", value: 15, suffix: "+" },
];

export default function StatsCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const durations = stats.map(stat => stat.duration ?? 1500);
    const starts = stats.map(() => 0);
    const ends = stats.map(stat => stat.value);
    const startTs = performance.now();
    let frame: number;

    function animate(now: number) {
      const progress = durations.map(dur => Math.min((now - startTs) / dur, 1));
      setCounts(progress.map((prog, i) => Math.floor(prog * (ends[i] - starts[i]) + starts[i])));
      if (progress.some(p => p < 1)) {
        frame = requestAnimationFrame(animate);
      } else {
        setCounts(ends);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-50 via-white to-pink-50">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div
            key={stat.title}
            className="bg-white/80 rounded-xl shadow p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">
              {counts[i]}
              {stat.suffix}
            </span>
            <span className="text-lg md:text-xl font-semibold text-gray-700">
              {stat.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
