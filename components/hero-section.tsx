import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="gradient-secondary py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Advanced Traffic Infrastructure
                <span className="text-primary"> Solutions</span> for India
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Sensecure Integrated Solutions - Premier manufacturer and supplier of traffic signal systems, boom
                barriers, and commercial displays for government projects. Trusted by 500+ clients across India with ISO
                9001:2015 certification.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 gradient-primary text-primary-foreground hover:opacity-90">
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                Download Brochure
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">ISO</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square glass-effect rounded-2xl p-8 premium-shadow">
              <img
                src="/modern-traffic-signal-control-system-with-digital-.jpg"
                alt="Sensecure Traffic Infrastructure Solutions"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 gradient-accent text-accent-foreground p-4 rounded-xl premium-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
