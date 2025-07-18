"use client"
import Header from "@/components/header"
import ProjectsHero from "@/components/projects-hero"
import ProjectsGrid from "@/components/projects-grid"
import ProjectsCTA from "@/components/projects-cta"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
        <ProjectsCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
