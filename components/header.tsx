"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { label: "Website Development", href: "/services/website-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "SEO Optimization", href: "/services/seo-optimization" },
    { label: "App Development", href: "/services/app-development" },
    {
      label: "Software Solutions (POS, EMS, HMS, CRM)",
      href: "/services/software-solutions",
    },
    { label: "UI/UX-Graphics Design", href: "/services/graphics-designing" },
  ];

  const industries = [
    { label: "E-Commerce", href: "/industries/ecommerce" },
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Education", href: "/industries/education" },
    { label: "Startups", href: "/industries/startups" },
  ];

  const company = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  const resources = [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "FAQs", href: "/faqs" },
  ];

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const Dropdown = ({ title, items }: any) => (
    <div className="relative">
      <button
        onClick={() => setOpen(open === title ? null : title)}
        className="nav-link flex items-center gap-1"
      >
        {title} <ChevronDown size={16} />
      </button>

      {open === title && (
        <div className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl overflow-hidden">
          {items.map((item: any, i: number) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setOpen(null)}
              className="block px-5 py-3 hover:bg-sky-500 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-2xl text-sky-500">
            Devntom Solutions
          </Link>

          <div ref={dropdownRef} className="hidden md:flex items-center gap-8">
            <Dropdown title="Services" items={services} />
            <Dropdown title="Industries" items={industries} />
            <Link href="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Dropdown title="Company" items={company} />
            <Dropdown title="Resources" items={resources} />
          </div>

          <div className="hidden md:block">
            <Link
              href="https://wa.me/923256036838?text=Hi%20Devntom%20Soluotions%2C%20I%20want%20to%20build%20my%20website"
              target="_blank"
              className="inline-block rounded-full bg-sky-500 px-5 py-3 text-white font-semibold hover:bg-sky-600 transition"
            >
              Free Consultation
            </Link>
          </div>

          <button onClick={() => setMobileOpen(true)} className="md:hidden">
            <Menu className="w-7 h-7" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-slate-950 text-white transition-transform duration-500 ease-in-out flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10 flex-shrink-0">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <X />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-6 py-8 space-y-4">
          <MobileDropdown
            title="Services"
            items={services}
            close={setMobileOpen}
          />
          <MobileDropdown
            title="Industries"
            items={industries}
            close={setMobileOpen}
          />
          <MobileDropdown
            title="Company"
            items={company}
            close={setMobileOpen}
          />
          
          <MobileDropdown
            title="Resources"
            items={resources}
            close={setMobileOpen}
          />
          <Link href="/portfolio" className="text-lg ">
            Portfolio
          </Link>

          <a
            href="https://wa.me/923256036838?text=Hi%20Devntom%20Solutions%2C%20I%20want%20to%20build%20my%20website"
            target="_blank"
            className="block mt-6 w-full text-center bg-sky-600 py-3 rounded-full font-semibold hover:bg-sky-700 transition"
            onClick={() => setMobileOpen(false)}
          >
            Free Consultation
          </a>
        </div>
      </div>

      <div className="h-[80px]" />
    </>
  );
}

// Smooth MobileDropdown
function MobileDropdown({ title, items, close }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-2 font-medium text-white text-lg border-b border-white/10"
      >
        {title}
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ease-in-out ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        style={{
          maxHeight: open ? `${items.length * 48}px` : "0px",
          transition: "max-height 0.3s ease-in-out",
        }}
        className="overflow-hidden pl-4 flex flex-col"
      >
        {items.map((item: any, i: number) => (
          <Link
            key={i}
            href={item.href}
            onClick={() => close(false)}
            className="text-white/80 hover:text-white py-2"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
