"use client"

import { motion } from "framer-motion"

export default function TermsHero() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-green-800 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Please read these terms carefully before using our website and services.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
