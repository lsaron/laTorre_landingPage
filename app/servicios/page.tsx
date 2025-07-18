"use client"
import Header from "@/components/header"
import ServicesHero from "@/components/services-hero"
import PreConstructionSection from "@/components/pre-construction-section"
import ConsultingSection from "@/components/consulting-section"
import CommercialSection from "@/components/commercial-section"
import DesignPlansSection from "@/components/design-plans-section"
import ElectricalSection from "@/components/electrical-section"
import ComunicationSection from "@/components/comunication-section"
import TurnkeySection from "@/components/turnkey-section"
import RenovationsSection from "@/components/renovations-section"
import MaintenanceSection from "@/components/maintenance-section"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="w-full">
        <ServicesHero />
        <PreConstructionSection />
        <ConsultingSection />
        <CommercialSection />
        <DesignPlansSection />
        <ElectricalSection />
        {/* <ComunicationSection /> */}
        <TurnkeySection />
        <RenovationsSection />
        <MaintenanceSection />
        <ProjectsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
