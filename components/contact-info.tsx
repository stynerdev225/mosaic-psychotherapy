"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, Phone, Clock, MapPin, AlertTriangle } from "lucide-react"

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Dr. Ian's Image */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-ian-yPCGIuPxkLZCvWXZb99hNn1GjRplQw.png"
            alt="Dr. Ian Mosier, Clinical Psychologist"
            fill
            className="object-cover object-center"
          />
        </div>
        <h3 className="text-2xl font-serif text-gray-900 mb-2">Dr. Ian Mosier, PhD, PSY35202</h3>
        <p className="text-gray-600">Licensed Clinical Psychologist</p>
      </div>

      {/* Contact Information */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-2xl font-serif text-gray-900 mb-6">Contact Information</h3>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Mail className="h-5 w-5 text-green-700" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Email</h4>
              <p className="text-gray-700">info@mosaictherapy.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Phone className="h-5 w-5 text-green-700" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Phone</h4>
              <p className="text-gray-700">(555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Clock className="h-5 w-5 text-green-700" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Business Hours</h4>
              <p className="text-gray-700">Weekday evenings and Saturdays</p>
              <p className="text-gray-700">By appointment only</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <MapPin className="h-5 w-5 text-green-700" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Location</h4>
              <p className="text-gray-700">Virtual sessions throughout California</p>
            </div>
          </div>
        </div>
      </div>

      {/* Response Time - Updated for better mobile display */}
      <div className="bg-green-700 p-5 sm:p-6 rounded-xl sm:rounded-2xl text-white shadow-lg relative overflow-hidden">
        <div className="flex items-start gap-3">
          <div className="bg-white bg-opacity-20 rounded-full p-2 flex-shrink-0 mt-1">
            <AlertTriangle className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-serif mb-2">Response Time</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              We aim to respond to all inquiries within <span className="font-medium">24-48 hours</span> during business days.
            </p>
            <p className="text-sm sm:text-base mt-2 leading-relaxed">
              For urgent matters, please use the <a href="#crisis-resources" className="underline font-medium hover:text-yellow-100 transition-colors">crisis resources</a> listed below.
            </p>
          </div>
        </div>
      </div>

      {/* Crisis Resources Section - New addition for mobile */}
      <div id="crisis-resources" className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-serif text-gray-900 mb-3">Crisis Resources</h3>
        <ul className="space-y-2 text-sm sm:text-base">
          <li className="flex gap-2">
            <span className="font-medium text-gray-900">988</span>
            <span className="text-gray-700">National Suicide & Crisis Lifeline (call or text)</span>
          </li>
          <li className="flex gap-2">
            <span className="font-medium text-gray-900">741741</span>
            <span className="text-gray-700">Crisis Text Line (text HOME to this number)</span>
          </li>
          <li className="flex gap-2">
            <span className="font-medium text-gray-900">911</span>
            <span className="text-gray-700">For immediate emergencies</span>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}
