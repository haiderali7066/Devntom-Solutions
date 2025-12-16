"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "E-Commerce",
  "Real Estate",
  "Construction",
  "Beauty",
  "Food",
  "Fashion",
];

// All images in webp format
const projects: Record<string, string[]> = {
  "E-Commerce": [
    "/portfolio/e1.webp",
    "/portfolio/e2.webp",
    "/portfolio/e3.webp",
    "/portfolio/e4.webp",
    "/portfolio/e5.webp",
    "/portfolio/e6.webp",
    "/portfolio/e7.webp",
    "/portfolio/e8.webp",
  ],
  "Real Estate": [
    "/portfolio/r1.webp",
    "/portfolio/r2.webp",
    "/portfolio/r3.webp",
    "/portfolio/r4.webp",
    "/portfolio/r5.webp",
    "/portfolio/r6.webp",
    "/portfolio/r7.webp",
    "/portfolio/r8.webp",
  ],
  Construction: [
    "/portfolio/c1.webp",
    "/portfolio/c2.webp",
    "/portfolio/c3.webp",
    "/portfolio/c4.webp",
    "/portfolio/c5.webp",
    "/portfolio/c6.webp",
    "/portfolio/c7.webp",
    "/portfolio/c8.webp",
  ],
  Beauty: [
    "/portfolio/b1.webp",
    "/portfolio/b2.webp",
    "/portfolio/b3.webp",
    "/portfolio/b4.webp",
    "/portfolio/b5.webp",
    "/portfolio/b6.webp",
    "/portfolio/b7.webp",
    "/portfolio/b8.webp",
  ],
  Food: [
    "/portfolio/f1.webp",
    "/portfolio/f2.webp",
    "/portfolio/f3.webp",
    "/portfolio/f4.webp",
    "/portfolio/f5.webp",
    "/portfolio/f6.webp",
    "/portfolio/f7.webp",
    "/portfolio/f8.webp",
  ],
  Fashion: [
    "/portfolio/fa1.webp",
    "/portfolio/fa2.webp",
    "/portfolio/fa3.webp",
    "/portfolio/fa4.webp",
    "/portfolio/fa5.webp",
    "/portfolio/fa6.webp",
    "/portfolio/fa7.webp",
    "/portfolio/fa8.webp",
  ],
};

export default function PortfolioSection() {
  const [active, setActive] = useState("E-Commerce");
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (previewIndex !== null) {
      setPreviewIndex((prev) =>
        prev === 0 ? projects[active].length - 1 : prev! - 1
      );
    }
  };

  const handleNext = () => {
    if (previewIndex !== null) {
      setPreviewIndex((prev) =>
        prev === projects[active].length - 1 ? 0 : prev! + 1
      );
    }
  };

  return (
    <section className="w-full py-20 px-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Our Impact On Industries
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Explore our innovative portfolio to witness our passion and expertise
          in crafting user-centric websites.
        </p>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-lg border font-medium transition
                ${
                  active === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-300 text-gray-700 hover:border-blue-500"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {projects[active].map((img, i) => (
              <motion.div
                key={img}
                layout
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setPreviewIndex(i)}
                className="cursor-pointer rounded-xl overflow-hidden shadow-lg aspect-[4/3] relative"
              >
                <Image
                  src={img}
                  alt="Portfolio"
                  fill
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FULL VIEW MODAL */}
      <AnimatePresence>
        {previewIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overflow-auto"
            onClick={() => setPreviewIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE */}
              <Image
                src={projects[active][previewIndex]}
                alt="Full view"
                width={1200}
                height={800}
                className="rounded-xl object-contain w-full h-auto"
              />

              {/* NAVIGATION BUTTONS */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/30 hover:bg-white text-black rounded-full p-2 md:p-3"
              >
                &#10094;
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/30 hover:bg-white text-black rounded-full p-2 md:p-3"
              >
                &#10095;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
