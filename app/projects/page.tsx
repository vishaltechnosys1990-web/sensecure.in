"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectsRoadmap } from "@/components/projects-roadmap"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section for Projects Page */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Our Growth Journey</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From 2000 to present day, witness our evolution as a trusted partner in government infrastructure
              solutions
            </p>
          </div>
        </div>
      </section>

      {/* Timeline/Roadmap Section */}
      <ProjectsRoadmap />

      <Footer />
    </main>
  )
}
