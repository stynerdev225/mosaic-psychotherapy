"use client"

import { motion } from "framer-motion"
import { Heart, Lightbulb, Users, Leaf, Shield, Sparkles } from "lucide-react"

// Mosaic component for consistent use across the site
const MosaicDecoration = ({ className = "" }) => (
  <div className={`grid grid-cols-2 gap-0.5 w-16 h-16 ${className}`}>
    <div className="bg-green-700 rounded-sm"></div>
    <div className="bg-transparent"></div>
    <div className="bg-yellow-400 rounded-sm"></div>
    <div className="bg-green-500 rounded-sm"></div>
  </div>
)

export default function ValuesSection() {
  const values = [
    {
      title: "Compassion",
      description:
        "We approach each person with genuine care, empathy, and a deep respect for their unique experiences.",
      icon: Heart,
    },
    {
      title: "Evidence-Based Practice",
      description:
        "Our therapeutic approaches are grounded in research and continually refined based on the latest findings.",
      icon: Lightbulb,
    },
    {
      title: "Inclusivity",
      description:
        "We are committed to creating a welcoming space for people of all backgrounds, identities, and experiences.",
      icon: Users,
    },
    {
      title: "Growth",
      description: "We believe in each person's capacity for healing, resilience, and positive change throughout life.",
      icon: Leaf,
    },
    {
      title: "Safety",
      description:
        "We prioritize creating a secure therapeutic environment where clients can explore vulnerable topics.",
      icon: Shield,
    },
    {
      title: "Authenticity",
      description:
        "We value genuine connection and encourage living in alignment with your true self and deepest values.",
      icon: Sparkles,
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Just one mosaic decoration in the bottom left */}
      <div className="absolute bottom-12 left-12">
        <MosaicDecoration className="transform -rotate-90" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* 3D Effect Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-2 bg-green-700/10 text-green-700 rounded-full text-sm font-semibold mb-2 shadow-lg relative overflow-hidden backdrop-blur-sm border border-green-700/20">
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-700/10 mix-blend-overlay"></span>
              <span className="relative z-10">GUIDING PRINCIPLES</span>
            </span>
            <div className="h-px w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif text-green-700 mb-4">Our Core Values</h2>
          <div className="h-1 w-60 mx-auto rounded-full bg-yellow-400 mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            These principles guide our practice and inform how we show up for our clients every day
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <value.icon className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
