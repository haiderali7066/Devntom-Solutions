"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top diagonal line */}
        <div className="absolute top-20 -left-96 w-96 h-96 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <path d="M 0 100 L 400 0" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="3" fill="none" />
            <path d="M 0 150 L 400 50" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" fill="none" />
            <path d="M 0 200 L 400 100" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Bottom curved shape */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <path d="M 0 0 Q 200 100 400 0 L 400 400 L 0 400 Z" fill="url(#grad1)" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Decorative tech elements */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 opacity-10 rounded-lg border border-blue-400 transform -rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 opacity-5 rounded-full border border-cyan-300"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-blue-400"></div>
              <span className="text-blue-300 font-medium">Since 2023</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Empowering Businesses With Innovative Digital Solutions
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
              DevNTom specializes in AI-powered solutions, web development, and digital transformation to accelerate
              your online growth and business success.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-lg font-semibold">
                Get Started
              </Button>
            </div>
          </div>

          {/* Right side - Robot/AI Image */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="relative w-full max-w-md h-96">
              {/* Robot illustration placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/3d-robot-ai-artificial-intelligence-laptop-screen-.jpg"
                  alt="AI Robot interacting with technology"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Decorative elements around image */}
              <div className="absolute -top-8 -right-8 w-24 h-24 border-2 border-cyan-400 rounded-lg opacity-40"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full opacity-60"></div>
              <div className="absolute bottom-8 right-0 w-12 h-12 border-2 border-blue-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
