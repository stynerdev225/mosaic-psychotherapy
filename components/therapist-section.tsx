"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TherapistSection() {
  return (
    <section className="py-24 px-6 bg-white">
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
              <span className="relative z-10">MEET YOUR THERAPIST</span>
            </span>
            <div className="h-px w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif text-green-700 mb-4">Dr. Ian Mosier, PhD, PSY35202</h2>
          <div className="h-1 w-60 mx-auto rounded-full bg-yellow-400 mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">Licensed Clinical Psychologist</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              Hello! I'm Dr. Ian Mosier, the founder of Mosaic Psychotherapy. I'm a licensed clinical psychologist
              specializing in evidence-based approaches to treating anxiety, depression, trauma, and life transitions.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My approach to therapy is warm, collaborative, and grounded in science. I believe in creating a safe,
              non-judgmental space where you can explore your thoughts, feelings, and experiences. Together, we'll work
              to understand patterns that may be keeping you stuck and develop practical strategies to help you move
              toward a more fulfilling life.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I draw from several evidence-based approaches, including Acceptance and Commitment Therapy (ACT), Internal
              Family Systems (IFS), and Cognitive Processing Therapy (CPT). I tailor my approach to meet your unique
              needs and goals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outside of my clinical work, I enjoy hiking in the Bay Area, practicing mindfulness meditation, and
              exploring local farmers' markets. I believe in practicing the same self-care and values-based living that
              I encourage in my clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/dr-ian.png"
                alt="Dr. Ian Mosier, Clinical Psychologist"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
