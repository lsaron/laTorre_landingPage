"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function PreConstructionSection() {
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Pre<span className="text-[#f9dc5c]">construcción</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              En Constructora La Torre, nuestro enfoque colaborativo desde la etapa de preconstrucción se basa en la
              transparencia y la responsabilidad compartida. La comunicación efectiva y la planificación conjunta son
              clave para garantizar resultados sólidos y confiables desde el primer día.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/images/Preconstruccion.jpg?height=400&width=600&text=Planning+Documents"
                alt="Pre-construction planning"
                className="w-full h-90 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
