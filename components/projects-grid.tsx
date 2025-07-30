"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Search, Filter, MapPin, X } from "lucide-react"

const projects = [
  {
    id: 1,
    category: "Vivienda Residencial",
    title: "Casa contemporánea con acabados en teja y concreto",
    location: "San José",
    image: "/images/grid/1.jpg?height=300&width=400&text=Residential+Building",
  },
  {
    id: 2,
    category: "Vivienda Residencial",
    title: "Residencia minimalista con fachada blanca y diseño integrado al entorno",
    location: "Guanacaste",
    image: "/images/grid/2.jpg?height=300&width=400&text=Construction+Site",
  },
  {
    id: 3,
    category: "Diseño de Interiores",
    title: "Cocina luminosa con acabados en granito, muebles blancos y piso de madera cálida",
    location: "Heredia",
    image: "/images/grid/3.jpg?height=300&width=400&text=Apartment+Complex",
  },
  {
    id: 4,
    category: "Oficinas",
    title: "Espacio ejecutivo con diseño moderno, madera clara y luz natural",
    location: "San José",
    image: "/images/grid/4.jpg?height=300&width=400&text=Modern+Building",
  },
  {
    id: 5,
    category: "Cabaña",
    title: "Cabaña tipo A en madera natural, con ventanales amplios y terraza exterior",
    location: "Cartago",
    image: "/images/grid/5.jpg?height=300&width=400&text=Industrial+Facility",
  },
  {
    id: 6,
    category: "Diseño de Interiores",
    title: "Sala-comedor elegante con mobiliario de lujo, textiles neutros y detalles modernos",
    location: "San José",
    image: "/images/grid/6.jpg?height=300&width=400&text=Commercial+Space",
  },
  {
    id: 7,
    category: "Comercial",
    title: "Cafetería con iluminación cálida, mobiliario en madera y diseño acogedor.",
    location: "Heredia",
    image: "/images/grid/7.jpg?height=300&width=400&text=Office+Building",
  },
  {
    id: 8,
    category: "Cabaña",
    title: "Cabaña elevada en madera, rodeada de palmeras y vegetación tropical.",
    location: "Limón",
    image: "/images/grid/8.jpg?height=300&width=400&text=Residential+House",
  }
]

const cities = ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"]

export default function ProjectsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [showCityFilter, setShowCityFilter] = useState(false)

  // Filter projects based on search term and selected city
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCity = selectedCity === "" || project.location === selectedCity

    return matchesSearch && matchesCity
  })

  const handleCitySelect = (city: string) => {
    setSelectedCity(city)
    setShowCityFilter(false)
  }

  const clearCityFilter = () => {
    setSelectedCity("")
  }

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
            {/* Search Input */}
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

            {/* City Filter Button */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowCityFilter(!showCityFilter)}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 min-w-[200px] justify-between"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">{selectedCity || "Filtrar por ciudad"}</span>
                </div>
                {selectedCity && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      clearCityFilter()
                    }}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </motion.button>

              {/* City Dropdown */}
              {showCityFilter && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                >
                  <div className="py-2">
                    <button
                      onClick={() => handleCitySelect("")}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors text-gray-700"
                    >
                      Todas las ciudades
                    </button>
                    {cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => handleCitySelect(city)}
                        className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                          selectedCity === city ? "bg-[#f9dc5c]/20 text-gray-900 font-medium" : "text-gray-700"
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCity || searchTerm) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 mt-4 max-w-4xl mx-auto"
            >
              {selectedCity && (
                <div className="flex items-center gap-2 bg-[#f9dc5c]/20 text-gray-800 px-3 py-1 rounded-full text-sm">
                  <MapPin className="w-3 h-3" />
                  <span>{selectedCity}</span>
                  <button onClick={clearCityFilter} className="text-gray-600 hover:text-gray-800 transition-colors">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
              {searchTerm && (
                <div className="flex items-center gap-2 bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                  <Search className="w-3 h-3" />
                  <span>"{searchTerm}"</span>
                  <button
                    onClick={() => setSearchTerm("")}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* Results Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-4 text-gray-600 text-sm"
          >
            {filteredProjects.length === projects.length
              ? `Mostrando todos los ${projects.length} proyectos`
              : `Mostrando ${filteredProjects.length} de ${projects.length} proyectos`}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
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
            ))
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-12 h-12 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No se encontraron proyectos</h3>
              <p className="text-gray-500">Intenta ajustar tus filtros o términos de búsqueda</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}