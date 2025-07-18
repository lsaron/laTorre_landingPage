"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function TurnkeySection() {
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proyectos llave en mano</h2>
            <p className="text-gray-600 leading-relaxed">
              Ofrecemos soluciones integrales para quienes necesitan centralizar la gestión de su proyecto en un solo
              equipo. Nos encargamos de todo: diseño, permisos, compras, ejecución y acabados. Este modelo permite al
              cliente confiar plenamente en nuestra experiencia y recibir su proyecto terminado, listo para operar, sin
              tener que coordinar múltiples proveedores. Es una alternativa ideal para empresas, inversionistas o
              desarrolladores que buscan eficiencia y resultados sin complicaciones.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/images/Turnkey.png?height=400&width=600&text=Turnkey+Projects"
                alt="Turnkey projects"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
