"use client";

import Image from "next/image";

const insights = [
  {
    img: "https://images.unsplash.com/photo-1526378787940-576a539ba69d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Insight 1",
  },
  {
    img: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Insight 2",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlY2h8ZW58MHx8MHx8fDA%3D",
    alt: "Insight 3",
  },
  {
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2h8ZW58MHx8MHx8fDA%3D",
    alt: "Insight 4",
  },
  {
    img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRlY2h8ZW58MHx8MHx8fDA%3D",
    alt: "Insight 5",
  },
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
