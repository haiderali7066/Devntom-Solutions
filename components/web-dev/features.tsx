
import {
  Zap,
  Search,
  Smartphone,
  Layers,
  ShieldCheck,
  Palette,
  Plug,
  Settings,
} from "lucide-react";

const features = [
  {
    title: "High Performance",
    desc: "Optimized code and fast-loading pages for better user experience and rankings.",
    icon: Zap,
  },
  {
    title: "SEO-First Development",
    desc: "Search-engine-friendly structure built to rank and convert.",
    icon: Search,
  },
  {
    title: "Fully Responsive",
    desc: "Perfect display across mobile, tablet, and desktop devices.",
    icon: Smartphone,
  },
  {
    title: "Scalable Architecture",
    desc: "Flexible systems that grow with your business needs.",
    icon: Layers,
  },
  
];

export default function CustomWebFeatures() {
  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6 bg-blue-600 py-15">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Custom Web Development Features
          </h2>
          <p className="mt-4 text-gray-300">
            Everything we build is focused on performance, scalability, and real
            business results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="border rounded-2xl border-gray-200 p-6 hover:border-gray-900 transition"
              >
                <Icon className="w-10 h-10 text-gray-900 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-300 mb-4">
            Need a custom website built for growth?
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-3 rounded-2xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
