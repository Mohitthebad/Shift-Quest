import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "../animations/MotionWrappers";

export const MethodologySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isManualOverride = useRef<boolean>(false);

  const steps = [
    {
      stepNum: "01",
      icon: "troubleshoot",
      title: "Audit",
      desc: "HR & IR Diagnostic, legal risk assessment & gap identification.",
      sub: "Current State Analysis",
    },
    {
      stepNum: "02",
      icon: "architecture",
      title: "Structure",
      desc: "Designing scalable org architecture, ER policies & governance.",
      sub: "System Blueprint",
    },
    {
      stepNum: "03",
      icon: "handshake",
      title: "Alignment",
      desc: "Union negotiations, wage settlements & board stakeholder harmony.",
      sub: "Stakeholder Trust",
    },
    {
      stepNum: "04",
      icon: "insights",
      title: "Discipline",
      desc: "ICF executive coaching, talent analytics & statutory compliance.",
      sub: "Operational Rigor",
    },
    {
      stepNum: "05",
      icon: "stars",
      title: "Culture",
      desc: "Sustainable productivity, zero-strike history & growth scaling.",
      sub: "Measurable Value",
    },
  ];

  // Scroll position listener to automatically advance active step based on section scroll depth
  useEffect(() => {
    const handleScroll = () => {
      if (isManualOverride.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate relative scroll progress within this section (0 to 1)
      const sectionHeight = rect.height;
      const progress = Math.max(0, Math.min(1, (windowHeight * 0.7 - rect.top) / sectionHeight));

      if (progress > 0 && progress < 1) {
        const stepIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));
        setActiveStep(stepIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  // Auto-advance interval timer if no manual click within 5 seconds
  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = setInterval(() => {
      if (!isManualOverride.current) {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }
    }, 3800);

    return () => clearInterval(timer);
  }, [shouldReduceMotion, steps.length]);

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    isManualOverride.current = true;
    // Reset manual override after 8 seconds of inactivity
    setTimeout(() => {
      isManualOverride.current = false;
    }, 8000);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-primary text-on-primary py-section-gap border-y border-outline-variant/20 relative overflow-hidden"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
        <ScrollReveal>
          <ScrollRevealItem>
            <span className="text-primary-fixed uppercase tracking-widest font-label-md text-label-md block mb-2 font-semibold">
              OUR SIGNATURE METHODOLOGY
            </span>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <h2 className="font-headline-md text-headline-md text-white mb-stack-md">
              The ShiftQuest Transformation Architecture™
            </h2>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="text-on-primary-container max-w-2xl mx-auto mb-12 font-body-lg text-body-lg">
              A structured transformation framework moving organizations from reactive HR management to a compliant, high-performance culture.
            </p>
          </ScrollRevealItem>
        </ScrollReveal>

        {/* Connected Horizontal Stepper Pipeline */}
        <div className="relative mt-4 hidden md:block">
          {/* Connector Line behind steps */}
          <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-white/20 z-0" />
          <div
            className="absolute top-10 left-[10%] h-0.5 bg-white transition-all duration-500 z-0"
            style={{ width: `${(activeStep / (steps.length - 1)) * 80}%` }}
          />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                  onMouseEnter={() => handleStepClick(idx)}
                  className="group flex flex-col items-center text-center cursor-pointer focus:outline-none"
                >
                  {/* Step Node */}
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-white text-primary shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-110 border-2 border-white"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-3xl transition-transform ${
                        isActive ? "scale-110 text-primary" : "text-white group-hover:rotate-6"
                      }`}
                    >
                      {step.icon}
                    </span>
                  </motion.div>

                  <span
                    className={`mt-4 font-headline-sm text-headline-sm font-bold transition-colors ${
                      isActive ? "text-white" : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {step.title}
                  </span>
                  <span className="text-caption font-label-md text-primary-fixed mt-1 block font-semibold">
                    {step.sub}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Highlight Panel */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-10 max-w-2xl mx-auto p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-left flex items-start gap-4 shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 shadow-md">
              <span className="material-symbols-outlined text-2xl">
                {steps[activeStep].icon}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-fixed bg-white/10 px-2.5 py-0.5 rounded-full">
                  Stage {steps[activeStep].stepNum}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-white font-bold">
                  {steps[activeStep].title} — {steps[activeStep].sub}
                </h4>
              </div>
              <p className="text-on-primary-container font-body-md text-body-md leading-relaxed">
                {steps[activeStep].desc}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile View: Clean Vertical Accordion/Stepper */}
        <div className="md:hidden space-y-3 text-left">
          {steps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => handleStepClick(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeStep === idx
                  ? "bg-white/15 border-white shadow-md"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">{step.icon}</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-white font-bold">
                    {step.title}
                  </h4>
                  <span className="text-caption text-primary-fixed font-semibold">{step.sub}</span>
                </div>
              </div>
              {activeStep === idx && (
                <p className="text-caption text-on-primary-container mt-3 pt-3 border-t border-white/10 leading-relaxed">
                  {step.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
