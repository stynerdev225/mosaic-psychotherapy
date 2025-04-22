"use client"

import { motion } from "framer-motion"

export default function AccessibilityContent() {
  return (
    <section className="py-12 px-4 bg-white">
      <motion.div
        className="max-w-4xl mx-auto prose prose-green prose-lg prose-headings:text-green-800 prose-headings:font-serif prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-li:leading-relaxed prose-strong:text-green-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl mb-4 mt-6">Our Commitment to Accessibility</h2>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          Mosaic Psychotherapy is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
        </p>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Conformance Status</h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
        </p>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          Our website strives to conform to WCAG 2.1 level AA standards. We monitor the website regularly to maintain this and are working to remedy any issues that may arise.
        </p>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Accessibility Features</h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          Our website includes the following accessibility features:
        </p>
        <ul className="mb-6 pl-6 list-disc space-y-2">
          <li>Semantic HTML structure for better screen reader navigation</li>
          <li>Keyboard navigation support</li>
          <li>Text alternatives for non-text content</li>
          <li>Clear headings and labels</li>
          <li>Sufficient color contrast</li>
          <li>Resizable text without loss of content or functionality</li>
          <li>Multiple ways to navigate content</li>
        </ul>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Assistive Technology Compatibility</h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          Our website is designed to be compatible with the following assistive technologies:
        </p>
        <ul className="mb-6 pl-6 list-disc space-y-2">
          <li>Screen readers (such as NVDA, JAWS, VoiceOver)</li>
          <li>Screen magnification software</li>
          <li>Speech recognition software</li>
          <li>Keyboard-only navigation</li>
        </ul>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Known Limitations</h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          Despite our best efforts to ensure accessibility, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.
        </p>
        <ul className="mb-6 pl-6 list-disc space-y-2">
          <li>PDF documents: Some older PDF documents may not be fully accessible. We are working to update these documents or provide alternative formats upon request.</li>
          <li>Video content: We are in the process of adding closed captions to all video content.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Feedback</h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          We welcome your feedback on the accessibility of the Mosaic Psychotherapy website. Please let us know if you encounter accessibility barriers:
        </p>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          Email: <span className="text-green-700">info@mosaictherapy.com</span><br />
          Phone: <span className="text-green-700">(555) 123-4567</span>
        </p>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          We try to respond to feedback within 3 business days.
        </p>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Assessment Approach</h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          Mosaic Psychotherapy assesses the accessibility of our website by the following approaches:
        </p>
        <ul className="mb-6 pl-6 list-disc space-y-2">
          <li>Self-evaluation</li>
          <li>External evaluation</li>
          <li>User feedback</li>
        </ul>

        <h2 className="text-2xl md:text-3xl mb-4 mt-8">Additional Resources</h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          For more information about web accessibility, please visit these resources:
        </p>
        <ul className="mb-6 pl-6 list-disc space-y-2">
          <li><a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer">Web Accessibility Initiative (WAI)</a></li>
          <li><a href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer">Americans with Disabilities Act (ADA)</a></li>
        </ul>

        <p className="text-sm text-gray-500 mt-10 pt-4 border-t border-gray-200">Last Updated: June 1, 2025</p>
      </motion.div>
    </section>
  )
}
