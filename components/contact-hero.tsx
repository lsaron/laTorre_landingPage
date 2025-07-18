"use client"

import { motion } from "framer-motion"

export default function ContactHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-[200px] font-bold text-gray-900/20 select-none">CONTACTO</div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle - floating motion */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-32 h-32 border-2 border-[#f9dc5c]/60 rounded-full"
        />

        {/* Small yellow dot - pulsing and floating */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 1, 0.8],
            y: [15, -15, 15],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-40 left-20 w-4 h-4 bg-[#f9dc5c] rounded-full"
        />

        {/* Rotating square */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-40 left-40 w-24 h-24 border border-gray-400/60 rotate-45"
        />

        {/* Medium circle - counter rotation */}
        <motion.div
          animate={{
            rotate: [360, 0],
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-60 right-60 w-16 h-16 border border-gray-500/60 rounded-full"
        />

        {/* Small circle - complex motion */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
            y: [-25, 25, -25],
            x: [15, -15, 15],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-60 left-60 w-8 h-8 border-2 border-gray-600/40 rounded-full"
        />

        {/* Tiny dot - rapid pulsing */}
        <motion.div
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.9, 0.4],
            y: [10, -10, 10],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-80 left-80 w-2 h-2 bg-gray-600 rounded-full"
        />

        {/* Additional floating elements */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.8,
          }}
          className="absolute top-32 right-40 w-6 h-6 border border-[#f9dc5c]/50 rotate-45"
        />

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            y: [12, -12, 12],
            x: [-8, 8, -8],
          }}
          transition={{
            duration: 3.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-32 right-32 w-3 h-3 bg-gray-500/70 rounded-full"
        />

        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 0.8, 1],
            y: [-18, 18, -18],
          }}
          transition={{
            duration: 5.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 0.3,
          }}
          className="absolute top-80 right-80 w-10 h-10 border-2 border-gray-400/50"
        />

        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.6, 1],
            x: [8, -8, 8],
          }}
          transition={{
            duration: 2.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 left-20 w-5 h-5 bg-[#f9dc5c]/60 rounded-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-10 h-full flex items-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[#f9dc5c] text-lg tracking-wider mb-6 font-medium"
          >
            Conversemos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-8 leading-tight"
          >
            DE SU PROYECTO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl"
          >
            Siéntase libre de consultarnos lo que desee.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
