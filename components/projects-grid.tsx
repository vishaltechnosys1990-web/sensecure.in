import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Smart Traffic Management",
    Client: "Raipur Smart City",
    location: "Naya Raipur (Chhattisgarh)",
    year: "2023",
    description:
      "Complete traffic signal automation for 60+ intersections with smart controllers and real-time monitoring.",
    value: "₹40 Crores",
    status: "Completed",
    image: "/projects/raipur-smart-city.png",
  },
  {
    title: "Largest Commercial Outdoor Display",
    Client: "Bilaspur Smart City",
    location: "Bilaspur (Chhattisgarh)",
    year: "2023",
    description:
      "Deployment of over 10+ integrated Digital Display VMD systems, centrally managed via the Command Center.",
    value: "₹8 Crores",
    status: "Completed",
    image: "/metro-station-boom-barriers-mumbai-automatic-gates.jpg",
  },
  {
    title: "Displays in Delhi AIIMS",
    Client: "AIIMS DELHI",
    location: "Delhi",
    year: "2022",
    description:
      "AIIMS New Delhi integrates LED message boards and commercial screens to communicate new initiatives and services for patients.",
    value: "₹1 Crores",
    status: "Completed",
    image: "/projects/delhi-aiims.png",
  },
  {
    title: "Hybrid (Solar) Traffic Signals",
    Client: "Bhopal Traffic Police",
    location: "Bhopal (Madhya Pradesh)",
    year: "2019",
    description:
      "Post COVID-19, Bhopal city expanded the installation of solar-powered and hybrid traffic signals to enhance sustainable urban mobility and ensure uninterrupted traffic management",
    value: "₹5 Crores",
    status: "Completed",
    image: "/projects/bhopal-traffic-police.png",
  },
  {
    title: "Traffic solution & VMD Solutions",
    Client: "Mathura Nagar Nigam",
    location: "Mathura (Utter Pradesh)",
    year: "2024",
    description:
      "Integrated traffic management systems and digital display units networked with the Command Center to enable synchronized urban mobility and live data visualization.",
    value: "₹30 Crores",
    status: "Completed",
    image: "/projects/mathura-nagar-nigam.png",
  },
  {
    title: "Surveillance",
    Client: "State Hanger MP Govt.",
    location: "Bhopal (Madhya Pradesh)",
    year: "2020",
    description:
      "Advanced security and surveillance infrastructure was deployed at the State Hanger, enhancing situational awareness and centralized monitoring capabilities for government operations",
    value: "₹2 Crores",
    status: "Completed",
    image: "/projects/state-hanger-surveillance.png",
  },
]

export function ProjectsGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Featured Government Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our successful implementations across India's major cities and highways
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={project.image || "/led-traffic-signal-lights-system-with-red-yellow-g.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <Badge
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" ? "bg-primary" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
