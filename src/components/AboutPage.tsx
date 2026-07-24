import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollReveal, ScrollRevealItem, AnimatedCard } from "./animations/MotionWrappers";
import { TiltCard, FullscreenCredentialModal } from "./animations/TiltCard";
import type { CredentialItem } from "./animations/TiltCard";

interface AboutPageProps {
  onNavigate?: (page: string) => void;
  onOpenContact?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCredential, setSelectedCredential] = useState<CredentialItem | null>(null);

  const credentials: CredentialItem[] = [
    {
      id: "phd",
      label: "DOCTORAL RESEARCH",
      title: "Ph.D. in Human Resources Accounting",
      detail: "University research quantifying human capital & org value.",
      institution: "University Research Scholar",
      fullDescription: "Pioneering doctoral thesis research focusing on the quantitative measurement, financial accounting, and valuation models of human capital assets within corporate enterprise balance sheets.",
      icon: "school",
      verificationBadge: "Doctoral Dissertation Verified",
    },
    {
      id: "icf",
      label: "GLOBAL COACHING STANDARD",
      title: "ICF Accredited Associate Certified Coach (ACC)",
      detail: "International Coaching Federation ACC certification.",
      institution: "International Coaching Federation (ICF)",
      fullDescription: "Internationally accredited C-Suite executive coaching credential adhering to global ethical standards, core coaching competencies, and rigorous client hour requirements.",
      icon: "psychology",
      verificationBadge: "ICF ACC Credential Active",
    },
    {
      id: "mpm",
      label: "POSTGRADUATE DEGREE",
      title: "Master of Personnel Management",
      detail: "University of Pune.",
      institution: "University of Pune",
      fullDescription: "Master's degree in human resources, personnel management, organizational behavior, and labor dynamics from the prestigious University of Pune.",
      icon: "workspace_premium",
      verificationBadge: "Master's Degree Awarded",
    },
    {
      id: "law",
      label: "LEGAL CREDENTIALS",
      title: "Post Graduate Diploma in Labour Law",
      detail: "Indian Law Institute, New Delhi.",
      institution: "Indian Law Institute, New Delhi",
      fullDescription: "Specialized legal postgraduate diploma covering Indian labor legislation, industrial dispute act, trade union governance, statutory compliance, and wage settlements.",
      icon: "gavel",
      verificationBadge: "Legal Diploma Certified",
    },
    {
      id: "director",
      label: "BOARD GOVERNANCE",
      title: "Certified Independent Director",
      detail: "World Council of Directors & Qualified Independent Director Assessment (IICA).",
      institution: "Indian Institute of Corporate Affairs (IICA)",
      fullDescription: "Qualified Independent Director certified by the Ministry of Corporate Affairs / IICA Databank, specialized in corporate board governance, audit committees, and ESG stewardship.",
      icon: "verified",
      verificationBadge: "IICA Databank Listed",
    },
    {
      id: "hay",
      label: "ASSESSMENT CERTIFICATION",
      title: "HAY Job Evaluation & OPQ Assessor",
      detail: "Certified assessor in psychometrics & job evaluation.",
      institution: "Korn Ferry HAY Group / SHL OPQ",
      fullDescription: "Certified practitioner in Korn Ferry HAY Group job grading systems and SHL OPQ32 psychometric assessment tools for executive talent evaluation and organizational structuring.",
      icon: "assessment",
      verificationBadge: "Korn Ferry & SHL Certified",
    },
  ];

  const milestones = [
    { period: "30+ Years", title: "Executive Leadership & Board Advisory", desc: "Spearheaded HR & Industrial Relations across major manufacturing plant networks, promoter boards, and international business units." },
    { period: "7 Plants", title: "HR Leadership Across Manufacturing Plants", desc: "Direct stewardship of large-scale industrial operations, union wage agreements, and workforce safety culture." },
    { period: "M&A Focus", title: "International HR Integration", desc: "Successfully integrated cross-border teams across Thailand and South Africa during complex corporate transitions." },
    { period: "Present", title: "Founder & Principal Advisor — ShiftQuest Consulting", desc: "Partnering with enterprise leaders, family businesses, and promoters on executive coaching, IR governance, and organizational transformation." },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <Navbar activePage="about" onNavigate={onNavigate} onOpenContact={onOpenContact} />

      <main className="pt-20 max-w-container-max mx-auto">
        {/* Hero Section: About ShiftQuest & Executive Narrative */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col md:flex-row gap-stack-lg items-center">
          <ScrollReveal className="w-full md:w-1/2 space-y-stack-md">
            <ScrollRevealItem>
              <span className="font-label-md text-label-md text-sage tracking-widest uppercase font-semibold">
                ABOUT SHIFTQUEST CONSULTING
              </span>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-bold">
                Executive Leadership &amp; Transformation Advisory
              </h1>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                ShiftQuest Consulting partners with business leaders to strengthen leadership capability, build high-performing workplaces, and create organizations prepared for sustained growth.
              </p>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Led by Dr. Krishan Singh, ShiftQuest combines over three decades of executive leadership experience with internationally accredited coaching and deep expertise in industrial relations, organizational transformation, and strategic HR advisory.
              </p>
            </ScrollRevealItem>
          </ScrollReveal>
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: "easeOut" }}
          >
            <div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden shadow-xl border border-outline-variant/30 relative">
              <motion.img
                src="/gallery2.jpg"
                alt="Dr. Krishan Singh Executive Portrait"
                className="w-full h-full object-cover transition-transform duration-700"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              />
            </div>
            {/* Official ICF ACC Badge Seal */}
            <div className="absolute -top-6 -right-6 bg-white p-1.5 rounded-full shadow-2xl border-2 border-primary w-24 h-24 md:w-28 md:h-28 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src="/icf-badge.png"
                alt="ICF Associate Certified Coach (ACC) Official Credentials Badge"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </section>

        {/* Global Certifications & Governance - Interactive 3D Tilt Grid Content Reveal */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-low border-y border-outline-variant/20">
          <ScrollReveal className="mb-12 text-center max-w-2xl mx-auto">
            <ScrollRevealItem>
              <span className="text-primary font-label-md text-label-md uppercase tracking-widest block mb-2 font-semibold">
                ACCREDITATIONS &amp; GOVERNANCE
              </span>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <h2 className="font-headline-md text-headline-md text-primary font-bold">
                Global Standards &amp; Certifications
              </h2>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <p className="font-caption text-caption text-on-surface-variant mt-2">
                Hover to experience 3D spatial tilt • Click any credential for full specification
              </p>
            </ScrollRevealItem>
          </ScrollReveal>

          {/* 3D Tilt Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((c) => (
              <TiltCard key={c.id} item={c} onSelect={(item) => setSelectedCredential(item)} />
            ))}
          </div>

          {/* Fullscreen Modal Reveal */}
          <FullscreenCredentialModal
            selectedItem={selectedCredential}
            onClose={() => setSelectedCredential(null)}
          />
        </section>

        {/* Key Milestones */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-gap">
          <ScrollReveal className="text-center mb-stack-lg">
            <ScrollRevealItem>
              <h2 className="font-headline-md text-headline-md text-primary font-bold">
                Key Career Milestones
              </h2>
            </ScrollRevealItem>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto relative border-l-2 border-primary ml-4 md:ml-8">
            {milestones.map((m, idx) => (
              <AnimatedCard key={idx} className="mb-stack-lg relative pl-8 border-none bg-transparent shadow-none hover:shadow-none" liftY={-2}>
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-primary rounded-full border-2 border-white" />
                <span className="font-label-md text-label-md text-sage font-bold block mb-1">
                  {m.period}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {m.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  {m.desc}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default AboutPage;
