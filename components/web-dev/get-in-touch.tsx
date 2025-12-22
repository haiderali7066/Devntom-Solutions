"use client";

import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="relative flex items-center justify-center min-h-[85vh] bg-black overflow-hidden">
      {/* soft background ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[520px] h-[520px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl text-center px-6">
        {/* top label */}
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-6">
          Let’s Collaborate
        </p>

        {/* headline wrapper */}
        <div className="relative">
          <h2
            className="text-white font-extrabold leading-[0.95]
            text-[3.2rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem]"
          >
            LET’S WORK
            <br />
            TOGETHER
          </h2>

          {/* OVERLAPPING CENTER CTA */}
          <Link
            href="/contact"
            className="absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              w-32 h-32 rounded-full
              bg-sky-500 text-black
              flex items-center justify-center
              text-sm font-semibold
              transition-all duration-300
              hover:scale-110 hover:bg-sky-400"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
