import SiteHeader from "@/components/site-header"
import AccessibilityHero from "@/components/accessibility-hero"
import AccessibilityContent from "@/components/accessibility-content"
import ConsultationCTA from "@/components/consultation-cta"
import Footer from "@/components/footer"

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Unified background wrapper for both header and hero */}
      <div className="relative">
        {/* Gradient background that spans both header and hero */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,249,241,0.5) 100%)",
            zIndex: -1,
          }}
        ></div>

        {/* Header */}
        <SiteHeader currentPage="accessibility" />

        {/* Accessibility Hero Section */}
        <AccessibilityHero />
      </div>

      {/* Accessibility Content Section */}
      <AccessibilityContent />

      {/* Bottom section with gradient */}
      <div className="bg-gradient-to-b from-[#F0F9F1] to-white">
        {/* Consultation CTA Section */}
        <ConsultationCTA />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
