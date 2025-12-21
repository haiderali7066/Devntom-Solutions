"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "Discovery & Planning",
    desc: "Understanding goals, users, and scope.",
  },
  {
    id: 2,
    title: "Design & Prototyping",
    desc: "UX-driven, intuitive interfaces.",
  },
  {
    id: 3,
    title: "Development",
    desc: "Scalable, secure, high-performance builds.",
  },
  { id: 4, title: "Testing & QA", desc: "Performance, speed, reliability." },
  { id: 5, title: "Launch & Deployment", desc: "Smooth release & migration." },
  {
    id: 6,
    title: "Support & Growth",
    desc: "Ongoing optimization & maintenance.",
  },
];

export default function OurProcess() {
  const pathRef = useRef<SVGPathElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    const length = pathRef.current.getTotalLength();
    gsap.set(pathRef.current, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });
    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#process-section",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="process-section" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Web Development Process
        </h2>

        {/* DESKTOP HORIZONTAL OVAL TIMELINE */}
        <div className="relative mt-24 h-[300px] hidden md:block">
          <svg
            viewBox="0 0 1000 300"
            className="absolute inset-0 w-full h-full"
            fill="none"
          >
            <path
              ref={pathRef}
              d="
                M100 50 
                H900 
                Q950 50 950 150 
                Q950 250 900 250 
                H100 
                Q50 250 50 150 
                Q50 50 100 50
              "
              stroke={active ? "#14b8a6" : "#0f172a"}
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
              style={{
                filter: active
                  ? "drop-shadow(0 0 8px rgba(20,184,166,0.6))"
                  : "none",
              }}
            />
          </svg>

          {steps.map((step, i) => {
            // Assign positions along the oval: top, right, bottom, left
            let x = 0;
            let y = 0;
            const padding = 200;
            const width = 800;
            const height = 200;

            if (i === 0) {
              x = padding;
              y = 50;
            } // Top-left
            if (i === 1) {
              x = padding + width / 2;
              y = 50;
            } // Top-center
            if (i === 2) {
              x = padding + width;
              y = 50;
            } // Top-right
            if (i === 3) {
              x = padding + width;
              y = 250;
            } // Bottom-right
            if (i === 4) {
              x = padding + width / 2;
              y = 250;
            } // Bottom-center
            if (i === 5) {
              x = padding;
              y = 250;
            } // Bottom-left

            return (
              <div
                key={step.id}
                onMouseEnter={() => setActive(step.id)}
                onMouseLeave={() => setActive(null)}
                className="absolute flex flex-col items-center text-center"
                style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
              >
                <div
                  className={`w-16 h-16 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-xl mb-2
                  ${active === step.id ? "shadow-lg scale-110" : ""}`}
                >
                  {step.id}
                </div>

                <h4 className="font-semibold text-gray-900 text-lg md:text-xl">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base max-w-xs">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* MOBILE STACKED TIMELINE */}
        <div className="md:hidden mt-16 space-y-6 text-left">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative pl-8 border-l border-gray-200"
            >
              <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-sky-500 text-white text-xs flex items-center justify-center">
                {step.id}
              </span>
              <h4 className="font-semibold text-gray-900">{step.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/XXXXXXXXXX"
          className="mt-20 inline-block rounded-full bg-sky-500 px-10 py-4 
          text-white font-medium hover:bg-sky-600 transition"
        >
          Create Scalable Web Solutions
        </a>
      </div>
    </section>
  );
}
