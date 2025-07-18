"use client"
import Header from "@/components/header"
import ContactHero from "@/components/contact-hero"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
