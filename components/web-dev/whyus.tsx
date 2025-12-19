"use client";

import Link from "next/link";

const reasons = [
  {
    label: "Strategy",
    title: "We Build With Purpose",
    desc: "Every website starts with understanding your business, audience, and conversion goals — not just visuals.",
  },
  {
    label: "Speed",
    title: "Performance Is Non-Negotiable",
    desc: "Optimized assets, clean code, and modern frameworks to deliver fast, reliable experiences.",
  },
  {
    label: "SEO",
    title: "Search Visibility Built-In",
    desc: "From site structure to metadata, technical SEO is integrated from the first line of code.",
  },
  {
    label: "Design",
    title: "UI That Guides Users",
    desc: "Designs crafted to reduce friction and move users naturally toward action.",
  },
  {
    label: "Scalability",
    title: "Built for Growth",
    desc: "Our systems evolve as your business grows — no rebuilds, no limitations.",
  },
  {
    label: "Support",
    title: "Long-Term Reliability",
    desc: "We don’t disappear after launch. We refine, optimize, and improve continuously.",
  },
];

export default function WhyChooseUsNew() {
  return (
    <section className="py-32 bg-[#fafafa] text-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Devntom Works Better
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Because we focus on results, not just deliverables.
          </p>
        </div>

        {/* Rows */}
        <div className="divide-y divide-gray-200">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="group py-10 grid md:grid-cols-12 gap-6 items-center transition"
            >
              {/* Label */}
              <div className="md:col-span-3">
                <span className="text-5xl font-bold text-blue-600 group-hover:text-black transition">
                  {item.label}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-9">
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-3 max-w-3xl opacity-0 group-hover:opacity-100 transition duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <Link
            href="https://wa.me/your-number"
            className="inline-block border-b-2 border-black pb-2 text-sm tracking-wide hover:opacity-60 transition"
          >
            Start Your Web Project →
          </Link>
        </div>

      </div>
    </section>
  );
}
