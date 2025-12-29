"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WebDevHero() {
  return (
    <section className="relative w-full  overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      >
        <source src="/videos/texture.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 text-black">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Build Modern, High-Performing Websites
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-900"
          >
            We create stunning, responsive, and SEO-friendly websites tailored
            to your business needs. Elevate your brand and grow online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              href="https://wa.me/923256036838?text=Hi%20Devntom%20Solutions%2C%20I%20want%20to%20build%20my%20website"
              target="_blank"
              className="inline-block mt-8 rounded-full bg-sky-500 px-8 py-4 text-white font-semibold hover:bg-sky-600 transition"
            >
              Build Your Website Now
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 relative z-10">
          <motion.img
            src="https://pixelweby.com/assets/home-banner3.webp"
            alt="Web Development Illustration"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
