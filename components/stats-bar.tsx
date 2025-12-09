"use client"

import { Users, CheckCircle2, Award, Users2 } from "lucide-react"

export default function StatsBar() {
  const stats = [
    { icon: Users, value: "1452+", label: "Happy Clients" },
    { icon: CheckCircle2, value: "3452+", label: "Projects Completed" },
    { icon: Award, value: "15+", label: "Years Of Experience" },
    { icon: Users2, value: "72+", label: "Team Members" },
  ]

  return (
    <section className="w-full py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center text-white flex flex-col items-center">
                  <Icon className="w-12 h-12 mb-4 text-blue-100" />
                  <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                  <div className="text-blue-100 text-sm md:text-base mt-2">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
