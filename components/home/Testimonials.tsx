"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Aram Saffarian",
    role: "President of Treaty Health",
    website: "https://treatyhealth.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Devntom Solutions completely transformed our healthcare app, enhancing its functionality and user experience. Their team is highly skilled in web and mobile app development, communicates clearly at every step, and delivers results on schedule. Partnering with them has significantly improved our digital presence and client engagement.",
  },
  {
    name: "Jeff Moye",
    role: "Founder of Moye",
    website: "https://moye.com",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Working with Devntom Solutions has been an exceptional experience. Their team consistently meets project deadlines while maintaining excellent quality standards. They are experts in custom software development, digital solutions, and project management, making them a trusted partner for our business growth.",
  },
  {
    name: "Bill Kilpatrick",
    role: "CEO of Drive App Suit",
    website: "https://driveappsuit.com",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    text: "The Devntom Solutions team is professional, reliable, and highly competent. They executed our marketing platform project flawlessly, providing clear updates, valuable suggestions, and creative solutions. Their dedication to client success and technical expertise is unmatched.",
  },
  {
    name: "Samantha Lee",
    role: "CTO of HealthTech Innovations",
    website: "https://healthtechinnovations.com",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "Devntom Solutions delivered an innovative and scalable solution for our digital platform. Their team is well-versed in the latest technologies, ensuring our software is robust, fast, and user-friendly. Their attention to detail and commitment to quality make them the perfect development partner.",
  },
  {
    name: "David Chen",
    role: "Founder of NextGen Marketing",
    website: "https://nextgenmarketing.com",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    text: "Partnering with Devntom Solutions accelerated our software development timeline without compromising quality. Their team provides end-to-end solutions, from UI/UX design to backend development, always with transparent communication and expert guidance.",
  },
  {
    name: "Laura Martinez",
    role: "CEO of EcoSmart Solutions",
    website: "https://ecosmartsolutions.com",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    text: "Devntom Solutions is a highly professional web and app development company. They helped us streamline our digital operations with custom software solutions. Their focus on client satisfaction, innovation, and technical excellence makes them a top choice for businesses seeking reliable technology partners.",
  },
];


export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    draggable: false, // disables touch/mouse drag
  });

  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="py-30">
      <h2 className="text-center text-4xl font-light mb-14">
        Don&apos;t just take our words for it –{" "}
        <span className="text-sky-500">Take theirs!</span>
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Arrows */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronRight />
        </button>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] px-4 sm:px-6"
              >
                <div
                  className={cn(
                    "p-6 sm:p-8 rounded-xl transition-colors min-h-[360px] sm:min-h-[420px]",
                    i === activeIndex
                      ? "bg-sky-500 text-white"
                      : "bg-sky-50 shadow-2xl text-gray-900"
                  )}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-light text-lg">{t.name}</p>
                      <p className="text-sm opacity-80">{t.role}</p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-xl font-light sm:text-md mb-4 sm:mb-6 leading-relaxed">
                    {t.text}
                  </p>

                  {/* Website */}
                  <div>
                    <p className="text-sm font-light">{t.website}</p>
                    <span className="text-sm underline font-light opacity-70">
                      Read on Upwork
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "w-2 h-2 rounded-full",
                i === activeIndex ? "bg-sky-500" : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
