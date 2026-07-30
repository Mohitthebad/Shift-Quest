import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollReveal, ScrollRevealItem } from "./animations/MotionWrappers";

interface ExecutiveCoachingPageProps {
  onNavigate?: (page: string) => void;
}

export const ExecutiveCoachingPage: React.FC<ExecutiveCoachingPageProps> = ({ onNavigate }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const focusAreas = [
    {
      num: "01",
      title: "Executive Coaching",
      desc: "Confidential, high-impact guidance for senior executives and C-suite leaders navigating complex business decisions.",
      icon: "psychology",
      audience: "CEOs, Managing Directors & C-Suite Leaders",
      tag: "C-SUITE ADVISORY",
    },
    {
      num: "02",
      title: "Leadership Development",
      desc: "Building core leadership competencies, strategic vision, and enterprise mindset for executive growth.",
      icon: "partner_exchange",
      audience: "Business Unit Heads, VPs & Senior Directors",
      tag: "ENTERPRISE GROWTH",
    },
    {
      num: "03",
      title: "Leadership Transitions",
      desc: "Supporting leaders through critical role pivots, C-suite onboarding, and major organizational scope expansion.",
      icon: "trending_up",
      audience: "Newly Appointed C-Suite Executives & Promoters",
      tag: "ROLE ACCELERATION",
    },
    {
      num: "04",
      title: "High-Potential Coaching",
      desc: "Targeted coaching journeys designed to accelerate future executive talent and build succession bench strength.",
      icon: "star",
      audience: "High-Potential General Managers & Directors",
      tag: "SUCCESSION BENCH",
    },
    {
      num: "05",
      title: "Change Leadership",
      desc: "Equipping leaders to navigate organizational disruption, M&A integration, and lead teams through change with confidence.",
      icon: "groups",
      audience: "Transformation Leaders & Functional Heads",
      tag: "M&A TRANSFORMATION",
    },
    {
      num: "06",
      title: "Career Coaching",
      desc: "Strategic career positioning, personal brand articulation, and long-term professional trajectory planning.",
      icon: "badge",
      audience: "Senior Executives & Independent Board Directors",
      tag: "BOARD POSITIONING",
    },
    {
      num: "07",
      title: "Performance Coaching",
      desc: "Enhancing personal effectiveness, focus, emotional intelligence, and stress resilience under high pressure.",
      icon: "speed",
      audience: "Senior Leaders in High-Stakes Environments",
      tag: "PEAK RESILIENCE",
    },
  ];

  // Number of visible cards per view
  const cardsPerPage = 3;
  const totalPages = Math.ceil(focusAreas.length / cardsPerPage);

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto slide every 4.5 seconds
  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % totalPages);
    }, 4500);
    return () => clearInterval(timer);
  }, [shouldReduceMotion, totalPages]);

  const visibleAreas = focusAreas.slice(
    activeSlideIndex * cardsPerPage,
    activeSlideIndex * cardsPerPage + cardsPerPage
  );

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col justify-between">
      <Navbar activePage="coaching" onNavigate={onNavigate} />

      <main className="flex-grow pt-16 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Hero Section */}
        <section className="relative bg-surface py-section-gap overflow-hidden border-b border-outline-variant/20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <ScrollReveal className="md:col-span-7 z-10 space-y-stack-md">
              <ScrollRevealItem>
                <span className="font-label-md text-label-md text-sage tracking-widest uppercase block font-semibold">
                  ICF ACCREDITED ASSOCIATE CERTIFIED COACH
                </span>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-md font-bold">
                  Executive Coaching: <span className="text-primary">Coaching leaders for greater impact</span>.
                </h1>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                  Leadership today demands more than technical expertise. It requires clarity under pressure, thoughtful decision-making, and the ability to inspire confidence through change.
                </p>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
                  As an ICF Accredited Associate Certified Coach, Dr. Krishan Singh partners with senior executives, business leaders, and high-potential professionals to strengthen leadership capability and accelerate professional growth.
                </p>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <div className="flex flex-col sm:flex-row gap-stack-md pt-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) onNavigate("about");
                    }}
                    className="bg-primary text-white px-8 py-4 font-label-md text-label-md rounded-lg transition-all hover:bg-primary/90 shadow-md font-bold cursor-pointer"
                  >
                    Schedule a Coaching Conversation
                  </button>
                </div>
              </ScrollRevealItem>
            </ScrollReveal>
            <motion.div
              className="md:col-span-5 relative mt-stack-lg md:mt-0"
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: "easeOut" }}
            >
              <div className="glass-card rounded-2xl p-8 border border-white/80 shadow-executive space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                  <div>
                    <span className="text-caption font-bold text-sage uppercase tracking-wider block">
                      EXECUTIVE COACHING IMPACT
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                      Proven Leadership Metrics
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white p-1 shadow-md flex items-center justify-center border border-primary/20">
                    <img
                      src="/icf-badge.png"
                      alt="ICF ACC Badge"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                    <span className="font-headline-md text-headline-md text-primary font-bold block">
                      150+
                    </span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold block">
                      Leaders Coached
                    </span>
                    <span className="font-caption text-caption text-on-surface-variant">
                      ICF ACC Journeys
                    </span>
                  </div>

                  <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                    <span className="font-headline-md text-headline-md text-primary font-bold block">
                      30+ Yrs
                    </span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold block">
                      Executive Experience
                    </span>
                    <span className="font-caption text-caption text-on-surface-variant">
                      C-Suite Mentorship
                    </span>
                  </div>

                  <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                    <span className="font-headline-md text-headline-md text-primary font-bold block">
                      100%
                    </span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold block">
                      Confidentiality
                    </span>
                    <span className="font-caption text-caption text-on-surface-variant">
                      Strict 1-on-1 Protocol
                    </span>
                  </div>

                  <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                    <span className="font-headline-md text-headline-md text-primary font-bold block">
                      ICF ACC
                    </span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold block">
                      Global Standard
                    </span>
                    <span className="font-caption text-caption text-on-surface-variant">
                      International Federation
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-primary text-white rounded-xl flex items-center justify-between shadow-md">
                  <div>
                    <span className="text-caption font-bold tracking-wider text-primary-fixed block uppercase">
                      COACHING LEADERS FOR GREATER IMPACT
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-2xl text-primary-fixed">psychology</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Horizontal Carousel Section */}
        <section className="py-section-gap">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-primary font-label-md text-label-md uppercase tracking-widest block mb-2 font-semibold">
                CORE CAPABILITIES
              </span>
              <h2 className="font-headline-md text-headline-md text-primary font-bold">
                Coaching Focus Areas Showcase
              </h2>
            </div>

            {/* Navigation Controls (Prev / Next Arrows + Page Indicators) */}
            <div className="flex items-center gap-3">
              <span className="text-caption font-bold text-sage tracking-wider mr-2">
                PAGE 0{activeSlideIndex + 1} / 0{totalPages}
              </span>
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-outline-variant/40 bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm cursor-pointer"
                aria-label="Previous Slide"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-outline-variant/40 bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm cursor-pointer"
                aria-label="Next Slide"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Sliding Carousel Track */}
          <div className="relative overflow-hidden min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlideIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {visibleAreas.map((area) => (
                  <div
                    key={area.num}
                    className="bg-white border border-outline-variant/30 rounded-2xl p-7 shadow-md flex flex-col justify-between hover:shadow-lg transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <span className="material-symbols-outlined text-2xl">{area.icon}</span>
                        </div>
                        <span className="text-caption font-bold px-3 py-1 bg-sage/15 text-primary border border-sage/30 rounded-full">
                          {area.tag}
                        </span>
                      </div>

                      <div className="text-caption font-bold text-sage tracking-widest mb-1">
                        FOCUS AREA {area.num}
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-3 font-bold">
                        {area.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                        {area.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-outline-variant/20">
                      <span className="text-caption uppercase font-bold tracking-wider text-sage block mb-1">
                        TARGET LEADERSHIP LEVEL
                      </span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">
                        {area.audience}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlideIndex(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  activeSlideIndex === idx
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-outline-variant/40 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ExecutiveCoachingPage;
