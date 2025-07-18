"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [isNavigating, setIsNavigating] = useState(false)
  const pathname = usePathname()
  const isSmoothScrolling = useRef(false)

  // Handle initial page load
  useEffect(() => {
    if (isInitialLoad) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
        setIsInitialLoad(false)
      }, 2500)

      const handleLoad = () => {
        setTimeout(() => {
          setIsLoading(false)
          setIsInitialLoad(false)
        }, 1500)
      }

      if (document.readyState === "complete") {
        handleLoad()
      } else {
        window.addEventListener("load", handleLoad)
      }

      return () => {
        clearTimeout(timer)
        window.removeEventListener("load", handleLoad)
      }
    }
  }, [isInitialLoad])

  // Handle route changes (but not initial load)
  useEffect(() => {
    if (!isInitialLoad && isNavigating && !isSmoothScrolling.current) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
        setIsNavigating(false)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [pathname, isInitialLoad, isNavigating])

  // Expose function to trigger navigation loading
  useEffect(() => {
    const handleNavigationStart = () => {
      // Only trigger loader if we're not smooth scrolling and not on initial load
      if (!isInitialLoad && !isSmoothScrolling.current) {
        setIsNavigating(true)
      }
    }

    const handleSmoothScrollStart = () => {
      isSmoothScrolling.current = true
      // Reset the flag after a short delay
      setTimeout(() => {
        isSmoothScrolling.current = false
      }, 100)
    }

    // Listen for navigation and smooth scroll events
    window.addEventListener("navigation-start", handleNavigationStart)
    window.addEventListener("smooth-scroll-start", handleSmoothScrollStart)

    return () => {
      window.removeEventListener("navigation-start", handleNavigationStart)
      window.removeEventListener("smooth-scroll-start", handleSmoothScrollStart)
    }
  }, [isInitialLoad])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
          }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="fixed inset-0 z-[9999] bg-[#f9dc5c] flex items-center justify-center"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[300px] font-bold text-black/10 select-none"
            >
              LA TORRE
            </motion.div>
          </div>

          {/* Floating animated elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Small floating circles */}
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
              className="absolute top-20 left-20 w-3 h-3 bg-black/20 rounded-full"
            />
            <motion.div
              animate={{
                y: [20, -20, 20],
                x: [10, -10, 10],
              }}
              transition={{
                duration: 3.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-32 right-32 w-2 h-2 bg-black/30 rounded-full"
            />
            <motion.div
              animate={{
                y: [-15, 15, -15],
                x: [15, -15, 15],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-40 left-40 w-4 h-4 bg-black/15 rounded-full"
            />

            {/* Rotating squares */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-40 right-20 w-6 h-6 border-2 border-black/20 rotate-45"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: 1.5,
              }}
              className="absolute bottom-32 right-40 w-4 h-4 border border-black/25"
            />

            {/* Pulsing dots */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-60 left-60 w-2 h-2 bg-black/40 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="absolute bottom-60 right-60 w-3 h-3 bg-black/25 rounded-full"
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo animation */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8"
            >
              <img src="/logo-black.svg" alt="La Torre Grupo Constructora" className="h-24 w-auto" />
            </motion.div>

            {/* Loading bar */}
            <div className="w-64 h-1 bg-black/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="h-full bg-gradient-to-r from-black to-gray-800 rounded-full"
              />
            </div>
          </div>

          {/* Animated dots at bottom */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                }}
                className="w-2 h-2 bg-black rounded-full"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
