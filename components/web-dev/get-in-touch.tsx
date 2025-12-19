"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function GetInTouch() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Build Your Digital Success?
        </h2>
        <p className="mb-10 text-lg md:text-xl text-white/90">
          Connect with us now and let’s create something amazing together. Fast
          replies, expert guidance, and tailored solutions—just a click away.
        </p>

        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          <FaWhatsapp className="text-2xl" />
          Chat on WhatsApp
        </a>

        {/* Optional decorative circles */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
    </section>
  );
}
