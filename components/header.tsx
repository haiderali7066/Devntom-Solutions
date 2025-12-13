"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const productsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const products = [
    { label: "Product 1", href: "/products/product-1" },
    { label: "Product 2", href: "/products/product-2" },
    { label: "Product 3", href: "/products/product-3" },
  ];

  const services = [
    { label: "Website Development", href: "/services/website-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "SEO Optimization", href: "/services/seo-optimization" },
    { label: "App Development", href: "/services/app-development" },
    {
      label: "Software Solutions (POS, EMS, HMS, CRM)",
      href: "/services/software-solutions",
    },
    { label: "Graphics Designing", href: "/services/graphics-designing" },
  ];

  /* Close dropdowns on outside click */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        productsRef.current &&
        !productsRef.current.contains(e.target as Node)
      ) {
        setProductsOpen(false);
      }
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* FIXED NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-blue-600"
          >
            {/* <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center">
              DS
            </div> */}
            <span>Devntom Solutions</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>

            {/* PRODUCTS DROPDOWN */}
            <div ref={productsRef} className="relative">
              <button
                onClick={() => {
                  setProductsOpen(!productsOpen);
                  setServicesOpen(false);
                }}
                className="nav-link flex items-center gap-1"
              >
                Products <ChevronDown size={16} />
              </button>

              {productsOpen && (
                <div className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl overflow-hidden">
                  {products.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="block px-5 py-3 hover:bg-blue-600 hover:text-white transition"
                      onClick={() => setProductsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* SERVICES DROPDOWN */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setProductsOpen(false);
                }}
                className="nav-link flex items-center gap-1"
              >
                Services <ChevronDown size={16} />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-3 w-80 bg-white shadow-xl rounded-xl overflow-hidden">
                  {services.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="block px-5 py-3 hover:bg-blue-600 hover:text-white transition"
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Free Consultation
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setMobileOpen(true)} className="md:hidden">
            <Menu className="w-7 h-7" />
          </button>
        </nav>
      </header>

      {/* FULLSCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 bg-slate-950 text-white transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 text-lg">
          {["/", "/about", "/blog", "/contact"].map((path, i) => (
            <Link
              key={i}
              href={path}
              onClick={() => setMobileOpen(false)}
              className="border-b border-white/10 pb-3"
            >
              {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
            </Link>
          ))}

          <div>
            <p className="text-sm uppercase tracking-wide text-white/60 mb-2">
              Products
            </p>
            {products.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <p className="text-sm uppercase tracking-wide text-white/60 mb-2">
              Services
            </p>
            {services.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
            Free Consultation
          </Button>
        </div>
      </div>

      {/* HEADER OFFSET */}
      <div className="h-[80px]" />
    </>
  );
}
