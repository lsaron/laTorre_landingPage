"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function CultureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Split text into individual letters
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.4 + index * 0.034, // Stagger each letter
        }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))
  }

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content on the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                En Constructora La Torre creemos que construir también significa cuidar: de las personas, del entorno y
                de la forma en que hacemos las cosas. Nuestra cultura nace del compromiso por crear un impacto positivo
                que trascienda lo estructural.
              </p>
              <p>
                Como empresa costarricense, abrazamos la diversidad, el respeto por la naturaleza y la responsabilidad
                social. Nos guiamos por principios claros: operar con transparencia, promover la inclusión, proteger el
                ambiente y asegurar entornos de trabajo seguros y justos para todos.
              </p>
              <p>
                Estamos trabajando activamente en integrar estos valores en cada proyecto, avanzando hacia una
                estrategia sostenible y responsable que refleje lo que somos y en lo que creemos.
              </p>
            </div>
          </motion.div>

          {/* Animated title on the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="text-right">
              <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight uppercase tracking-wider">
                <div className="relative inline-block pt-1 pr-1 pb-3">
                  {/* Title text with letter animation only */}
                  <div className="relative">
                    <div>{splitText("Nuestra")}</div>
                    <div className="text-[#f9dc5c]">{splitText("cultura")}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
