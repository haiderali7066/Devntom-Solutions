"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What services does Devntom Solutions offer?",
    answer:
      "We specialize in custom web development, e-commerce solutions, mobile apps, SEO, and digital marketing tailored to your business needs.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "Typically, a standard website takes 4-8 weeks, while complex platforms or e-commerce stores may take 8-16 weeks depending on features.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer continuous support and maintenance packages to ensure your website runs smoothly and stays up-to-date.",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer:
      "Absolutely! We provide SEO optimization, content strategy, and digital marketing solutions to boost your online presence.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Find answers to common questions about our services and processes.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <h3 className="flex justify-between items-center text-lg font-semibold">
                {faq.question}
                <span className="text-blue-600">
                  {openIndex === i ? "-" : "+"}
                </span>
              </h3>
              {openIndex === i && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
