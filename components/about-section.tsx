import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Users, Award, Globe } from "lucide-react"

const stats = [
  { icon: Factory, label: "Manufacturing Units", value: "3", description: "State-of-the-art facilities" },
  { icon: Users, label: "Expert Team", value: "150+", description: "Engineers & Technicians" },
  { icon: Award, label: "Certifications", value: "8+", description: "Quality & Safety Standards" },
  { icon: Globe, label: "States Covered", value: "28", description: "Pan-India Presence" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary">
                About TrafficTech Solutions
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">
                Pioneering Traffic Infrastructure
                <span className="text-primary">  Since 2001</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                TrafficTech Solutions has been at the forefront of traffic infrastructure development in India for over
                15 years. We specialize in designing, manufacturing, and supplying high-quality traffic management
                systems for government projects across the nation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Traffic Signal Manufacturing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Boom Barrier Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">LED Display Solutions</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Project Installation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Maintenance Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Technical Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-video bg-muted rounded-xl overflow-hidden">
              <img
                src="/placeholder-bps88.png"
                alt="Manufacturing Facility"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-4">
                  <CardContent className="space-y-2 p-0">
                    <div className="flex justify-center">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm font-medium">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
