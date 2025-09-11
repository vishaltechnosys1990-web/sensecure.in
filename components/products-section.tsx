import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrafficCone as Traffic, Shield, Monitor, ArrowRight } from "lucide-react"

const products = [
  {
    icon: Traffic,
    title: "Traffic Signal Systems",
    description:
      "Advanced LED traffic signal lights with smart controllers and wireless connectivity for efficient traffic management.",
    features: ["LED Technology", "Smart Controllers", "Wireless Connectivity", "Weather Resistant"],
    image: "/led-traffic-signal-lights-system-with-red-yellow-g.jpg",
  },
  {
    icon: Shield,
    title: "Boom Barriers",
    description:
      "Automatic boom barriers with magnetic locks, remote control, and integration with access control systems.",
    features: ["Magnetic Locks", "Remote Control", "Access Integration", "Heavy Duty Motors"],
    image: "/automatic-boom-barrier-gate-with-control-box-for-p.jpg",
  },
  {
    icon: Monitor,
    title: "Commercial Displays",
    description:
      "High-brightness LED displays and variable message signs for traffic information and commercial advertising.",
    features: ["High Brightness", "Variable Messages", "Remote Management", "Energy Efficient"],
    image: "/led-commercial-display-board-variable-message-sign.jpg",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Our Product Range</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive traffic infrastructure solutions designed and manufactured to meet Indian government standards
            and international quality requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <product.icon className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="secondary">Government Approved</Badge>
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
