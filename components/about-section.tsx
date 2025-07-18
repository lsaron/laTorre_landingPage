"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="about-section" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
              Acerca de
              <br />
              <span className="text-[#f9dc5c]">Grupo La Torre</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-600 leading-relaxed"
          >
            <p className="mb-4">
              Constructora La Torre es una empresa costarricense dedicada al desarrollo de proyectos que integran
              calidad, eficiencia e innovación. Aunque somos una compañía joven, nacimos con una visión clara: construir
              espacios que generen valor real para las personas, las empresas y las comunidades.
            </p>
            <p className="mb-4">
              Nos esforzamos por ofrecer un servicio cercano, personalizado y de calidad, con la experiencia y atención
              personalizada de una empresa local con el uso de herramientas modernas y procesos eficientes. Cada
              proyecto representa una oportunidad para crecer, mejorar y dejar una huella positiva en nuestros clientes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
