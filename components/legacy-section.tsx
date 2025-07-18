"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function LegacySection() {
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
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/images/legacy.jpg?height=500&width=600"
                alt="Modern building at night"
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Un legado que comienza con confianza</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Constructora La Torre nace con el firme propósito de construir sobre bases sólidas: integridad, compromiso
              y trabajo en equipo. Estos valores guían cada decisión, cada plano y cada obra que emprendemos.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Aunque somos una empresa joven, creemos que la juventud trae consigo ideas frescas, decisiones concretas,
              atención al detalle y un compromiso real con nuestros clientes y comunidades. Nos inspira la idea de dejar
              huella no solo en lo que construimos, sino en cómo lo construimos: con transparencia, eficiencia y visión
              a futuro. Cada proyecto es una promesa, y en La Torre, cumplirla es parte de lo que somos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
