"use client";

import { motion } from "framer-motion";

export default function WebDevOverview() {
  const features = [
    {
      title: "Custom Web Development",
      description:
        "Tailored websites built with modern technologies, fully responsive, and optimized for performance.",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Launch online stores that drive sales with secure payment integrations and user-friendly UX.",
    },
    {
      title: "CMS & SEO Friendly",
      description:
        "Manage content easily and boost your search engine rankings with SEO-optimized websites.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Why Choose Devntom for Web Development
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          We combine creativity, technology, and expertise to deliver websites
          that engage users, convert visitors into customers, and scale with
          your business.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <a
            href="https://wa.me/92325XXXXXXX?text=Hi%20Devntom%2C%20I%20want%20to%20build%20my%20website"
            target="_blank"
            className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition"
          >
            Build Your Website Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
