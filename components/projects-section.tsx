import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Delhi Smart Traffic Management",
    location: "New Delhi",
    year: "2023",
    description:
      "Complete traffic signal automation for 150+ intersections with smart controllers and real-time monitoring.",
    value: "₹12 Crores",
    status: "Completed",
    image: "/smart-traffic-signals-delhi-intersection-modern.jpg",
  },
  {
    title: "Mumbai Metro Boom Barriers",
    location: "Mumbai, Maharashtra",
    year: "2023",
    description: "Installation of 200+ automatic boom barriers across metro stations with integrated access control.",
    value: "₹8 Crores",
    status: "Ongoing",
    image: "/metro-station-boom-barriers-mumbai-automatic-gates.jpg",
  },
  {
    title: "Bangalore Highway Displays",
    location: "Bangalore, Karnataka",
    year: "2022",
    description: "LED variable message signs and commercial displays along major highways and arterial roads.",
    value: "₹15 Crores",
    status: "Completed",
    image: "/highway-led-display-boards-bangalore-traffic-infor.jpg",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Major Government Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Showcasing our successful implementations across India's major cities and highways, delivering reliable
            traffic infrastructure solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
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
                  <div className="text-right">
                    
                  </div>
                </div>

                <div className="space-y-2">
                  
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

        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
