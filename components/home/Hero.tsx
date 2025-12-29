"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroVideoPremium() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1400);
    return () => clearTimeout(timer);
  }, []);

const logos = [
  "https://cdn.simpleicons.org/algolia",
  "https://cdn.simpleicons.org/digitalocean",
  "https://cdn.simpleicons.org/cloudflare",
  "https://cdn.simpleicons.org/ghost",
  "https://cdn.simpleicons.org/postman",
  "https://cdn.simpleicons.org/jetbrains",
  "https://cdn.simpleicons.org/elastic",
  "https://cdn.simpleicons.org/bitbucket",
  "https://cdn.simpleicons.org/clickup",
  "https://cdn.simpleicons.org/tcs",
  "https://cdn.simpleicons.org/zoho", // SaaS / Productivity
];




  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* 🔥 INTRO TEXT OVERLAY */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[100] bg-sky-500 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-4xl sm:text-6xl md:text-7xl font-bold tracking-widest"
            >
              DEVNTOM
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 min-h-[100svh] flex items-center">
        <div className="max-w-xl md:max-w-2xl text-center md:text-left">
          <span className="inline-block mb-4 text-xs sm:text-sm tracking-widest text-sky-400 uppercase">
            Devntom Solutions
          </span>

          <h1 className="text-[2.2rem] sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Building Digital Products
            <br />
            That Drive Real Growth
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/75">
            We design and develop fast, scalable, and SEO-optimized websites for
            modern businesses.
          </p>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-4 bg-sky-500 text-white font-semibold hover:bg-sky-600 transition"
            >
              Start a Project
            </a>

            <a
              href="#work"
              className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>

      {/* Trusted Logos */}
      <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md py-4 sm:py-6">
        <p className="text-center font-extralight text-xs sm:text-sm text-white/60 mb-4">
          Trusted by fast-growing companies worldwide
        </p>

        <motion.div
          className="flex gap-30 w-max mx-auto"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt="Trusted company"
              width={30}
              height={16}
              className="opacity-70 hover:opacity-100 transition"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
