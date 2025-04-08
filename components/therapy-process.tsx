"use client"

import { motion } from "framer-motion"
import { MessageSquare, ClipboardCheck, Compass, Heart, ArrowRight } from "lucide-react"

export default function TherapyProcess() {
  const steps = [
    {
      title: "Initial Consultation",
      description:
        "We'll start with a free 15-minute phone consultation to discuss your needs and determine if we're a good fit for working together.",
      icon: MessageSquare,
    },
    {
      title: "Assessment",
      description:
        "In our first few sessions, we'll explore your current challenges, history, and goals to develop a shared understanding of what brings you to therapy.",
      icon: ClipboardCheck,
    },
    {
      title: "Collaborative Planning",
      description:
        "Together, we'll develop a flexible treatment plan that addresses your specific needs and incorporates approaches that resonate with you.",
      icon: Compass,
    },
    {
      title: "Ongoing Therapy",
      description:
        "Regular 50-minute sessions provide space for exploration, skill-building, and growth. We'll regularly check in on progress and adjust our approach as needed.",
      icon: Heart,
    },
  ]

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
              <span className="relative z-10">WHAT TO EXPECT</span>
            </span>
            <div className="h-px w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif text-green-700 mb-4">The Therapy Process</h2>
          <div className="h-1 w-60 mx-auto rounded-full bg-yellow-400 mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Your journey from first contact to ongoing care
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-green-100 hidden md:block"></div>

          {/* Process steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-12`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg border border-green-100">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-green-700" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-serif mb-2 text-gray-900">{step.title}</h3>
                    <div className={`flex items-center mb-4 ${index % 2 === 0 ? "" : "justify-end"}`}>
                      <span className="text-gray-600 italic text-sm">Step {index + 1}</span>
                      <div className="mx-2 h-0.5 w-12 bg-yellow-400 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Most clients attend weekly sessions, especially at the beginning of therapy. As you progress, we may adjust
            the frequency based on your needs and goals. Therapy duration varies—some clients benefit from short-term
            work (8-12 sessions), while others prefer longer-term support.
          </p>
          <div className="inline-flex items-center text-green-700 font-medium hover:text-green-800 transition-colors cursor-pointer group">
            Learn more about what to expect{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
