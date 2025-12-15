import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0047AB] text-white pt-20">
      {/* TOP CONTACT BOXES */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-15 ">
        <div className="grid md:grid-cols-3 gap-8 mb-24 ">
          {/* Phone */}
          <a
            href="tel:+923256036838"
            className="
    bg-[#012B57]
    p-9
    flex items-center gap-6
    min-h-[100px] 
    rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none
    hover:-translate-y-2 hover:shadow-2xl transition-all duration-300

    lg:h-[15vh]   <!-- THIS MAKES HEIGHT 35% OF SCREEN ON LARGE -->
  "
          >
            <div className="text-4xl shrink-0">📞</div>
            <div className="min-w-0">
              <p className="text-xl font-semibold leading-tight whitespace-nowrap">
                +92 325 6036838
              </p>
              <p className="text-base text-white/70 mt-1">Give Us A Call</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:devntomsolutions@gmail.com"
            className="bg-[#FF5A24]
      p-9
      flex items-center gap-6
      min-h-[100px] lg:h-[15vh]
      rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none
      hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-4xl shrink-0">✉️</div>
            <div className="min-w-0">
              <p
                className="
          text-lg md:text-xl font-semibold leading-snug
          break-all
        "
              >
                Admin@devntomsolutions.com
              </p>
              <p className="text-base text-white/80 mt-1">Drop Us A Line</p>
            </div>
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps?q=Gulberg%203%20Lahore"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#012B57]
      p-9
      flex items-center gap-6
      min-h-[100px] lg:h-[15vh]
      rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none
      hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-4xl shrink-0">📍</div>
            <div className="min-w-0">
              <p className="text-lg font-semibold leading-snug">
                M80 Ashyana Shopping Center
                <br />
                Gulberg 3, Lahore
              </p>
              <p className="text-base text-white/70 mt-1">Office Location</p>
            </div>
          </a>
        </div>
      </div>

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
        © 2025 Devntom. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
