"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Mosaic component for consistent use across the site
const MosaicDecoration = ({ className = "" }) => (
  <div className={`grid grid-cols-2 gap-0.5 w-16 h-16 ${className}`}>
    <div className="bg-green-700 rounded-sm"></div>
    <div className="bg-transparent"></div>
    <div className="bg-yellow-400 rounded-sm"></div>
    <div className="bg-green-500 rounded-sm"></div>
  </div>
)

export default function FaqsHero() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Just one mosaic decoration in the top right */}
      <div className="absolute top-12 right-12">
        <MosaicDecoration />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
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
              <span className="relative z-10">COMMON QUERIES</span>
            </span>
            <div className="h-px w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-green-700 mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <div className="h-1 w-80 mx-auto rounded-full bg-yellow-400 mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto mb-12 md:mb-16">
            Find answers to your most pressing questions about psychotherapy
          </p>
        </div>

        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/mosaic-mural-colorful.jpeg"
            alt="Colorful mosaic mural with a profile of a face and a bicycle"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
