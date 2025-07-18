"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <div className="text-[#f9dc5c] text-sm tracking-wider mb-4 font-medium uppercase">
              CONVERTIMOS SU VISIÓN
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              EN PROYECTOS QUE TRASCIENDEN.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Link href="/contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-3 border-2 border-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                CONTÁCTENOS
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
