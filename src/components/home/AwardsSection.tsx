import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "../animations/MotionWrappers";
import { SectionHeader } from "../ui/SectionHeader";

export const AwardsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeAwardIndex, setActiveAwardIndex] = useState<number>(0);

  const awards = [
    {
      title: "SRF Chairman's Award for Excellence",
      author: "SRF Limited — June 2021",
      description: "Recognized by executive leadership for outstanding organizational transformation, IR strategy, and executive impact during transition.",
      tag: "CHAIRMAN'S AWARD",
      icon: "award_star",
    },
    {
      title: "Top 50 HR Leaders Award",
      author: "SRM Joint Award — June 2021",
      description: "Presented jointly for distinguished leadership in workforce transformation, industrial relations, and executive mentoring.",
      tag: "TOP 50 HR LEADERS",
      icon: "workspace_premium",
    },
    {
      title: "Global Inclusion Summit & Awards",
      author: "Global HR Forum — 2024",
      description: "Felicitation and keynote at the Global Inclusion Summit 2024 for strategic culture transformation and inclusive workplace leadership.",
      tag: "GLOBAL SUMMIT",
      icon: "public",
    },
    {
      title: "Annual Business Leadership Honor",
      author: "Executive Board — 2022",
      description: "Honored at the annual business leadership summit for sustained excellence in organizational governance.",
      tag: "RECOGNITION",
      icon: "verified",
    },
  ];

  return (
    <section className="py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeader
          eyebrow="GLOBAL RECOGNITION"
          title="Honors &amp; Executive Awards"
          className="mb-stack-lg"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          {/* Award Ceremony Photo Card */}
          <motion.div
            className="md:col-span-5 relative group"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: "easeOut" }}
          >
            <div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden shadow-xl border border-outline-variant/30 relative">
              <motion.img
                src="/dr-krishan-award.png"
                alt="Dr. Krishan Singh Receiving SRF Chairman's Award for Excellence"
                className="w-full h-full object-cover transition-transform duration-700"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-stack-md text-white">
                <span className="text-caption font-bold tracking-wider uppercase text-accent-gold block mb-1">
                  OFFICIAL RECOGNITION
                </span>
                <p className="font-label-md text-label-md font-bold">
                  Dr. Krishan Singh Receiving Chairman's Award for Organizational Excellence
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Feature Accordion List (Replacing repetitive 4 cards) */}
          <div className="md:col-span-7 space-y-3">
            {awards.map((award, idx) => {
              const isActive = activeAwardIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveAwardIndex(idx)}
                  onMouseEnter={() => setActiveAwardIndex(idx)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? "bg-surface-container-low border-primary/40 shadow-md"
                      : "bg-white border-outline-variant/30 hover:border-primary/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isActive ? "bg-primary text-white" : "bg-surface-container-high text-primary"
                      }`}>
                        <span className="material-symbols-outlined text-xl">{award.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                          {award.title}
                        </h3>
                        <span className="font-caption text-caption text-secondary font-semibold">
                          {award.author}
                        </span>
                      </div>
                    </div>
                    <span className="text-caption font-bold px-2.5 py-1 bg-primary/10 text-primary rounded-full shrink-0">
                      {award.tag}
                    </span>
                  </div>

                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-4 pt-3 border-t border-outline-variant/20"
                    >
                      {award.description}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
