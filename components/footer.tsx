import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-600 text-white pt-20">
      {/* TOP CONTACT BOXES */}

      {/* MIDDLE CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-15 pb-16">
        <div className="grid md:grid-cols-4 gap-14">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2">
              <img src="/footerlogo.svg" alt="Devntom" className="w-10 h-10" />
              <span className="text-2xl font-bold tracking-wide">Devntom™</span>
            </div>

            <p className="text-white/85 mt-6 text-base leading-relaxed max-w-xs">
              Helping businesses grow online with tailored digital solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4 text-white/85 text-base">
              <li>
                <a href="/services/website-development">Website Development</a>
              </li>
              <li>
                <a href="/services/software-solutions">Software Solutions</a>
              </li>
              <li>
                <a href="/services/whatsapp">WhatsApp Solutions</a>
              </li>
              <li>
                <a href="/services/seo">SEO Optimization</a>
              </li>
              <li>
                <a href="/services/marketing">Digital Marketing</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-white/85 text-base">
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps?q=Gulberg%203%20Lahore&output=embed"
              className="w-full h-[240px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20 py-5 text-center text-sm text-white/70">
        © 2025 Devntom Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
