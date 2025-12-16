"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { PlayCircle } from "lucide-react";

export default function Logos() {
  const clients = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "WordPress",
      logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg",
    },
    {
      name: "Shopify",
      logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    },

    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Android",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Google Ads",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
    }, // optional
  ];
  return (
    <section className="relative w-full bg-white">
      <div className="max-w-7xl mx-auto px-4  pb-24 relative">
        {/* LOGOS — normal flow, no overlap */}
        {/* LOGOS — left half, 4x4 grid on desktop */}
        <div
          className="
    hidden lg:grid lg:w-md lg:grid-cols-4 gap-x-8 gap-y-6 py-5
  "
        >
          {clients.map((client, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={30}
                height={24}
                className="object-contain opacity-90 "
              />
            </div>
          ))}
        </div>

        {/* BLUE STATS CARD */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="
        relative
        lg:absolute lg:right-4 lg:-top-15   /* ✅ ONLY THIS overlaps HERO */

        w-full lg:w-[55%]

        bg-[#0047AB]
        text-white

        px-6 sm:px-10 lg:px-14
        py-8 lg:py-10
        mt-10 lg:mt-0

        rounded-tl-3xl rounded-tr-none rounded-bl-none rounded-br-3xl

        shadow-2xl
        flex flex-col md:flex-row
        items-start md:items-center
        gap-6 md:gap-10
        z-30
      "
        >
          {/* STAT */}
          <div>
            <div className="text-3xl lg:text-4xl font-bold">1452+</div>
            <p className="text-sm opacity-80 mt-1">Happy Clients</p>
          </div>

          {/* PLAY BUTTON */}
          <button
            className="
        w-14 h-14
        bg-red-500
        rounded-xl
        flex items-center justify-center
        hover:bg-red-600 transition
      "
          >
            <PlayCircle className="w-7 h-7 fill-white text-white" />
          </button>

          {/* TEXT */}
          <p className="text-base lg:text-lg leading-relaxed max-w-md font-medium">
            We deliver innovative web, SaaS, and digital solutions. See how{" "}
            <span className="font-semibold">Devntom</span> empowers businesses
            to grow, perform, and succeed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
