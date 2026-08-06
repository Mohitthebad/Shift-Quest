import React, { useState } from "react";
import { motion } from "framer-motion";
import { navigateTo } from "../../lib/nav";
import { SectionHeader } from "../ui/SectionHeader";

interface AdvisoryServicesSectionProps {
  onNavigate?: (page: string) => void;
}

export const AdvisoryServicesSection: React.FC<AdvisoryServicesSectionProps> = ({ onNavigate }) => {
  const [activePractice, setActivePractice] = useState<number>(0);

  const practices = [
    {
      id: "coaching",
      title: "Executive Coaching",
      icon: "psychology",
      tagline: "Coaching leaders for greater impact & clarity under pressure.",
      desc: "Helping leaders think with greater clarity, lead with confidence, and create lasting organizational impact.",
      highlights: ["ICF ACC Accredited Coaching", "C-Suite & Board Mentorship", "High-Potential Leadership Transitions"],
      route: "coaching",
      badge: "ICF ACC ACCREDITED",
    },
    {
      id: "industrial-relations",
      title: "Industrial Relations Advisory",
      icon: "gavel",
      tagline: "Turning industrial relations into a strategic competitive advantage.",
      desc: "Building collaborative employee relations that strengthen trust, productivity, and long-term business continuity.",
      highlights: ["48+ Long-Term Wage Settlements", "Dispute Mitigation Frameworks", "Statutory Labor Governance"],
      route: "industrial-relations",
      badge: "30+ YEARS IR EXPERTISE",
    },
    {
      id: "hr-transformation",
      title: "HR & Organization Transformation",
      icon: "account_tree",
      tagline: "Building resilient organizations prepared for sustained growth.",
      desc: "Aligning leadership, culture, and people strategy with evolving business priorities to build resilient organizations.",
      highlights: [
        "Org Design & M&A Integration",
        "Succession Planning Systems",
        "High-Performance Culture Scaling",
        "HR System & Process",
        "HR Audits",
      ],
      route: "hr-transformation",
      badge: "STRATEGIC ADVISORY",
    },
  ];

  return (
    <section className="py-section-gap bg-surface border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeader
          eyebrow="OUR ADVISORY PRACTICE"
          title="Core Capabilities &amp; Specialized Practice Areas"
          center={false}
        />
        <button
          onClick={(e) => navigateTo(e, onNavigate, "hr-transformation")}
          className="group flex items-center gap-2 text-primary font-label-md text-label-md cursor-pointer font-bold mb-8"
        >
          View All Services
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {practices.map((p, idx) => {
            const isActive = activePractice === idx;
            return (
              <button
                key={p.id}
                onClick={(e) => navigateTo(e, onNavigate, p.route)}
                onMouseEnter={() => setActivePractice(idx)}
                className={`p-5 rounded-xl text-left border transition-all cursor-pointer flex items-center gap-4 ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-lg scale-[1.02]"
                    : "bg-surface-container-low text-on-surface border-outline-variant/30 hover:border-primary/40"
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                  isActive ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
                }`}>
                  <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                </div>
                <div>
                  <span className={`text-caption font-bold tracking-wider block uppercase mb-0.5 ${
                    isActive ? "text-primary-fixed" : "text-sage"
                  }`}>
                    {p.badge}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-bold leading-snug">
                    {p.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Feature Showcase for Active Practice */}
        <motion.div
          key={activePractice}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 md:p-10 shadow-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-8 space-y-4">
            <span className="inline-block px-3 py-1 bg-sage/15 text-primary border border-sage/30 rounded-full font-label-md text-label-md font-semibold">
              {practices[activePractice].badge}
            </span>
            <h3 className="font-headline-md text-headline-md text-primary font-bold">
              {practices[activePractice].title}
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant font-medium">
              {practices[activePractice].tagline}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {practices[activePractice].desc}
            </p>

            <div className="pt-2">
              <span className="text-caption font-bold uppercase tracking-wider text-primary block mb-2">
                Practice Highlights:
              </span>
              <div className="flex flex-wrap gap-3">
                {practices[activePractice].highlights.map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-outline-variant/20 rounded-lg text-body-md font-medium text-on-surface shadow-2xs">
                    <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-center items-center text-center p-6 bg-white rounded-xl border border-outline-variant/20 shadow-sm space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-4xl">{practices[activePractice].icon}</span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
              Explore Practice Details
            </h4>
            <button
              onClick={(e) => navigateTo(e, onNavigate, practices[activePractice].route)}
              className="w-full bg-primary text-white font-label-md text-label-md py-3.5 px-6 rounded-lg hover:bg-primary/90 transition-all font-bold shadow-sm"
            >
              Learn More →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvisoryServicesSection;
