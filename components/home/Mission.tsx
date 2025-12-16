
"use client";
import { motion } from "framer-motion";



export default function Mission() {
  return (
    <section className="w-full py-16 px-4 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image & Core Value */}
        <div className="relative">
          <img
            src="/diverse-team-professionals-collaborating-in-office.jpg"
            alt="Team collaborating on business solutions"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 -mb-12 lg:-mb-16">
            <div className="bg-blue-600 text-white rounded-2xl p-6 md:p-8 shadow-lg max-w-md">
              <h3 className="text-xl md:text-2xl font-bold mb-6">
                Our Core Value
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-green-300 font-bold text-lg flex-shrink-0">
                    ✓
                  </span>
                  <p className="text-sm md:text-base">
                    Focusing on real solutions for your success.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-300 font-bold text-lg flex-shrink-0">
                    ✓
                  </span>
                  <p className="text-sm md:text-base">
                    We provide accurate, human support.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-300 font-bold text-lg flex-shrink-0">
                    ✓
                  </span>
                  <p className="text-sm md:text-base">
                    We save you time, cut costs, and boost results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text & Mission Cards */}
        <div className="lg:pl-8 pt-16 lg:pt-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-blue-600"></div>
            <p className="text-blue-600 font-semibold text-sm md:text-base">
              Your Growth, Our Mission
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We simplify your business, so you can grow faster.
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            At Devntom, we help businesses grow by streamlining operations with
            smart digital solutions. Our expert team saves you time, reduces
            costs, and boosts efficiency—so you can focus on scaling with
            confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Boost Productivity with Smart Solutions",
                desc: "At Devntom, we help businesses maximize efficiency by automating repetitive tasks and streamlining workflows—so your team can focus on what truly matters.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
              },
              {
                title: "Save Time, Focus on Growth",
                desc: "Devntom's smart digital solutions handle repetitive and time-consuming tasks, freeing your team to focus on strategic work and business growth.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="bg-blue-500 rounded-tl-3xl rounded-tr-none rounded-bl-none rounded-br-3xl p-6 text-white cursor-pointer"
                whileHover={{ backgroundColor: "#2563EB", scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-blue-100">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}