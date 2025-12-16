"use client";

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


export default function StatsBar() {
  const statsBar = [
    { icon: Users, value: "1452+", label: "Happy Clients" },
    { icon: CheckCircle2, value: "3452+", label: "Projects Completed" },
    { icon: Award, value: "15+", label: "Years Of Experience" },
    { icon: Users2, value: "72+", label: "Team Members" },
  ];
  return (
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
  );
}
