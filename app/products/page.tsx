"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Monitor,
  Volume2,
  Check,
  ArrowRight,
  Zap,
  Leaf,
  Clock,
  Award,
  Lightbulb,
} from "lucide-react"

interface ProductDetails {
  id: string
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  icon: any
  features: string[]
  specifications: Record<string, string>
  benefits: string[]
  applications: string[]
  colors?: string[]
  warranty?: string
  certifications: string[]
}

const products: ProductDetails[] = [
  {
    id: "traffic-signal-lights",
    title: "Traffic Signal Lights",
    category: "Traffic Management",
    description: "Advanced LED traffic signal lights with smart controllers and wireless connectivity",
    longDescription:
      "Our LED traffic signal lights represent the latest in traffic management technology. Designed to meet Indian government standards and international quality requirements, these systems provide reliable traffic control with energy-efficient LED technology.",
    image: "/led-traffic-signal-lights-system-with-red-yellow-g.jpg",
    icon: Lightbulb,
    features: [
      "LED Technology - Energy efficient and long-lasting",
      "Smart Controllers - Adaptive traffic management",
      "Wireless Connectivity - Remote monitoring and control",
      "Weather Resistant - IP67 rated enclosures",
      "Multiple Aspects - Single, dual, and quad aspect options",
      "Backup Power - Battery backup systems available",
    ],
    specifications: {
      "Light Source": "High-brightness LED (Red, Yellow, Green)",
      "Power Consumption": "40-60W per signal",
      "Operating Temperature": "-20°C to 60°C",
      "IP Rating": "IP67 (Waterproof & Dustproof)",
      "Life Expectancy": "100,000+ hours",
      "Visibility Range": "250-300 meters",
      "Control Method": "Wireless, Fixed Time, or Adaptive",
      "Dimensions": "Custom sizes available",
    },
    benefits: [
      "Reduces energy consumption by up to 80% compared to incandescent lights",
      "Improves traffic flow and safety at intersections",
      "Remote management capabilities reduce maintenance costs",
      "Reliable operation in all weather conditions",
      "Easy installation and minimal maintenance",
    ],
    applications: [
      "Urban intersections and traffic junctions",
      "Highway interchange systems",
      "Pedestrian crossings",
      "Railway level crossings",
      "Airport taxiways and runways",
    ],
    colors: ["Red", "Yellow", "Green", "White"],
    warranty: "5 years",
    certifications: ["BIS Certified", "ISO 9001:2015", "CE Approved"],
  },
  {
    id: "traffic-light-cdt",
    title: "Traffic Light CDT (Countdown Display Timer)",
    category: "Traffic Management",
    description: "Digital countdown timers for pedestrian signals and vehicle clearance indication",
    longDescription:
      "Our Traffic Light CDT systems provide visual countdown information to both drivers and pedestrians, improving safety and traffic efficiency. These intelligent timers help reduce traffic violations and improve overall junction safety.",
    image: "/led-commercial-display-board-variable-message-sign.jpg",
    icon: Monitor,
    features: [
      "Digital Countdown Display - Clear timing information",
      "LED Matrix Display - High visibility in all lighting conditions",
      "Multi-language Support - Regional customization",
      "Synchronized Timing - Coordinated with traffic signals",
      "Backup Systems - Uninterruptible operation",
      "Easy Configuration - Field-programmable settings",
    ],
    specifications: {
      "Display Type": "7-segment LED or dot matrix",
      "Display Size": "200mm to 400mm",
      "Color Options": "Red, Green, White",
      "Brightness": "High brightness for daytime visibility",
      "Power Supply": "230V AC with UPS backup",
      "IP Rating": "IP67",
      "Operating Temperature": "-20°C to 60°C",
      "Communication": "Wireless or hardwired",
    },
    benefits: [
      "Enhances pedestrian safety with clear countdown timing",
      "Reduces traffic conflicts and violations",
      "Improves traffic flow prediction",
      "Reduces driver uncertainty and improves decision-making",
      "Cost-effective traffic management solution",
    ],
    applications: [
      "Pedestrian crossings and zebra crossings",
      "Traffic signal junctions",
      "Parking area entrances",
      "School zones and safety areas",
      "Hospital and emergency exits",
    ],
    colors: ["Red", "Green", "White"],
    warranty: "3 years",
    certifications: ["BIS Certified", "ISO 9001:2015"],
  },
  {
    id: "traffic-light-poles",
    title: "Traffic Light Poles",
    category: "Infrastructure",
    description: "Durable aluminum and steel poles designed for reliable traffic signal installation",
    longDescription:
      "Our traffic light poles are engineered to withstand harsh environmental conditions while providing stable support for traffic signals, signs, and cameras. Manufactured from high-quality materials with corrosion-resistant coatings.",
    image: "/automatic-boom-barrier-gate-with-control-box-for-p.jpg",
    icon: Shield,
    features: [
      "High-grade Aluminum/Steel construction",
      "Corrosion-resistant galvanized coating",
      "Multiple height options available",
      "Integrated cable management systems",
      "Weather-resistant design",
      "Easy installation and maintenance",
    ],
    specifications: {
      "Material": "Aluminum alloy 6061-T6 / Mild Steel (Galvanized)",
      "Diameter": "60mm to 100mm",
      "Height": "4m to 10m (customizable)",
      "Wall Thickness": "3.0mm to 4.5mm",
      "Coating": "Hot-dip galvanized + polyester powder coating",
      "Wind Load": "Designed for 50 km/h winds",
      "Load Capacity": "200kg to 500kg",
      "Surface Finish": "Gloss / Matt finish options",
    },
    benefits: [
      "Superior durability in extreme weather conditions",
      "Lightweight aluminum reduces installation time",
      "Galvanized finish prevents rust and corrosion",
      "Flexible mounting options for various signal types",
      "Reduced lifetime maintenance costs",
    ],
    applications: [
      "Traffic signal installations at intersections",
      "Street lighting support structures",
      "Traffic sign and camera mounting",
      "Highway and arterial road installations",
      "Pedestrian signal installations",
    ],
    colors: ["Silver/Gray", "Black", "Green"],
    warranty: "7 years",
    certifications: ["BIS Certified", "ISO 9001:2015", "Highway Approved"],
  },
  {
    id: "pa-system",
    title: "PA System (Public Address System)",
    category: "Communication",
    description: "Advanced public address systems for announcements and emergency communication",
    longDescription:
      "Our PA systems provide clear audio communication for traffic management, emergency announcements, and public information. Designed with high-quality components for reliable operation in outdoor environments.",
    image: "/led-traffic-signal-lights-system-with-red-yellow-g.jpg",
    icon: Volume2,
    features: [
      "High-power amplification - Up to 250W output",
      "Multiple speaker options - Weatherproof outdoor speakers",
      "Wireless microphone systems - Remote announcement capability",
      "Scheduled announcements - Pre-programmed message playback",
      "Emergency override - Priority alert functionality",
      "IP67 rated components - All-weather operation",
    ],
    specifications: {
      "Amplifier Power": "120W to 250W",
      "Input Sources": "Microphone, Line-in, Wireless receiver",
      "Frequency Response": "20Hz to 20kHz",
      "Impedance": "4-8 Ohms",
      "Speaker Options": "Horn, Column, Box speakers (10W to 30W each)",
      "Operating Temperature": "-10°C to 50°C",
      "Power Supply": "230V AC with backup battery option",
      "Wireless Range": "Up to 200 meters",
    },
    benefits: [
      "Crystal clear audio quality in outdoor environments",
      "Flexible microphone options for various scenarios",
      "Programmable announcements reduce manual intervention",
      "Emergency communication capability for critical situations",
      "Energy-efficient amplification technology",
    ],
    applications: [
      "Traffic management and congestion announcements",
      "Emergency alert systems",
      "Public transportation stations",
      "Industrial facility announcements",
      "Event and gathering venue audio",
    ],
    colors: ["Black", "White", "Gray"],
    warranty: "2 years",
    certifications: ["ISO 9001:2015", "CE Approved"],
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Complete Product Range</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive traffic infrastructure and communication solutions designed to meet Indian government
              standards and international quality requirements
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {products.map((product, index) => (
              <div key={product.id} className={`grid lg:grid-cols-2 gap-8 items-stretch ${index % 2 === 1 ? "lg:auto-cols-max" : ""}`}>
                {/* Image Section */}
                <div className={`flex items-center ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="w-full bg-muted rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className={`flex flex-col ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="space-y-6 flex flex-col h-full">
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <product.icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="border-primary/50">
                          {product.category}
                        </Badge>
                      </div>
                      <h2 className="text-3xl font-bold">{product.title}</h2>
                      <p className="text-muted-foreground text-lg">{product.longDescription}</p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">Key Features</h3>
                      <ul className="space-y-2">
                        {product.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex gap-3 text-sm">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Warranty & Certifications */}
                    <div className="grid grid-cols-2 gap-4">
                      {product.warranty && (
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-xs text-muted-foreground">Warranty</p>
                            <p className="font-semibold">{product.warranty}</p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Certifications</p>
                          <p className="font-semibold text-sm">{product.certifications[0]}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto pt-4">
                      <Button size="lg" className="w-full">
                        Request Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Modal/Accordion Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Specifications</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <product.icon className="h-5 w-5 text-primary" />
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(product.specifications).slice(0, 5).map(([key, value]) => (
                      <div key={key} className="border-b pb-3 last:border-0">
                        <p className="text-sm font-semibold text-muted-foreground">{key}</p>
                        <p className="text-foreground">{value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Applications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Product Benefits & Applications</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Benefits: {product.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-primary" />
                      Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.applications.map((app, idx) => (
                        <li key={idx} className="flex gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Upgrade Your Infrastructure?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us for customized solutions tailored to your specific requirements
          </p>
          <Button size="lg" className="text-lg px-8">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
