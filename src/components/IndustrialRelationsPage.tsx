import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollReveal, ScrollRevealItem, AnimatedCard } from "./animations/MotionWrappers";
import { navigateTo } from "../lib/nav";

interface IndustrialRelationsPageProps {
  onNavigate?: (page: string) => void;
}

export const IndustrialRelationsPage: React.FC<IndustrialRelationsPageProps> = ({ onNavigate }) => {
  const capabilities = [
    { title: "Long-Term Wage Settlements", text: "Negotiating & facilitating 48+ long-term industrial wage agreements with zero strike history.", icon: "handshake" },
    { title: "Dispute Mitigation & Prevention", text: "Proactive employee relations frameworks preventing industrial conflict and operational downtime.", icon: "shield" },
    { title: "Statutory Labor Code Governance", text: "Complete statutory compliance, labor code audit, and regulatory risk governance.", icon: "gavel" },
    { title: "Union & Management Collaboration", text: "Building transparent communication channels between union leadership and promoter executive boards.", icon: "groups" },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col justify-between">
      <Navbar activePage="industrial-relations" onNavigate={onNavigate} />

      <main className="pt-16 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Hero Section */}
        <section className="relative py-section-gap overflow-hidden border-b border-outline-variant/20">
          <ScrollReveal className="max-w-4xl space-y-stack-md">
            <ScrollRevealItem>
              <span className="text-sage font-label-md text-label-md uppercase tracking-widest font-semibold block">
                STRATEGIC INDUSTRIAL RELATIONS
              </span>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight font-bold">
                Industrial Relations Advisory: <span className="text-primary">Turning industrial relations into a strategic advantage</span>.
              </h1>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed border-l-4 border-primary pl-5">
                Healthy industrial relations are built on trust, transparency, and sustained dialogue.
              </p>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                With extensive experience across complex manufacturing environments, ShiftQuest Consulting helps organizations strengthen employee relations, facilitate long-term settlements, prevent disputes, and create collaborative workplaces that support both business performance and workforce engagement.
              </p>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <div className="flex flex-wrap gap-stack-md pt-4">
                <button
                  onClick={(e) => navigateTo(e, onNavigate, "about")}
                  className="bg-primary text-white px-8 py-4 font-label-md text-label-md hover:bg-primary/90 transition-colors shadow-md rounded-lg font-bold cursor-pointer"
                >
                  Inquire for IR Advisory
                </button>
              </div>
            </ScrollRevealItem>
          </ScrollReveal>
        </section>

        {/* Capabilities */}
        <section className="py-section-gap">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-stack-lg">
            <ScrollRevealItem>
              <span className="text-primary font-label-md text-label-md uppercase tracking-widest block mb-2 font-semibold">
                IR ADVISORY PRACTICE
              </span>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <h2 className="font-headline-md text-headline-md text-primary font-bold">
                Core Capabilities in Industrial Relations
              </h2>
            </ScrollRevealItem>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {capabilities.map((cap, idx) => (
              <AnimatedCard key={idx} className="bg-surface-container-low p-stack-lg border border-outline-variant/30 rounded-lg shadow-sm flex items-start gap-4" liftY={-4}>
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">{cap.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-bold">
                    {cap.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {cap.text}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default IndustrialRelationsPage;
