"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function ProjectsHero() {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  // Start animation after page loader finishes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true)
    }, 3000) 

    return () => clearTimeout(timer)
  }, [])

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{
          rotateY: -90,
          opacity: 0,
        }}
        animate={
          shouldAnimate
            ? {
                rotateY: 0,
                opacity: 1,
              }
            : {
                rotateY: -90,
                opacity: 0,
              }
        }
        transition={{
          duration: 1.3, 
          ease: "easeOut",
          delay: shouldAnimate ? index * 0.045 : 0,
        }}
        className="inline-block"
        style={{
          lineHeight: "1em",
          transformOrigin: "0 0",
          backfaceVisibility: "hidden",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
           <source src="/videos/projectsHero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="relative inline-block pt-1 pr-1 pb-3 overflow-hidden">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="inline-block">{splitText("Nuestros")}</span>
              <br />
              <span className="inline-block text-[#f9dc5c]">{splitText("Proyectos")}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
