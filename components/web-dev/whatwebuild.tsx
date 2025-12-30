"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Custom Web Development",
    desc: "We build fully custom, high-performance websites tailored to your business goals, audience, and growth plans — no templates, no shortcuts.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "E-Commerce Website Development",
    desc: "Conversion-focused online stores with fast checkout, secure payments, inventory management, and scalable architecture built to sell more.",
    img: "https://cdn.pixabay.com/photo/2017/10/29/17/31/online-2900303_640.jpg", // checkout / store
  },
  {
    title: "Content Management Systems (CMS)",
    desc: "User-friendly CMS websites that let you update content, images, and pages easily — without relying on developers.",
    img: "https://cdn.pixabay.com/photo/2018/07/25/18/36/ecommerce-3562005_640.jpg", // admin panel / content editor
  },
  {
    title: "Web Application Development",
    desc: "Custom web applications designed for speed, security, and scalability — from dashboards and portals to complex business systems.",
    img: "https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_640.jpg", // dashboard / charts
  },
  {
    title: "UI / UX Design",
    desc: "Intuitive, modern user interfaces designed to improve engagement, usability, and conversions across all devices.",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "API Integration & Development",
    desc: "Secure and reliable API integrations connecting your website with third-party tools, payment gateways, CRMs, and mobile apps.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Website Maintenance & Support",
    desc: "Ongoing website care including updates, bug fixes, backups, performance monitoring, and technical support when you need it.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "SEO-Optimized Website Development",
    desc: "Websites built with clean code, fast load times, and SEO best practices to help you rank higher and attract quality traffic.",
    img: "https://cdn.pixabay.com/photo/2022/03/26/01/45/seo-7092114_640.png",
  },
  {
    title: "Web Security Solutions",
    desc: "Advanced security measures including SSL, data protection, secure authentication, and vulnerability prevention to keep your site safe.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Website Performance Optimization",
    desc: "Speed optimization focused on Core Web Vitals, fast load times, and smooth user experience across desktop and mobile devices.",
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80",
  },
];


export default function WhatWeBuildEnterprise() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".dev-card",
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What We Build
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="dev-card group relative h-[480px] overflow-hidden border border-gray-200"
            >
              {/* Image */}
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-150"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/75" />

              {/* Card Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-between px-10 py-6">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {service.title}
                </h3>

                {/* Description (appears on hover) */}
                <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-md opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {service.desc}
                </p>

                {/* Button (always visible) */}
                <Link
                  href="https://wa.me/923000000000"
                  className="inline-flex w-fit items-center justify-center bg-sky-500 px-8 py-3 text-sm font-semibold text-white rounded-full hover:bg-blue-700 transition ml-28 mt-4"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
