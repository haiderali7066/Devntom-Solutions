"use client";

import Image from "next/image";

const insights = [
  { img: "/cta7.jpg", alt: "Insight 1" },
  { img: "/cta8.jpg", alt: "Insight 2" },
  { img: "/cta9.jpg", alt: "Insight 3" },
  { img: "/cta12.jpg", alt: "Insight 4" },
  { img: "/cta4.jpg", alt: "Insight 5" },
];

export default function FeaturedInsights() {
  return (
    <section className="relative w-full py-24 bg-sky-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">
        {/* Left Side */}
        <div className="lg:w-1/3 flex flex-col gap-6 text-sky-500">
          <h2 className="text-5xl font-bold leading-tight">
            Featured Insights
          </h2>
          <p className="text-lg leading-relaxed text-sky-700/90">
            Discover our latest insights and expert tips that drive business
            success. From case studies to trend analyses, stay informed and
            inspired. Learn how industry leaders leverage technology and
            strategy to achieve remarkable growth, optimize operations, and
            deliver unparalleled customer experiences.
          </p>
          <button className="mt-4 px-6 py-3 text-white bg-sky-500 font-semibold rounded-full shadow-lg hover:bg-sky-600 transition">
            Explore More
          </button>
        </div>

        {/* Right Side Masonry */}
        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
          {insights.map((item, index) => (
            <div
              key={index}
              className={`relative w-full rounded-xl overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105
                ${index % 3 === 0 ? "row-span-2" : "row-span-1"}
              `}
            >
              <Image
                src={item.img}
                alt={item.alt}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Optional Overlay for subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/0 to-white/0 pointer-events-none"></div>
    </section>
  );
}
