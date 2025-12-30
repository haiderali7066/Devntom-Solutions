"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    title: "Discover",
    desc: "We understand your vision and craft a strategy for success.",
  },
  {
    title: "Design",
    desc: "Crafting intuitive and engaging UI/UX experiences.",
  },
  {
    title: "Develop",
    desc: "Building robust, scalable, and secure digital products.",
  },
  {
    title: "Deploy",
    desc: "Seamless deployment with optimization and monitoring.",
  },
  {
    title: "Grow",
    desc: "Continuous growth through data-driven improvements.",
  },
];

export default function ZigzagProcess() {
  const globeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animate text steps
    gsap.utils.toArray(".process-step").forEach((step: any, i) => {
      gsap.fromTo(
        step,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Rotate globe continuously
    if (globeRef.current) {
      gsap.to(globeRef.current, {
        rotation: 360,
        duration: 50,
        ease: "linear",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    }
  }, []);

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: Steps with zigzag */}
        <div className="relative">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
            Our Process
          </h2>
          <p className="text-gray-600 mb-12">
            From concept to launch, Devntom guides your project through every
            step with creativity, technology, and strategy.
          </p>

          <div className="relative flex flex-col space-y-16">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="process-step flex items-start gap-6 relative"
              >
                {/* Number circle */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-sky-500 text-white rounded-full text-lg font-bold z-10">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>

                {/* Zigzag line */}
                {i < processSteps.length - 1 && (
                  <span
                    className={`absolute w-1 h-16 bg-transparent border-l-2 border-dotted border-sky-500`}
                    style={{
                      left: "0.75rem",
                      top: "3rem",
                      transform: `translateY(0%) rotate(${
                        i % 2 === 0 ? "-20deg" : "20deg"
                      })`,
                    }}
                  ></span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Globe */}
        <div className="relative w-full flex justify-center items-center">
          <div
            ref={globeRef}
            className="w-80 h-80 rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 relative flex justify-center items-center shadow-2xl"
          >
            <div className="w-24 h-24 bg-white/10 rounded-full absolute"></div>
            {processSteps.map((_, i) => (
              <div
                key={i}
                className="globe-point w-4 h-4 bg-white rounded-full absolute"
                style={{
                  top: `${
                    50 + Math.sin((i / processSteps.length) * Math.PI * 2) * 35
                  }%`,
                  left: `${
                    50 + Math.cos((i / processSteps.length) * Math.PI * 2) * 35
                  }%`,
                }}
              ></div>
            ))}
          </div>
          {/* Halo rings */}
          <span className="absolute w-96 h-96 border border-sky-300 rounded-full animate-spin-slow opacity-20"></span>
          <span className="absolute w-72 h-72 border border-sky-400 rounded-full animate-spin-slower opacity-30"></span>
        </div>
      </div>

      {/* Background floating blobs */}
      <span className="absolute -top-32 -left-32 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-30"></span>
      <span className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-20 animation-delay-2000"></span>
    </section>
  );
}
