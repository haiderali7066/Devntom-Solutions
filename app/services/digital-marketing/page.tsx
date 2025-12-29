"use client";

import Image from "next/image";

export default function UnderConstruction() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center text-white">
      {/* Animated Grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-sky-500/25 blur-[160px]" />
      </div>

      {/* Globe */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="globe">
          {[...Array(18)].map((_, i) => (
            <span key={i} style={{ transform: `rotateY(${i * 10}deg)` }} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Logo */}
        <div className="flex justify-center items-center gap-3 mb-8 animate-logo">
          <Image src="/logo.svg" alt="Devntom" width={52} height={52} />
          <span className="tracking-widest text-sky-400 text-xl font-semibold">
            DEVNTOM
          </span>
        </div>

        {/* Big Text */}
        <h6 className="font-extrabold leading-[0.95] text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem]">
          PAGE UNDER
          <br />
          <span className="text-sky-400">CONSTRUCTION</span>
        </h6>

        <p className="mt-6 text-gray-300 text-lg max-w-xl mx-auto">
          Engineering a next-level digital experience. Building Inavations 
        </p>

        <span className="inline-block mt-10 px-6 py-3 border border-white/20 rounded-full text-sm animate-pulse">
          🚧 Devntom Build Mode
        </span>
      </div>

      <style jsx>{`
        /* Grid */
        .grid-bg {
          background-image: linear-gradient(
              rgba(14, 165, 233, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(14, 165, 233, 0.05) 1px,
              transparent 1px
            );
          background-size: 90px 90px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          to {
            background-position: 60px 60px;
          }
        }

        /* Globe */
        .globe {
          width: 560px;
          height: 560px;
          border-radius: 50%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate 22s linear infinite;
        }

        .globe span {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(14, 165, 233, 0.45);
        }

        @keyframes rotate {
          from {
            transform: rotateX(18deg) rotateY(0deg);
          }
          to {
            transform: rotateX(18deg) rotateY(360deg);
          }
        }

        /* Logo */
        .animate-logo {
          animation: fadeUp 1.4s ease forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
