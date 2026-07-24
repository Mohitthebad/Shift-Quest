import React from "react";
import { ScrollReveal, ScrollRevealItem } from "../animations/MotionWrappers";

interface CtaSectionProps {
  onNavigate?: (page: string) => void;
  onOpenContact?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onNavigate, onOpenContact }) => {
  const handleNav = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <>
      {/* Leadership Philosophy Section */}
      <section className="py-section-gap bg-surface-container-low border-t border-outline-variant/20 text-center">
        <ScrollReveal className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop space-y-4">
          <ScrollRevealItem>
            <span className="text-primary font-label-md text-label-md uppercase tracking-widest block font-semibold">
              LEADERSHIP PHILOSOPHY
            </span>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <h2 className="font-headline-md text-headline-md text-primary font-bold">
              Better organizations begin with better leadership.
            </h2>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="text-on-surface-variant font-body-lg text-body-lg leading-relaxed pt-2">
              Transformation is rarely the result of a single initiative. It is built through consistent leadership, meaningful dialogue, trusted relationships, and the ability to align people around a shared purpose.
            </p>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed italic text-primary/80">
              That belief defines every engagement at ShiftQuest Consulting.
            </p>
          </ScrollRevealItem>
        </ScrollReveal>
      </section>

      {/* Final CTA Banner */}
      <section id="home-cta" className="py-section-gap relative overflow-hidden bg-primary text-white">
        <ScrollReveal className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <ScrollRevealItem>
            <span className="text-primary-fixed uppercase tracking-widest font-label-md text-label-md block mb-2 font-semibold">
              START THE CONVERSATION
            </span>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <h2 className="font-display-lg-mobile md:text-display-lg md:font-display-lg mb-stack-md font-bold">
              Every transformation begins with a conversation.
            </h2>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="text-on-primary-container font-body-lg text-body-lg max-w-2xl mx-auto mb-stack-lg leading-relaxed">
              Whether you are strengthening leadership, navigating organizational change, or building a more collaborative workplace, we would be pleased to partner with you.
            </p>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={onOpenContact || ((e) => handleNav(e, "about"))}
                className="bg-white text-primary font-label-md text-label-md px-10 py-5 rounded-lg hover:bg-surface transition-all flex items-center justify-center gap-2 font-bold shadow-lg cursor-pointer"
              >
                Schedule a Conversation
                <span className="material-symbols-outlined">send</span>
              </button>
              <button
                onClick={(e) => handleNav(e, "hr-transformation")}
                className="border border-white/30 text-white font-label-md text-label-md px-10 py-5 rounded-lg hover:bg-white/10 transition-all font-bold"
              >
                Explore Our Advisory Practice
              </button>
            </div>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <div className="flex flex-wrap justify-center gap-6 mt-stack-md text-caption text-on-primary-container font-medium">
              <span>✓ Confidential Executive Briefing</span>
              <span>✓ Direct Board &amp; C-Suite Access</span>
              <span>✓ Tailored Advisory Roadmap</span>
            </div>
          </ScrollRevealItem>
        </ScrollReveal>
      </section>
    </>
  );
};

export default CtaSection;
