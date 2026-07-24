import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollReveal, ScrollRevealItem } from "./animations/MotionWrappers";

interface HrTransformationPageProps {
  onNavigate?: (page: string) => void;
  onOpenContact?: () => void;
}

export const HrTransformationPage: React.FC<HrTransformationPageProps> = ({ onNavigate, onOpenContact }) => {
  const shouldReduceMotion = useReducedMotion();

  const pillars = [
    {
      num: "01",
      title: "Strategic HR Architecture",
      desc: "Aligning human capital strategy directly with corporate business performance, governance frameworks, and P&L growth goals.",
      icon: "account_tree",
      impact: "100% P&L Alignment",
      deliverable: "Executive HR Scorecards & Org Governance Roadmaps",
    },
    {
      num: "02",
      title: "Organizational Design & Scale",
      desc: "Designing agile, scalable organizational structures for rapid business expansion, plant networks, and M&A integration.",
      icon: "architecture",
      impact: "Agile Scale & Efficiency",
      deliverable: "Role Architecture, Span of Control & Org Charts",
    },
    {
      num: "03",
      title: "Succession Planning & Talent",
      desc: "Building robust succession pipelines and talent development systems for long-term C-Suite & critical leadership continuity.",
      icon: "groups",
      impact: "Zero Vacancy Risk",
      deliverable: "Executive Succession Bench & Competency Models",
    },
    {
      num: "04",
      title: "Cultural & Leadership Capability",
      desc: "Fostering a high-performance executive culture grounded in psychological safety, accountability, and continuous learning.",
      icon: "auto_awesome",
      impact: "High-Performance Culture",
      deliverable: "Leadership Capability Frameworks & Mentorship",
    },
    {
      num: "05",
      title: "Cross-Border M&A HR Integration",
      desc: "Seamless workforce harmonization across international business units (Thailand, South Africa, UAE & India).",
      icon: "public",
      impact: "Global Harmonization",
      deliverable: "M&A Integration Playbooks & Policy Alignment",
    },
    {
      num: "06",
      title: "Board Advisory & Governance",
      desc: "Board-level HR advisory, promoter alignment, executive compensation structuring, and statutory compliance audits.",
      icon: "verified",
      impact: "Board Governance",
      deliverable: "Board Briefings & Promoter Alignment Audits",
    },
  ];

  const roadmapPhases = [
    {
      phase: "PHASE 01",
      title: "Diagnostic & HR Capability Audit",
      desc: "Comprehensive assessment of workforce dynamics, organizational design, talent readiness, and labor compliance risk.",
      deliverables: ["Workforce Health Audit", "Span of Control Map", "Compliance Gap Analysis"],
    },
    {
      phase: "PHASE 02",
      title: "Strategic Architecture & Design",
      desc: "Co-creating tailored C-suite, plant HR, and organizational frameworks aligned with 3-5 year growth targets.",
      deliverables: ["Target Operating Model", "Executive Competency Framework", "HR Governance Policy"],
    },
    {
      phase: "PHASE 03",
      title: "Succession & Talent Alignment",
      desc: "Deploying executive mentorship, high-potential pipelines, and structured talent review boards.",
      deliverables: ["Succession Bench Matrix", "C-Suite Development Plans", "Leadership Review Boards"],
    },
    {
      phase: "PHASE 04",
      title: "Cultural Execution & Governance",
      desc: "Embedding performance accountability, continuous governance reviews, and international policy harmonization.",
      deliverables: ["Transformation Scorecard", "Culture Pulse Audits", "Board Progress Briefings"],
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col justify-between selection:bg-primary selection:text-white">
      <Navbar activePage="hr-transformation" onNavigate={onNavigate} onOpenContact={onOpenContact} />

      <main className="flex-grow pt-20">
        {/* Executive Hero Section */}
        <section className="relative py-section-gap overflow-hidden bg-surface border-b border-outline-variant/20">
          {/* Ambient Lighting Background */}
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-sage/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10">
            <ScrollReveal className="md:col-span-7 space-y-stack-md">
              <ScrollRevealItem>
                <div className="glass-card inline-flex items-center gap-2.5 px-4 py-2 text-primary border border-white/80 rounded-full font-label-md text-label-md shadow-executive">
                  <span className="material-symbols-outlined text-primary text-sm">architecture</span>
                  STRATEGIC ORGANIZATION &amp; HR ADVISORY
                </div>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight leading-tight font-bold">
                  HR &amp; Organization Transformation: <span className="executive-gradient-text">Building future-ready enterprises</span>.
                </h1>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed border-l-4 border-primary pl-5">
                  Organizations rarely fail because of bad strategy alone. They fail when leadership, structure, and talent systems fail to move in synchronized harmony.
                </p>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <p className="font-body-md text-body-md text-on-surface-variant/90 max-w-xl leading-relaxed">
                  Led by Dr. Krishan Singh, ShiftQuest combines over 30 years of HR executive stewardship across 7 major manufacturing plants, cross-border M&amp;A integrations (Thailand, South Africa), and board governance advisory.
                </p>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <div className="flex flex-col sm:flex-row gap-stack-md pt-3">
                  <button
                    onClick={() => {
                      if (onOpenContact) onOpenContact();
                      else if (onNavigate) onNavigate("about");
                    }}
                    className="bg-primary text-white px-8 py-4 font-label-md text-label-md rounded-lg transition-all hover:bg-primary/90 shadow-md font-bold cursor-pointer flex items-center justify-center gap-2"
                  >
                    Schedule Transformation Advisory
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </ScrollRevealItem>
            </ScrollReveal>

            {/* Executive Portrait Card Frame */}
            <motion.div
              className="md:col-span-5 relative mt-8 md:mt-0"
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative group">
                <div className="aspect-[4/5] bg-surface-container-high rounded-2xl shadow-executive overflow-hidden relative border-2 border-white">
                  <motion.img
                    className="w-full h-full object-cover object-top scale-[1.05] transition-transform duration-500 group-hover:scale-[1.08]"
                    src="/gallery1.jpg"
                    alt="Dr. Krishan Singh - Executive HR Transformation Advisory"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
                    <span className="text-caption font-bold tracking-widest text-primary-fixed uppercase block mb-1">
                      EXECUTIVE ADVISOR
                    </span>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-white mb-1">
                      Dr. Krishan Singh
                    </h3>
                    <p className="font-caption text-caption text-primary-fixed-dim">
                      30+ Years HR Stewardship &amp; Organization Transformation
                    </p>
                  </div>
                </div>

                {/* Floating Metric Badge */}
                <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl border border-white/80 shadow-executive flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center shadow-md shrink-0">
                    <span className="material-symbols-outlined text-xl">factory</span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm font-bold text-primary block leading-none">
                      7 Plants
                    </span>
                    <span className="font-caption text-caption text-on-surface-variant font-semibold">
                      Manufacturing Stewardship
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6 Strategic Pillars Matrix */}
        <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <ScrollRevealItem>
              <span className="text-primary font-label-md text-label-md uppercase tracking-widest block mb-2 font-semibold">
                OUR CORE CAPABILITIES
              </span>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <h2 className="font-headline-md text-headline-md text-primary font-bold">
                Strategic Transformation Pillars
              </h2>
            </ScrollRevealItem>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="flip-card-container cursor-pointer">
                <div className="flip-card-inner">
                  {/* Card Front Side */}
                  <div className="flip-card-front bg-white p-7 border border-outline-variant/30 shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-sm">
                          <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                        </div>
                        <span className="text-caption font-bold text-sage px-3 py-1 bg-surface-container-low rounded-full border border-outline-variant/20">
                          PILLAR {pillar.num}
                        </span>
                      </div>

                      <h3 className="font-headline-sm text-headline-sm text-primary mb-3 font-bold">
                        {pillar.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between text-caption font-bold text-primary">
                      <span>HOVER TO REVEAL SPECIFICATION</span>
                      <span className="material-symbols-outlined text-lg">sync</span>
                    </div>
                  </div>

                  {/* Card Back Side */}
                  <div className="flip-card-back bg-primary text-white p-7 shadow-xl flex flex-col justify-between border border-primary/50">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-caption font-bold text-primary-fixed uppercase tracking-wider">
                          STRATEGIC DELIVERABLE
                        </span>
                        <span className="text-caption font-bold px-2.5 py-1 bg-white/15 rounded-md text-white">
                          {pillar.impact}
                        </span>
                      </div>

                      <h4 className="font-headline-sm text-headline-sm font-bold text-white mb-3">
                        {pillar.title}
                      </h4>
                      <p className="font-body-md text-body-md text-on-primary-container leading-relaxed mb-4">
                        {pillar.deliverable}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                      <span className="text-caption text-primary-fixed font-medium">
                        ShiftQuest Executive Advisory Framework
                      </span>
                      <button
                        onClick={() => {
                          if (onOpenContact) onOpenContact();
                          else if (onNavigate) onNavigate("about");
                        }}
                        className="bg-white text-primary text-caption font-bold px-4 py-2 rounded-lg hover:bg-surface transition-all shadow-sm"
                      >
                        Inquire →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transformation Roadmap Phase Blueprint */}
        <section className="py-section-gap bg-surface-container-low border-y border-outline-variant/20">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
              <ScrollRevealItem>
                <span className="text-primary font-label-md text-label-md uppercase tracking-widest block mb-2 font-semibold">
                  STRUCTURED BLUEPRINT
                </span>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <h2 className="font-headline-md text-headline-md text-primary font-bold">
                  4-Phase Transformation Journey
                </h2>
              </ScrollRevealItem>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmapPhases.map((phase, idx) => (
                <div
                  key={idx}
                  className="uiverse-card w-full flex flex-col justify-between relative cursor-pointer"
                >
                  <div className="w-1.5 h-full bg-primary absolute left-0 top-0 bottom-0" />
                  <div className="w-full">
                    <span className="text-caption font-bold text-primary tracking-widest uppercase block mb-1">
                      {phase.phase}
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
                      {phase.title}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                      {phase.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-outline-variant/20 uiverse-border-top w-full">
                    <span className="text-caption uppercase font-bold tracking-wider text-sage block mb-2">
                      CORE DELIVERABLES
                    </span>
                    <ul className="space-y-1.5">
                      {phase.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="text-caption font-semibold text-on-surface flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 uiverse-bullet" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default HrTransformationPage;
