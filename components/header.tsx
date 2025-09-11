"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="glass-effect sticky top-0 z-50 premium-shadow">
      <div className="gradient-primary py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-primary-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-primary-foreground">07554244139</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground">
              <Mail className="h-4 w-4" />
              <span className="text-primary-foreground">info@sensecure.in</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-primary-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-primary-foreground">Arera Colony, Madhya Pradesh</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-primary-foreground">{"ISO 9001:2015 Certified | Government Approved Supplier"}</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/images/sensecure-logo.png"
              alt="Sensecure Integrated Solutions"
              width={180}
              height={60}
              className="h-12 w-auto opacity-100"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors font-medium">
              Home
            </a>
            <a href="#products" className="text-foreground hover:text-accent transition-colors font-medium">
              Products
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">
              About
            </a>
            <a href="#projects" className="text-foreground hover:text-accent transition-colors font-medium">
              Projects
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              Get Quote
            </Button>
            <Button className="gradient-accent hover:opacity-90">
              <span className="text-accent-foreground">Contact Us</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-accent transition-colors font-medium">
                Home
              </a>
              <a href="#products" className="text-foreground hover:text-accent transition-colors font-medium">
                Products
              </a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">
                About
              </a>
              <a href="#projects" className="text-foreground hover:text-accent transition-colors font-medium">
                Projects
              </a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  Get Quote
                </Button>
                <Button className="w-full gradient-accent">
                  <span className="text-accent-foreground">Contact Us</span>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
