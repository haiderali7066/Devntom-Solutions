"use client";
import Image from "next/image";

const awards = [
  {
    title: "Best Web Development Agency 2025",
    org: "Global Web Awards",
    img: "/awards/best-web-agency.webp",
  },
  {
    title: "Top Innovator in UX/UI Design",
    org: "Design Excellence Awards",
    img: "/awards/ux-ui-award.webp",
  },
  {
    title: "Rising Star in E-Commerce Solutions",
    org: "Tech Leaders Forum",
    img: "/awards/ecommerce-award.webp",
  },
];

export default function Awards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Awards & Recognition</h2>
        <p className="text-gray-600 mb-12">
          Our commitment to quality and innovation has earned us industry
          accolades.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {awards.map((award, i) => (
            <div
              key={i}
              className="w-64 bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-40 mb-4">
                <Image
                  src={award.img}
                  alt={award.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg">{award.title}</h3>
              <p className="text-gray-500">{award.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
