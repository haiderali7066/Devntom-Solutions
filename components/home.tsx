"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  PlayCircle,
  Users,
  CheckCircle2,
  Award,
  Users2,
  FileText,
  MessageCircle,
  Search,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const clients = [
    { name: "WordPress", logo: "/wordpress-logo.png" },
    { name: "Google Ads", logo: "/google-ads-logo.png" },
    { name: "VS Code", logo: "/visual-studio-code-logo.jpg" },
    { name: "AWS", logo: "/logos/aws.jpg" },
    { name: "Android", logo: "/android-logo.png" },
    { name: "GitHub", logo: "/github-logo.png" },
  ];

  const statsBar = [
    { icon: Users, value: "1452+", label: "Happy Clients" },
    { icon: CheckCircle2, value: "3452+", label: "Projects Completed" },
    { icon: Award, value: "15+", label: "Years Of Experience" },
    { icon: Users2, value: "72+", label: "Team Members" },
  ];

  const services = [
    {
      icon: Users,
      title: "Website Development",
      description:
        "We build custom, responsive websites – from WordPress to e-commerce stores – with ongoing maintenance for peak performance.",
    },
    {
      icon: FileText,
      title: "SEO (Search Engine Optimization)",
      description:
        "We boost your rankings with complete SEO solutions – from on-page optimization to local SEO and e-commerce product listings for maximum organic growth.",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Solutions",
      description:
        "Boost engagement with WhatsApp API integration, bulk messaging & AI chatbots for 24/7 customer support and lead management.",
    },
    {
      icon: Zap,
      title: "Digital Marketing",
      description:
        "We amplify your brand through strategic social media management, targeted ads, and engaging content marketing to boost conversions and visibility.",
    },
    {
      icon: Award,
      title: "Brand Enhancement",
      description:
        "Enhance your brand with our graphic design, professional video editing, and reliable domain/hosting services for a powerful online presence.",
    },
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-96 w-96 h-96 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <path
                d="M 0 100 L 400 0"
                stroke="rgba(59, 130, 246, 0.6)"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M 0 150 L 400 50"
                stroke="rgba(59, 130, 246, 0.4)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 0 200 L 400 100"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <path
                d="M 0 0 Q 200 100 400 0 L 400 400 L 0 400 Z"
                fill="url(#grad1)"
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute top-1/3 left-1/4 w-72 h-72 opacity-10 rounded-lg border border-blue-400 transform -rotate-12"></div>
          <div className="absolute top-1/2 right-1/3 w-96 h-96 opacity-5 rounded-full border border-cyan-300"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-blue-400"></div>
                <span className="text-blue-300 font-medium">Since 2023</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Empowering Businesses With Innovative Digital Solutions
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                DevNTom specializes in AI-powered solutions, web development,
                and digital transformation to accelerate your online growth and
                business success.
              </p>
              <div className="pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-lg font-semibold">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="relative w-full max-w-md h-96">
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
                <div className="absolute -top-8 -right-8 w-24 h-24 border-2 border-cyan-400 rounded-lg opacity-40"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full opacity-60"></div>
                <div className="absolute bottom-8 right-0 w-12 h-12 border-2 border-blue-300 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      {/* <section className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2"></div>
            <div className="md:col-start-1 md:row-start-1 md:-mt-32 relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-gray-900">1452+</div>
                  <div className="text-gray-600 font-medium">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="md:col-start-2 md:row-start-1 md:col-span-2 md:-mt-20">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-blue-500/20 rounded-full"></div>
                <div className="relative z-10 flex items-start justify-between">
                  <div className="max-w-lg space-y-4">
                    <p className="text-xl leading-relaxed font-medium">
                      We deliver innovative web, SaaS, and digital solutions.
                      See how DevNTom empowers businesses to grow, perform, and
                      succeed.
                    </p>
                  </div>
                  <button className="flex-shrink-0 ml-4">
                    <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center hover:bg-red-600 transition shadow-lg">
                      <PlayCircle className="w-8 h-8 text-white fill-white" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Small Stats Card */}
            <motion.div
              className="md:col-start-1 md:row-start-1 md:-mt-32 relative bg-white p-8 rounded-2xl shadow-2xl cursor-pointer"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#2563EB",
                color: "#fff",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="space-y-2">
                <div className="text-5xl font-bold">1452+</div>
                <div className="font-medium">Happy Clients</div>
              </div>
            </motion.div>

            {/* Main Stats Card */}
            <motion.div
              className="md:col-start-2 md:row-start-1 md:col-span-2 md:-mt-20 relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-tl-3xl rounded-tr-none rounded-bl-none rounded-br-3xl p-8 md:p-12 shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-blue-500/20 rounded-full"></div>
              <div className="relative z-10 flex items-start justify-between">
                <div className="max-w-lg space-y-4">
                  <p className="text-xl leading-relaxed font-medium">
                    We deliver innovative web, SaaS, and digital solutions. See
                    how DevNTom empowers businesses to grow, perform, and
                    succeed.
                  </p>
                </div>
                <button className="flex-shrink-0 ml-4">
                  <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center hover:bg-red-600 transition shadow-lg">
                    <PlayCircle className="w-8 h-8 text-white fill-white" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* logos Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={80}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}

      {/* <section className="w-full py-16 px-4 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative">
            <img
              src="/diverse-team-professionals-collaborating-in-office.jpg"
              alt="Team collaborating on business solutions"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 -mb-12 lg:-mb-16">
              <div className="bg-blue-600 text-white rounded-2xl p-6 md:p-8 shadow-lg max-w-md">
                <h3 className="text-xl md:text-2xl font-bold mb-6">
                  Our Core Value
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-green-300 font-bold text-lg flex-shrink-0">
                      ✓
                    </span>
                    <p className="text-sm md:text-base">
                      Focusing on real solutions for your success.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-300 font-bold text-lg flex-shrink-0">
                      ✓
                    </span>
                    <p className="text-sm md:text-base">
                      We provide accurate, human support.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-300 font-bold text-lg flex-shrink-0">
                      ✓
                    </span>
                    <p className="text-sm md:text-base">
                      We save you time, cut costs, and boost results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:pl-8 pt-16 lg:pt-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-blue-600"></div>
              <p className="text-blue-600 font-semibold text-sm md:text-base">
                Your Growth, Our Mission
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We simplify your business, so you can grow faster.
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              At Zyrom, we help businesses grow by streamlining operations with
              smart digital solutions. Our expert team saves you time, reduces
              costs, and boosts efficiency—so you can focus on scaling with
              confidence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-600 rounded-2xl p-6 text-white hover:shadow-lg transition-shadow">
                <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Boost Productivity with Smart Solutions
                </h3>
                <p className="text-sm md:text-base text-blue-100">
                  At Zyrom, we help businesses maximize efficiency by automating
                  repetitive tasks and streamlining workflows—so your team can
                  focus on what truly matters.
                </p>
              </div>
              <div className="bg-blue-600 rounded-2xl p-6 text-white hover:shadow-lg transition-shadow">
                <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Save Time, Focus on Growth
                </h3>
                <p className="text-sm md:text-base text-blue-100">
                  Zyrom's smart digital solutions handle repetitive and
                  time-consuming tasks, freeing your team to focus on strategic
                  work and business growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section className="w-full py-16 px-4 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image & Core Value */}
          <div className="relative">
            <img
              src="/diverse-team-professionals-collaborating-in-office.jpg"
              alt="Team collaborating on business solutions"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 -mb-12 lg:-mb-16">
              <div className="bg-blue-600 text-white rounded-2xl p-6 md:p-8 shadow-lg max-w-md">
                <h3 className="text-xl md:text-2xl font-bold mb-6">
                  Our Core Value
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-green-300 font-bold text-lg flex-shrink-0">
                      ✓
                    </span>
                    <p className="text-sm md:text-base">
                      Focusing on real solutions for your success.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-300 font-bold text-lg flex-shrink-0">
                      ✓
                    </span>
                    <p className="text-sm md:text-base">
                      We provide accurate, human support.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-300 font-bold text-lg flex-shrink-0">
                      ✓
                    </span>
                    <p className="text-sm md:text-base">
                      We save you time, cut costs, and boost results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Mission Cards */}
          <div className="lg:pl-8 pt-16 lg:pt-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-blue-600"></div>
              <p className="text-blue-600 font-semibold text-sm md:text-base">
                Your Growth, Our Mission
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We simplify your business, so you can grow faster.
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              At Zyrom, we help businesses grow by streamlining operations with
              smart digital solutions. Our expert team saves you time, reduces
              costs, and boosts efficiency—so you can focus on scaling with
              confidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Boost Productivity with Smart Solutions",
                  desc: "At Zyrom, we help businesses maximize efficiency by automating repetitive tasks and streamlining workflows—so your team can focus on what truly matters.",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Save Time, Focus on Growth",
                  desc: "Zyrom's smart digital solutions handle repetitive and time-consuming tasks, freeing your team to focus on strategic work and business growth.",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="bg-blue-500 rounded-tl-3xl rounded-tr-none rounded-bl-none rounded-br-3xl p-6 text-white cursor-pointer"
                  whileHover={{ backgroundColor: "#2563EB", scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-blue-100">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* stats bar */}
      <section className="w-auto m-5 py-12 md:py-20 bg-gray-50">
        <div className="w-full bg-blue-600 rounded-tl-3xl rounded-tr-none rounded-bl-none rounded-br-3xl p-8 md:p-12 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statsBar.map((stat, index) => {
            const Icon = stat.icon;
            const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10);

            return (
              <div
                key={index}
                className="text-center text-white flex flex-col items-center"
              >
                <Icon className="w-12 h-12 mb-4 text-blue-100" />
                <div className="text-3xl md:text-4xl font-bold">
                  <CountUp
                    start={0}
                    end={numericValue}
                    duration={2.5}
                    separator=","
                  />
                  {stat.value.includes("+") ? "+" : ""}
                </div>
                <div className="text-blue-100 text-sm md:text-base mt-2">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Section */}

      {/* <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="inline-block border-l-4 border-blue-600 pl-4 mb-4">
                <p className="text-sm font-semibold text-blue-600">
                  Our Services
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                We Provide Best Virtual Assistant Service
              </h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition">
                View All Services
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-200 transition"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
            <div className="md:col-span-1 md:row-span-2 bg-blue-600 text-white p-8 rounded-3xl flex flex-col justify-center shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Software Solutions</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                We develop custom desktop apps, ERP/CRM systems, and cloud-based
                SaaS platforms to automate and optimize your business
                operations.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-100 hover:text-white font-semibold group"
              >
                Read More
                <span className="ml-2 group-hover:translate-x-1 transition">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADER */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="inline-block border-l-4 border-blue-600 pl-4 mb-4">
                <p className="text-sm font-semibold text-blue-600">
                  Our Services
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                We Provide Best Virtual Assistant Service
              </h2>

              <button
                className="
            bg-blue-600 hover:bg-blue-700 text-white font-semibold
            py-3 px-8 transition
            rounded-tl-2xl rounded-br-2xl
            rounded-tr-none rounded-bl-none
          "
              >
                View All Services
              </button>
            </div>
          </div>

          {/* SERVICES */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="
              group p-8 border border-gray-200 bg-white
              transition-all duration-300
              hover:bg-blue-600 hover:border-blue-600
              rounded-tl-3xl rounded-br-3xl
              rounded-tr-none rounded-bl-none
            "
                >
                  {/* ICON */}
                  <div
                    className="
                w-12 h-12 mb-6 flex items-center justify-center transition
                bg-blue-100 group-hover:bg-white
                rounded-tl-xl rounded-br-xl
                rounded-tr-none rounded-bl-none
              "
                  >
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-blue-600" />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                text-xl font-bold mb-4 transition
                text-gray-900 group-hover:text-white
              "
                  >
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                text-gray-600 leading-relaxed transition
                group-hover:text-blue-100
              "
                  >
                    {service.description}
                  </p>

                  {/* READ MORE — HIDDEN BY DEFAULT */}
                  <div
                    className="
                mt-6 opacity-0 translate-y-2
                transition-all duration-300
                group-hover:opacity-100 group-hover:translate-y-0
              "
                  >
                    <a
                      href="#"
                      className="text-white font-semibold inline-flex items-center"
                    >
                      Read More
                      <span className="ml-2 transition group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}

            {/* SOFTWARE SOLUTIONS CARD (STATIC FEATURE CARD) */}
            <div
              className="
    group md:col-span-1 md:row-span-2
    p-8 border border-gray-200 bg-white
    transition-all duration-300
    hover:bg-blue-600 hover:border-blue-600
    rounded-tl-4xl rounded-br-4xl
    rounded-tr-none rounded-bl-none
    flex flex-col justify-center
  "
            >
              <h3
                className="
      text-2xl font-bold mb-4 transition
      text-gray-900 group-hover:text-white
    "
              >
                Software Solutions
              </h3>

              <p
                className="
      text-gray-600 leading-relaxed mb-6 transition
      group-hover:text-blue-100
    "
              >
                We develop custom desktop apps, ERP/CRM systems, and cloud-based
                SaaS platforms to automate and optimize your business
                operations.
              </p>

              {/* READ MORE — HIDDEN BY DEFAULT */}
              <div
                className="
      opacity-0 translate-y-2
      transition-all duration-300
      group-hover:opacity-100 group-hover:translate-y-0
    "
              >
                <a
                  href="#"
                  className="inline-flex items-center font-semibold text-white"
                >
                  Read More
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative w-full py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/cta-business-background.jpg)",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute bottom-0 left-0 right-0 h-20 bg-white"
          style={{
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            transform: "scaleY(1.5)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center min-h-96">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl text-balance">
            Smarter Growth Starts Here
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Get started with expert digital solutions designed for your success
            – seamless service, faster results, and smarter growth.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-colors">
            Start Consultation
          </Button>
        </div>
      </section>
      {/* ===================================================================== */}
      {/* ================= NEW SECTION (Added After CTA) ===================== */}
      {/* ===================================================================== */}
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
              Zyrom transformed our business completely. Their team is
              proactive, skilled, and always ready to assist. Now we focus on
              scaling while they manage everything smoothly.
            </p>
            <p className="mt-3 font-semibold">Client – Zyrom Solutions</p>
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:pl-8 pt-16 lg:pt-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-blue-600"></div>
            <p className="text-blue-600 font-semibold text-sm md:text-base">
              Why Choose Zyrom?
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Your Growth, Our Expertise
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            At Zyrom, we combine creativity, technology, and strategic insight
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

            {/* Zyrom Advantage */}
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 rounded-full border-[6px] border-orange-500"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-700">
                  100%
                </div>
              </div>
              <p className="font-semibold mt-3">Zyrom Advantage</p>
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
      {/* ================= HOW ZYROM WORKS SECTION ================= */}
      <section className="px-6 md:px-16 lg:px-28 py-20 text-center">
        {/* Small heading */}
        <p className="text-blue-700 font-semibold mb-2">— How Zyrom Works</p>

        {/* Main title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Simplifying Your Path to Success
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Zyrom streamlines your business processes with smart digital
          solutions, so you can focus on growth and achieve success
          effortlessly:
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {/* STEP 1 */}
          <div>
            <h1 className="text-6xl font-bold text-gray-200">01</h1>
            <div className="w-20 h-[1px] bg-gray-300 mx-auto my-3"></div>

            <h3 className="text-xl font-semibold">Share Your Needs</h3>
            <p className="text-gray-600 mt-2">
              Tell us about your project requirements and business goals. We
              listen carefully to understand exactly what you need to succeed.
            </p>
          </div>

          {/* STEP 2 */}
          <div>
            <h1 className="text-6xl font-bold text-gray-200">02</h1>
            <div className="w-20 h-[1px] bg-gray-300 mx-auto my-3"></div>

            <h3 className="text-xl font-semibold">Meet Your Dedicated Team</h3>
            <p className="text-gray-600 mt-2">
              We’ll match you with pre-vetted experts perfectly suited for your
              project. Review and approve your team before we begin.
            </p>
          </div>

          {/* STEP 3 */}
          <div>
            <h1 className="text-6xl font-bold text-gray-200">03</h1>
            <div className="w-20 h-[1px] bg-gray-300 mx-auto my-3"></div>

            <h3 className="text-xl font-semibold">Launch & Monitor Progress</h3>
            <p className="text-gray-600 mt-2">
              Your project kicks off immediately with regular updates and
              transparent progress tracking for complete peace of mind.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
