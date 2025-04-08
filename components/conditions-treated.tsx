"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ConditionsTreated() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null)

  const toggleCategory = (index: number) => {
    if (expandedCategory === index) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(index)
    }
  }

  const categories = [
    {
      title: "Anxiety",
      description: "Support for various forms of anxiety that may be affecting your daily life.",
      items: [
        "Generalized anxiety and persistent worry",
        "Social anxiety and performance concerns",
        "Panic attacks and panic disorder",
        "Health anxiety and illness concerns",
        "Specific phobias and fears",
      ],
    },
    {
      title: "Depression",
      description: "Help for navigating depressive symptoms and finding your way back to joy and meaning.",
      items: [
        "Major depressive disorder",
        "Persistent depressive disorder",
        "Low motivation and energy",
        "Loss of interest in activities",
        "Feelings of worthlessness or excessive guilt",
      ],
    },
    {
      title: "Trauma & PTSD",
      description: "Healing from past traumatic experiences and building resilience.",
      items: [
        "Post-traumatic stress disorder (PTSD)",
        "Complex trauma and childhood experiences",
        "Acute stress reactions",
        "Trauma from accidents or medical events",
        "Recovery from abusive relationships",
      ],
    },
    {
      title: "Life Transitions",
      description: "Support during significant life changes and periods of uncertainty.",
      items: [
        "Career changes and work stress",
        "Relationship beginnings and endings",
        "Moving to new locations",
        "Identity exploration and changes",
        "Major life decisions and crossroads",
      ],
    },
    {
      title: "Identity & Personal Growth",
      description: "Exploration of who you are and who you want to become.",
      items: [
        "Cultural and racial identity",
        "Gender and sexual orientation",
        "Values clarification and life purpose",
        "Self-esteem and self-worth",
        "Personal development and growth",
      ],
    },
    {
      title: "Relationship Challenges",
      description: "Help with navigating interpersonal difficulties and patterns.",
      items: [
        "Communication difficulties",
        "Boundary setting and maintenance",
        "Recurring relationship patterns",
        "Family of origin issues",
        "Grief and loss of relationships",
      ],
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-50 to-white">
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
              <span className="relative z-10">AREAS OF FOCUS</span>
            </span>
            <div className="h-px w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif text-green-700 mb-4">Conditions We Treat</h2>
          <div className="h-1 w-60 mx-auto rounded-full bg-yellow-400 mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Specialized support for a range of mental health concerns
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="p-8 cursor-pointer" onClick={() => toggleCategory(index)}>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-serif text-gray-900">{category.title}</h3>
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                    {expandedCategory === index ? (
                      <ChevronUp className="h-5 w-5 text-green-700" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-green-700" />
                    )}
                  </div>
                </div>
                <div className="flex items-center my-3">
                  <span className="text-gray-600 italic text-sm">Specialized support</span>
                  <div className="ml-2 h-0.5 w-12 bg-yellow-400 rounded-full"></div>
                </div>
                <p className="text-gray-700">{category.description}</p>
              </div>

              {expandedCategory === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-8 pb-8"
                >
                  <div className="pt-4 border-t border-gray-100">
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-yellow-400 font-bold mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 italic">
            This is not an exhaustive list. If you're experiencing something not mentioned here, please reach out to
            discuss how we might work together.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
