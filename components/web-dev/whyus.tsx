"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Users, Rocket, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseDevntom() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".why-item",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-28 bg-gradient-to-b from-[#f7f9fc] to-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          We’re Your Trusted{" "}
          <span className="text-sky-500">Enterprise Innovation Partner</span>
        </h2>

        {/* Divider */}
        <div className="w-20 h-[2px] bg-sky-500 mx-auto my-6" />

        {/* Description */}
        <p className="max-w-4xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
          With a strong focus on scalability, security, and long-term growth,
          Devntom helps startups and enterprises build reliable digital
          solutions. Our engineering-driven approach ensures every product is
          optimized for performance, compliance, and real-world business impact.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          <div className="why-item flex flex-col items-center">
            <Briefcase className="w-10 h-10 text-gray-800 mb-4" />
            <p className="text-sky-500 font-semibold text-lg">10+ Years of</p>
            <p className="text-gray-800 font-medium">Enterprise IT Expertise</p>
          </div>

          <div className="why-item flex flex-col items-center">
            <Users className="w-10 h-10 text-gray-800 mb-4" />
            <p className="text-sky-500 font-semibold text-lg">
              Trusted by Global
            </p>
            <p className="text-gray-800 font-medium">
              Clients & Growing Brands
            </p>
          </div>

          <div className="why-item flex flex-col items-center">
            <Rocket className="w-10 h-10 text-gray-800 mb-4" />
            <p className="text-sky-500 font-semibold text-lg">500+ Digital</p>
            <p className="text-gray-800 font-medium">Solutions Delivesky</p>
          </div>

          <div className="why-item flex flex-col items-center">
            <ShieldCheck className="w-10 h-10 text-gray-800 mb-4" />
            <p className="text-sky-500 font-semibold text-lg">Security-First</p>
            <p className="text-gray-800 font-medium">
              Best Practices & Compliance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
