"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function MosaicArtSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
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
            className="mb-6 md:mb-8"
          >
            <span className="inline-block px-4 sm:px-6 py-2 bg-green-700/10 text-green-700 rounded-full text-xs sm:text-sm font-semibold mb-2 shadow-lg relative overflow-hidden backdrop-blur-sm border border-green-700/20">
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-700/10 mix-blend-overlay"></span>
              <span className="relative z-10">THE MOSAIC METAPHOR</span>
            </span>
            <div className="h-px w-16 sm:w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-green-700 mb-3 md:mb-4">
            Beauty in Every Piece
          </h2>
          <div className="h-1 w-32 sm:w-40 md:w-60 mx-auto rounded-full bg-yellow-400 mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Like a mosaic artwork, each of us is made up of many different pieces that come together to create something
            unique and beautiful
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 md:mb-6 text-gray-900 leading-tight">
              The Art of Healing
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
              At Mosaic Psychotherapy, we believe that healing is an art form. Just as a mosaic artist carefully places
              each piece to create a cohesive whole, therapy is about understanding how your experiences, thoughts,
              feelings, and values fit together.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
              Some pieces may be bright and vibrant, while others might feel broken or misplaced. Together, we explore
              these pieces with compassion and curiosity, finding beauty in the complexity and creating a more
              integrated sense of self.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The mosaic metaphor reminds us that healing doesn't mean erasing our challenges or difficult
              experiences—it means incorporating them into a meaningful whole that honors your unique story and
              resilience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/mosaic-lily.jpeg"
                alt="Beautiful orange lily flower mosaic artwork"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 sm:p-4 rounded-lg shadow-lg border border-gray-100 max-w-[200px] sm:max-w-[250px]">
              <p className="text-xs sm:text-sm text-gray-600 italic">
                Like this mosaic lily, each person contains unique patterns and colors that create something beautiful
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
