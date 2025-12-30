"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What web development services does Devntom Solutions provide?",
    answer:
      "Devntom Solutions offers end-to-end web development services including custom website development, business websites, e-commerce platforms, web applications, landing pages, CMS-based websites, API integrations, and performance optimization. Our solutions are scalable, secure, and built to support long-term business growth.",
  },
  {
    question: "How long does it take to build a professional website?",
    answer:
      "The timeline depends on the project scope. A standard business website typically takes 4–6 weeks, while advanced web applications or e-commerce platforms can take 8–16 weeks. We follow a structured development process to ensure timely delivery without compromising quality.",
  },
  {
    question: "Do you build SEO-friendly websites?",
    answer:
      "Yes. Every website we develop follows SEO best practices including clean code, fast loading speed, mobile responsiveness, optimized site structure, schema-ready markup, and search-engine-friendly URLs to help your website rank better on Google.",
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer:
      "Absolutely. All our websites are fully responsive and optimized for mobile, tablet, and desktop devices. We prioritize mobile-first design to ensure excellent user experience and better search engine rankings.",
  },
  {
    question: "Can you redesign or improve an existing website?",
    answer:
      "Yes. We offer website redesign and optimization services to improve UI/UX, speed, security, SEO performance, and conversion rates while preserving your existing content and brand identity.",
  },
  {
    question: "Do you provide custom web application development?",
    answer:
      "Yes. We develop custom web applications tailored to your business needs, including dashboards, admin panels, booking systems, SaaS platforms, and API-driven solutions using modern technologies.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "We work with modern and reliable technologies such as React, Next.js, Node.js, MongoDB, MySQL, WordPress, Shopify, and custom stacks depending on project requirements to ensure performance, scalability, and security.",
  },
  {
    question: "Do you offer website maintenance and support after launch?",
    answer:
      "Yes. We provide ongoing website maintenance, updates, security monitoring, bug fixes, performance improvements, and feature enhancements to keep your website running smoothly after launch.",
  },
  {
    question: "How much does a web development project cost?",
    answer:
      "Project cost depends on features, complexity, design requirements, and timeline. We offer flexible pricing and custom quotes to match your business goals and budget while ensuring high-quality delivery.",
  },
  {
    question: "How do I get started with Devntom Solutions?",
    answer:
      "You can get started by contacting us through our website or WhatsApp. We’ll discuss your goals, requirements, and provide a clear roadmap along with timelines and pricing.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-light text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Find answers to common questions about our services and processes.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`cursor-pointer p-4 rounded-xl shadow-lg transition-all duration-300
                  ${
                    isOpen
                      ? "bg-blue-50 border-2 border-blue-600"
                      : "bg-white hover:bg-gray-100"
                  }
                `}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <h3 className="flex justify-between items-center text-lg font-semibold">
                  {faq.question}
                  <span
                    className={`text-blue-600 text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </h3>

                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-600"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
