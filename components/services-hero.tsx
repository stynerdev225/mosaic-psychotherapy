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

export default function ServicesHero() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Just one mosaic decoration in the top right */}
      <div className="absolute top-12 right-12">
        <MosaicDecoration />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
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
              <span className="relative z-10">VIRTUAL THERAPY</span>
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
            Our Services
          </motion.h1>
          <div className="h-1 w-60 mx-auto rounded-full bg-yellow-400 mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-2">Evidence-Based Therapy</h2>
            <div className="flex items-center mb-6">
              <span className="text-gray-600 italic">Tailored to your unique needs</span>
              <div className="ml-2 h-0.5 w-16 bg-yellow-400 rounded-full"></div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Mosaic Psychotherapy, we provide evidence-based therapy services for adults across California. Our
              virtual therapy sessions offer the same quality care as in-person therapy, with the added convenience of
              connecting from the comfort of your own space.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dr. Ian Mosier specializes in helping individuals navigate life transitions, recover from trauma, manage
              anxiety and depression, explore identity questions, and move through emotional stuckness toward greater
              clarity and purpose.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All services are provided via secure, HIPAA-compliant video sessions, making quality mental health care
              accessible regardless of your location in California.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/dr-ian-outdoors.png"
              alt="Dr. Ian Mosier smiling outdoors in a natural setting with trees in the background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
