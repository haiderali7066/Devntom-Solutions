"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Retail & E-Commerce",
    desc: "High-conversion stores, inventory systems, and seamless digital shopping experiences.",
  },
  {
    title: "FinTech & Banking",
    desc: "Secure, scalable platforms for payments, dashboards, and financial automation.",
  },
  {
    title: "Real Estate",
    desc: "Property portals, CRM integrations, and lead-driven digital solutions.",
  },
  {
    title: "Healthcare",
    desc: "Patient-centric platforms with security, performance, and compliance in mind.",
  },
  {
    title: "Education",
    desc: "E-learning platforms, LMS dashboards, and interactive learning solutions.",
  },
  {
    title: "Startups & SaaS",
    desc: "Fast MVPs, scalable systems, and growth-ready digital products.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative">
      {/* Background */}
      <div className="relative h-[420px] w-full">
        <Image
          src="/images/industries-bg.webp" // abstract / space / tech image
          alt="Industries background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center text-white">
          <span className="text-green-400 text-sm tracking-widest mb-4">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engineering digital growth across industries
          </h2>
          <p className="text-lg text-white/80 max-w-3xl">
            We create tailored digital solutions that solve real business
            challenges and unlock long-term growth.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="relative z-20 -mt-24 max-w-7xl mx-auto px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <div className="flex items-center text-green-500 font-medium group-hover:gap-2 transition-all">
                Explore
                <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
