"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// Updated, more authentic testimonial texts
const testimonials = [
  {
    name: "Ali Khan",
    role: "CEO, TechCorp",
    img: "/testimonials/ali.webp",
    text: "Devntom Solutions transformed our website into a sleek, high-performing platform that truly reflects our brand.",
  },
  {
    name: "Sara Ahmed",
    role: "Marketing Lead, Brandify",
    img: "/testimonials/sara.webp",
    text: "The design and UX they delivered were flawless. Our engagement metrics have skyrocketed since launch.",
  },
  {
    name: "Hassan Raza",
    role: "Founder, StartupX",
    img: "/testimonials/hassan.webp",
    text: "Their attention to detail and timely delivery made the entire project seamless and enjoyable.",
  },
  {
    name: "Fatima Noor",
    role: "CTO, WebGen",
    img: "/testimonials/fatima.webp",
    text: "The website feels fast, modern, and intuitive. We couldn’t be happier with the results.",
  },
  {
    name: "Ahmed Ali",
    role: "Product Manager, InnovateX",
    img: "/testimonials/ahmed.webp",
    text: "A collaborative team that understood our vision perfectly. The final product exceeded expectations.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left side: Heading */}
        <div className="md:w-1/2 text-center md:text-center">
          <h2 className="text-4xl font-bold mb-4 font-sans">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-auto">
            Hear directly from our clients about their experience working with
            Devntom Solutions.
          </p>
        </div>

        {/* Right side: Carousel */}
        <div className="md:w-1/2 w-full flex justify-center">
          <Carousel
            opts={{ align: "start", loop: true }}
            orientation="vertical"
            className="w-full max-w-xs"
          >
            {" "}
            <CarouselContent className="-mt-1 h-[400px]">
              {" "}
              {testimonials.map((t, index) => (
                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                  {" "}
                  <div className="p-1">
                    {" "}
                    <Card className="shadow-lg hover:scale-105 transition-transform">
                      {" "}
                      <CardContent className="flex flex-col items-center text-center p-6">
                        {" "}
                        <Image
                          src={t.img}
                          alt={t.name}
                          width={60}
                          height={60}
                          className="rounded-full mb-4"
                        />{" "}
                        <p className="text-gray-700 mb-4">{t.text}</p>{" "}
                        <h3 className="font-semibold">{t.name}</h3>{" "}
                        <p className="text-sm text-gray-500">{t.role}</p>{" "}
                      </CardContent>{" "}
                    </Card>{" "}
                  </div>{" "}
                </CarouselItem>
              ))}{" "}
            </CarouselContent>{" "}
            <CarouselPrevious /> <CarouselNext />{" "}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
