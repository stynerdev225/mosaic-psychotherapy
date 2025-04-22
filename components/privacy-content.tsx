"use client"

import { motion } from "framer-motion"

export default function PrivacyContent() {
  return (
    <section className="py-12 px-4 bg-white">
      <motion.div
        className="max-w-4xl mx-auto prose prose-green prose-lg prose-headings:text-green-800 prose-headings:font-serif prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-li:leading-relaxed prose-strong:text-green-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl mb-4 mt-6">Introduction</h2>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          This Privacy Policy explains how Mosaic Psychotherapy ("we", "our", or "us") collects, uses, and discloses your information when you use our website and services. We are committed to protecting your privacy and handling your data in an open and transparent manner.
        </p>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Information We Collect</h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          We may collect the following types of information:
        </p>
        <ul className="mb-6 pl-6 list-disc space-y-2">
          <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when contacting us or scheduling appointments.</li>
          <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent on pages, and other analytical data.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">How We Use Your Information</h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          We use the information we collect for various purposes, including:
        </p>
        <ul className="mb-6 pl-6 list-disc space-y-2">
          <li>Providing and maintaining our services</li>
          <li>Responding to your inquiries and requests</li>
          <li>Improving our website and services</li>
          <li>Sending you information about our services, events, or other updates (with your consent)</li>
          <li>Complying with legal obligations</li>
        </ul>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Information Sharing and Disclosure</h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
        </p>
        <ul className="mb-6 pl-6 list-disc space-y-2">
          <li>With service providers who assist us in operating our website and conducting our business</li>
          <li>When required by law or to protect our rights</li>
          <li>With your consent</li>
        </ul>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Data Security</h2>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Your Rights</h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul className="mb-6 pl-6 list-disc space-y-2">
          <li>The right to access the personal information we hold about you</li>
          <li>The right to request correction of inaccurate information</li>
          <li>The right to request deletion of your information</li>
          <li>The right to restrict or object to processing</li>
          <li>The right to data portability</li>
        </ul>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Changes to This Privacy Policy</h2>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Contact Us</h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at:
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
