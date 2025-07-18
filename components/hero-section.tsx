"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="/videos/videoHeader.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-sm text-gray-300 mb-4 tracking-wider"
            >
            Trabajo en equipo | Integridad | Compromiso
          </motion.div>

          <div className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight overflow-hidden">
            {/* Split text animation */}
            <div className="flex flex-col">
              <div className="flex overflow-hidden">
                <motion.span
                  initial={{ x: "-200%" }}
                  animate={{ x: "0%" }}
                  transition={{
                    delay: 1,
                    duration: 2,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  HACIENDO LA
                </motion.span>
              </div>
              <div className="flex overflow-hidden">
                <motion.span
                  initial={{ x: "200%" }}
                  animate={{ x: "0%" }}
                  transition={{
                    delay: 1,
                    duration: 2,
                    ease: "easeOut",
                  }}
                  className="inline-block text-[#f9dc5c]"
                >
                  DIFERENCIA
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
