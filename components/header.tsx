"use client"

import type React from "react"

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Instagram, Facebook, Menu, X } from "lucide-react"

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const router = useRouter()

  // Determine if we're on a page with white background
  const isLightBackground = pathname === "/contacto"

  useMotionValueEvent(scrollY, "change", (latest) => {
    const heroHeight = window.innerHeight
    const shouldBeVisible = latest < heroHeight * 0.85

    if (shouldBeVisible !== isVisible) {
      setIsVisible(shouldBeVisible)
    }
  })

  const handleNuestraEmpresaClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false) // Close mobile menu

    // Only handle smooth scroll if we're on the main page
    if (pathname === "/") {
      // Dispatch smooth scroll event to prevent loader
      window.dispatchEvent(new Event("smooth-scroll-start"))

      // Perform smooth scroll
      const aboutSection = document.getElementById("about-section")
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    } else {
      // If not on main page, trigger navigation with loader
      window.dispatchEvent(new Event("navigation-start"))
      router.push("/")
    }
  }

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    setIsMobileMenuOpen(false) // Close mobile menu

    // For navigation to different pages, trigger loader and navigate
    if (pathname !== href) {
      e.preventDefault()
      window.dispatchEvent(new Event("navigation-start"))
      router.push(href)
    }
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    setIsMobileMenuOpen(false) // Close mobile menu

    // Logo click behavior
    if (pathname !== "/") {
      e.preventDefault()
      window.dispatchEvent(new Event("navigation-start"))
      router.push("/")
    }
    // If already on main page, do nothing (no loader, no navigation)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navigationItems = [
    { name: "Nuestra empresa", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -120,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween",
        }}
        className={`fixed top-0 left-0 right-0 z-50 border-b ${
          isLightBackground ? "border-gray-300" : "border-white/20"
        }`}
      >
        <div className="w-full px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="ml-2 sm:ml-4"
            >
              <Link href="/" onClick={handleLogoClick} className="flex items-center">
                <img
                  src={isLightBackground ? "/logo-black.svg" : "/logo-white.svg"}
                  alt="La Torre Grupo Constructora"
                  className="h-10 sm:h-12 w-auto"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center pr-8">
              <nav className="flex items-center space-x-8 mr-12">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.5,
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{
                      y: -2,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (item.name === "Nuestra empresa") {
                          handleNuestraEmpresaClick(e)
                        } else {
                          handleNavigation(item.href, e)
                        }
                      }}
                      className={`transition-colors duration-300 ${
                        isLightBackground ? "text-gray-900 hover:text-[#f9dc5c]" : "text-white hover:text-[#f9dc5c]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-3">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`transition-colors duration-300 ${
                    isLightBackground ? "text-gray-900 hover:text-[#f9dc5c]" : "text-white hover:text-[#f9dc5c]"
                  }`}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`transition-colors duration-300 ${
                    isLightBackground ? "text-gray-900 hover:text-[#f9dc5c]" : "text-white hover:text-[#f9dc5c]"
                  }`}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
              className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
                isLightBackground ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden ${
                isLightBackground ? "bg-white" : "bg-gray-900"
              } shadow-2xl`}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <img
                  src={isLightBackground ? "/logo-black.svg" : "/logo-white.svg"}
                  alt="La Torre Grupo Constructora"
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-2 rounded-md transition-colors duration-300 ${
                    isLightBackground ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                  }`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col p-6 space-y-6">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (item.name === "Nuestra empresa") {
                          handleNuestraEmpresaClick(e)
                        } else {
                          handleNavigation(item.href, e)
                        }
                      }}
                      className={`block text-lg font-medium transition-colors duration-300 ${
                        isLightBackground ? "text-gray-900 hover:text-[#f9dc5c]" : "text-white hover:text-[#f9dc5c]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Social Media */}
              <div className="absolute bottom-8 left-6 right-6">
                <div className="flex items-center justify-center space-x-6">
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full transition-colors duration-300 ${
                      isLightBackground ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full transition-colors duration-300 ${
                      isLightBackground ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
