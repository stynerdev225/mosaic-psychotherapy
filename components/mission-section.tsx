"use client"

import { motion } from "framer-motion"

// Mosaic component for consistent use across the site
const MosaicDecoration = ({ className = "" }) => (
  <div className={`grid grid-cols-2 gap-0.5 w-16 h-16 ${className}`}>
    <div className="bg-green-700 rounded-sm"></div>
    <div className="bg-transparent"></div>
    <div className="bg-yellow-400 rounded-sm"></div>
    <div className="bg-green-500 rounded-sm"></div>
  </div>
)

export default function MissionSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
      {/* Just one subtle mosaic decoration */}
      <div className="absolute top-1/2 right-12 transform -translate-y-1/2 opacity-70">
        <MosaicDecoration />
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
              <span className="relative z-10">OUR PURPOSE</span>
            </span>
            <div className="h-px w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif text-green-700 mb-4">Our Mission</h2>
          <div className="h-1 w-60 mx-auto rounded-full bg-yellow-400 mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl md:text-3xl font-serif mb-6 text-gray-900 leading-tight">
              Supporting Aligned Lives
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The mission of Mosaic Psychotherapy is to support individuals in building lives aligned with their
              values—promoting clarity, resilience, and meaningful action through evidence-based, compassionate care.
            </p>
            <div className="h-1 w-20 bg-yellow-400/50 my-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Quality therapy is grounded in the creation of a space where each person feels seen, supported, and
              empowered to explore identity, meet challenges with openness, and move toward lasting healing and
              purposeful growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-green-700 rounded-2xl p-8 text-white shadow-lg h-full flex flex-col justify-center">
              <h4 className="text-xl font-serif mb-4">Clarity</h4>
              <p className="text-green-50">
                We help you gain insight into patterns, values, and pathways toward meaningful change.
              </p>
            </div>
            <div className="bg-yellow-400 rounded-2xl p-8 text-gray-900 shadow-lg h-full flex flex-col justify-center">
              <h4 className="text-xl font-serif mb-4">Resilience</h4>
              <p className="text-gray-800">
                We support you in developing the capacity to navigate life's challenges with flexibility and strength.
              </p>
            </div>
            <div className="bg-green-600 rounded-2xl p-8 text-white shadow-lg h-full flex flex-col justify-center">
              <h4 className="text-xl font-serif mb-4">Empowerment</h4>
              <p className="text-green-50">
                We create a space where you feel equipped to make choices aligned with your deepest values.
              </p>
            </div>
            <div className="bg-green-100 rounded-2xl p-8 text-gray-900 shadow-lg h-full flex flex-col justify-center">
              <h4 className="text-xl font-serif mb-4">Growth</h4>
              <p className="text-gray-800">
                We walk alongside you as you cultivate meaningful change and purposeful direction.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
