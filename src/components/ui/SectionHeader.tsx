import React from "react";
import { ScrollReveal, ScrollRevealItem } from "../animations/MotionWrappers";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Centers text (default true) */
  center?: boolean;
  className?: string;
}

/**
 * Shared section header — replaces the copy-pasted eyebrow / h2 / subtitle
 * pattern that appeared 12+ times across section components.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  center = true,
  className = "",
}) => {
  return (
    <ScrollReveal className={`${center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"} ${className}`}>
      <ScrollRevealItem>
        <span className="text-primary font-label-md text-label-md uppercase tracking-widest block mb-2 font-semibold">
          {eyebrow}
        </span>
      </ScrollRevealItem>
      <ScrollRevealItem>
        <h2 className="font-headline-md text-headline-md text-primary">
          {title}
        </h2>
      </ScrollRevealItem>
      {subtitle && (
        <ScrollRevealItem>
          <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
            {subtitle}
          </p>
        </ScrollRevealItem>
      )}
    </ScrollReveal>
  );
};

export default SectionHeader;
