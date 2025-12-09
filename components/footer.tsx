import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0047AB] text-white pt-16 pb-6 px-6 md:px-16 lg:px-28">
      {/* Top Contact Boxes */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {/* Phone Box */}
        <div className="bg-[#012B57] rounded-2xl p-6 flex items-start gap-4">
          <div className="text-white text-3xl">📞</div>
          <div>
            <h3 className="text-lg font-semibold">+92 334 4655700</h3>
            <p className="text-gray-300 text-sm">Give Us A Call</p>
          </div>
        </div>

        {/* Email Box */}
        <div className="bg-[#FF5722] rounded-2xl p-6 flex items-start gap-4">
          <div className="text-white text-3xl">✉️</div>
          <div>
            <h3 className="text-lg font-semibold">Admin@zyrom.com</h3>
            <p className="text-white/80 text-sm">Drop Us A Line</p>
          </div>
        </div>

        {/* Location Box */}
        <div className="bg-[#012B57] rounded-2xl p-6 flex items-start gap-4">
          <div className="text-white text-3xl">📍</div>
          <div>
            <h3 className="text-lg font-semibold">
              M80 Ashyana Shopping Center
              <br />
              Gulberg 3 Lahore
            </h3>
            <p className="text-gray-300 text-sm">Office Location</p>
          </div>
        </div>
      </div>

      {/* Footer Middle Content */}
      <div className="grid md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <img src="/logo.svg" className="w-8 h-8" alt="ZyRoM Logo" />
            ZyRoM™
          </h2>

          <p className="text-gray-200 mt-4 max-w-xs">
            Helping businesses grow online with tailored digital solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a className="bg-white rounded-full text-black p-2 text-xl">📘</a>
            <a className="bg-white rounded-full text-black p-2 text-xl">📸</a>
            <a className="bg-white rounded-full text-black p-2 text-xl">▶️</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>About Us</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Services</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Website Development</li>
            <li>Software Solutions</li>
            <li>WhatsApp Solutions</li>
            <li>SEO (Search Engine Optimization)</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0512820682327!2d74.3436!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f1e3f3d8be7%3A0xb65d5e0d22d1bd0!2sLiberty%20Market!5e0!3m2!1sen!2s!4v1700000000000"
            width="100%"
            height="180"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl border-none"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/20 mt-12 pt-4 text-center text-gray-200 text-sm">
        Copyright © 2025 Zyrom. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
