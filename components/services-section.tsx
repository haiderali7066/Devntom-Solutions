"use client"

import { Users, FileText, Award, MessageCircle, Search, Zap } from "lucide-react"

export default function ServicesSection() {
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
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-block border-l-4 border-blue-600 pl-4 mb-4">
              <p className="text-sm font-semibold text-blue-600">Our Services</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              We Provide Best Virtual Assistant Service
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition">
              View All Services
            </button>
          </div>
          <div></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Website Development */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-200 transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Website Development</h3>
            <p className="text-gray-600 leading-relaxed">
              We build custom, responsive websites – from WordPress to e-commerce stores – with ongoing maintenance for
              peak performance.
            </p>
          </div>

          {/* Software Solutions - Featured Blue Card */}
          <div className="md:col-span-1 md:row-span-2 bg-blue-600 text-white p-8 rounded-3xl flex flex-col justify-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Software Solutions</h3>
            <p className="text-blue-100 leading-relaxed mb-6">
              We develop custom desktop apps, ERP/CRM systems, and cloud-based SaaS platforms to automate and optimize
              your business operations.
            </p>
            <a href="#" className="inline-flex items-center text-blue-100 hover:text-white font-semibold group">
              Read More
              <span className="ml-2 group-hover:translate-x-1 transition">→</span>
            </a>
          </div>

          {/* SEO */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-200 transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">SEO (Search Engine Optimization)</h3>
            <p className="text-gray-600 leading-relaxed">
              We boost your rankings with complete SEO solutions – from on-page optimization to local SEO and e-commerce
              product listings for maximum organic growth.
            </p>
          </div>

          {/* WhatsApp Solutions */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-200 transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Boost engagement with WhatsApp API integration, bulk messaging & AI chatbots for 24/7 customer support and
              lead management.
            </p>
          </div>

          {/* Digital Marketing */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-200 transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Marketing</h3>
            <p className="text-gray-600 leading-relaxed">
              We amplify your brand through strategic social media management, targeted ads, and engaging content
              marketing to boost conversions and visibility.
            </p>
          </div>

          {/* Brand Enhancement */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-200 transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Brand Enhancement</h3>
            <p className="text-gray-600 leading-relaxed">
              Enhance your brand with our graphic design, professional video editing, and reliable domain/hosting
              services for a powerful online presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
