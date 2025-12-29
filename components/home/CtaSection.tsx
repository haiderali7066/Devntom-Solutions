"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/cta6.jpg')", // Replace with your image
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-2xl px-6 sm:px-8 md:px-12 lg:px-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Let’s Build Something <br /> Powerful Together
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80">
            Devntom helps brands scale with high-performance websites, apps, and
            digital solutions built for growth.
          </p>

          <div className="mt-6 sm:mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-sky-500 hover:bg-sky-600 text-white font-light rounded-full transition text-sm sm:text-base md:text-lg"
            >
              Start Your Project
              <span className="text-lg sm:text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
