"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function WhatWeDoSection() {
  // Track which card is expanded (null means none)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  // Function to toggle a specific card
  const toggleCard = (cardIndex: number) => {
    if (expandedCard === cardIndex) {
      // If this card is already expanded, close it
      setExpandedCard(null)
    } else {
      // Otherwise, expand this card (and collapse any other)
      setExpandedCard(cardIndex)
    }
  }

  // Card data
  const cards = [
    {
      title: "Areas of Focus",
      image: "/map-compass.webp",
      imageAlt: "Hands holding a map and compass",
      intro:
        "You don't have to be in crisis to benefit from therapy. People come to Mosaic Psychotherapy for support with:",
      visibleItems: ["Feeling stuck or disconnected", "Navigating major life transitions"],
      expandedItems: [
        "Managing depression and anxiety",
        "Recovering from trauma",
        "Exploring identity or purpose",
        "Developing emotional resilience and self-compassion",
      ],
    },
    {
      title: "What Therapy Is Like Here",
      image: "/therapy-chair.png",
      imageAlt: "Comfortable leather therapy chair with plant",
      intro: 'Therapy is not about "fixing" you–it\'s about reconnecting with yourself in a deeper way.',
      visibleText: "Sessions are collaborative and conversational, grounded in trust and curiosity.",
      expandedText:
        "We'll work together to understand what's getting in the way, clarify what matters most to you, and help you take meaningful steps forward. Our approach emphasizes creating a safe space where you can explore your thoughts and feelings without judgment.",
    },
    {
      title: "Evidence-Based Care",
      image: "/therapist-presentation.webp",
      imageAlt: "Therapist presenting research on compassion",
      intro:
        "At Mosaic Psychotherapy, evidence-based care means drawing from therapeutic approaches that are grounded in research and adapted to each individual's unique needs.",
      visibleText: "Modalities include Acceptance and Commitment Therapy (ACT) and Internal Family Systems (IFS).",
      expandedText:
        "We also utilize Dialectical Behavior Therapy (DBT), Cognitive Processing Therapy (CPT), and Written Exposure Therapy. These approaches support clients in developing greater psychological flexibility, cultivating self-awareness, and taking meaningful steps toward healing and values-based living.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section heading with animated 3D badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
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
              <span className="relative z-10">OUR APPROACH</span>
            </span>
            <div className="h-px w-16 sm:w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-green-700 mb-3 md:mb-4">
            What We Do
          </h2>
          <div className="h-1 w-32 sm:w-40 md:w-60 mx-auto rounded-full bg-yellow-400 mb-4 md:mb-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">Support for the Whole You</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Render each card using the data array */}
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Image */}
              <div className="h-48 sm:h-56 md:h-64 relative rounded-t-2xl overflow-hidden">
                <Image src={card.image || "/placeholder.svg"} alt={card.imageAlt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <h3 className="text-xl sm:text-2xl font-serif text-white absolute bottom-4 left-0 w-full text-center drop-shadow-lg">
                  {card.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8 flex-grow flex flex-col">
                <p className="mb-4 text-sm sm:text-base text-gray-700">{card.intro}</p>

                {/* Always visible content */}
                {card.visibleItems ? (
                  <ul className="space-y-2 mb-4">
                    {card.visibleItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-400 font-bold">•</span>
                        <span className="text-sm sm:text-base text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm sm:text-base text-gray-700 mb-4">{card.visibleText}</p>
                )}

                {/* Expandable content - ONLY shows when this card is the expanded one */}
                {expandedCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4"
                  >
                    {card.expandedItems ? (
                      <ul className="space-y-2">
                        {card.expandedItems.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-yellow-400 font-bold">•</span>
                            <span className="text-sm sm:text-base text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm sm:text-base text-gray-700">{card.expandedText}</p>
                    )}
                  </motion.div>
                )}

                {/* Toggle button */}
                <button
                  onClick={() => toggleCard(index)}
                  className="mt-auto flex items-center justify-center gap-1 text-green-700 font-medium hover:text-green-800 transition-colors"
                >
                  {expandedCard === index ? (
                    <>
                      <span>Read less</span>
                      <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      <span>Read more</span>
                      <ChevronDown size={16} />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
