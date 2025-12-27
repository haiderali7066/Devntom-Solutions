"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { name: "Custom Web Development", color: "bg-yellow-400" },
  { name: "Cloud Solutions", color: "bg-black" },
  { name: "AI-Powered Systems", color: "bg-blue-500" },
  { name: "ERP & Business Systems", color: "bg-red-500" },
  { name: "Microsoft Solutions", color: "bg-teal-500" },
  { name: "E-Commerce Platforms", color: "bg-purple-500" },
  { name: "CRM & Integrations", color: "bg-black" },
  { name: "AgTech Solutions", color: "bg-orange-500" },
  { name: "Digital Health", color: "bg-pink-500" },
  { name: "EdTech Platforms", color: "bg-indigo-500" },
];

export default function FeaturesTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // when section enters viewport
        end: "bottom 60%", // optional
      },
    });

    tl.fromTo(
      itemsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Your full service <br /> digital and software <br /> partner
          </h2>

          <p className="mt-6 text-gray-700 font-medium">
            Dedicated to helping you and your business grow from inception to
            success.
          </p>

          <p className="mt-6 text-gray-600 max-w-lg">
            We specialize in crafting cutting-edge digital solutions that
            strengthen your online presence, drive conversions, and optimize
            operations through scalable web platforms and cloud-ready systems.
          </p>

          <p className="mt-6 text-gray-600 max-w-lg">
            With our expertise, creativity, and commitment, we turn ideas into
            reliable, future-proof digital products.
          </p>

          <button className="mt-10 px-8 py-3 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition">
            Get Free Consultation
          </button>
        </div>

        {/* RIGHT TIMELINE */}
        <div className="relative flex gap-12">
          {/* Vertical Line */}
          <div className="relative w-[2px] bg-gray-200">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-900" />
          </div>

          {/* Services */}
          <div className="flex flex-col gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el;
                }}
                className="flex items-center gap-6 opacity-0"
              >
                <span className={`w-3 h-3 rounded-full ${service.color}`} />
                <p className="text-gray-900 font-medium">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
