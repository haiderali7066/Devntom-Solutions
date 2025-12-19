"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function OverviewPinnedStrategy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=120%", // ✅ reduced height
        scrub: true,
        pin: true,
      },
    });

    // LEFT: slow scale + slight move
    tl.to(leftRef.current, {
      x: -40,
      scale: 0.78,
      ease: "power2.out",
      duration: 1,
    });

    // RIGHT: start appearing from MID scroll
    tl.fromTo(
      rightRefs.current,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        ease: "power3.out",
        duration: 1,
      },
      ">+=0.4" // ✅ mid-scroll trigger
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-screen">
        {/* LEFT COLUMN */}
        <div ref={leftRef} className="max-w-xl">
          <span className="text-sm uppercase tracking-widest text-gray-500">
            Our Offerings
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-light leading-tight text-gray-900">
            Comprehensive and
            <span className="block font-normal">
              winning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                digital strategy
              </span>
            </span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Devntom is a dedicated web development and digital solutions
            partner, helping businesses achieve sustainable growth through
            high-performance websites, scalable eCommerce platforms, and custom
            web applications.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 text-sm font-semibold uppercase tracking-wide text-blue-600 hover:underline"
          >
            Get in touch →
          </Link>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative pl-12 flex flex-col justify-center space-y-14">
          {/* Divider – controlled height */}
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-px bg-gray-200" />

          {[
            {
              title: "A personalized path to success",
              desc: "We deliver personalized digital experiences through strategic web development, user-centric design, and modern front-end frameworks that improve engagement and long-term growth.",
            },
            {
              title: "Customer demand creation",
              desc: "By aligning SEO, web design, and conversion optimization, we build websites that rank higher, load faster, and convert qualified traffic into customers.",
            },
            {
              title: "Scalable and future-ready web development",
              desc: "Using React, Next.js, Node.js, and headless CMS platforms, we engineer scalable web solutions that evolve with your business without rebuilding from scratch.",
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) rightRefs.current[i] = el;
              }}
              className="max-w-md"
            >
              <h3 className="text-xl font-medium text-gray-900">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
