"use client"

import { motion } from "framer-motion"

export default function TermsContent() {
  return (
    <section className="py-12 px-4 bg-white">
      <motion.div
        className="max-w-4xl mx-auto prose prose-green prose-lg prose-headings:text-green-800 prose-headings:font-serif prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-li:leading-relaxed prose-strong:text-green-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl mb-4 mt-6">Agreement to Terms</h2>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          By accessing or using the Mosaic Psychotherapy website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the website or use our services.
        </p>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Use of Website</h2>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          The content on our website is for general information purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Intellectual Property</h2>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          The Mosaic Psychotherapy website and its original content, features, and functionality are owned by Mosaic Psychotherapy and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">User Contributions</h2>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          Our website may contain message boards, chat rooms, personal profiles, forums, or other interactive features that allow users to post, submit, publish, display, or transmit content or materials. By providing any user contribution, you grant us the right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content worldwide.
        </p>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Limitation of Liability</h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          In no event shall Mosaic Psychotherapy, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        </p>
        <ul className="mb-6 pl-6 list-disc space-y-2">
          <li>Your access to or use of or inability to access or use the website</li>
          <li>Any conduct or content of any third party on the website</li>
          <li>Any content obtained from the website</li>
          <li>Unauthorized access, use, or alteration of your transmissions or content</li>
        </ul>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Indemnification</h2>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          You agree to defend, indemnify, and hold harmless Mosaic Psychotherapy, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Service or your use of the website.
        </p>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Governing Law</h2>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Changes to Terms</h2>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Contact Us</h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          Email: <span className="text-green-700">info@mosaictherapy.com</span><br />
          Phone: <span className="text-green-700">(555) 123-4567</span>
        </p>

        <p className="text-sm text-gray-500 mt-10 pt-4 border-t border-gray-200">Last Updated: June 1, 2025</p>
      </motion.div>
    </section>
  )
}
