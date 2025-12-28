"use client";

import Image from "next/image";
import Link from "next/link";

export default function DevntomOverview() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* background accents – desktop only */}
      <span className="hidden lg:block absolute left-[-120px] top-32 w-72 h-72 rounded-full bg-sky-400/10 blur-3xl" />
      <span className="hidden lg:block absolute right-[-120px] bottom-24 w-72 h-72 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-13 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug lg:leading-tight text-slate-900 mb-5 lg:mb-6">
            Technology That Strengthens Operations{" "}
            <span className="bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
              Drives Growth
            </span>
          </h2>

          <div className="space-y-4 lg:space-y-5 text-base sm:text-[17px] leading-7 text-slate-500 max-w-xl">
            <p>
              Devntom is a trusted software house helping businesses build
              strong digital foundations that improve efficiency, visibility,
              and customer engagement.
            </p>

            <p>
              Our custom web development and mobile application services enable
              businesses to establish a professional online presence, automate
              workflows, and deliver seamless user experiences across all
              devices.
            </p>

            <p>
              By leveraging modern technologies and secure backend systems, we
              create scalable software that adapts as your operations expand —
              reducing technical debt and long-term maintenance costs.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center  mt-7 lg:mt-8 px-7 py-3.5 text-sm font-medium text-white rounded-full bg-gradient-to-r from-sky-500 to-teal-500 hover:opacity-90 transition"
          >
            Schedule a Demo
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-center">
          <div className="relative w-full sm:max-w-lg lg:w-[650px] aspect-[5/4] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/team.jpg"
              alt="Devntom Digital Services"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
