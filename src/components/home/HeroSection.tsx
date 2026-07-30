import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "../animations/MotionWrappers";

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
  onScrollToCTA?: (e: React.MouseEvent) => void;
  onOpenContact?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onScrollToCTA, onOpenContact }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleNav = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface py-section-gap">
      {/* Ambient Luxury Lighting Blobs */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-sage/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10">
        <ScrollReveal className="md:col-span-7 space-y-stack-md">
          <ScrollRevealItem>
            <div className="glass-card inline-flex items-center gap-2.5 px-4 py-2 text-primary border border-white/80 rounded-full font-label-md text-label-md shadow-executive">
              <span className="material-symbols-outlined text-primary text-sm">award</span>
              30+ Years of Executive Leadership Experience
            </div>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <h1 className="font-display-lg-mobile md:text-display-lg md:font-display-lg text-on-surface tracking-tight leading-tight">
              Leadership that <span className="executive-gradient-text">transforms organizations</span>.
            </h1>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl leading-relaxed">
              ShiftQuest Consulting partners with business leaders to strengthen leadership capability, build high-performing workplaces, and create organizations prepared for sustained growth.
            </p>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="text-on-surface-variant/80 font-body-md text-body-md max-w-xl leading-relaxed">
              Led by Founder &amp; Managing Partner Dr. Krishan Singh, ShiftQuest combines over three decades of executive leadership experience with internationally accredited coaching and deep expertise in industrial relations, organizational transformation, and strategic HR advisory.
            </p>
          </ScrollRevealItem>

          {/* Quick Floating Impact Stats Bar */}
          <ScrollRevealItem>
            <div className="grid grid-cols-3 gap-4 pt-2 border-y border-outline-variant/30 py-4">
              <div>
                <div className="font-headline-md text-headline-md text-primary font-bold">30+ Yrs</div>
                <div className="font-caption text-caption text-sage font-semibold">Executive Leadership</div>
              </div>
              <div>
                <div className="font-headline-md text-headline-md text-primary font-bold">150+</div>
                <div className="font-caption text-caption text-sage font-semibold">Leaders Coached</div>
              </div>
              <div>
                <div className="font-headline-md text-headline-md text-primary font-bold">48+</div>
                <div className="font-caption text-caption text-sage font-semibold">Industrial Settlements</div>
              </div>
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="flex flex-col sm:flex-row gap-stack-md pt-2">
              <button
                onClick={onOpenContact || onScrollToCTA || ((e) => handleNav(e, "about"))}
                className="bg-primary text-white font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-primary/90 shadow-md active:scale-[0.98] transition-all font-bold cursor-pointer"
              >
                Schedule a Conversation
              </button>
              <button
                onClick={(e) => handleNav(e, "hr-transformation")}
                className="border border-primary text-primary font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-surface-container-low transition-all font-bold"
              >
                Explore Our Advisory Practice
              </button>
            </div>
          </ScrollRevealItem>
        </ScrollReveal>

        <motion.div
          className="md:col-span-5 relative mt-12 md:mt-0"
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: "easeOut" }}
        >
          <div className="aspect-square relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-xl -rotate-3 scale-105 transition-transform group-hover:rotate-0" />
            <div className="relative h-full w-full bg-surface-container rounded-xl overflow-hidden border border-outline-variant/30 shadow-xl">
              <motion.img
                className="w-full h-full object-cover object-top scale-105 transition-transform duration-500"
                src="/gallery2.jpg"
                alt="Dr. Krishan Singh - Executive Portrait"
                whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            {/* Official ICF ACC Badge Seal */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white p-1.5 rounded-full shadow-2xl border-2 border-primary w-28 h-28 md:w-32 md:h-32 flex items-center justify-center overflow-hidden transition-transform duration-300"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
            >
              <img
                src="/icf-badge.png"
                alt="ICF Associate Certified Coach (ACC) Official Credentials & Standards Badge"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container/[0.02] -skew-x-12 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
