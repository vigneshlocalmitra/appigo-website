import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

import { ContactSection } from "@/components/sections/ContactSection";
import { headerConfig } from "@/config/header.config";

export default function Index() {
  // Custom CTA action
  const handleConsultationClick = () => {
    // You can add analytics tracking here
    console.log('Free consultation requested');

    // Scroll to contact section
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        logo={headerConfig.logo}
        companyName={headerConfig.companyName}
        navLinks={headerConfig.navLinks}
        ctaText={headerConfig.cta.text}
        ctaAction={handleConsultationClick}
        transparent={headerConfig.appearance.transparent}
        fixed={headerConfig.appearance.fixed}
      />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}