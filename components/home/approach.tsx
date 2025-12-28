"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  { title: "Discover", desc: "We understand your vision and craft a strategy to achieve your goals." },
  { title: "Design", desc: "Creating sleek, intuitive designs for web, apps, and software." },
  { title: "Develop", desc: "Building fast, secure, and scalable solutions using modern tech." },
  { title: "Deploy", desc: "Seamless deployment with testing, optimization, and analytics." },
  { title: "Grow", desc: "Monitoring, marketing, and evolving your product for success." },
];

export default function DevntomProcess() {
  const globeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animate steps text
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

    // Continuous globe rotation
    if (globeRef.current) {
      gsap.to(globeRef.current, {
        rotation: 360,
        duration: 40,
        ease: "linear",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    }
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-b from-sky-500 via-sky-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-5xl font-extrabold text-white mb-8 ">
            Our Process
          </h2>
          <p className="text-gray-200 text-lg mb-12">
            From concept to launch, Devntom guides your project through every step with creativity, technology, and strategy.
          </p>
          <div className="space-y-10">
            {processSteps.map((step, i) => (
              <div key={i} className="process-step">
                <h3 className="text-2xl font-semibold text-sky-400 mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT GLOBE */}
        <div className="relative w-full flex justify-center items-center">
          <div
            ref={globeRef}
            className="w-80 h-80 rounded-full bg-gradient-to-br from-sky-500 via-purple-500 to-purple-700 relative flex justify-center items-center shadow-2xl"
          >
            {/* Globe center */}
            <div className="w-24 h-24 bg-white/10 rounded-full absolute"></div>

            {/* Orbiting points */}
            {processSteps.map((_, i) => (
              <div
                key={i}
                className="globe-point w-4 h-4 bg-sky-400 rounded-full absolute"
                style={{
                  top: `${50 + Math.sin((i / processSteps.length) * Math.PI * 2) * 35}%`,
                  left: `${50 + Math.cos((i / processSteps.length) * Math.PI * 2) * 35}%`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Background floating blobs */}
      <span className="absolute -top-20 -left-20 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-30"></span>
      <span className="absolute -bottom-20 -right-20 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-20 animation-delay-2000"></span>
    </section>
  );
}
