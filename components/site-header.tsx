// Developed by Stiner.dev
// Professional Web Developer
// April 22, 2025
// Contact: https://stiner.dev

"use client"

import ScrollLink from "./scroll-link"
import MobileNav from "./mobile-nav"
import { useEffect, useState, useContext } from "react"
import { useRouter, usePathname } from "next/navigation"
import { ClientLoadingContext } from "@/components/client-layout"

export default function SiteHeader({ currentPage = "" }) {
  // Add responsive behavior for smaller screens
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { setIsLoading } = useContext(ClientLoadingContext)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Handle navigation with loading state
  const handleNavigation = (href: string) => {
    if (pathname !== href) {
      setIsLoading(true)
      // Add a small delay to show loading indicator
      setTimeout(() => {
        router.push(href)
      }, 100)
    }
  }

  return (
    <header className="bg-white py-4 px-4 sm:px-6 md:py-6">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Centered Logo - Responsive sizing */}
        <div className="text-center mb-4 md:mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-serif text-green-700">Mosaic</h1>
          <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-serif text-green-700">Psychotherapy</h2>
        </div>

        {/* Mobile Navigation - Only shown on small screens */}
        <div className="md:hidden w-full flex justify-end">
          <MobileNav currentPage={currentPage} onNavigate={handleNavigation} />
        </div>

        {/* Desktop Navigation - Only shown on medium screens and up */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-10">
            <li className="relative">
              <ScrollLink
                href="/"
                className={`text-gray-800 hover:text-green-700 md:text-lg lg:text-xl ${currentPage === "home" ? "font-medium text-green-700" : ""
                  }`}
                onClick={() => handleNavigation("/")}
              >
                Home
              </ScrollLink>
              {currentPage === "home" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 rounded-full"></div>
              )}
            </li>
            <li className="relative">
              <ScrollLink
                href="/about"
                className={`text-gray-800 hover:text-green-700 md:text-lg lg:text-xl ${currentPage === "about" ? "font-medium text-green-700" : ""
                  }`}
                onClick={() => handleNavigation("/about")}
              >
                About Us
              </ScrollLink>
              {currentPage === "about" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 rounded-full"></div>
              )}
            </li>
            <li className="relative">
              <ScrollLink
                href="/services"
                className={`text-gray-800 hover:text-green-700 md:text-lg lg:text-xl ${currentPage === "services" ? "font-medium text-green-700" : ""
                  }`}
                onClick={() => handleNavigation("/services")}
              >
                Services
              </ScrollLink>
              {currentPage === "services" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 rounded-full"></div>
              )}
            </li>
            <li className="relative">
              <ScrollLink
                href="/faqs"
                className={`text-gray-800 hover:text-green-700 md:text-lg lg:text-xl ${currentPage === "faqs" ? "font-medium text-green-700" : ""
                  }`}
                onClick={() => handleNavigation("/faqs")}
              >
                FAQs
              </ScrollLink>
              {currentPage === "faqs" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 rounded-full"></div>
              )}
            </li>
            <li className="relative">
              <ScrollLink
                href="/contact"
                className={`text-gray-800 hover:text-green-700 md:text-lg lg:text-xl ${currentPage === "contact" ? "font-medium text-green-700" : ""
                  }`}
                onClick={() => handleNavigation("/contact")}
              >
                Contact Us
              </ScrollLink>
              {currentPage === "contact" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 rounded-full"></div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
