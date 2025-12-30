"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const industries = [
  {
    title: "Health Tech",
    desc: "AI-powered healthcare platforms, EHR systems, telemedicine apps, and secure patient data solutions.",
    image: "/industries/health.jpg",
  },
  {
    title: "Ed Tech",
    desc: "Scalable learning platforms, LMS systems, virtual classrooms, and AI-driven education tools.",
    image: "/industries/edu.jpg",
  },
  {
    title: "Retail",
    desc: "Omnichannel retail solutions, POS systems, inventory management, and personalized shopping experiences.",
    image:
      "https://images.unsplash.com/photo-1647427017067-8f33ccbae493?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI Diagnostics",
    desc: "Intelligent diagnostic tools, medical imaging analysis, and predictive AI healthcare models.",
    image: "/industries/ai2.jpg",
  },
  {
    title: "Green Tech",
    desc: "Sustainable software for energy monitoring, carbon tracking, and eco-friendly digital solutions.",
    image: "/industries/greentech.jpg",
  },
  {
    title: "IoT",
    desc: "Connected device ecosystems, real-time monitoring dashboards, and industrial IoT platforms.",
    image: "/industries/iot.jpg",
  },
  {
    title: "Fin Tech",
    desc: "Secure financial systems, digital wallets, payment gateways, and compliance-ready platforms.",
    image: "/industries/fintech.jpg",
  },
  {
    title: "HIPAA Compliance",
    desc: "HIPAA-compliant architectures, secure data handling, encryption, and healthcare compliance audits.",
    image: "/industries/hippa.jpg",
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="relative w-full overflow-hidden ">
      {/* Section Heading */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight ">
          Industries We Serve
        </h2>
        {/* <p className="mt-4 text-base md:text-lg text-black/70 max-w-2xl mx-auto">
          Delivering tailored digital solutions across diverse industries with
          innovation, scalability, and compliance at the core.
        </p> */}
      </div>

      {/* Industries Grid */}
      <div className="relative w-full min-h-[950px] md:min-h-[760px]">
        {/* Background Image */}
        <Image
          src={industries[active].image}
          alt=""
          fill
          priority
          className="object-cover transition-opacity duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 min-h-[950px] md:min-h-[760px] border border-white/20">
          {industries.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              className={`
                relative flex flex-col justify-between p-10 cursor-pointer
                transition-all duration-200
                border border-white/20
                ${active === i ? "bg-sky-500/90" : "bg-transparent"}
                ${active !== i ? "opacity-70" : "opacity-100"}
              `}
            >
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p
                  className={`
                    mt-4 text-sm text-white/90 max-w-sm
                    transition-all duration-500
                    ${
                      active === i
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }
                  `}
                >
                  {item.desc}
                </p>
              </div>

              {active === i && (
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white"
                >
                  Read More <span className="text-lg">→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
