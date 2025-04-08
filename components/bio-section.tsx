"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BioSection() {
  return (
    <>
      {/* First Bio Section - Philosophy and Background */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
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
                <span className="relative z-10">ABOUT DR. IAN</span>
              </span>
              <div className="h-px w-20 bg-yellow-400/50 mx-auto"></div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-serif text-green-700 mb-4">Ian Mosier, PhD, PSY35202</h2>
            <div className="h-1 w-60 mx-auto rounded-full bg-yellow-400 mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/mosaic-tree.jpeg"
                alt="Mosaic artwork of a tree representing growth and interconnectedness"
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
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-serif text-gray-900 mb-2">Philosophy & Background</h3>
              <div className="flex items-center mb-6">
                <span className="text-gray-600 italic">The foundation of our approach</span>
                <div className="ml-2 h-0.5 w-16 bg-yellow-400 rounded-full"></div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Mosaic Psychotherapy, the work is guided by a belief that each person is made up of many parts,
                experiences, and stories—some clear, some painful, some still unfolding. Like pieces in a mosaic, these
                parts don't have to be perfect or polished to come together into something meaningful.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Ian Mosier is a Licensed Psychologist with deep experience supporting individuals through life
                transitions, trauma recovery, anxiety, depression, identity exploration, and emotional stuckness. He
                grew up in San Francisco and is a first-generation college graduate.
              </p>

              <p className="text-gray-700 leading-relaxed">
                After earning a B.A. in Psychology from San Francisco State University, he completed a Ph.D. in
                Counseling Psychology at Southern Illinois University Carbondale. Dr. Ian has provided care in a range
                of settings, including university counseling centers, school-based clinics, and shelters for survivors
                of intimate partner and sexual violence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Bio Section - Approach and Style */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 order-2 md:order-1"
            >
              <h3 className="text-2xl font-serif text-gray-900 mb-2">Therapeutic Approach</h3>
              <div className="flex items-center mb-6">
                <span className="text-gray-600 italic">Evidence-based and human-centered</span>
                <div className="ml-2 h-0.5 w-16 bg-yellow-400 rounded-full"></div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Ian's approach is grounded in evidence-based care and shaped by the belief that therapy should be
                collaborative, flexible, and deeply human. He draws primarily from Acceptance and Commitment Therapy
                (ACT) and Internal Family Systems (IFS), with tools from DBT, CPT, and Written Exposure Therapy
                integrated as needed.
              </p>

              <h3 className="text-2xl font-serif text-gray-900 mb-2">Cultural Sensitivity</h3>
              <div className="flex items-center mb-6">
                <span className="text-gray-600 italic">Honoring diverse identities</span>
                <div className="ml-2 h-0.5 w-16 bg-yellow-400 rounded-full"></div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                As someone who is both Sinhalese and White, Dr. Mosier understands the nuances of navigating multiple
                cultural identities. While he does not assume shared experience, he brings deep respect for the ways
                identity, culture, and history shape how people relate to themselves and others.
              </p>

              <h3 className="text-2xl font-serif text-gray-900 mb-2">Therapeutic Style</h3>
              <div className="flex items-center mb-6">
                <span className="text-gray-600 italic">Calm, attuned, and nonjudgmental</span>
                <div className="ml-2 h-0.5 w-16 bg-yellow-400 rounded-full"></div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Clients often describe him as calm, attuned, and nonjudgmental—someone who can hold both the depth of
                suffering and the hope for something better. He is committed to helping clients build emotional
                flexibility, develop self-compassion, and take action toward what matters most.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl order-1 md:order-2"
            >
              <Image
                src="/mosaic-detailed.jpeg"
                alt="Intricate mosaic artwork representing the complexity and beauty of human experience"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
