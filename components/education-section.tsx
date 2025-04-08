"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen, FileCheck } from "lucide-react"
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

export default function EducationSection() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Just one mosaic decoration in the bottom right */}
      <div className="absolute bottom-12 right-12">
        <MosaicDecoration className="transform rotate-180" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
              <span className="relative z-10">QUALIFICATIONS</span>
            </span>
            <div className="h-px w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif text-green-700 mb-4">Education & Credentials</h2>
          <div className="h-1 w-60 mx-auto rounded-full bg-yellow-400 mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Professional training and ongoing development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-2xl font-serif text-gray-900">Education</h3>
            </div>

            <ul className="space-y-6">
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Ph.D in Clinical Psychology</p>
                    <p className="text-gray-700">University of California, Berkeley</p>
                    <p className="text-gray-500 text-sm">2015</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Pre-doctoral Internship</p>
                    <p className="text-gray-700">UCSF Medical Center</p>
                    <p className="text-gray-500 text-sm">2014-2015</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Post-doctoral Fellowship</p>
                    <p className="text-gray-700">Stanford University Counseling Center</p>
                    <p className="text-gray-500 text-sm">2015-2016</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">M.A. in Clinical Psychology</p>
                    <p className="text-gray-700">University of California, Berkeley</p>
                    <p className="text-gray-500 text-sm">2012</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">B.A. in Psychology</p>
                    <p className="text-gray-700">University of California, Los Angeles</p>
                    <p className="text-gray-500 text-sm">2010</p>
                  </div>
                </div>
              </li>
            </ul>
            
            {/* Mosaic Image Frame - at the bottom of the Education card */}
            <div className="pt-6 mt-6 relative">
              <div className="relative h-48 md:h-56 rounded-md overflow-hidden shadow-md">
                <Image 
                  src="/mosaic-bench.jpg" 
                  alt="Green mosaic tile pattern from Park Guell by Antonio Gaudi" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Credentials & Training */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Licensure */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <FileCheck className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-2xl font-serif text-gray-900">Licensure</h3>
              </div>

              <ul className="space-y-4">
                <li>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold mt-1">•</span>
                    <div>
                      <p className="font-medium text-gray-900">Licensed Psychologist</p>
                      <p className="text-gray-700">California Board of Psychology</p>
                      <p className="text-gray-500 text-sm">License #PSY35202</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Specialized Training */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-2xl font-serif text-gray-900">Specialized Training</h3>
              </div>

              <ul className="space-y-4">
                <li>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold mt-1">•</span>
                    <p className="text-gray-700">Certified in Cognitive Processing Therapy (CPT) for PTSD</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold mt-1">•</span>
                    <p className="text-gray-700">Advanced training in Acceptance and Commitment Therapy (ACT)</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold mt-1">•</span>
                    <p className="text-gray-700">Level 2 trained in Internal Family Systems (IFS)</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold mt-1">•</span>
                    <p className="text-gray-700">Trained in Dialectical Behavior Therapy (DBT)</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Professional Memberships */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-2xl font-serif text-gray-900">Professional Memberships</h3>
              </div>

              <ul className="space-y-4">
                <li>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold mt-1">•</span>
                    <p className="text-gray-700">American Psychological Association (APA)</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold mt-1">•</span>
                    <p className="text-gray-700">California Psychological Association (CPA)</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold mt-1">•</span>
                    <p className="text-gray-700">Association for Contextual Behavioral Science (ACBS)</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
