"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WebDevHero() {
  return (
    <section className="relative w-full   overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between ">
        <video
          src="/videos/texture.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        ></video>
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
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
            className="text-lg md:text-xl text-gray-800"
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
              href="https://wa.me/923256036838?text=Hi%20Devntom%20Soluotions%2C%20I%20want%20to%20build%20my%20website"
              target="_blank"
              className="inline-block mt-8 rounded-full bg-sky-500 px-8 py-4 text-white font-semibold hover:bg-sky-600 transition"
            >
              Build Your Website Now
            </Link>
          </motion.div>
        </div>

        {/* Right Image/Graphic */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 relative">
          <motion.img
            src="https://pixelweby.com/assets/home-banner3.webp" // Add your own hero image in public folder
            alt="Web Development Illustration"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>

      {/* Optional Animated Background Shapes */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      />
    </section>
  );
}
