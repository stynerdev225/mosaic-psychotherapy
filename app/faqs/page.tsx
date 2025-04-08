import SiteHeader from "@/components/site-header"
import FaqsHero from "@/components/faqs-hero"
import FaqsContent from "@/components/faqs-content"
import ResourcesSection from "@/components/resources-section"
import ConsultationCTA from "@/components/consultation-cta"
import Footer from "@/components/footer"

export default function FaqsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top section with gradient */}
      <div className="bg-gradient-to-b from-white to-[#F1FAF2]">
        {/* Header */}
        <SiteHeader currentPage="faqs" />

        {/* FAQs Hero Section */}
        <FaqsHero />
      </div>

      {/* Small gradient transition between hero and content */}
      <div className="h-16 bg-gradient-to-b from-[#F1FAF2] to-white"></div>

      {/* Content sections with white background */}
      <div className="bg-white">
        {/* FAQs Content Section */}
        <FaqsContent />

        {/* Resources Section */}
        <ResourcesSection />

        {/* Bottom section with gradient */}
        <div className="bg-gradient-to-b from-[#F0F9F1] to-white">
          {/* Consultation CTA Section */}
          <ConsultationCTA />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </main>
  )
}
