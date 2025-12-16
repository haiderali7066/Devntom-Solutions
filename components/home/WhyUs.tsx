"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full px-6 md:px-16 lg:px-28 py-20 grid md:grid-cols-2 gap-12 items-center bg-white"
    >
      {/* LEFT: Image + Testimonial Card */}
      <div className="relative w-full h-full min-h-[400px] md:min-h-[600px]">
        <Image
          src="/support-girl.jpg"
          alt="Customer Support"
          fill
          className="rounded-xl shadow-lg object-cover scale-x-[-1]"
          priority
        />

        {/* Floating Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-6 left-6 bg-blue-600 text-white shadow-xl border-l-4 border-orange-500 p-6 md:p-8 rounded-2xl max-w-md"
        >
          <p className="text-sm md:text-base">
            Devntom transformed our business completely. Their team is
            proactive, skilled, and always ready to assist. Now we focus on
            scaling while they manage everything smoothly.
          </p>
          <p className="mt-3 font-semibold">Client – Devntom Solutions</p>
        </motion.div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:pl-8 pt-16 lg:pt-0">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-blue-600"></div>
          <p className="text-blue-600 font-semibold text-sm md:text-base">
            Why Choose Devntom?
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Your Growth, Our Expertise
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          At Devntom, we combine creativity, technology, and strategic insight
          to deliver solutions that truly help your business grow.
        </p>

        {/* Comparison Circles */}
        <div className="flex gap-10 mt-10">
          {/* Traditional */}
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-[6px] border-gray-300"></div>
              <div className="absolute inset-0 rounded-full border-[6px] border-orange-500 border-r-transparent rotate-45"></div>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-700">
                35%
              </div>
            </div>
            <p className="font-semibold mt-3">Traditional Approach</p>
            <p className="text-gray-600 text-sm mt-1">
              Expensive, slow, and inconsistent.
            </p>
          </div>

          {/* Devntom Advantage */}
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-[6px] border-orange-500"></div>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-700">
                100%
              </div>
            </div>
            <p className="font-semibold mt-3">Devntom Advantage</p>
            <p className="text-gray-600 text-sm mt-1">
              Faster, smarter & cost-effective from day one.
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold"
        >
          Free Consultation
        </motion.button>
      </div>
    </motion.section>
  );
}
