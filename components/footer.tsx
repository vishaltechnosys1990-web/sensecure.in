import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-30"></div>
      <div className="relative">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary tracking-tight">Sensecure</h3>
                <p className="text-xs text-muted-foreground mt-1">Integrated Solutions Pvt. Ltd.</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Leading manufacturer of traffic infrastructure solutions in India. Trusted by government organizations
                for over 15 years.
              </p>
              <div className="flex gap-4 pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="p-2 border-border hover:border-accent hover:text-accent bg-transparent"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="p-2 border-border hover:border-accent hover:text-accent bg-transparent"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="p-2 border-border hover:border-accent hover:text-accent bg-transparent"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="p-2 border-border hover:border-accent hover:text-accent bg-transparent"
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Products</h3>
              <div className="space-y-3 text-sm">
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 block">
                  Traffic Signal Systems
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 block">
                  LED Traffic Lights
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 block">
                  Boom Barriers
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 block">
                  Commercial Displays
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 block">
                  Variable Message Signs
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 block">
                  Smart Controllers
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Services</h3>
              <div className="space-y-3 text-sm">
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 block">
                  Project Consultation
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 block">
                  Installation Services
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 block">
                  Maintenance & Support
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 block">
                  Technical Training
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 block">
                  Warranty Services
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 block">
                  24/7 Support
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact Info</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <Phone className="h-4 w-4 text-accent mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                  <div>
                    <div className="text-foreground font-medium">+91 8178119860</div>
                    <div className="text-muted-foreground text-xs">Sales & Inquiries</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 group cursor-pointer">
                  <Mail className="h-4 w-4 text-accent mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                  <div>
                    <div className="text-foreground font-medium">info@sensecure.in</div>
                    <div className="text-muted-foreground text-xs">General Inquiries</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 group cursor-pointer">
                  <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                  <div>
                    <div className="text-foreground font-medium">Bhopal, New Delhi</div>
                    <div className="text-muted-foreground text-xs">India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/30 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
              <div>© 2025 Sensecure Integrated Solutions Pvt. Ltd. All rights reserved.</div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
