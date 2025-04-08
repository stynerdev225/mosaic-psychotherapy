"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar, Mail, MessageSquare } from "lucide-react"

export default function GetStartedSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
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
              <span className="relative z-10">BEGIN YOUR JOURNEY</span>
            </span>
            <div className="h-px w-16 sm:w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-green-700 mb-3 md:mb-4">
            Get Started
          </h2>
          <div className="h-1 w-32 sm:w-40 md:w-60 mx-auto rounded-full bg-yellow-400 mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            Taking the first step toward therapy is an act of courage and self-care. We're here to make the process
            simple.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="bg-green-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-3 sm:mb-4 text-gray-900">1. Reach Out</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              Fill out our contact form or send us an email. Let us know what you're looking for in therapy and any
              questions you might have.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-green-700 font-medium hover:text-green-800 transition-colors text-sm sm:text-base"
            >
              Contact us <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="bg-green-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-3 sm:mb-4 text-gray-900">
              2. Free Consultation
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              We'll schedule a free 15-minute phone consultation to discuss your needs and determine if we're a good fit
              for each other.
            </p>
            <Link
              href="/faqs"
              className="inline-flex items-center text-green-700 font-medium hover:text-green-800 transition-colors text-sm sm:text-base"
            >
              Learn more <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="bg-green-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-3 sm:mb-4 text-gray-900">3. Begin Sessions</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              Schedule your first session and begin your journey. We'll work together to create a personalized treatment
              plan that aligns with your goals.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center text-green-700 font-medium hover:text-green-800 transition-colors text-sm sm:text-base"
            >
              View services <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </motion.div>
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-6 sm:p-10 md:p-16 text-center text-white shadow-xl"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-4 sm:mb-6">
            Take the First Step Towards Healing
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
            Contact Mosaic Psychotherapy. Virtual therapy sessions are available throughout California. Reach out today
            to schedule your free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-800 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-yellow-400 hover:text-white transition-colors shadow-md text-sm sm:text-base"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
