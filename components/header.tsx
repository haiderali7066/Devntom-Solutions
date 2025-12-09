"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-6">
            <a href="mailto:hello@devntom.com" className="flex items-center gap-2 hover:text-blue-600">
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

      {/* Main navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center font-bold">DT</div>
            <span>DevNTom</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
                Our Products
                <span>▼</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Product 1</DropdownMenuItem>
                <DropdownMenuItem>Product 2</DropdownMenuItem>
                <DropdownMenuItem>Product 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
                Services
                <span>▼</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Web Development</DropdownMenuItem>
                <DropdownMenuItem>AI Solutions</DropdownMenuItem>
                <DropdownMenuItem>Consulting</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">Free Consultation</Button>
          </div>

          {/* Mobile menu */}
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger className="md:hidden">
              <Menu className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>About Us</DropdownMenuItem>
              <DropdownMenuItem>Our Products</DropdownMenuItem>
              <DropdownMenuItem>Services</DropdownMenuItem>
              <DropdownMenuItem>Blog</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}
