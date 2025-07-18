"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function ElectricalSection() {
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
                src="/images/electric.jpg?height=400&width=600&text=Electrical+Systems"
                alt="Electrical services"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Servicio eléctrico especializado</h2>
            <p className="text-gray-600 leading-relaxed">
              Ofrecemos soluciones eléctricas completas que incluyen diseño, instalación, inspección y mantenimiento de
              sistemas eléctricos residenciales, comerciales e industriales. Trabajamos con materiales certificados,
              garantizando eficiencia energética, seguridad y continuidad operativa. Desde la distribución general hasta
              instalaciones específicas, nos aseguramos de que cada proyecto eléctrico sea confiable y sostenible en el
              tiempo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
