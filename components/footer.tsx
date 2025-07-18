"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <img src="/logo-white.svg" alt="La Torre Grupo Constructora" className="h-16 w-auto" />
          </div>
          <p className="text-gray-400 text-sm">© 2025 Constructora La Torre. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}
