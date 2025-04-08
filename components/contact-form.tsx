"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    referralSource: "",
    inquiryDetails: "",
    preferredContact: "email",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        city: "",
        referralSource: "",
        inquiryDetails: "",
        preferredContact: "email",
      })
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
    >
      <h2 className="text-3xl font-serif text-gray-900 mb-2">Send a Message</h2>
      <div className="flex items-center mb-6">
        <span className="text-gray-600 italic">We'll get back to you within 24-48 hours</span>
        <div className="ml-2 h-0.5 w-16 bg-yellow-400 rounded-full"></div>
      </div>

      {/* Crisis Notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Please note:</strong> This form is intended for general inquiries or to request a free initial
              consultation. To protect your privacy, please do not include sensitive or personal health information.
            </p>
            <p className="text-sm text-yellow-700 mt-2">
              If you're in crisis or need immediate support, you're not alone. Please call or text 988 to reach the
              Suicide & Crisis Lifeline, dial 911, or go to your nearest emergency room for immediate help.
            </p>
          </div>
        </div>
      </div>

      {isSubmitted ? (
        <div className="bg-green-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-medium text-green-800 mb-2">Thank You!</h3>
          <p className="text-green-700">Your message has been received. We'll get back to you as soon as possible.</p>
          
          {/* Mosaic Image Frame - also shown after submission */}
          <div className="my-3 relative">
            <div className="relative h-48 md:h-56 rounded-md overflow-hidden shadow-md">
              <Image 
                src="/mosaic-bench.jpg" 
                alt="Green mosaic tile pattern from Park Guell by Antonio Gaudi" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              What city do you live in? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formState.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-1">
              How did you hear about my services?
            </label>
            <input
              type="text"
              id="referralSource"
              name="referralSource"
              value={formState.referralSource}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What is your preferred method of contact?
            </label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  checked={formState.preferredContact === "email"}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span className="ml-2">Email</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  checked={formState.preferredContact === "phone"}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span className="ml-2">Phone Call</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="inquiryDetails" className="block text-sm font-medium text-gray-700 mb-1">
              Please tell me a little bit about what you are looking for: <span className="text-red-500">*</span>
            </label>
            <textarea
              id="inquiryDetails"
              name="inquiryDetails"
              value={formState.inquiryDetails}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-md transition-colors disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          
          {/* Mosaic Image Frame - underneath the submit button */}
          <div className="py-3 relative">
            <div className="relative h-48 md:h-56 rounded-md overflow-hidden shadow-md">
              <Image 
                src="/mosaic-bench.jpg" 
                alt="Green mosaic tile pattern from Park Guell by Antonio Gaudi" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </div>
        </form>
      )}
    </motion.div>
  )
}
