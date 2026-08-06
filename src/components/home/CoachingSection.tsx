import React, { useState } from "react";
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
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps = [
    {
      num: "01",
      icon: "handshake",
      title: "Establish Trust & Discovery",
      desc: "Use 360° feedback and assessments to co-create a safe, ethical foundation for coaching, ensuring confidentiality and respect.",
      details: [
        "360° Feedback & Assessments",
        "Confidentiality & NDA Framework",
        "Safe & Ethical Foundation",
        "Sponsor & Stakeholder Alignment",
        "Coaching Readiness Audit",
      ],
      phaseFooter: "Phase 01 • Discovery & Trust",
    },
    {
      num: "02",
      icon: "manage_search",
      title: "Evoking Awareness",
      desc: "Identify blind spots and growth edges through powerful questioning and active listening, fostering client self-discovery.",
      details: [
        "Blind Spot Diagnostics",
        "Growth Edge Identification",
        "Powerful Questioning",
        "Active Listening Sessions",
        "Self-Discovery Mapping",
      ],
      phaseFooter: "Phase 02 • Evoking Awareness",
    },
    {
      num: "03",
      icon: "track_changes",
      title: "Co-Create Goals",
      desc: "Partner with the client to set measurable, purposeful outcomes aligned with personal values and organizational objectives.",
      details: [
        "Measurable Outcome Definition",
        "Personal Values Alignment",
        "Organizational Objectives",
        "Leadership KPI Framework",
        "Strategic Action Roadmap",
      ],
      phaseFooter: "Phase 03 • Goal Co-Creation",
    },
    {
      num: "04",
      icon: "trending_up",
      title: "Facilitate Growth & Action",
      desc: "Support structured development with mentoring, feedback, and accountability while maintaining coaching presence.",
      details: [
        "Bi-Weekly 1-on-1 Sessions",
        "Structured Development Plans",
        "Real-Time Decision Coaching",
        "Accountability Frameworks",
        "Executive Presence Mentoring",
      ],
      phaseFooter: "Phase 04 • Growth & Action",
    },
    {
      num: "05",
      icon: "verified",
      title: "Reflect & Sustain Change",
      desc: "Encourage iterative reflection, embed behavioral shifts, and uphold ethical responsibility for long-term transformation.",
      details: [
        "Iterative Reflection Reviews",
        "Behavioral Shift Embedding",
        "Sustained Habit Formation",
        "Long-Term Impact Evaluation",
        "Ethical Coaching Governance",
      ],
      phaseFooter: "Phase 05 • Sustain Transformation",
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

        {/* Vertical Split Stepper Layout matching HR System Advisory design */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Timeline List */}
          <div className="md:col-span-6 space-y-3">
            {steps.map((step, idx) => {
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
                      {steps[activeStepIndex].icon}
                    </span>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-widest text-primary-fixed bg-white/10 px-3 py-1 rounded-full">
                    Step {steps[activeStepIndex].num} of 05
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md font-bold mb-4 leading-snug">
                  {steps[activeStepIndex].title}
                </h3>
                <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed mb-6">
                  {steps[activeStepIndex].desc}
                </p>

                <div className="space-y-3">
                  <span className="text-caption uppercase font-bold tracking-wider text-primary-fixed block">
                    Key Deliverables:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {steps[activeStepIndex].details.map((d, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-lg text-caption font-medium border border-white/10">
                        <span className="material-symbols-outlined text-xs text-primary-fixed">check_circle</span>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-caption text-on-primary-container font-semibold">
                <span>{steps[activeStepIndex].phaseFooter}</span>
                <span>ShiftQuest Executive Coaching Framework</span>
              </div>
            </motion.div>
          </div>
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
