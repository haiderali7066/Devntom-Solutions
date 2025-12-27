"use client";

import Image from "next/image";
import Link from "next/link";

export default function DevntomOverview() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* soft background accents */}
      <span className="absolute left-[-120px] top-32 w-72 h-72 rounded-full bg-sky-400/10 blur-3xl" />
      <span className="absolute right-[-120px] bottom-24 w-72 h-72 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center lg:px-13">
        {/* LEFT CONTENT */}
        <div className="">
          

          <h2 className="text-4xl lg:text-4xl font-normal leading-tight text-slate-900 mb-6">
            Technology That Strengthens Operations {""}
            <span className="bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
               Drives Growth 
            </span>
          </h2>

          <div className="space-y-5 text-[17px] leading-7 text-slate-500 max-w-xl ">
            <p>
              Devntom is a trusted software house helping businesses build
              strong digital foundations that improve efficiency, visibility,
              and customer engagement. We partner with startups, growing
              companies, and enterprises to design and develop digital solutions
              that directly support business objectives.
            </p>

            <p>
              Our custom web development and mobile application services enable
              businesses to establish a professional online presence, automate
              workflows, and deliver seamless user experiences across all
              devices. Every solution we build is optimized for performance,
              scalability, and long-term reliability.
            </p>

            <p>
              By leveraging modern technologies, clean architecture, and secure
              backend systems, we create business software that integrates
              smoothly with existing tools and adapts as your operations expand.
              This ensures reduced technical debt, faster updates, and lower
              maintenance costs over time.
            </p>
          </div>

          <Link
            href="/contact"
            
            className="inline-flex items-center justify-center mt-8 px-7 py-3.5 text-sm font-medium text-white rounded-full bg-gradient-to-r from-sky-500 to-teal-500 hover:opacity-90 transition"
          >
            Schedule a Demo
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-center ">
          {/* floating accents */}
          {/* <span className="absolute -left-6 top-20 w-12 h-12 rounded-xl bg-sky-500 rotate-12" /> */}
          {/* <span className="absolute right-10 bottom-10 w-10 h-10 rounded-lg bg-teal-500 -rotate-12" /> */}

          <div className="relative w-[650px] h-[520px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/team.jpg" // replace with your asset
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
