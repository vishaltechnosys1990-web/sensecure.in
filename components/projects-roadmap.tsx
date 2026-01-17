"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface TimelineItem {
  year: number
  projects: string[]
}

const timelineData: TimelineItem[] = [
  {
    year: 2020,
    projects: ["Surveillance State Hanger MP"],
  },
  {
    year: 2023,
    projects: ["Display MP RHQ Videowall", "Commercial Display MP RHQ", "Surveillance Shahjahanpur (UP)"],
  },
  {
    year: 2024,
    projects: [
      "Surveillance Ayodhya ITMS",
      "ANPR MP 3 CITY",
      "Traffic Signal+VMD Morena",
      "Bodyworn AIIMS",
      "Surveillance IIT Delhi",
    ],
  },
  {
    year: 2025,
    projects: [
      "ITMI MP RHQ",
      "CPWD Home Ministery",
      "AIIMS Surveillance",
      "AMCMP11 AMC",
      "AMC Jabalpur AMC",
      "PA SystemGwalior PA",
      "CAMCPHQ Connectivity",
      "CPWD Home Minister Surveillance",
      "Traffic Signal+VMDJabalpur Traffic",
    ],
  },
]

export function ProjectsRoadmap() {
  const [animatedData, setAnimatedData] = useState<number[]>(Array(timelineData.length).fill(0))

  useEffect(() => {
    timelineData.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedData((prev) => {
          const updated = [...prev]
          updated[index] = 1
          return updated
        })
      }, index * 150)
    })
  }, [])

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Project Growth Timeline</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Landmark Projects from 2020 to 2025</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`opacity-0 transition-all duration-700 ${
                  animatedData[index] === 1 ? "opacity-100 translate-y-0" : "translate-y-8"
                }`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Content */}
                  <div className="w-1/2 px-8">
                    <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-lg font-bold text-primary">
                          {item.year}
                        </div>
                      </div>

                      <div className="space-y-2">
                        {item.projects.map((project, pIndex) => (
                          <div
                            key={pIndex}
                            className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 transition-colors"
                          >
                            <div className="mt-1 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                            <p className="text-muted-foreground">{project}</p>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-0 flex justify-center">
                    <div
                      className={`w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg transform transition-all duration-500 ${
                        animatedData[index] === 1 ? "scale-100" : "scale-0"
                      }`}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Chart */}
        <div className="mt-20 p-8 bg-card rounded-xl border border-muted">
          <h3 className="text-2xl font-bold mb-8">Growth Metrics</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <p className="text-muted-foreground mb-2">Total Projects Completed</p>
                <p className="text-4xl font-bold text-primary">100+</p>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent animate-pulse"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <p className="text-muted-foreground mb-2">Total Revenue Generated</p>
                <p className="text-4xl font-bold text-accent">₹800+ Cr</p>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-primary animate-pulse"
                  style={{ width: "95%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
