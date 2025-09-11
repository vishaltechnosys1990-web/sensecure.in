import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">Sensecure Integrated Solutions Pvt. Ltd.</div>
            <p className="text-sm text-background/80 leading-relaxed">
              Leading manufacturer of traffic infrastructure solutions in India. Trusted by government organizations for
              over 15 years.
            </p>
            <div className="flex gap-4">
              <Button size="sm" variant="outline" className="p-2 bg-transparent">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2 bg-transparent">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2 bg-transparent">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2 bg-transparent">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <div className="space-y-2 text-sm">
              <div>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Traffic Signal Systems
                </a>
              </div>
              <div>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  LED Traffic Lights
                </a>
              </div>
              <div>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Boom Barriers
                </a>
              </div>
              <div>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Commercial Displays
                </a>
              </div>
              <div>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Variable Message Signs
                </a>
              </div>
              <div>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Smart Controllers
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2 text-sm">
              <div>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Project Consultation
                </a>
              </div>
              <div>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Installation Services
                </a>
              </div>
              <div>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Maintenance & Support
                </a>
              </div>
              <div>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Technical Training
                </a>
              </div>
              <div>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Warranty Services
                </a>
              </div>
              <div>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  24/7 Support
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <div className="text-background/80">+91 8178119860</div>
                  <div className="text-background/60 text-xs">Sales & Inquiries</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <div className="text-background/80">info@sensecure.in</div>
                  <div className="text-background/60 text-xs">General Inquiries</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <div className="text-background/80">Bhopal, New Delhi</div>
                  <div className="text-background/60 text-xs">India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <div>© 2025 Sensecure Integrated Solutions Pvt. Ltd. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
