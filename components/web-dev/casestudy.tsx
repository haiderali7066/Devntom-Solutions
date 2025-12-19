"use client";
import Image from "next/image";
import { useState } from "react";

const caseStudies = [
  {
    title: "Boosting E-Commerce Sales by 120%",
    desc: "We revamped a local online store with modern UX/UI, optimized checkout flow, and integrated secure payments, resulting in a 120% increase in sales within 3 months.",
    img: "/case-studies/ecommerce-boost.webp",
    link: "#",
  },
  {
    title: "Transforming a Corporate Website",
    desc: "Our team redesigned a corporate website to improve brand visibility, SEO performance, and lead generation. Traffic increased by 80% in 2 months.",
    img: "/case-studies/corporate-redesign.webp",
    link: "#",
  },
  {
    title: "Launching a Startup From Scratch",
    desc: "We helped a startup build their brand identity, website, and online presence, enabling them to attract investors and acquire their first 1000 users in record time.",
    img: "/case-studies/startup-launch.webp",
    link: "#",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Insights & Case Studies
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Real stories of how we help businesses grow with creative solutions
          and measurable results.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, i) => (
            <a
              key={i}
              href={caseStudy.link}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={caseStudy.img}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600">{caseStudy.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
