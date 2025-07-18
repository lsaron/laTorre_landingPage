"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus("sending")

    try {
      // Replace 'YOUR_REAL_EMAIL@gmail.com' with your actual Gmail address
      const recipientEmail = "latorre@gmail.com" // <-- CHANGE THIS TO YOUR REAL EMAIL

      const subject = `Nuevo contacto desde el sitio web - ${formData.name}`
      const body = `
Nuevo mensaje de contacto:

Nombre: ${formData.name}
Teléfono: ${formData.phone}
Email: ${formData.email}

Mensaje:
${formData.message}

---
Este mensaje fue enviado desde el formulario de contacto del sitio web de Constructora La Torre.
      `.trim()

      // Create mailto URL with all the form data
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      // Open the user's email client
      window.open(mailtoUrl, "_self")

      // Show success message
      setSubmitStatus("success")

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        })
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")

      // Reset error status after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
    }
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Contáctenos</h2>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                <Mail className="w-6 h-6 text-[#f9dc5c]" />
                <span className="text-gray-700 text-lg">latorre@gmail.com</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-3"
              >
                <Phone className="w-6 h-6 text-[#f9dc5c]" />
                <span className="text-gray-700 text-lg">+506-8888-8888</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <User className="absolute left-0 top-3 w-5 h-5 text-[#f9dc5c]" />
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre..."
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-8 py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#f9dc5c] outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500"
                  required
                  disabled={submitStatus === "sending"}
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-0 top-3 w-5 h-5 text-[#f9dc5c]" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-8 py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#f9dc5c] outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500"
                  required
                  disabled={submitStatus === "sending"}
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-0 top-3 w-5 h-5 text-[#f9dc5c]" />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo..."
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-8 py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#f9dc5c] outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500"
                  required
                  disabled={submitStatus === "sending"}
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-0 top-3 w-5 h-5 text-[#f9dc5c]" />
                <textarea
                  name="message"
                  placeholder="Mensaje..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full pl-8 py-3 bg-transparent border-b-2 border-gray-300 focus:border-[#f9dc5c] outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 resize-none"
                  required
                  disabled={submitStatus === "sending"}
                />
              </div>

              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  whileHover={submitStatus === "idle" ? { scale: 1.05 } : {}}
                  whileTap={submitStatus === "idle" ? { scale: 0.95 } : {}}
                  disabled={submitStatus === "sending"}
                  className={`px-8 py-3 font-semibold transition-all duration-300 flex items-center gap-2 ${
                    submitStatus === "success"
                      ? "bg-green-600 text-white"
                      : submitStatus === "error"
                        ? "bg-red-600 text-white"
                        : submitStatus === "sending"
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {submitStatus === "sending" && (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  )}
                  {submitStatus === "success" && <CheckCircle className="w-4 h-4" />}
                  {submitStatus === "error" && <AlertCircle className="w-4 h-4" />}

                  {submitStatus === "idle" && "ENVIAR"}
                  {submitStatus === "sending" && "ENVIANDO..."}
                  {submitStatus === "success" && "ENVIADO"}
                  {submitStatus === "error" && "ERROR"}
                </motion.button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 text-sm"
                >
                  ¡Mensaje enviado exitosamente! Se abrirá su cliente de correo.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-600 text-sm"
                >
                  Error al enviar el mensaje. Por favor, inténtelo de nuevo.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
