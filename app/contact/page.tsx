import SiteHeader from "@/components/site-header"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Unified background wrapper for both header and hero */}
      <div className="relative">
        {/* Subtle powder background that spans both header and hero */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,249,241,0.15) 100%)",
            zIndex: -1,
          }}
        ></div>

        {/* Header */}
        <SiteHeader currentPage="contact" />

        {/* Contact Hero Section */}
        <ContactHero />
      </div>

      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <ContactForm />

          {/* Contact Info Section */}
          <ContactInfo />
        </div>
      </div>

      {/* Bottom section with gradient */}
      <div className="bg-gradient-to-b from-[#F0F9F1] to-white">
        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
