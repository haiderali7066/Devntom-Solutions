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
    <section className="py-14 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Top Technologies We Use
          </h2>
        </div>

        {/* Logo Bar */}
        <div
          className="
          flex items-center
          gap-6 sm:gap-14
          overflow-x-auto sm:overflow-visible
          justify-start sm:justify-center
          scrollbar-hide
          snap-x snap-mandatory sm:snap-none
        "
        >
          {techLogos.map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0 snap-center px-2  hover:grayscale transition"
            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={90}
                height={60}
                className="object-contain w-[70px] sm:w-[90px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
