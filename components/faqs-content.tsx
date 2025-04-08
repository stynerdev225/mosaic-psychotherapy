"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Plus,
  Minus,
  Clock,
  CreditCard,
  Monitor,
  Brain,
  MessageSquare,
  HelpCircle,
  DollarSign,
  TrendingUp,
} from "lucide-react"

export default function FaqsContent() {
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
      question: "What are your business hours?",
      answer:
        "Therapy sessions are currently available on weekday evenings and Saturdays. This schedule is designed to offer greater flexibility for those balancing work, school, or other daytime commitments. All sessions are conducted virtually to make care as accessible and convenient as possible.",
      icon: Clock,
    },
    {
      question: "What are your fees and do you take insurance?",
      answer:
        "The fee for a standard 50-minute individual therapy session is $250. Payment is accepted via Ivy Pay (for recurring payments) or Zelle (due before the start of each session). Mosaic Psychotherapy is an out-of-network provider for insurance plans. We can provide a superbill (receipt) that you can submit to your insurance for potential reimbursement. Please check with your insurance provider about out-of-network mental health benefits that may be available to you.",
      icon: CreditCard,
    },
    {
      question: "Are telemedicine & in-person sessions available?",
      answer:
        "At this time, all therapy sessions are offered virtually through a secure, HIPAA-compliant telehealth platform. This allows for flexible, convenient access to care from the comfort of your own space. In-person sessions may be offered in the future as the practice grows.",
      icon: Monitor,
    },
    {
      question: "What is psychotherapy?",
      answer:
        "Psychotherapy is a collaborative process that supports self-understanding, emotional well-being, and meaningful change. It's more than just talking—it's an intentional and evidence-based approach tailored to each person's unique experiences and goals. Through reflection, exploration, and skill-building, therapy can help build resilience, ease emotional pain, and support movement toward a more connected and values-driven life.",
      icon: Brain,
    },
    {
      question: "What can I expect in my first therapy session?",
      answer:
        "The first therapy session is typically an introductory meeting where you and your therapist will explore your reasons for seeking help. You can expect to discuss your personal history, current challenges, and goals for therapy. Prior to this session, you'll be asked to complete a few brief screening questionnaires to help guide the conversation and tailor the support you receive. This first meeting is also a chance for you to ask questions and begin building a sense of connection and trust—essential foundations for meaningful therapeutic work.",
      icon: MessageSquare,
    },
    {
      question: "How do I know if I need therapy?",
      answer:
        "Deciding to start therapy is a personal choice, and it's completely normal to have questions about whether it's the right time. Many people seek therapy when the strategies they've relied on stop working—or even begin to create new challenges. It's common to reach a point in life where stress, emotional pain, or old patterns feel overwhelming or hard to manage alone.\n\nYou don't have to be in crisis to benefit from therapy. Whether you're feeling persistently anxious, down, stuck, or simply unsure of your next step, therapy offers a supportive space to gain perspective, build insight, and find new ways forward. Everyone needs support sometimes—and reaching out is a strong and meaningful step toward change.",
      icon: HelpCircle,
    },
    {
      question: "Why does therapy cost so much?",
      answer:
        "It's a fair question—and one many people wonder about. The cost of therapy reflects more than just the 45-60 minutes spent in session. It includes the time and attention your therapist invests outside of the room—writing notes, planning future sessions, researching resources, and continually thinking about how to best support your progress.\n\nIt also reflects the extensive training, education, and clinical experience that licensed therapists bring to the work. Becoming a psychologist requires years of graduate study, supervised clinical hours, ongoing professional development, and a deep commitment to ethical, evidence-based care. When you invest in therapy, you're investing in a high level of skill, presence, and care dedicated to helping you grow, heal, and move forward in your life.",
      icon: DollarSign,
    },
    {
      question: "Will I get better, and how long will it take?",
      answer:
        "Therapy is a highly individual process, and the timeline for progress can vary from person to person. Some clients notice changes within a few sessions, while others may engage in longer-term work depending on their goals, history, and the challenges they're facing.\n\nWhat's most important is building a trusting, collaborative relationship where you feel supported and understood. Early sessions focus on clarifying your goals and setting expectations together. Growth isn't always linear, but therapy creates space for lasting change—and many people find that even small shifts can have a meaningful impact over time.",
      icon: TrendingUp,
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-green-700 mb-2">Common Questions About Therapy</h2>
          <div className="flex items-center justify-center mb-6">
            <span className="text-gray-600 italic">Find answers to your most frequently asked questions</span>
            <div className="ml-2 h-0.5 w-16 bg-yellow-400 rounded-full"></div>
          </div>
        </motion.div>
        <div className="space-y-6">
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
                className="w-full text-left p-6 focus:outline-none flex items-start gap-4"
              >
                <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <faq.icon className="h-5 w-5 text-green-700" />
                </div>
                <div className="flex-grow flex justify-between items-center">
                  <h3 className="text-xl font-medium text-gray-900">{faq.question}</h3>
                  <div className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-gray-700" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-700" />
                    )}
                  </div>
                </div>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6 pl-20"
                >
                  {faq.answer.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-gray-700 mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
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
          <p className="text-gray-700">
            Have a question that's not answered here? Please don't hesitate to{" "}
            <a href="/contact" className="text-green-700 hover:text-green-800 font-medium">
              reach out
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  )
}
