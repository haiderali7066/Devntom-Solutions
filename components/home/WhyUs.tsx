"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImpactStats() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const numbersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    numbersRef.current.forEach((el) => {
      const endValue = Number(el.dataset.value);

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: endValue,
          duration: 2,
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
          onUpdate: function () {
            el.innerText = Math.floor(Number(el.innerText)).toString();
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-sky-500 overflow-hidden">
      {/* diagonal overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-white/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        {/* Heading */}
        <h2 className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-4xl mx-auto">
          From Startups to Enterprises,
          <br className="hidden sm:block" />
          <span className="font-bold">
            {" "}
            Delivering High-Impact Digital Solutions
          </span>
        </h2>

        {/* Stats */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="border border-white/40 rounded-2xl p-7 md:p-8 text-center backdrop-blur-sm hover:bg-white/5 transition"
            >
              <div className="text-white text-4xl md:text-5xl font-bold tracking-tight">
                <span
                  ref={(el) => {
                    if (el) numbersRef.current[index] = el;
                  }}
                  data-value={item.value}
                >
                  0
                </span>
                {item.suffix}
              </div>

              <p className="mt-3 text-white/80 text-sm md:text-[15px] leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Years of Digital Excellence",
  },
  {
    value: 5,
    suffix: "%",
    label: "Top Global Engineering Talent",
  },
  {
    value: 120,
    suffix: "+",
    label: "Projects Delivered Worldwide",
  },
  {
    value: 50,
    suffix: "+",
    label: "Clients Across Industries",
  },
  {
    value: 100,
    suffix: "K+",
    label: "Development & Consulting Hours",
  },
];
