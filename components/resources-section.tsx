"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function ResourcesSection() {
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
              <span className="relative z-10">ADDITIONAL SUPPORT</span>
            </span>
            <div className="h-px w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif text-green-700 mb-4">Mental Health Resources</h2>
          <div className="h-1 w-60 mx-auto rounded-full bg-yellow-400 mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Helpful organizations and services for additional mental health support
          </p>
        </motion.div>

        {/* Mosaic Layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* NAMI Tile - Large tile spanning 7 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 relative h-[300px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="People in a support group circle"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
              <h3 className="text-2xl font-serif text-white mb-2">National Alliance on Mental Illness (NAMI)</h3>
              <p className="text-white mb-6">A comprehensive resource for mental health education and support.</p>
              <Link
                href="https://www.nami.org/findsupport/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-green-800 transition-colors"
              >
                Find Support
              </Link>
            </div>
          </motion.div>

          {/* Access - San Mateo Tile - Medium tile spanning 5 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-5 relative h-[300px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Person reaching out for help"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
              <h3 className="text-2xl font-serif text-white mb-2">Access - San Mateo</h3>
              <p className="text-white mb-6">Assistance in finding mental health and/or substance use services</p>
              <Link
                href="https://www.smchealth.org/contact-info-pod/access-call-center"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-green-800 transition-colors"
              >
                Contact Access
              </Link>
            </div>
          </motion.div>

          {/* SAMHSA Tile - Medium tile spanning 5 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-5 relative h-[300px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Person talking to a counselor"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
              <h3 className="text-2xl font-serif text-white mb-2">Substance Abuse and Mental Health Services</h3>
              <p className="text-white mb-6">A resource for finding treatment and support services.</p>
              <Link
                href="https://www.samhsa.gov/find-help"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-green-800 transition-colors"
              >
                Find Help
              </Link>
            </div>
          </motion.div>

          {/* Psychology Today Tile - Large tile spanning 7 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 relative h-[300px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Therapist taking notes during session"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
              <h3 className="text-2xl font-serif text-white mb-2">Psychology Today</h3>
              <p className="text-white mb-6">Find therapists and read articles on various mental health topics.</p>
              <Link
                href="https://www.psychologytoday.com/us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-green-800 transition-colors"
              >
                Find Therapists
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
