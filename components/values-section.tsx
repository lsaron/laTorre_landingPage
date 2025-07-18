"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Leaf, Users, Heart, Eye, Shield } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Responsabilidad ambiental",
    description:
      "Construimos con conciencia ecológica, minimizando nuestro impacto y promoviendo el impacto ambiental.",
  },
  {
    icon: Users,
    title: "Diversidad e inclusión",
    description: "Valoramos y promovemos un entorno de trabajo donde todas las personas son bienvenidas y respetadas.",
  },
  {
    icon: Heart,
    title: "Compromiso social",
    description: "Nos involucramos activamente con las comunidades donde operamos, generando valor compartido.",
  },
  {
    icon: Eye,
    title: "Transparencia y ética",
    description: "Actuamos con honestidad y transparencia en cada etapa del proyecto.",
  },
  {
    icon: Shield,
    title: "Bienestar y seguridad",
    description: "Priorizamos la seguridad laboral con estándares rigurosos y protocolos.",
  },
]

export default function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f9dc5c] rounded-full flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl h-full">
              <img
                src="/images/SJO.png?height=600&width=500"
                alt="City aerial view"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
