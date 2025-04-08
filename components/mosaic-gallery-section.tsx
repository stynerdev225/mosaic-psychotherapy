"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample mosaic images - these would be replaced with actual mosaic images
const mosaicImages = [
  {
    src: "/mosaic-lily.jpeg",
    alt: "Orange lily flower mosaic artwork",
    title: "The Beauty in Details",
    description:
      "Like this vibrant lily mosaic, therapy helps you appreciate the intricate details that make your story unique and meaningful.",
  },
  {
    src: "/mosaic-art.jpeg",
    alt: "Colorful abstract mosaic artwork",
    title: "Patterns of Growth",
    description:
      "In therapy, we discover patterns and connections that help make sense of your experiences and guide your path forward.",
  },
  {
    src: "/mosaic-tree.jpeg",
    alt: "Tree mosaic artwork representing growth and strength",
    title: "Roots & Resilience",
    description:
      "Like a mosaic tree with strong roots, therapy helps you build resilience and stability even through life's challenges.",
  },
  {
    src: "/mosaic-detailed.jpeg",
    alt: "Detailed intricate mosaic pattern",
    title: "Integration & Wholeness",
    description: "Therapy supports you in integrating different aspects of yourself into a cohesive, authentic whole.",
  },
  {
    src: "/mosaic-mural-colorful.jpeg",
    alt: "Colorful mosaic mural with vibrant patterns",
    title: "Your Unique Expression",
    description:
      "Each person's healing journey is as unique as a handcrafted mosaic, reflecting their individual experiences and strengths.",
  },
]

export default function MosaicGallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mosaicImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mosaicImages.length) % mosaicImages.length)
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-6xl mx-auto">
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
              <span className="relative z-10">MOSAIC INSPIRATION</span>
            </span>
            <div className="h-px w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-green-700 mb-4">Gallery of Healing</h2>
          <div className="h-1 w-60 mx-auto rounded-full bg-yellow-400 mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Mosaic art reminds us that beauty can emerge from broken pieces, just as growth can emerge from life's
            challenges
          </p>
        </motion.div>

        {/* Mosaic Gallery Carousel */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={mosaicImages[currentIndex].src || "/placeholder.svg"}
                alt={mosaicImages[currentIndex].alt}
                fill
                className="object-cover"
                priority={currentIndex === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-serif mb-4 text-gray-900">
                {mosaicImages[currentIndex].title}
              </h3>
              <div className="h-0.5 w-20 bg-yellow-400 mb-6"></div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                {mosaicImages[currentIndex].description}
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                In therapy, we honor all the pieces that make you who you are—the joys and sorrows, strengths and
                struggles, past and present. Together, we create space to explore these pieces with compassion, finding
                patterns and meaning that can guide you toward greater wholeness and well-being.
              </p>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevImage}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <div className="flex items-center gap-2">
              {mosaicImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextImage}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mosaic Tiles Grid - Responsive for mobile */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* These would be replaced with actual mosaic images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-md"
          >
            <Image src="/mosaic-lily.jpeg" alt="Orange lily mosaic artwork" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-md"
          >
            <Image src="/mosaic-art.jpeg" alt="Colorful mosaic artwork" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-md"
          >
            <Image src="/mosaic-tree.jpeg" alt="Tree mosaic artwork" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-md"
          >
            <Image src="/mosaic-detailed.jpeg" alt="Detailed mosaic artwork" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
