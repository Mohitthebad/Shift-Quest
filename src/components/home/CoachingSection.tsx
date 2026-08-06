import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { navigateTo } from "../../lib/nav";

interface CoachingSectionProps {
  onNavigate?: (page: string) => void;
  onOpenContact?: () => void;
}

export const CoachingSection: React.FC<CoachingSectionProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  const steps = [
    {
      num: "01",
      title: "Contracting & Goals",
      desc: "Confidential chemistry call, signing NDA, and defining clear 1-on-1 executive coaching objectives with board alignment.",
      icon: "handshake",
    },
    {
      num: "02",
      title: "360° Diagnostics",
      desc: "Gathering multi-rater stakeholder feedback and psychometric audits to identify core leadership strengths and blind spots.",
      icon: "manage_search",
    },
    {
      num: "03",
      title: "1-on-1 Sessions",
      desc: "Bi-weekly confidential coaching focused on real-time decision scenarios, executive presence, and behavioral execution.",
      icon: "psychology",
    },
    {
      num: "04",
      title: "Impact & Growth",
      desc: "Evaluating leadership transformation against baseline metrics, sponsor reviews, and embedding sustained executive habits.",
      icon: "verified",
    },
  ];

  return (
    <section className="py-section-gap bg-surface border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeader
          eyebrow="EXECUTIVE LEADERSHIP PROCESS"
          title="Executive Coaching Process"
          className="mb-12"
        />

        {/* Clean 4-Step Horizontal Process Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col justify-between relative group hover:border-primary/50 hover:shadow-lg hover:bg-white transition-all duration-300 cursor-pointer min-h-[200px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                  </div>
                  <span className="font-mono font-bold text-caption px-3 py-1 bg-surface-container-high rounded-full text-on-surface-variant">
                    STEP {step.num}
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {step.title}
                </h3>

                {/* Content revealed on card hover */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pt-3 border-t border-outline-variant/15 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-caption font-semibold text-sage">
                <span>Phase 0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout & Action */}
        <div className="mt-10 p-6 bg-primary text-white rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl text-primary-fixed">verified_user</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm font-bold text-white">
                ICF Accredited Associate Certified Coaching
              </h4>
              <p className="text-caption text-on-primary-container">
                Strict 1-on-1 Executive Confidentiality &amp; Measured Leadership Outcomes
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                navigateTo(e, onNavigate, "coaching");
              }
            }}
            className="w-full sm:w-auto bg-white text-primary px-6 py-3.5 rounded-xl font-label-md text-label-md font-bold hover:bg-white/90 transition-all shadow-md cursor-pointer shrink-0 flex items-center justify-center gap-2"
          >
            Inquire for Coaching
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoachingSection;
