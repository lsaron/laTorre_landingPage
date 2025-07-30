"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface SubmitResponse {
  success: boolean
  message: string
}

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

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
    setErrorMessage("")

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result: SubmitResponse = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus("success")
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          })
          setSubmitStatus("idle")
        }, 3000)
      } else {
        throw new Error(result.message || "Error al enviar el mensaje")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Error al enviar el mensaje")

      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
        setErrorMessage("")
      }, 5000)
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
                <a
                  href="mailto:latorre@gmail.com"
                  className="text-gray-700 text-lg hover:text-[#f9dc5c] transition-colors duration-300 cursor-pointer"
                >
                  latorre@gmail.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-3"
              >
                <Phone className="w-6 h-6 text-[#f9dc5c]" />
                <a
                  href="tel:+50688888888"
                  className="text-gray-700 text-lg hover:text-[#f9dc5c] transition-colors duration-300 cursor-pointer"
                >
                  +506-8888-8888
                </a>
              </motion.div>
            </div>

            {/* Brevo Setup Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg"
            >
              <h3 className="text-sm font-semibold text-blue-800 mb-2">📧 Configuración Brevo</h3>
              <div className="text-xs text-blue-700 space-y-1">
                <p>
                  <strong>1.</strong> Agregar variable de entorno: <code>BREVO_API_KEY=tu_api_key</code>
                </p>
                <p>
                  <strong>2.</strong> Configurar email remitente verificado en Brevo
                </p>
                <p>
                  <strong>3.</strong> Actualizar email de destino en API route
                </p>
                <p>
                  <strong>4.</strong> Reiniciar servidor para aplicar cambios
                </p>
              </div>
            </motion.div>
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
                  ¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-600 text-sm"
                >
                  {errorMessage || "Error al enviar el mensaje. Por favor, inténtelo de nuevo."}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
