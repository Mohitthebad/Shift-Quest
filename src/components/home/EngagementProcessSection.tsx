import React, { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "../animations/MotionWrappers";
import { SectionHeader } from "../ui/SectionHeader";

export const EngagementProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const engagementSteps = [
    {
      num: "01",
      icon: "manage_search",
      title: "Discovery & Business Assessment",
      desc: "We begin by understanding your business, operational challenges, strategic objectives, organizational structure, and current capabilities to identify opportunities, risks, and transformation priorities.",
      details: [
        "Business & Operational Assessment",
        "Stakeholder Discovery Workshops",
        "Current State Analysis",
        "Risk & Opportunity Identification",
        "Initial Recommendations",
      ],
      phaseFooter: "Phase 01 • Discovery",
    },
    {
      num: "02",
      icon: "architecture",
      title: "Strategy & Solution Design",
      desc: "Based on our findings, we design a tailored transformation roadmap, governance model, execution framework, and measurable business outcomes aligned with your long-term vision.",
      details: [
        "Transformation Roadmap",
        "Operating Model Design",
        "Governance Framework",
        "Success Metrics & KPIs",
        "Executive Alignment",
      ],
      phaseFooter: "Phase 02 • Strategy",
    },
    {
      num: "03",
      icon: "handshake",
      title: "Implementation & Change Enablement",
      desc: "Our consultants work alongside your leadership teams to execute initiatives, manage change, optimize processes, and ensure smooth adoption across the organization.",
      details: [
        "Program Execution",
        "Change Management",
        "Process Optimization",
        "Leadership Enablement",
        "Performance Tracking",
      ],
      phaseFooter: "Phase 03 • Execution",
    },
    {
      num: "04",
      icon: "verified",
      title: "Performance, Governance & Continuous Improvement",
      desc: "Transformation doesn't stop after implementation. We continuously monitor performance, refine strategies, strengthen governance, and help build a culture of sustainable growth.",
      details: [
        "Performance Reviews",
        "Governance Monitoring",
        "Continuous Optimization",
        "Strategic Advisory",
        "Long-term Partnership",
      ],
      phaseFooter: "Phase 04 • Continuous Growth",
    },
  ];

  return (
    <section className="py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeader
          eyebrow="HOW WE ENGAGE"
          title="Our Structured Engagement Process"
          className="mb-12"
        />

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
                    <p className="font-caption text-caption text-on-surface-variant line-clamp-2 mt-0.5 leading-relaxed">
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

                <h3 className="font-headline-md text-headline-md font-bold mb-4 leading-snug">
                  {engagementSteps[activeStepIndex].title}
                </h3>
                <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed mb-6">
                  {engagementSteps[activeStepIndex].desc}
                </p>

                <div className="space-y-3">
                  <span className="text-caption uppercase font-bold tracking-wider text-primary-fixed block">
                    Key Deliverables:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {engagementSteps[activeStepIndex].details.map((d, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-lg text-caption font-medium border border-white/10">
                        <span className="material-symbols-outlined text-xs text-primary-fixed">check_circle</span>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-caption text-on-primary-container font-semibold">
                <span>{engagementSteps[activeStepIndex].phaseFooter}</span>
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
