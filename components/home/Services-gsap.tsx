"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Website Development",
    desc: "Fast, secure and scalable websites built with modern frameworks for business growth.",
  },
  {
    title: "E-Commerce Solutions",
    desc: "High-converting online stores with payment integration and optimized UX.",
  },
  {
    title: "SEO Optimization",
    desc: "On-page, technical and performance SEO to rank higher and convert traffic.",
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven campaigns that increase reach, leads and brand authority.",
  },
  {
    title: "Web Applications",
    desc: "Custom dashboards, portals and SaaS products engineered for scale.",
  },
  {
    title: "Software Solutions",
    desc: "POS, CRM, ERP, HMS & custom business systems tailored to your workflow.",
  },
];

export default function ServicesScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
        },
      });

      /* Title shift */
      tl.to(titleRef.current, {
        x: -260,
        scale: 0.65,
        opacity: 0.4,
        ease: "power2.out",
      });

      /* Corner images exit */
      tl.to(
        imagesRef.current,
        {
          x: (i) => (i % 2 === 0 ? -300 : 300),
          y: (i) => (i < 2 ? -220 : 220),
          scale: 0.5,
          opacity: 0,
          rotate: 6,
          stagger: 0.06,
          ease: "power3.out",
        },
        "<"
      );

      /* RIGHT CONTENT — FROM BOTTOM */
      tl.fromTo(
        cardsRef.current,
        {
          y: () => window.innerHeight,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.18,
          ease: "power4.out",
        },
        "<+0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[#f5f5f5] overflow-hidden "
    >
      {/* Corner Images */}
      {["/img1.webp", "/img2.webp", "/img3.webp", "/img4.webp"].map(
        (src, i) => (
          <Image
            key={i}
            src={src}
            alt=""
            width={180}
            height={180}
            ref={(el) => {
              if (el) imagesRef.current[i] = el;
            }}
            className={`absolute rounded-xl shadow-xl
              ${i === 0 && "top-10 left-10"}
              ${i === 1 && "top-10 right-10"}
              ${i === 2 && "bottom-10 left-10"}
              ${i === 3 && "bottom-10 right-10"}
            `}
          />
        )
      )}

      {/* Main Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          ref={titleRef}
          className="text-6xl md:text-7xl font-bold tracking-tight text-sky-500"
        >
          Our Services
        </h2>
      </div>

      {/* Services Content */}
      <div className="absolute right-20 top-1/2 mt-10 -translate-y-1/2 w-[520px] space-y-6">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="bg-white/70 backdrop-blur-md rounded p-6 shadow-lg opacity-0 will-change-transform"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
