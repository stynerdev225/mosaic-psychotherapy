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

export default function AboutHero() {
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
              <span className="relative z-10">OUR STORY</span>
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
            About Mosaic Psychotherapy
          </motion.h1>
          <div className="h-1 w-80 mx-auto rounded-full bg-yellow-400 mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/mosaic-art.jpeg"
              alt="Colorful mosaic artwork representing the diverse pieces that make up our lives"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Our Philosophy</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Mosaic Psychotherapy, we believe that each person is made up of many different parts—like pieces of a
              mosaic—that come together to create a unique whole. Our experiences, values, strengths, and challenges all
              contribute to who we are.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Just as a mosaic is created by bringing together distinct pieces to form something beautiful, therapy is a
              process of exploring, understanding, and integrating the different parts of ourselves. Sometimes these
              parts may feel disconnected or in conflict with each other. Our approach helps you bring awareness,
              compassion, and harmony to these different aspects of your experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to providing evidence-based therapy that honors your unique story and supports you in
              creating a life that feels meaningful, connected, and aligned with your values.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
