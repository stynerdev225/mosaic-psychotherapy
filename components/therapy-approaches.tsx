"use client"

import { motion } from "framer-motion"
import { Heart, Puzzle, Layers, Brain, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TherapyApproaches() {
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if we're on mobile when component mounts and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkIfMobile()
    
    // Set up event listener for window resize
    window.addEventListener('resize', checkIfMobile)
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const approaches = [
    {
      title: "Acceptance and Commitment Therapy (ACT)",
      description:
        "Learn to accept difficult thoughts and feelings while committing to actions that align with your values. ACT helps you develop psychological flexibility and live a more meaningful life.",
      icon: Heart,
    },
    {
      title: "Internal Family Systems (IFS)",
      description:
        "Explore the different parts of yourself with compassion and curiosity. IFS helps you understand internal conflicts and heal wounded parts to create greater harmony within.",
      icon: Puzzle,
    },
    {
      title: "Cognitive Processing Therapy (CPT)",
      description:
        "Process traumatic experiences by examining how they've affected your thoughts and beliefs. CPT helps you develop more balanced perspectives and reduce trauma symptoms.",
      icon: Brain,
    },
    {
      title: "Dialectical Behavior Therapy (DBT) Skills",
      description:
        "Build skills in mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. DBT helps you manage intense emotions and improve relationships.",
      icon: Layers,
    },
    {
      title: "Written Exposure Therapy",
      description:
        "Process traumatic memories through structured writing exercises. This approach helps reduce PTSD symptoms with fewer sessions than traditional exposure therapies.",
      icon: Sparkles,
    },
  ]

  // Split approaches into top row (3 cards) and bottom row (2 cards) for desktop view
  const topRowApproaches = approaches.slice(0, 3)
  const bottomRowApproaches = approaches.slice(3)

  return (
    <section className="py-24 px-6 bg-white" id="approaches">
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
              <span className="relative z-10">THERAPEUTIC METHODS</span>
            </span>
            <div className="h-px w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif text-green-700 mb-4">Our Approaches</h2>
          <div className="h-1 w-60 mx-auto rounded-full bg-yellow-400 mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Evidence-based methods tailored to your unique needs
          </p>
        </motion.div>

        {/* Mobile View - Accordion */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full">
            {approaches.map((approach, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-100 rounded-xl mb-4 overflow-hidden shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <approach.icon className="h-5 w-5 text-green-700" />
                    </div>
                    <h3 className="text-xl font-serif text-gray-900 text-left">{approach.title}</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 pb-6 bg-white">
                  <div className="flex items-center mb-4 ml-14">
                    <span className="text-gray-600 italic text-sm">Evidence-based approach</span>
                    <div className="ml-2 h-0.5 w-12 bg-yellow-400 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 ml-14">{approach.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop View - Cards */}
        <div className="hidden md:block">
          {/* Top row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {topRowApproaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <approach.icon className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-2xl font-serif mb-2 text-gray-900">{approach.title}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-gray-600 italic text-sm">Evidence-based approach</span>
                  <div className="ml-2 h-0.5 w-12 bg-yellow-400 rounded-full"></div>
                </div>
                <p className="text-gray-700">{approach.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom row - 2 centered cards */}
          <div className="flex justify-center gap-8">
            {bottomRowApproaches.map((approach, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all max-w-md"
              >
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <approach.icon className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-2xl font-serif mb-2 text-gray-900">{approach.title}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-gray-600 italic text-sm">Evidence-based approach</span>
                  <div className="ml-2 h-0.5 w-12 bg-yellow-400 rounded-full"></div>
                </div>
                <p className="text-gray-700">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 mb-6">
            Dr. Ian integrates these approaches based on your specific needs and goals. Therapy is collaborative, and
            we'll work together to find the methods that resonate most with you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-green-700 font-medium hover:text-green-800 transition-colors"
          >
            Learn more about our approach <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
