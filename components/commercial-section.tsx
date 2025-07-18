"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function CommercialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Construcción comercial y empresarial</h2>
            <p className="text-gray-600 leading-relaxed">
              Ejecutamos proyectos constructivos para empresas, comercios y organizaciones de distintos sectores. Nos
              especializamos en construir espacios adaptados a la operación diaria del negocio, asegurando
              funcionalidad, estética, durabilidad y cumplimiento técnico. Desde locales comerciales hasta complejos
              empresariales, abordamos cada fase de obra con eficiencia, compromiso con los plazos y control de calidad
              riguroso.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/images/comercial.jpg?height=400&width=600&text=Commercial+Building"
                alt="Commercial construction"
                className="w-full h-90 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
