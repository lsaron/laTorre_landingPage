"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function WhoWeAreSection() {
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Quiénes somos</h2>
            <p className="text-gray-600 leading-relaxed">
              Nuestra visión es convertirnos en un referente de valor en el sector construcción, destacando por la
              calidad, la integridad y la innovación en cada proyecto. En Constructora La Torre planificamos y
              ejecutamos obras residenciales, comerciales y de infraestructura con compromiso, eficiencia y un enfoque
              humano. Cada proyecto es una oportunidad para construir con propósito y generar un impacto positivo en las
              personas y las comunidades.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/images/who.jpg?height=400&width=600"
                alt="Construction work"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
