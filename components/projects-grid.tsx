"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Search, Filter, MapPin } from "lucide-react"

const projects = [
  {
    id: 1,
    category: "Restaurante",
    title: "Restaurante La Torre",
    location: "San Rafael, Heredia",
    image: "/staff/restaurante.jpg?height=300&width=400&text=Residential+Building",
  },
  {
    id: 2,
    category: "Categoría del Proyecto",
    title: "Descripción del Proyecto",
    location: "Ubicación",
    image: "/placeholder.svg?height=300&width=400&text=Construction+Site",
  },
  {
    id: 3,
    category: "Categoría del Proyecto",
    title: "Descripción del Proyecto",
    location: "Ubicación",
    image: "/placeholder.svg?height=300&width=400&text=Apartment+Complex",
  },
  {
    id: 4,
    category: "Categoría del Proyecto",
    title: "Descripción del Proyecto",
    location: "Ubicación",
    image: "/placeholder.svg?height=300&width=400&text=Modern+Building",
  },
  {
    id: 5,
    category: "Categoría del Proyecto",
    title: "Descripción del Proyecto",
    location: "Ubicación",
    image: "/placeholder.svg?height=300&width=400&text=Industrial+Facility",
  },
  {
    id: 6,
    category: "Categoría del Proyecto",
    title: "Descripción del Proyecto",
    location: "Ubicación",
    image: "/placeholder.svg?height=300&width=400&text=Commercial+Space",
  },
  {
    id: 7,
    category: "Categoría del Proyecto",
    title: "Descripción del Proyecto",
    location: "Ubicación",
    image: "/placeholder.svg?height=300&width=400&text=Office+Building",
  },
  {
    id: 8,
    category: "Categoría del Proyecto",
    title: "Descripción del Proyecto",
    location: "Ubicación",
    image: "/placeholder.svg?height=300&width=400&text=Residential+House",
  },
  {
    id: 9,
    category: "Categoría del Proyecto",
    title: "Descripción del Proyecto",
    location: "Ubicación",
    image: "/placeholder.svg?height=300&width=400&text=Warehouse",
  },
  {
    id: 10,
    category: "Categoría del Proyecto",
    title: "Descripción del Proyecto",
    location: "Ubicación",
    image: "/placeholder.svg?height=300&width=400&text=Modern+House",
  },
  {
    id: 11,
    category: "Categoría del Proyecto",
    title: "Descripción del Proyecto",
    location: "Ubicación",
    image: "/placeholder.svg?height=300&width=400&text=Contemporary+Home",
  },
  {
    id: 12,
    category: "Categoría del Proyecto",
    title: "Descripción del Proyecto",
    location: "Ubicación",
    image: "/placeholder.svg?height=300&width=400&text=Villa+Project",
  },
]

export default function ProjectsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar un proyecto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f9dc5c] focus:border-transparent"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Refinar su búsqueda</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-gray-600 text-xs px-2 py-1 rounded">{project.category}</span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
                <h3 className="text-gray-900 font-semibold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
