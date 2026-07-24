import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { HeroSection } from "./home/HeroSection";
import { MethodologySection } from "./home/MethodologySection";
import { WhyChooseUsSection } from "./home/WhyChooseUsSection";
import { EngagementProcessSection } from "./home/EngagementProcessSection";
import { ProjectsPortfolioSection } from "./home/ProjectsPortfolioSection";
import { AdvisoryServicesSection } from "./home/AdvisoryServicesSection";
import { AwardsSection } from "./home/AwardsSection";
import { TrustBadgesBar } from "./home/TrustBadgesBar";
import { CtaSection } from "./home/CtaSection";

interface HomePageProps {
  onNavigate?: (page: string) => void;
  onOpenContact?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenContact }) => {
  const scrollToCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenContact) {
      onOpenContact();
      return;
    }
    const cta = document.getElementById("home-cta");
    if (cta) {
      cta.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-white min-h-screen relative">
      {/* Top Header Navbar */}
      <Navbar activePage="home" onNavigate={onNavigate} onScrollToCTA={scrollToCTA} onOpenContact={onOpenContact} />

      <main className="pt-16">
        {/* 1. Hero Section with Badge & Stats */}
        <HeroSection onNavigate={onNavigate} onScrollToCTA={scrollToCTA} onOpenContact={onOpenContact} />

        {/* 2. Signature Transformation Architecture Methodology */}
        <MethodologySection />

        {/* 3. Why Choose Us / Differentiators */}
        <WhyChooseUsSection />

        {/* 4. Structured Engagement Process */}
        <EngagementProcessSection />

        {/* 5. Operational Excellence Projects Portfolio */}
        <ProjectsPortfolioSection />

        {/* 6. Comprehensive Advisory Practice Areas */}
        <AdvisoryServicesSection onNavigate={onNavigate} />

        {/* 7. Honors & Executive Awards */}
        <AwardsSection />

        {/* 8. Trust Indicators Bar */}
        <TrustBadgesBar />

        {/* 9. Main Action CTA Banner */}
        <CtaSection onNavigate={onNavigate} onOpenContact={onOpenContact} />
      </main>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary-container transition-all z-40"
        aria-label="Scroll to top"
      >
        <span className="material-symbols-outlined">keyboard_arrow_up</span>
      </button>

      {/* Footer Component */}
      <Footer onNavigate={onNavigate} onScrollToCTA={scrollToCTA} />
    </div>
  );
};

export default HomePage;
