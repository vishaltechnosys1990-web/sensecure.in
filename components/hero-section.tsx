import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl opacity-60 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight tracking-tight">
                <div>Advanced Traffic</div>
                <div>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">
                    Infrastructure
                  </span>
                </div>
                <div>Solutions</div>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed max-w-xl">
                Sensecure Integrated Solutions - Premier manufacturer and supplier of traffic signal systems, boom
                barriers, and commercial displays for government projects across India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="text-base px-8 gradient-accent text-accent-foreground hover:opacity-90 transition-all duration-300 group"
              >
                View Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 border-accent/50 text-accent hover:bg-accent/10 bg-transparent transition-all duration-300"
              >
                Download Brochure
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-border/30">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <div className="text-3xl font-bold text-primary">15+</div>
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <div className="text-3xl font-bold text-primary">ISO</div>
                </div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div className="text-3xl font-bold text-primary">1000+</div>
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-square card-shadow rounded-2xl overflow-hidden hover-lift">
              <img
                src="/modern-traffic-signal-control-system-with-digital-.jpg"
                alt="Sensecure Traffic Infrastructure Solutions"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 gradient-accent text-accent-foreground p-6 rounded-xl card-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
