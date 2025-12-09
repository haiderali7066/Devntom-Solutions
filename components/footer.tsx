import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0047AB] text-white pt-20">
      
      {/* TOP CONTACT BOXES */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-28">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {/* Phone */}
          <div
            className="
      bg-[#012B57]
      px-8 py-7
      flex items-center gap-5
      rounded-tl-3xl rounded-br-3xl
      rounded-tr-none rounded-bl-none
    "
          >
            <div className="text-3xl">📞</div>
            <div>
              <p className="text-lg font-semibold leading-tight">
                +92 334 4655700
              </p>
              <p className="text-sm text-white/70 mt-1">Give Us A Call</p>
            </div>
          </div>

          {/* Email */}
          <div
            className="
      bg-[#FF5A24]
      px-8 py-7
      flex items-center gap-5
      rounded-tl-3xl rounded-br-3xl
      rounded-tr-none rounded-bl-none
    "
          >
            <div className="text-3xl">✉️</div>
            <div>
              <p className="text-lg font-semibold leading-tight">
                Admin@zyrom.com
              </p>
              <p className="text-sm text-white/80 mt-1">Drop Us A Line</p>
            </div>
          </div>

          {/* Location */}
          <div
            className="
      bg-[#012B57]
      px-8 py-7
      flex items-center gap-5
      rounded-tl-3xl rounded-br-3xl
      rounded-tr-none rounded-bl-none
    "
          >
            <div className="text-3xl">📍</div>
            <div>
              <p className="text-lg font-semibold leading-tight">
                M80 Ashyana Shopping Center
                <br />
                Gulberg 3 Lahore
              </p>
              <p className="text-sm text-white/70 mt-1">Office Location</p>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-28 pb-16">
        <div className="grid md:grid-cols-4 gap-14">
          {/* Logo Column */}
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Zyrom" className="w-9 h-9" />
              <span className="text-xl font-bold tracking-wide">ZyRoM™</span>
            </div>

            <p className="text-white/80 mt-5 text-sm leading-relaxed max-w-xs">
              Helping businesses grow online with tailored digital solutions.
            </p>

            <div className="flex gap-4 mt-6">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black text-sm">
                f
              </div>
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black text-sm">
                ◎
              </div>
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black text-sm">
                ▶
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>About Us</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-5">Services</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>Website Development</li>
              <li>Software Solutions</li>
              <li>WhatsApp Solutions</li>
              <li>SEO (Search Engine Optimization)</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Map */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0512820682327!2d74.3436!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f1e3f3d8be7%3A0xb65d5e0d22d1bd0!2sLiberty%20Market!5e0!3m2!1sen!2s!4v1700000000000"
              className="rounded-xl w-full h-[190px] border-none"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20 py-4 text-center text-xs text-white/70">
        Copyright © 2025 Zyrom. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
