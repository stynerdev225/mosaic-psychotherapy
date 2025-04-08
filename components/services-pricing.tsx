"use client"

import { motion } from "framer-motion"
import { Check, HelpCircle } from "lucide-react"
import { useState } from "react"

export default function ServicesPricing() {
  const [showInsuranceInfo, setShowInsuranceInfo] = useState(false)

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
              <span className="relative z-10">INVESTMENT</span>
            </span>
            <div className="h-px w-20 bg-yellow-400/50 mx-auto"></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif text-green-700 mb-4">Fees & Insurance</h2>
          <div className="h-1 w-60 mx-auto rounded-full bg-yellow-400 mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">Transparent pricing for quality care</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Session Fees */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-serif text-gray-900 mb-2">Session Fees</h3>
            <div className="flex items-center mb-6">
              <span className="text-gray-600 italic">Transparent pricing structure</span>
              <div className="ml-2 h-0.5 w-16 bg-yellow-400 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium text-gray-900">Initial Assessment</span>
                  <span className="text-lg font-bold text-green-700">$200</span>
                </div>
                <p className="text-gray-700 text-sm">90-minute comprehensive first session</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium text-gray-900">Individual Therapy</span>
                  <span className="text-lg font-bold text-green-700">$250</span>
                </div>
                <p className="text-gray-700 text-sm">50-minute standard session</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium text-gray-900">Extended Session</span>
                  <span className="text-lg font-bold text-green-700">$250</span>
                </div>
                <p className="text-gray-700 text-sm">80-minute session for deeper work</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-700">
                  Payment is due at the time of service. We accept all major credit cards, HSA/FSA cards, and electronic
                  payments.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Insurance Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-serif text-gray-900 mb-2">Insurance</h3>
            <div className="flex items-center mb-6">
              <span className="text-gray-600 italic">Coverage options</span>
              <div className="ml-2 h-0.5 w-16 bg-yellow-400 rounded-full"></div>
            </div>

            <p className="text-gray-700 mb-6">
              Mosaic Psychotherapy is an out-of-network provider for all insurance plans. This allows us to provide the
              highest quality care without the limitations often imposed by insurance companies.
            </p>

            <div className="mb-6">
              <button
                onClick={() => setShowInsuranceInfo(!showInsuranceInfo)}
                className="flex items-center text-green-700 font-medium hover:text-green-800 transition-colors"
              >
                <HelpCircle className="h-5 w-5 mr-2" />
                {showInsuranceInfo ? "Hide insurance details" : "How out-of-network benefits work"}
              </button>
            </div>

            {showInsuranceInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-green-50 p-4 rounded-xl mb-6"
              >
                <h4 className="font-medium text-gray-900 mb-2">Using Out-of-Network Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      We provide a superbill (receipt) with all information needed for reimbursement
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Submit the superbill to your insurance company for partial reimbursement
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Reimbursement amounts vary based on your specific plan
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Sessions may count toward your out-of-network deductible
                    </span>
                  </li>
                </ul>
              </motion.div>
            )}

            <p className="text-gray-700">
              We're happy to provide guidance on checking your out-of-network benefits. Contact us for assistance in
              understanding your coverage options.
            </p>
          </motion.div>
        </div>

        {/* Sliding Scale Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
        >
          <h3 className="text-2xl font-serif text-gray-900 mb-2">Sliding Scale</h3>
          <div className="flex items-center justify-center mb-6">
            <span className="text-gray-600 italic">Increasing accessibility</span>
            <div className="ml-2 h-0.5 w-16 bg-yellow-400 rounded-full"></div>
          </div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We reserve a limited number of sliding scale spots for clients experiencing financial hardship. Please
            inquire about current availability during your initial consultation call.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
