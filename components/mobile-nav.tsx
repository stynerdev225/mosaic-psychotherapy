"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollLink from "./scroll-link"

export default function MobileNav({ currentPage = "", onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = (href) => {
    setIsOpen(false)
    if (onNavigate) {
      onNavigate(href)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-800 hover:text-green-700 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Semi-transparent overlay that doesn't block the whole screen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              onClick={toggleMenu}
            />
            
            {/* Menu panel from right side - now with auto height instead of full height */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 15 }}
              className="fixed top-20 right-4 max-h-[80vh] w-64 bg-white shadow-lg rounded-lg z-50 overflow-hidden"
            >
              <div className="flex justify-between items-center border-b border-gray-100 p-4">
                <span className="font-serif text-green-700 text-lg">Menu</span>
                <button
                  onClick={toggleMenu}
                  className="flex items-center gap-1 px-3 py-1 text-gray-800 hover:text-green-700 focus:outline-none bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  aria-label="Close menu"
                >
                  <span className="text-sm font-medium">Close</span>
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <nav className="py-2">
                <ul className="divide-y divide-gray-100">
                  <li>
                    <ScrollLink
                      href="/"
                      className={`block py-3 px-6 ${
                        currentPage === "home" ? "text-green-700 font-medium bg-green-50" : "text-gray-800"
                      } hover:bg-green-50 hover:text-green-700 transition-colors`}
                      onClick={() => handleLinkClick("/")}
                    >
                      Home
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      href="/about"
                      className={`block py-3 px-6 ${
                        currentPage === "about" ? "text-green-700 font-medium bg-green-50" : "text-gray-800"
                      } hover:bg-green-50 hover:text-green-700 transition-colors`}
                      onClick={() => handleLinkClick("/about")}
                    >
                      About Us
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      href="/services"
                      className={`block py-3 px-6 ${
                        currentPage === "services" ? "text-green-700 font-medium bg-green-50" : "text-gray-800"
                      } hover:bg-green-50 hover:text-green-700 transition-colors`}
                      onClick={() => handleLinkClick("/services")}
                    >
                      Services
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      href="/faqs"
                      className={`block py-3 px-6 ${
                        currentPage === "faqs" ? "text-green-700 font-medium bg-green-50" : "text-gray-800"
                      } hover:bg-green-50 hover:text-green-700 transition-colors`}
                      onClick={() => handleLinkClick("/faqs")}
                    >
                      FAQs
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      href="/contact"
                      className={`block py-3 px-6 ${
                        currentPage === "contact" ? "text-green-700 font-medium bg-green-50" : "text-gray-800"
                      } hover:bg-green-50 hover:text-green-700 transition-colors`}
                      onClick={() => handleLinkClick("/contact")}
                    >
                      Contact Us
                    </ScrollLink>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
