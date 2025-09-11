import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, CheckCircle, Globe } from "lucide-react"

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    description: "Quality Management System",
    year: "2020",
  },
  {
    icon: Shield,
    title: "BIS Certification",
    description: "Bureau of Indian Standards",
    year: "2019",
  },
  {
    icon: CheckCircle,
    title: "CE Marking",
    description: "European Conformity",
    year: "2021",
  },
  {
    icon: Globe,
    title: "NSIC Registration",
    description: "Government Supplier",
    year: "2018",
  },
]

const clients = [
  "Ministry of Road Transport & Highways",
  "Delhi Traffic Police",
  "Mumbai Metropolitan Region Development Authority",
  "Bangalore Development Authority",
  "National Highways Authority of India",
  "Indian Railways",
]

export function CertificationsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Certifications */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary">
                Certifications & Standards
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Quality Assured &<span className="text-primary"> Government Approved</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to quality is reflected in our certifications and compliance with national and
                international standards.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                  <CardContent className="space-y-3 p-0">
                    <div className="flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <cert.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold">{cert.title}</div>
                      <div className="text-sm text-muted-foreground">{cert.description}</div>
                      <Badge variant="secondary" className="text-xs">
                        Since {cert.year}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Government Clients */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary">
                Trusted by Government
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Our Esteemed
                <span className="text-primary"> Government Clients</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proud to serve India's leading government organizations and contribute to the nation's infrastructure
                development.
              </p>
            </div>

            <div className="space-y-4">
              {clients.map((client, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center gap-4 p-0">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{client}</div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm font-medium">Successful Government Projects</div>
                <div className="text-xs text-muted-foreground">Across 28 States in India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
