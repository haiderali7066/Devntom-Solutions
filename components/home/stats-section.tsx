"use client"

import { PlayCircle } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="relative w-full">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Stats box - Left aligned on top */}
          <div className="md:col-span-2"></div>

          {/* Stats card */}
          <div className="md:col-start-1 md:row-start-1 md:-mt-32 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-5xl font-bold text-gray-900">1452+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Main stats content card - Right side */}
          <div className="md:col-start-2 md:row-start-1 md:col-span-2 md:-mt-20">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white space-y-6 shadow-2xl relative overflow-hidden">
              {/* Curved decoration */}
              <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-blue-500/20 rounded-full"></div>

              <div className="relative z-10 flex items-start justify-between">
                <div className="max-w-lg space-y-4">
                  <p className="text-xl leading-relaxed font-medium">
                    We deliver innovative web, SaaS, and digital solutions. See how DevNTom empowers businesses to grow,
                    perform, and succeed.
                  </p>
                </div>

                {/* Play button */}
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
    </section>
  )
}
