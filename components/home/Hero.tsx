"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroVideoPremium() {
  const logos = [
    "/logos/company1.svg",
    "/logos/company2.svg",
    "/logos/company3.svg",
    "/logos/company4.svg",
    "/logos/company5.svg",
    "/logos/company6.svg",
  ];
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/v4.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex items-center">
        <div className="max-w-2xl">
          <span className="inline-block mb-4 text-sm tracking-widest text-sky-400 uppercase">
            Devntom Solutions
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Building Digital Products
            <br />
            That Drive Real Growth
          </h1>

          <p className="mt-6 text-lg text-white/75">
            We design and develop fast, scalable, and SEO-optimized websites for
            modern businesses.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-sky-500 text-white font-semibold hover:bg-sky-600 transition"
            >
              Start a Project
            </a>

            <a
              href="#work"
              className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 transition"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        Scroll ↓
      </div>
      <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md py-6 overflow-hidden">
        <p className="text-center text-sm text-white/60 mb-4">
          Trusted by fast-growing companies worldwide
        </p>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt="Trusted company"
                  width={120}
                  height={40}
                  className="opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
