"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WhoWeAreSection from "@/components/who-we-are-section"
import LegacySection from "@/components/legacy-section"
import CultureSection from "@/components/culture-section"
import ValuesSection from "@/components/values-section"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhoWeAreSection />
        <LegacySection />
        <CultureSection />
        <ValuesSection />
        <ProjectsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
