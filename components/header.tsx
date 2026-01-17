"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleContactClick = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/917554244139?text=Hello%20Sensecure%2C%20I%20would%20like%20to%20inquire%20about%20your%20services",
      "_blank",
    )
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="gradient-primary py-2.5 text-primary-foreground">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs sm:text-sm gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">07554244139</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">info@sensecure.in</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-xs">
            <MapPin className="h-3.5 w-3.5" />
            <span>Arera Colony, Madhya Pradesh</span>
          </div>
          <div className="hidden lg:inline text-xs opacity-90">ISO 9001:2015 Certified</div>
        </div>
      </div>

      <div className="glass-effect premium-shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/images/sensecure-logo.png"
                alt="Sensecure Integrated Solutions"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium text-sm"
              >
                Home
              </a>
              <a
                href="#products"
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium text-sm"
              >
                Products
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium text-sm"
              >
                About
              </a>
              <a
                href="/projects"
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium text-sm"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium text-sm"
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="outline"
                className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent bg-transparent text-sm"
                onClick={handleContactClick}
              >
                Get Quote
              </Button>
              <Button
                className="gradient-accent hover:opacity-95 text-sm text-accent-foreground"
                onClick={handleWhatsAppClick}
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-3">
              <a href="#home" className="block text-foreground hover:text-accent transition-colors font-medium">
                Home
              </a>
              <a href="#products" className="block text-foreground hover:text-accent transition-colors font-medium">
                Products
              </a>
              <a href="#about" className="block text-foreground hover:text-accent transition-colors font-medium">
                About
              </a>
              <a href="/projects" className="block text-foreground hover:text-accent transition-colors font-medium">
                Projects
              </a>
              <a href="#contact" className="block text-foreground hover:text-accent transition-colors font-medium">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button
                  variant="outline"
                  className="w-full border-accent/50 text-accent hover:bg-accent/10 bg-transparent"
                  onClick={handleContactClick}
                >
                  Get Quote
                </Button>
                <Button className="w-full gradient-accent text-accent-foreground" onClick={handleWhatsAppClick}>
                  Contact Us
                </Button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
