"use client";

import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    offset: "mt-0",
    items: [
      {
        type: "Case Study",
        title: "US Fashion Resale Platform Scales to 100K Monthly Transactions",
        image: "/case-studies/fashion.webp",
        height: "h-[260px]",
      },
      {
        type: "Blog",
        title: "How Cloud Computing Can Transform Small Businesses",
        image: "/case-studies/cloud.webp",
        height: "h-[210px]",
      },
    ],
  },
  {
    offset: "mt-20",
    items: [
      {
        type: "Blog",
        title:
          "Custom Web Application Development: Everything You Need to Know",
        image: "/case-studies/web-app.webp",
        height: "h-[230px]",
      },
      {
        type: "Blog",
        title: "Modern Web Design Trends Shaping Business Growth",
        image: "/case-studies/design.webp",
        height: "h-[200px]",
      },
      
    ],
  },
  {
    offset: "mt-45",
    items: [
      {
        type: "Case Study",
        title: "Hospitality AI Platform Reconciles $300M+ OTA Commissions",
        image: "/case-studies/hospitality.webp",
        height: "h-[250px]",
      },
      
      
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-r from-white-100/20 to-sky-400/30" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* LEFT */}
        <div className="sticky top-28">
          <span className="text-sm tracking-widest uppercase text-sky-500 font-semibold">
            Featured Insights
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
            Stories of our transformations across
            <br />
            <span className="text-sky-600">Services & Industries</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            From concept to completion, see how our web development work
            delivers measurable growth for modern businesses.
          </p>

          <Link
            href="/case-studies"
            className="inline-block mt-8 rounded-full bg-sky-500 px-8 py-4 text-white font-semibold hover:bg-teal-600 transition"
          >
            Explore More
          </Link>
        </div>

        {/* RIGHT — TRUE STEPPED MASONRY */}
        <div className="grid grid-cols-3 gap-6 items-start mt-20 md:mt-0">
          {columns.map((col, i) => (
            <div key={i} className={`flex flex-col gap-6 ${col.offset}`}>
              {col.items.map((card, j) => (
                <Link
                  key={j}
                  href="#"
                  className={`group relative ${card.height} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    <span className="text-xs uppercase text-white/80 font-semibold">
                      {card.type}
                    </span>
                    <h3 className="text-sm font-semibold text-white leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
