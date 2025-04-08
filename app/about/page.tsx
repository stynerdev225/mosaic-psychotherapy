import SiteHeader from "@/components/site-header"
import AboutHero from "@/components/about-hero"
import TherapistSection from "@/components/therapist-section"
import MissionSection from "@/components/mission-section"
import ValuesSection from "@/components/values-section"
import EducationSection from "@/components/education-section"
import BioSection from "@/components/bio-section"
import ConsultationCTA from "@/components/consultation-cta"
import Footer from "@/components/footer"

export default function AboutPage() {
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
        <SiteHeader currentPage="about" />

        {/* About Hero Section */}
        <AboutHero />
      </div>

      {/* Therapist Section */}
      <TherapistSection />

      {/* Detailed Bio Section - Moved to be right after TherapistSection */}
      <BioSection />

      {/* Mission Section */}
      <MissionSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Education & Credentials Section */}
      <EducationSection />

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
