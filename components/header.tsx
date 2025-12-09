"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { label: "Website Development", href: "/services/website-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "SEO Optimization", href: "/services/seo-optimization" },
    { label: "App Development", href: "/services/app-development" },
    {
      label: "Software Solutions: POS, EMS, HMS, CRM etc.",
      href: "/services/software-solutions",
    },
    { label: "Graphics Designing", href: "/services/graphics-designing" },
  ];

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@devntom.com"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <span>✉️</span>
              <span>hello@devntom.com</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-600">
              <span>📍</span>
              <span>Tech Hub, Innovation Center</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              f
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              p
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              in
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-blue-600"
          >
            <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center font-bold">
              DT
            </div>
            <span>DevNTom</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About Us
            </Link>

            {/* Products dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 transition">
                Our Products <span>▼</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-2">
                <DropdownMenuItem className="text-base md:text-lg px-4 py-2 hover:bg-blue-600 hover:text-white rounded-lg transition">
                  <Link href="/products/product-1">Product 1</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base md:text-lg px-4 py-2 hover:bg-blue-600 hover:text-white rounded-lg transition">
                  <Link href="/products/product-2">Product 2</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base md:text-lg px-4 py-2 hover:bg-blue-600 hover:text-white rounded-lg transition">
                  <Link href="/products/product-3">Product 3</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 transition">
                Services <span>▼</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-2">
                {" "}
                {/* Wider dropdown */}
                {services.map((item, idx) => (
                  <DropdownMenuItem
                    key={idx}
                    className="text-base md:text-lg px-4 py-2 hover:bg-blue-600 hover:text-white rounded-lg transition"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu */}
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger className="md:hidden">
              <Menu className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about">About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/products/product-1">Our Products</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/website-development">Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/blog">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
