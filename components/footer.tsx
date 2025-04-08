"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Footer (Collapsible) */}
        <div className="md:hidden space-y-1">
          {/* Logo and info - always visible on mobile */}
          <div className="pb-4 mb-4 border-b border-gray-800">
            <h2 className="text-xl font-serif text-white mb-2">Mosaic Psychotherapy</h2>
            <p className="text-gray-400 mb-4 text-sm">
              Virtual evidence-based therapy for adults across California.
            </p>
            <p className="text-gray-400 text-sm">
              <strong className="text-white">Email:</strong> info@mosaictherapy.com
            </p>
            <p className="text-gray-400 text-sm">
              <strong className="text-white">Phone:</strong> (555) 123-4567
            </p>
          </div>

          {/* Quick Links - Collapsible */}
          <div className="border-b border-gray-800">
            <button 
              onClick={() => toggleSection('quickLinks')}
              className="w-full py-3 flex justify-between items-center text-left"
            >
              <h3 className="text-base font-semibold text-white">Quick Links</h3>
              <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${expandedSection === 'quickLinks' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandedSection === 'quickLinks' ? 'max-h-48 pb-3' : 'max-h-0'}`}>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Services - Collapsible */}
          <div className="border-b border-gray-800">
            <button 
              onClick={() => toggleSection('services')}
              className="w-full py-3 flex justify-between items-center text-left"
            >
              <h3 className="text-base font-semibold text-white">Our Services</h3>
              <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${expandedSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandedSection === 'services' ? 'max-h-48 pb-3' : 'max-h-0'}`}>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                    Individual Therapy
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                    Anxiety Treatment
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                    Depression Treatment
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                    Trauma Recovery
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                    Life Transitions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter - Collapsible */}
          <div className="border-b border-gray-800">
            <button 
              onClick={() => toggleSection('newsletter')}
              className="w-full py-3 flex justify-between items-center text-left"
            >
              <h3 className="text-base font-semibold text-white">Stay Connected</h3>
              <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${expandedSection === 'newsletter' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandedSection === 'newsletter' ? 'max-h-36 pb-3' : 'max-h-0'}`}>
              <p className="text-gray-400 mb-3 text-sm">
                Subscribe to our newsletter for mental health tips and resources.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded-md transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Desktop Footer (Always Expanded) */}
        <div className="hidden md:grid grid-cols-4 gap-8 mb-12">
          {/* Logo and info */}
          <div className="col-span-1">
            <h2 className="text-2xl font-serif text-white mb-4">Mosaic Psychotherapy</h2>
            <p className="text-gray-400 mb-6 text-base">
              Virtual evidence-based therapy for adults across California.
            </p>
            <p className="text-gray-400 text-base">
              <strong className="text-white">Email:</strong> info@mosaictherapy.com
            </p>
            <p className="text-gray-400 text-base">
              <strong className="text-white">Phone:</strong> (555) 123-4567
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
                  Individual Therapy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
                  Anxiety Treatment
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
                  Depression Treatment
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
                  Trauma Recovery
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-base">
                  Life Transitions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Connected</h3>
            <p className="text-gray-400 mb-4 text-base">
              Subscribe to our newsletter for mental health tips and resources.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-gray-800 text-center text-gray-500 text-xs sm:text-sm">
          <p>© 2025 Mosaic Psychotherapy, PC. All rights reserved.</p>
          <div className="mt-2 space-x-2 sm:space-x-4">
            <Link href="/privacy" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-yellow-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-yellow-400 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
