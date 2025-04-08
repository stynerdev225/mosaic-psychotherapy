import SiteHeader from "@/components/site-header"
import ServicesHero from "@/components/services-hero"
import ServiceOfferings from "@/components/service-offerings"
import TherapyApproaches from "@/components/therapy-approaches"
import ConditionsTreated from "@/components/conditions-treated"
import TherapyProcess from "@/components/therapy-process"
import ServicesPricing from "@/components/services-pricing"
import ServicesFAQ from "@/components/services-faq"
import ConsultationCTA from "@/components/consultation-cta"
import Footer from "@/components/footer"

export default function ServicesPage() {
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
        <SiteHeader currentPage="services" />

        {/* Services Hero Section */}
        <ServicesHero />
      </div>

      {/* Service Offerings Section */}
      <ServiceOfferings />

      {/* Therapy Approaches Section */}
      <TherapyApproaches />

      {/* Conditions Treated Section */}
      <ConditionsTreated />

      {/* Therapy Process Section */}
      <TherapyProcess />

      {/* Services Pricing Section */}
      <ServicesPricing />

      {/* Services FAQ Section */}
      <ServicesFAQ />

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
