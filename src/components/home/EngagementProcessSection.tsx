import React, { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "../animations/MotionWrappers";

export const EngagementProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const engagementSteps = [
    {
      num: "01",
      icon: "manage_search",
      title: "Discovery & HR Diagnostic",
      desc: "Comprehensive evaluation of existing workforce dynamics, governance risks, legal compliance, and organizational bottlenecks.",
      details: ["Legal & Statutory Audit", "Workforce Risk Assessment", "Leadership Alignment Gaps"],
    },
    {
      num: "02",
      icon: "architecture",
      title: "Strategic Architecture",
      desc: "Designing tailored C-suite, ER, and labor relations roadmaps aligned with long-term corporate growth and fiscal goals.",
      details: ["Organization Blueprint", "ER Policy Framework", "Governance Guidelines"],
    },
    {
      num: "03",
      icon: "handshake",
      title: "Leadership & Union Engagement",
      desc: "Direct engagement with executive boards, management teams, and labor unions to build trust and collaborative alignment.",
      details: ["Union Negotiations", "Wage Settlement Structuring", "Board Alignment"],
    },
    {
      num: "04",
      icon: "verified",
      title: "Execution & Governance",
      desc: "Hands-on implementation of wage settlements, leadership coaching, and organizational systems with measurable business outcomes.",
      details: ["ICF Executive Coaching", "Statutory Compliance Systems", "Sustained High-Performance Culture"],
    },
  ];

  return (
    <section className="py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ScrollReveal className="mb-12 text-center max-w-2xl mx-auto">
          <ScrollRevealItem>
            <span className="text-primary font-label-md text-label-md uppercase tracking-widest block mb-2 font-semibold">
              HOW WE ENGAGE
            </span>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <h2 className="font-headline-md text-headline-md text-primary">
              Our Structured Engagement Process
            </h2>
          </ScrollRevealItem>
        </ScrollReveal>

        {/* Vertical Split Stepper Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Timeline List */}
          <div className="md:col-span-6 space-y-3">
            {engagementSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  onMouseEnter={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all relative flex items-start gap-4 cursor-pointer focus:outline-none ${
                    isActive
                      ? "bg-surface-container-low border border-primary/30 shadow-md translate-x-2"
                      : "hover:bg-surface-container-low/50 border border-transparent"
                  }`}
                >
                  {/* Timeline Node Badge */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 z-10 transition-colors ${
                      isActive
                        ? "bg-primary text-white shadow-md ring-4 ring-primary/10"
                        : "bg-surface-container-high text-on-surface-variant"
                    }`}
                  >
                    {step.num}
                  </div>

                  <div className="flex-grow pt-1">
                    <h3 className={`font-headline-sm text-headline-sm font-bold transition-colors ${
                      isActive ? "text-primary" : "text-on-surface"
                    }`}>
                      {step.title}
                    </h3>
                    <p className="font-caption text-caption text-on-surface-variant line-clamp-1 mt-0.5">
                      {step.desc}
                    </p>
                  </div>

                  <span className={`material-symbols-outlined self-center transition-transform ${
                    isActive ? "text-primary rotate-90" : "text-on-surface-variant/40"
                  }`}>
                    chevron_right
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Active Step Showcase */}
          <div className="md:col-span-6 flex flex-col">
            <motion.div
              key={activeStepIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-primary text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between flex-grow border border-white/10"
            >
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl text-white">
                      {engagementSteps[activeStepIndex].icon}
                    </span>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-widest text-primary-fixed bg-white/10 px-3 py-1 rounded-full">
                    Step {engagementSteps[activeStepIndex].num} of 04
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md font-bold mb-4">
                  {engagementSteps[activeStepIndex].title}
                </h3>
                <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed mb-6">
                  {engagementSteps[activeStepIndex].desc}
                </p>

                <div className="space-y-2">
                  <span className="text-caption uppercase font-bold tracking-wider text-primary-fixed block">
                    Key Deliverables:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {engagementSteps[activeStepIndex].details.map((d, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-lg text-caption font-medium border border-white/10">
                        <span className="material-symbols-outlined text-xs text-primary-fixed">check_circle</span>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-caption text-on-primary-container font-semibold">
                <span>Phase {engagementSteps[activeStepIndex].num} Governance</span>
                <span>ShiftQuest Engagement Framework</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementProcessSection;
