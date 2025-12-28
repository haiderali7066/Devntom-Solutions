"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What services does Devntom Solutions provide?",
    answer:
      "Devntom Solutions offers end-to-end digital services including custom website development, digital marketing, software solutions, mobile and web applications, and UX/UI design. Our services are tailored to help businesses grow, improve online visibility, and achieve their digital goals.",
  },
  {
    question: "Do you build custom websites and web applications?",
    answer:
      "Yes. We specialize in building custom websites, landing pages, CMS-based sites, e-commerce platforms, and web applications that are fast, secure, scalable, and designed to deliver excellent user experience.",
  },
  {
    question: "Can you handle digital marketing for my business?",
    answer:
      "Absolutely. Our digital marketing services include SEO, social media marketing, Google Ads/PPC campaigns, content marketing, and conversion rate optimization. We create strategies to increase your online visibility and drive qualified traffic to your website.",
  },
  {
    question: "Do you develop mobile and web applications?",
    answer:
      "Yes. We create custom iOS, Android, and cross-platform applications tailored to your business requirements. Our apps are user-friendly, feature-rich, and integrate seamlessly with your systems and workflows.",
  },
  {
    question: "What kind of software solutions do you provide?",
    answer:
      "Devntom develops custom software solutions, including ERP systems, SaaS platforms, business automation tools, and enterprise applications. Our software is built to streamline operations, improve productivity, and support business growth.",
  },
  {
    question: "Do you provide UX/UI design services?",
    answer:
      "Yes. We design modern and intuitive user interfaces for websites and applications, focusing on usability, accessibility, and visual appeal. Our UX/UI design ensures users have a seamless experience while interacting with your brand.",
  },
  {
    question: "Are your websites SEO-friendly and responsive?",
    answer:
      "Absolutely. All websites we develop follow SEO best practices, are mobile-responsive, fast-loading, and optimized for search engines, ensuring better rankings and improved user engagement.",
  },
  {
    question: "Do you offer maintenance and support after launch?",
    answer:
      "Yes. We provide ongoing maintenance, security updates, bug fixes, performance optimization, and feature enhancements to ensure your website, app, or software continues to run smoothly after launch.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on the complexity and scope. Standard websites typically take 4–6 weeks, digital marketing campaigns start delivering results within weeks, apps and custom software usually take 8–16 weeks. We provide a clear roadmap for every project.",
  },
  {
    question: "How can I get started with Devntom Solutions?",
    answer:
      "Getting started is easy. Contact us via our website, WhatsApp, or email. We’ll discuss your goals, project requirements, and provide a clear plan with timelines and pricing to help you achieve your digital objectives.",
  },
];



export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">
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
                <h3 className="flex justify-between items-center text-lg font-light">
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
