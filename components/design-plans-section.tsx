"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Planos Arquitectónicos",
    description: "Diseños detallados que definen la estructura y distribución de espacios",
    image: "/staff/plano.jpg?height=300&width=400&text=Architectural+Plans",
  },
  {
    id: 2,
    title: "Planos Eléctricos",
    description: "Sistemas eléctricos completos con normativas de seguridad",
    image: "/staff/Plane.jpg?height=300&width=400&text=Electrical+Plans",
  },
  {
    id: 3,
    title: "Planos Estructurales",
    description: "Cálculos y diseños de resistencia para construcciones seguras",
    image: "/staff/sala2.jpg?height=300&width=400&text=Structural+Plans",
  },
  {
    id: 4,
    title: "Planos Especiales",
    description: "Diseños personalizados para necesidades específicas del proyecto",
    image: "/staff/acsPlane.jpg?height=300&width=400&text=Special+Plans",
  },
  {
    id: 5,
    title: "Modelado 3D",
    description: "Visualizaciones tridimensionales para mejor comprensión del proyecto",
    image: "/staff/3d.jpg?height=300&width=400&text=3D+Modeling",
  },
  {
    id: 6,
    title: "Renders Fotorrealistas",
    description: "Imágenes realistas del proyecto terminado antes de construir",
    image: "/staff/render.jpg?height=300&width=400&text=Photorealistic+Renders",
  },
]

export default function DesignPlansSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [shouldAnimateTitle, setShouldAnimateTitle] = useState(false)

  // Start title animation when section comes into view
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldAnimateTitle(true)
      }, 200) // Small delay after section is in view

      return () => clearTimeout(timer)
    }
  }, [isInView])

  // Split text into words
  const splitWords = (text: string) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        initial={{
          scale: 14,
          opacity: 0,
        }}
        animate={
          shouldAnimateTitle
            ? {
                scale: 1,
                opacity: 1,
              }
            : {
                scale: 14,
                opacity: 0,
              }
        }
        transition={{
          duration: 0.6, // 600ms duration
          ease: [0.075, 0.82, 0.165, 1], // easeOutCirc equivalent
          delay: shouldAnimateTitle ? index * 0.6 : 0, // 600ms delay between words
        }}
        className={`inline-block mr-4 ${word.toLowerCase() === "planos" ? "text-[#f9dc5c]" : ""}`}
        style={{
          lineHeight: "1em",
          transformOrigin: "50% 50%",
          backfaceVisibility: "hidden",
        }}
      >
        {word}
      </motion.span>
    ))
  }


  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) 

    return () => clearInterval(interval)
  }, [currentSlide, isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false) 
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    // Resume autoplay after 8 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  return (
    <section ref={ref} className="py-20 bg-white w-full">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-wider">
            {splitWords("Diseño y elaboración de planos")}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }} 
            className="text-gray-600 leading-relaxed max-w-4xl mx-auto"
          >
            El diseño es el punto de partida para cualquier proyecto exitoso. En Constructora La Torre desarrollamos
            planos arquitectónicos, eléctricos, estructurales y especiales, adaptados a las normativas vigentes y a las
            necesidades específicas de cada cliente. Nuestro equipo técnico colabora estrechamente con el cliente para
            transformar ideas en representaciones claras, funcionales y listas para ser ejecutadas. Utilizamos
            herramientas digitales modernas y aseguramos precisión en cada entrega para optimizar tiempo y recursos
            durante la construcción.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }} // After title and description
          className="relative w-full max-w-6xl mx-auto"
        >
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="h-80 overflow-hidden">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / 2)}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={slide.id} className="w-1/2 flex-shrink-0 px-1">
                    <div
                      className={`${index % 2 === 0 ? "bg-gray-100/50" : "bg-gray-100"} flex h-full justify-center p-6 rounded-lg`}
                    >
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="mb-4">
                          <img
                            src={slide.image || "/placeholder.svg"}
                            alt={slide.title}
                            className="w-48 h-32 object-cover rounded-lg shadow-md"
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{slide.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Previous Button */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute top-1/2 left-5 max-sm:left-3 -translate-y-1/2 w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-lg shadow-gray-300/20 hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
              <span className="sr-only">Previous</span>
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              className="absolute top-1/2 right-5 max-sm:right-3 -translate-y-1/2 w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-lg shadow-gray-300/20 hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
