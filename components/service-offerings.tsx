"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ServiceOfferings() {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    individualTherapyDetails: false,
    clinicalConsultationDetails: false
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <section className="py-24 px-6 bg-white" id="services">
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
              <span className="relative z-10">OUR OFFERINGS</span>
            </span>
            <div className="h-px w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif text-green-700 mb-4">Services We Provide</h2>
          <div className="h-1 w-60 mx-auto rounded-full bg-yellow-400 mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            At Mosaic Psychotherapy, we are dedicated to offering a range of services to meet diverse mental health
            needs. Serving clients throughout California.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Individual Therapy - Horizontal Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left side - Image */}
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <Image
                src="/therapy-session-man.png"
                alt="Therapy session with a client and therapist in a bright office setting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Enhanced 3D Title with Background for Readability */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center px-4 py-3 rounded-lg bg-black/30 backdrop-blur-sm"
                >
                  <h3 className="text-4xl font-serif mb-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] relative">
                    <span className="absolute -left-1 -top-1 text-green-900/20 blur-[1px]">Individual Therapy</span>
                    <span className="absolute -left-0.5 -top-0.5 text-green-900/30 blur-[0.5px]">
                      Individual Therapy
                    </span>
                    <span className="relative">Individual Therapy</span>
                  </h3>
                </motion.div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="md:w-3/5 p-8 flex flex-col">
              {/* Package name and price */}
              <div className="bg-gradient-to-r from-green-700 to-green-600 p-4 -mt-2 -mx-8 mb-6 shadow-md">
                <h3 className="text-2xl md:text-3xl font-bold text-white flex flex-col md:flex-row md:justify-between md:items-center">
                  <span>Individual Therapy</span>
                  <span className="bg-yellow-400 text-green-900 px-4 py-1 rounded-full text-xl font-bold shadow-sm mt-2 md:mt-0 inline-block md:inline">
                    $250/session
                  </span>
                </h3>
              </div>
              {/* Added subtitle with yellow underline */}
              <h3 className="text-2xl font-serif mb-2 text-gray-900">Personalized Therapeutic Support</h3>
              <div className="flex items-center mb-6">
                <span className="text-gray-600 italic">Collaborative and values-based approach</span>
                <div className="ml-2 h-0.5 w-16 bg-yellow-400 rounded-full"></div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Individual therapy at Mosaic Psychotherapy is a collaborative and personalized process that supports
                meaningful growth and emotional well-being.
              </p>

              {/* Mobile-only collapsible content */}
              <div className="md:hidden">
                <button 
                  onClick={() => toggleSection('individualTherapyDetails')}
                  className="flex items-center justify-between w-full py-2 px-4 bg-green-50 rounded-lg mb-4"
                >
                  <span className="font-medium text-green-700">More details</span>
                  {expandedSections.individualTherapyDetails ? 
                    <ChevronUp className="h-5 w-5 text-green-700" /> : 
                    <ChevronDown className="h-5 w-5 text-green-700" />
                  }
                </button>
                
                {expandedSections.individualTherapyDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6"
                  >
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Sessions are flexible and responsive to each client's needs—whether navigating life transitions, 
                      processing difficult experiences, or working through patterns that feel stuck.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Grounded in a values-based framework, therapy focuses on building insight, fostering resilience, and
                      taking actionable steps toward a more connected and meaningful life.
                    </p>

                    <div className="h-px w-full bg-gray-100 my-6"></div>

                    <h4 className="text-lg font-medium text-gray-900 mb-2">Virtual Sessions</h4>
                    <div className="flex items-center mb-4">
                      <span className="text-gray-600 italic text-sm">Accessible and convenient care</span>
                      <div className="ml-2 h-0.5 w-12 bg-yellow-400 rounded-full"></div>
                    </div>

                    <p className="text-gray-700">
                      Mosaic Psychotherapy currently provides virtual therapy sessions in California through a secure and
                      confidential telehealth platform—making care accessible, flexible, and convenient.
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Desktop-only always visible content */}
              <div className="hidden md:block">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Sessions are flexible and responsive to each client's needs—whether navigating life transitions, 
                  processing difficult experiences, or working through patterns that feel stuck.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Grounded in a values-based framework, therapy focuses on building insight, fostering resilience, and
                  taking actionable steps toward a more connected and meaningful life.
                </p>

                <div className="h-px w-full bg-gray-100 my-6"></div>

                {/* Added subtitle with yellow underline */}
                <h4 className="text-lg font-medium text-gray-900 mb-2">Virtual Sessions</h4>
                <div className="flex items-center mb-4">
                  <span className="text-gray-600 italic text-sm">Accessible and convenient care</span>
                  <div className="ml-2 h-0.5 w-12 bg-yellow-400 rounded-full"></div>
                </div>

                <p className="text-gray-700">
                  Mosaic Psychotherapy currently provides virtual therapy sessions in California through a secure and
                  confidential telehealth platform—making care accessible, flexible, and convenient.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Clinical Consultation - Horizontal Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left side - Image */}
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <Image
                src="/therapy-session-women.png"
                alt="Two women in a professional consultation session with stylish pink chairs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Enhanced 3D Title with Background for Readability */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center px-4 py-3 rounded-lg bg-black/30 backdrop-blur-sm"
                >
                  <h3 className="text-4xl font-serif mb-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] relative">
                    <span className="absolute -left-1 -top-1 text-green-900/20 blur-[1px]">Clinical Consultation</span>
                    <span className="absolute -left-0.5 -top-0.5 text-green-900/30 blur-[0.5px]">
                      Clinical Consultation
                    </span>
                    <span className="relative">Clinical Consultation</span>
                  </h3>
                </motion.div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="md:w-3/5 p-8 flex flex-col">
              {/* Package name and price */}
              <div className="bg-gradient-to-r from-green-700 to-green-600 p-4 -mt-2 -mx-8 mb-6 shadow-md">
                <h3 className="text-2xl md:text-3xl font-bold text-white flex flex-col md:flex-row md:justify-between md:items-center">
                  <span>Clinical Consultation</span>
                  <span className="bg-green-100 text-green-900 px-4 py-1 rounded-full text-xl font-bold shadow-sm mt-2 md:mt-0 inline-block md:inline">
                    Fee by arrangement
                  </span>
                </h3>
              </div>
              {/* Added subtitle with yellow underline */}
              <h3 className="text-2xl font-serif mb-2 text-gray-900">Professional Development Support</h3>
              <div className="flex items-center mb-6">
                <span className="text-gray-600 italic">For mental health professionals</span>
                <div className="ml-2 h-0.5 w-16 bg-yellow-400 rounded-full"></div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Ian Mosier offers professional clinical consultation services for therapists, counselors, and other
                mental health professionals.
              </p>

              {/* Mobile-only collapsible content */}
              <div className="md:hidden">
                <button 
                  onClick={() => toggleSection('clinicalConsultationDetails')}
                  className="flex items-center justify-between w-full py-2 px-4 bg-green-50 rounded-lg mb-4"
                >
                  <span className="font-medium text-green-700">More details</span>
                  {expandedSections.clinicalConsultationDetails ? 
                    <ChevronUp className="h-5 w-5 text-green-700" /> : 
                    <ChevronDown className="h-5 w-5 text-green-700" />
                  }
                </button>
                
                {expandedSections.clinicalConsultationDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6"
                  >
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Consultations can focus on case conceptualization, treatment planning,
                      therapeutic approaches, or professional development.
                    </p>

                    <div className="h-px w-full bg-gray-100 my-6"></div>

                    <h4 className="text-lg font-medium text-gray-900 mb-2">Flexible Arrangements</h4>
                    <div className="flex items-center mb-4">
                      <span className="text-gray-600 italic text-sm">Tailored to your needs</span>
                      <div className="ml-2 h-0.5 w-12 bg-yellow-400 rounded-full"></div>
                    </div>

                    <p className="text-gray-700">
                      I welcome inquiries for both one-time and ongoing clinical consultations. Fees are arranged based on the
                      nature and frequency of consultation needed. Please contact me directly to discuss your specific
                      consultation needs.
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Desktop-only always visible content */}
              <div className="hidden md:block">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Consultations can focus on case conceptualization, treatment planning,
                  therapeutic approaches, or professional development.
                </p>

                <div className="h-px w-full bg-gray-100 my-6"></div>

                {/* Added subtitle with yellow underline */}
                <h4 className="text-lg font-medium text-gray-900 mb-2">Flexible Arrangements</h4>
                <div className="flex items-center mb-4">
                  <span className="text-gray-600 italic text-sm">Tailored to your needs</span>
                  <div className="ml-2 h-0.5 w-12 bg-yellow-400 rounded-full"></div>
                </div>

                <p className="text-gray-700">
                  I welcome inquiries for both one-time and ongoing clinical consultations. Fees are arranged based on the
                  nature and frequency of consultation needed. Please contact me directly to discuss your specific
                  consultation needs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
