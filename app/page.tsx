import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Header />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
