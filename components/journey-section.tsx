"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section heading with 3D effect badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
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
              <span className="relative z-10">YOUR PATH</span>
            </span>
            <div className="h-px w-16 sm:w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-green-700 mb-3 md:mb-4">
            Your Journey to Healing Starts Here
          </h2>
          <div className="h-1 w-40 sm:w-60 md:w-80 mx-auto rounded-full bg-yellow-400"></div>
        </motion.div>

        <div ref={containerRef} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 md:mb-6 text-gray-900 leading-tight">
              Understanding Your Unique Path
            </h3>
            <p className="mb-4 md:mb-6 text-gray-700 leading-relaxed">
              At Mosaic Psychotherapy, we understand that people are made up of many parts–past and present experiences,
              values, pain, growth, and hope. Therapy here is a place to explore those parts with compassion and
              curiosity, and to move toward a life that feels more grounded and aligned.
            </p>
            <p className="mb-3 md:mb-4 text-gray-800 font-medium">We offer individual therapy that is:</p>
            <ul className="space-y-2 md:space-y-3">
              {[
                "Rooted in evidence-based approaches",
                "Flexible and responsive to your needs",
                "Focused on your values, goals, and lived experience",
                "Delivered virtually for your convenience and comfort",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex items-start gap-2 md:gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-3 md:p-4 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden">
              <Image
                src="/journey-path.png"
                alt="Person walking on a road symbolizing a journey"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
