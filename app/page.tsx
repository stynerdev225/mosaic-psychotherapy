import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import JourneySection from "@/components/journey-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import TestimonialsSection from "@/components/testimonials-section"
import GetStartedSection from "@/components/get-started-section"
import MosaicArtSection from "@/components/mosaic-art-section"
import MosaicGallerySection from "@/components/mosaic-gallery-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader currentPage="home" />

      {/* Hero Section */}
      <section className="relative py-6 px-2 sm:px-3 bg-white">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            {/* Background Image with rounded corners - REDUCED HEIGHT */}
            <div className="relative h-[380px] sm:h-[400px] md:h-[420px] w-full">
              <Image src="/hero.jpg" alt="Green mosaic pattern" fill className="object-cover rounded-3xl" priority />
              <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/60 to-yellow-700/70 rounded-3xl"></div>
            </div>

            {/* Content - with tighter vertical spacing */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 sm:p-6 text-center text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3 md:mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                Welcome to Mosaic Psychotherapy
              </h2>
              <p className="max-w-5xl mx-auto text-base sm:text-lg text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] mb-4 md:mb-5">
                Your journey towards mental well-being begins here. We provide compassionate, professional support
                through virtual psychotherapy tailored to your unique needs. Mosaic Psychotherapy offers virtual,
                evidence-based therapy for adults across California.
              </p>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white px-6 sm:px-8 py-2 rounded-full hover:bg-white hover:text-green-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Added smaller spacer div for better transition */}
      <div className="h-6 md:h-8 bg-white"></div>

      <JourneySection />
      <WhatWeDoSection />
      <MosaicArtSection />
      <TestimonialsSection />
      <MosaicGallerySection />
      <div className="bg-gradient-to-t from-white to-[#F0F9F1]">
        <div className="bg-gradient-to-b from-[#F0F9F1] to-white">
          <GetStartedSection />
          <Footer />
        </div>
      </div>
    </main>
  )
}
