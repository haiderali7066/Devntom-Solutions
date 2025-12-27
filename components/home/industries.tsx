"use client";

import {
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Factory,
  Film,
} from "lucide-react";

const industries = [
  {
    title: "Education & EdTech",
    icon: GraduationCap,
    color: "bg-sky-500",
  },
  {
    title: "Healthcare & HealthTech",
    icon: HeartPulse,
    color: "bg-blue-600",
  },
  {
    title: "Retail & Consumer",
    icon: ShoppingBag,
    color: "bg-violet-500",
  },
  {
    title: "Finance & FinTech",
    icon: Landmark,
    color: "bg-indigo-500",
  },
  {
    title: "Media & Publishing",
    icon: Film,
    color: "bg-sky-400",
  },
  {
    title: "Manufacturing & Supply Chain",
    icon: Factory,
    color: "bg-blue-700",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="relative py-28 bg-white overflow-hidden h-lvh">
      {/* soft background shape */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[90%] bg-sky-50 rounded-l-[300px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Industries We Serve
          </h2>

          <h3 className="mt-6 text-xl font-semibold text-gray-800 max-w-xl">
            Devntom delivers industry-specific digital solutions
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
            No two industries operate the same — and we treat them that way.
            Devntom designs tailored software, web platforms, and digital
            systems aligned with real business workflows, compliance needs, and
            user behavior.
          </p>

          <button className="mt-8 inline-flex items-center justify-center px-7 py-3 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-600 transition">
            Explore Solutions
          </button>
        </div>

        {/* RIGHT CARDS */}
        <div className="relative grid grid-cols-2 gap-6">
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`rounded-2xl p-7 text-white shadow-xl ${item.color}
                ${i % 2 === 0 ? "translate-y-6" : ""}`}
              >
                <Icon className="w-9 h-9 mb-6 opacity-90" />
                <h4 className="text-lg font-semibold leading-snug">
                  {item.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
