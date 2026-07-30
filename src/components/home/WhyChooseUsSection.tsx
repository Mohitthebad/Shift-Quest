import React, { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "../animations/MotionWrappers";

export const WhyChooseUsSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<number>(0);

  const impactStats = [
    {
      num: "30+ Years",
      title: "Executive Leadership",
      desc: "Proven track record across C-Suite leadership & board advisory.",
      icon: "award",
    },
    {
      num: "150+",
      title: "Leaders Coached",
      desc: "ICF ACC accredited executive coaching journeys.",
      icon: "psychology",
    },
    {
      num: "75+",
      title: "Bonus Settlements",
      desc: "Harmonious union and management agreements.",
      icon: "handshake",
    },
    {
      num: "48+",
      title: "Industrial Settlements",
      desc: "Proactive dispute mitigation & business continuity.",
      icon: "gavel",
    },
    {
      num: "Multiple Plants",
      title: "Manufacturing Leadership",
      desc: "Direct HR stewardship across major plant networks.",
      icon: "factory",
    },
    {
      num: "Thailand & S. Africa",
      title: "Cross-Border Integration",
      desc: "International M&A workforce harmonization.",
      icon: "public",
    },
  ];

  const industries = [
    { name: "Manufacturing", icon: "factory", detail: "Heavy industrial operations, union settlements, plant safety & productivity." },
    { name: "Chemicals", icon: "science", detail: "Process safety governance, high-risk compliance & executive talent pipelines." },
    { name: "Engineering", icon: "engineering", detail: "R&D talent acquisition, technical leadership coaching & org design." },
    { name: "Industrial Products", icon: "precision_manufacturing", detail: "Supply chain HR alignment, productivity agreements & statutory audits." },
    { name: "Consumer Goods", icon: "shopping_bag", detail: "Rapid scale workforce strategy, commercial HR & performance culture." },
    { name: "Family-Owned Businesses", icon: "family_history", detail: "Professionalization of governance, promoter alignment & succession." },
    { name: "Growth Enterprises", icon: "trending_up", detail: "Agile org scaling, executive compensation & board advisory." },
  ];

  return (
    <section className="py-section-gap bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-16">
        {/* Executive Impact Section - Infinite Marquee Ticker */}
        <div>
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-10">
            <ScrollRevealItem>
              <span className="text-primary font-label-md text-label-md uppercase tracking-widest block mb-2 font-semibold">
                OUR PROVEN IMPACT
              </span>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <h2 className="font-headline-md text-headline-md text-primary">
                Trusted by Experience. Proven by Outcomes.
              </h2>
            </ScrollRevealItem>
          </ScrollReveal>

          {/* Infinite Marquee Container */}
          <div className="relative overflow-hidden py-4 -mx-margin-mobile md:-mx-margin-desktop">
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-24 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-24 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-stretch gap-6 pl-4">
              {[...impactStats, ...impactStats].map((stat, idx) => (
                <div
                  key={idx}
                  className="w-80 shrink-0 bg-white p-6 rounded-xl border border-outline-variant/30 border-l-4 border-l-primary shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-headline-md text-headline-md text-primary font-bold">
                        {stat.num}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl">{stat.icon}</span>
                      </div>
                    </div>
                    <h4 className="font-label-md text-label-md font-bold text-on-surface mb-1">
                      {stat.title}
                    </h4>
                    <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why ShiftQuest Section & Interactive Industry Chips Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 border-t border-outline-variant/20">
          <ScrollReveal className="md:col-span-6 space-y-stack-md">
            <ScrollRevealItem>
              <span className="text-primary font-label-md text-label-md uppercase tracking-widest block font-semibold">
                WHY SHIFTQUEST
              </span>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <h2 className="font-headline-md text-headline-md text-primary leading-tight">
                Organizations rarely struggle because they lack strategy.
              </h2>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                More often, they struggle because leadership, people, and culture fail to move in the same direction.
              </p>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                ShiftQuest Consulting helps organizations bridge that gap through practical insight, executive experience, and advisory grounded in real business challenges—not theoretical models.
              </p>
            </ScrollRevealItem>
          </ScrollReveal>

          {/* Interactive Industry Chips Matrix */}
          <div className="md:col-span-6 bg-white p-6 md:p-8 border border-outline-variant/30 rounded-2xl shadow-md space-y-6">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-1 font-bold">
                Industries We Serve
              </h3>
              <p className="font-caption text-caption text-on-surface-variant">
                Hover over a sector to explore custom advisory focus:
              </p>
            </div>

            {/* Interactive Chip Cloud */}
            <div className="flex flex-wrap gap-2.5">
              {industries.map((ind, idx) => {
                const isSelected = selectedIndustry === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedIndustry(idx)}
                    onMouseEnter={() => setSelectedIndustry(idx)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-label-md font-semibold transition-all cursor-pointer border ${
                      isSelected
                        ? "bg-primary text-white border-primary shadow-sm scale-[1.03]"
                        : "bg-surface-container-low text-on-surface border-outline-variant/30 hover:border-primary/40"
                    }`}
                  >
                    <span className={`material-symbols-outlined text-lg ${isSelected ? "text-white" : "text-primary"}`}>
                      {ind.icon}
                    </span>
                    {ind.name}
                  </button>
                );
              })}
            </div>

            {/* Selected Industry Detail Highlight */}
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20 flex items-start gap-3"
            >
              <span className="material-symbols-outlined text-primary text-2xl mt-0.5">
                {industries[selectedIndustry].icon}
              </span>
              <div>
                <h4 className="font-label-md text-label-md font-bold text-primary">
                  {industries[selectedIndustry].name} Advisory Focus
                </h4>
                <p className="font-caption text-caption text-on-surface-variant leading-relaxed mt-1">
                  {industries[selectedIndustry].detail}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
