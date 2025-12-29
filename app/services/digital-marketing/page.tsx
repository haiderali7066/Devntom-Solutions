"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalMarketingPageFull() {
  const overviewRef = useRef<HTMLDivElement>(null);
  const overviewLeftRef = useRef<HTMLDivElement>(null);
  const overviewRightRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: overviewRef.current,
        start: "top top",
        end: "+=120%",
        scrub: true,
        pin: true,
      },
    });

    tl.to(overviewLeftRef.current, {
      x: -40,
      scale: 0.78,
      ease: "power2.out",
      duration: 1,
    });

    tl.fromTo(
      overviewRightRefs.current,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        ease: "power3.out",
        duration: 1,
      },
      ">+=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="w-full font-sans text-gray-900">
      {/* ---------------- HERO ---------------- */}
      <section className="relative w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        >
          <source src="/videos/texture.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 container mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6 text-black">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Accelerate Your Growth with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Digital Marketing Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-900"
            >
              Devntom crafts data-driven marketing strategies that increase
              traffic, engagement, and conversions for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link
                href="https://wa.me/923256036838?text=Hi%20Devntom%20Solutions%2C%20I%20want%20digital%20marketing%20services"
                target="_blank"
                className="inline-block mt-8 rounded-full bg-sky-500 px-8 py-4 text-white font-semibold hover:bg-sky-600 transition"
              >
                Get Your Free Strategy
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0 relative z-10">
            <motion.img
              src="https://pixelweby.com/assets/home-banner3.webp"
              alt="Digital Marketing Illustration"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* ---------------- OVERVIEW / STRATEGY ---------------- */}
      <section
        ref={overviewRef}
        className="relative min-h-screen bg-white overflow-hidden"
      >
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-screen">
          {/* LEFT COLUMN */}
          <div ref={overviewLeftRef} className="max-w-xl">
            <span className="text-sm uppercase tracking-widest text-gray-500">
              Our Expertise
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-light leading-tight text-gray-900">
              Comprehensive and
              <span className="block font-normal">
                results-driven{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  marketing strategies
                </span>
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              At Devntom Solutions, we combine SEO, social media, content
              marketing, and paid campaigns to create high-performing digital
              strategies that grow your brand, increase traffic, and convert
              leads.
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
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-px bg-gray-200" />

            {[
              {
                title: "Data-Driven Campaigns",
                desc: "We analyze data to optimize every channel and ensure measurable results for your business.",
              },
              {
                title: "SEO & Traffic Growth",
                desc: "Rank higher, drive qualified traffic, and convert visitors into loyal customers.",
              },
              {
                title: "Scalable Strategies",
                desc: "Our strategies evolve with your business using cutting-edge tools and frameworks.",
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) overviewRightRefs.current[i] = el;
                }}
                className="max-w-md"
              >
                <h3 className="text-xl font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Tailored strategies to grow your business online.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {[
            {
              title: "SEO & SEM",
              desc: "Increase visibility, drive traffic, and convert leads.",
            },
            {
              title: "Social Media Marketing",
              desc: "Engage audiences across platforms effectively.",
            },
            {
              title: "Content Marketing",
              desc: "Deliver valuable content that converts.",
            },
            {
              title: "Email & CRM Marketing",
              desc: "Automate engagement and nurture leads.",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- CASE STUDIES ---------------- */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-gray-600 text-lg">
            Proven results from real clients we helped scale online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            {
              title: "E-commerce Brand Boosted Sales 150%",
              img: "/digital-marketing/case1.jpg",
            },
            {
              title: "SaaS Company Increased Leads 200%",
              img: "/digital-marketing/case2.jpg",
            },
            {
              title: "Local Business Doubled Web Traffic",
              img: "/digital-marketing/case3.jpg",
            },
          ].map((caseStudy, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
            >
              <img
                src={caseStudy.img}
                alt={caseStudy.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl">{caseStudy.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by businesses worldwide.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sara Khan",
              role: "CEO, Startup Hub",
              quote:
                "Devntom Solutions boosted our online presence tremendously.",
            },
            {
              name: "Ali Raza",
              role: "Marketing Head, TechMart",
              quote: "Their strategies are data-driven and results-oriented.",
            },
            {
              name: "Hina Malik",
              role: "Founder, Ecomfy",
              quote: "Professional team with amazing support and insight.",
            },
          ].map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-6 text-center shadow-md"
              whileHover={{ y: -3 }}
            >
              <p className="text-gray-800 italic mb-4">"{t.quote}"</p>
              <h4 className="font-bold text-lg">{t.name}</h4>
              <p className="text-gray-600">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-gray-600 text-lg">
            Transparent and results-driven process for guaranteed success.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            {
              step: "Audit",
              desc: "Analyze current performance and opportunities.",
            },
            {
              step: "Strategy",
              desc: "Develop tailored marketing strategies.",
            },
            {
              step: "Execution",
              desc: "Implement campaigns and optimize results.",
            },
            { step: "Reporting", desc: "Transparent tracking and insights." },
          ].map((p, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-indigo-600 font-bold text-xl mb-2">
                {p.step}
              </div>
              <p className="text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CONTACT / CTA ---------------- */}
      <section className="py-24 px-6 md:px-12 bg-indigo-600 text-white text-center rounded-tl-3xl rounded-tr-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Grow Your Business?
        </h2>
        <p className="text-lg mb-6">
          Get in touch with Devntom Solutions and start scaling today.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-indigo-600 font-semibold py-4 px-8 rounded-lg hover:shadow-lg transition"
        >
          Book a Free Consultation
        </Link>
      </section>

      
    </div>
  );
}
