"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function RenovationsSection() {
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
                src="/images/remodelacion.jpg?height=400&width=600&text=Renovations+and+Improvements"
                alt="Renovations and improvements"
                className="w-full h-90 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Remodelaciones y mejoras</h2>
            <p className="text-gray-600 leading-relaxed">
              El mantenimiento adecuado extiende la vida útil de los espacios y equipos, mejora la seguridad y evita
              paradas innecesarias. Ofrecemos planes personalizados de mantenimiento correctivo y preventivo, adaptados
              a las necesidades de empresas e instituciones. Nuestro equipo técnico realiza inspecciones periódicas,
              reparaciones específicas y atención rápida ante emergencias, ayudando a mantener sus instalaciones
              operativas y en óptimas condiciones.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
