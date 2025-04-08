"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  const faqs = [
    {
      question: "How do virtual therapy sessions work?",
      answer:
        "Virtual therapy sessions take place via a secure, HIPAA-compliant video platform. You'll receive a link to join your session at the scheduled time. All you need is a private space, a reliable internet connection, and a device with a camera and microphone. The therapeutic process is the same as in-person therapy, just without the commute!",
    },
    {
      question: "How often will we meet?",
      answer:
        "Most clients begin with weekly sessions, which provides consistency and momentum in the therapeutic process. As you progress, we may adjust the frequency to biweekly or monthly sessions. The schedule is flexible and can be adjusted based on your needs and goals.",
    },
    {
      question: "How long does therapy typically last?",
      answer:
        "The duration of therapy varies widely depending on your goals, the complexity of the issues you're addressing, and your pace of progress. Some clients achieve their goals in 8-12 sessions, while others benefit from longer-term support. We'll regularly review your progress and discuss the timeline that makes sense for you.",
    },
    {
      question: "What if I need to cancel or reschedule a session?",
      answer:
        "We understand that life happens. We request at least 24 hours' notice for cancellations or rescheduling to avoid being charged for the session. Emergencies are, of course, considered on a case-by-case basis.",
    },
    {
      question: "Is everything I share confidential?",
      answer:
        "Confidentiality is a cornerstone of therapy. What you share remains private, with a few legal exceptions: if there is imminent risk of harm to yourself or others, suspected abuse of children or vulnerable adults, or in rare cases when records are court-ordered. These limitations to confidentiality will be discussed in detail during your first session.",
    },
    {
      question: "How do I know if therapy is working?",
      answer:
        "Progress in therapy can look different for each person. We'll establish clear goals early on and regularly check in on your progress. Signs of progress might include reduced symptom intensity, improved relationships, better coping skills, increased self-awareness, and movement toward your personal goals. We encourage open dialogue about what's working and what might need adjustment.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
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
              <span className="relative z-10">COMMON QUESTIONS</span>
            </span>
            <div className="h-px w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif text-green-700 mb-4">Frequently Asked Questions</h2>
          <div className="h-1 w-60 mx-auto rounded-full bg-yellow-400 mb-6"></div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
              >
                <h3 className="text-xl font-medium text-gray-900">{faq.question}</h3>
                <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-green-700" />
                  ) : (
                    <Plus className="h-5 w-5 text-green-700" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-700">{faq.answer}</p>
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
          <p className="text-gray-700">Have a question that's not answered here? Please don't hesitate to reach out.</p>
        </motion.div>
      </div>
    </section>
  )
}
