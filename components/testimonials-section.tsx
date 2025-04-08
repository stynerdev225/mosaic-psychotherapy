"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Working with Mosaic Psychotherapy has been transformative. I've gained tools to manage my anxiety and have developed a deeper understanding of myself.",
      author: "Sarah K.",
      location: "Oakland, CA",
    },
    {
      quote:
        "I was hesitant about virtual therapy, but my experience has been incredible. My therapist creates such a safe and supportive space, even through a screen.",
      author: "Michael T.",
      location: "San Francisco, CA",
    },
    {
      quote:
        "After years of feeling stuck, I finally feel like I'm moving forward. The evidence-based approach has made all the difference for me.",
      author: "Jamie L.",
      location: "Berkeley, CA",
    },
    {
      quote:
        "The convenience of virtual sessions combined with the quality of care has exceeded my expectations. I'm so grateful I found Mosaic Psychotherapy.",
      author: "Alex R.",
      location: "San Francisco, CA",
    },
    {
      quote:
        "My therapist at Mosaic truly listens and provides practical strategies that have helped me navigate a difficult transition in my life.",
      author: "Taylor N.",
      location: "Oakland, CA",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Top Right Mosaic - Diagonal */}
      <div className="absolute top-12 right-12 hidden sm:block">
        <div className="grid grid-cols-2 gap-0.5 w-12 sm:w-16 h-12 sm:h-16">
          <div className="bg-yellow-400 rounded-sm"></div>
          <div className="bg-transparent"></div>
          <div className="bg-transparent"></div>
          <div className="bg-green-700 rounded-sm"></div>
        </div>
      </div>

      {/* Bottom Left Mosaic - Triangle */}
      <div className="absolute bottom-12 left-12 hidden sm:block">
        <div className="grid grid-cols-2 gap-0.5 w-12 sm:w-16 h-12 sm:h-16">
          <div className="bg-transparent"></div>
          <div className="bg-green-500 rounded-sm"></div>
          <div className="bg-yellow-400 rounded-sm"></div>
          <div className="bg-green-700 rounded-sm"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
              <span className="relative z-10">CLIENT EXPERIENCES</span>
            </span>
            <div className="h-px w-16 sm:w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-green-700 mb-3 md:mb-4">
            Testimonials
          </h2>
          <div className="h-1 w-32 sm:w-40 md:w-60 mx-auto rounded-full bg-yellow-400 mb-4 md:mb-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">Hear from our clients</p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-lg border-2 border-green-900 text-center relative"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 rounded-full p-2 sm:p-3 shadow-lg">
              <Quote className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 italic mb-6 md:mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].location}</p>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-6 md:mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
