"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function WhatsAppButton() {
  const [buttonPosition, setButtonPosition] = useState<"fixed" | "absolute">("fixed")
  const [bottomOffset, setBottomOffset] = useState(24) // Default 24px from bottom

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer")
      if (!footer) return

      const footerRect = footer.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const buttonHeight = 56 // Height of the WhatsApp button (14 * 4 = 56px)
      const defaultMargin = 24 // Default bottom margin (6 * 4 = 24px)

      // When footer comes into view, switch to absolute positioning
      if (footerRect.top <= windowHeight - buttonHeight - defaultMargin) {
        setButtonPosition("absolute")
        // Calculate how much to offset from the bottom of the page
        const documentHeight = document.documentElement.scrollHeight
        const footerHeight = footer.offsetHeight
        setBottomOffset(footerHeight + defaultMargin)
      } else {
        // Normal fixed positioning
        setButtonPosition("fixed")
        setBottomOffset(defaultMargin)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (include country code without + or spaces)
    const phoneNumber = "50688888888" // Example: Costa Rica number
    const message = "Hola, me gustaría obtener más información sobre sus servicios de construcción."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      className="z-50 w-14 h-14 bg-black hover:bg-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
      style={{
        position: buttonPosition,
        right: "24px",
        bottom: `${bottomOffset}px`,
        transition: "bottom 0.3s ease-out",
      }}
    >
      {/* WhatsApp Logo SVG */}
      <svg
        className="w-7 h-7 group-hover:scale-110 transition-transform duration-200"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
      </svg>

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-black animate-ping opacity-20" />
    </motion.button>
  )
}
