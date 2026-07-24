import React from "react";
import { ScrollReveal, ScrollRevealItem } from "../animations/MotionWrappers";

export const TrustBadgesBar: React.FC = () => {
  return (
    <section className="py-6 bg-[#1A2026] text-white border-y border-white/10 relative overflow-hidden">
      {/* Background ambient shine */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none" />

      <ScrollReveal className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-wrap justify-around items-center gap-6 text-center relative z-10">
        <ScrollRevealItem className="flex items-center gap-2.5 font-label-md text-label-md tracking-wider">
          <span className="material-symbols-outlined text-primary-fixed text-lg">verified</span>
          <span>30+ YEARS EXECUTIVE EXPERIENCE</span>
        </ScrollRevealItem>
        <div className="hidden md:block w-px h-4 bg-white/15" />

        <ScrollRevealItem className="flex items-center gap-2.5 font-label-md text-label-md tracking-wider">
          <span className="material-symbols-outlined text-primary-fixed text-lg">gavel</span>
          <span>LABOR CODE COMPLIANCE</span>
        </ScrollRevealItem>
        <div className="hidden md:block w-px h-4 bg-white/15" />

        <ScrollRevealItem className="flex items-center gap-2.5 font-label-md text-label-md tracking-wider">
          <span className="material-symbols-outlined text-primary-fixed text-lg">public</span>
          <span>PAN-INTERNATIONAL INTEGRATION</span>
        </ScrollRevealItem>
        <div className="hidden md:block w-px h-4 bg-white/15" />

        <ScrollRevealItem className="flex items-center gap-2.5 font-label-md text-label-md tracking-wider">
          <span className="material-symbols-outlined text-primary-fixed text-lg">lock</span>
          <span>STRICTLY CONFIDENTIAL ADVISORY</span>
        </ScrollRevealItem>
      </ScrollReveal>
    </section>
  );
};

export default TrustBadgesBar;
