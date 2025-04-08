"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

export default function ConsultationCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100"
        >
          <div className="grid md:grid-cols-5">
            {/* Left decorative column - mosaic pattern */}
            <div className="hidden md:block md:col-span-2 bg-green-700 relative">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-4 h-full w-full">
                  {Array.from({ length: 80 }).map((_, i) => (
                    <div
                      key={i}
                      className={`
                        ${i % 7 === 0 ? "bg-yellow-400" : ""}
                        ${i % 5 === 0 ? "bg-green-500" : ""}
                        ${i % 3 === 0 ? "bg-green-600" : ""}
                        ${i % 11 === 0 ? "bg-transparent" : ""}
                        ${!(i % 7 === 0 || i % 5 === 0 || i % 3 === 0 || i % 11 === 0) ? "bg-green-800" : ""}
                      `}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Calendar className="h-24 w-24 text-white opacity-80" />
              </div>
            </div>

            {/* Right content column */}
            <div className="p-8 md:p-12 md:col-span-3 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-serif text-green-700 mb-2">Begin Your Journey Today</h2>
                <div className="flex items-center mb-6">
                  <span className="text-gray-600 italic">Take the first step toward healing</span>
                  <div className="ml-2 h-0.5 w-16 bg-yellow-400 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  If you're navigating a difficult chapter or simply feeling called to explore what's next, you don't
                  have to do it alone. Reach out for a free consultation to see if working together feels like a good
                  fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-medium transition-colors group"
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/faqs"
                    className="inline-flex items-center justify-center border border-green-700 text-green-700 hover:bg-green-50 px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
