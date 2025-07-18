"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function ConsultingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/images/consulting.jpg?height=400&width=600&text=Technical+Consulting"
                alt="Technical consulting"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Consultoría y asesoría técnica</h2>
            <p className="text-gray-600 leading-relaxed">
              Acompañamos a nuestros clientes en la toma de decisiones clave antes, durante y después de cada proyecto.
              Nuestro servicio de consultoría abarca estudios de viabilidad, análisis de normativa, estimaciones
              presupuestarias, cronogramas de obra, gestión de permisos y más.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
