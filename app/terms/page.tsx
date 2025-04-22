import SiteHeader from "@/components/site-header"
import TermsHero from "@/components/terms-hero"
import TermsContent from "@/components/terms-content"
import ConsultationCTA from "@/components/consultation-cta"
import Footer from "@/components/footer"

export default function TermsPage() {
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
        <SiteHeader currentPage="terms" />

        {/* Terms Hero Section */}
        <TermsHero />
      </div>

      {/* Terms Content Section */}
      <TermsContent />

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
