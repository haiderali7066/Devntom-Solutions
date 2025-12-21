"use client";

import Image from "next/image";

const techLogos = [
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Svelte",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
  },
  {
    name: "WordPress",
    src: "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg",
  },
  {
    name: "Shopify",
    src: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
  },

  {
    name: "Laravel",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
];

export default function TechStackBar() {
  return (
    <section className="py-16 border-y border-gray-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Top Technologies We Use
          </h2>
        </div>

        {/* Logo Bar */}
        <div className="flex items-center justify-center gap-14 overflow-x-auto scrollbar-hide">
          {techLogos.map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0  hover:grayscale transition"
            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={100}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
