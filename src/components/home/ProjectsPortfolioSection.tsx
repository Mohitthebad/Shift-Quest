import React, { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "../animations/MotionWrappers";

export const ProjectsPortfolioSection: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  const projects = [
    {
      id: "plant",
      tag: "Manufacturing",
      title: "Greenfield Plant Setup",
      text: "Orchestrating the human capital infrastructure for a $1.2B industrial facility from inception to full operational scale.",
      status: "Phase I Completed",
      impact: "$1.2B Industrial Infrastructure & Complete Labor Setup",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0QkNIRspeVmwTRgKPYqHs8AtlekuYbGhyHp9m-1UaLI2hdV1jr5AeGL6rPg-FUTLxW7ciC3LWAyDTR5PTCtezGWnyeyMH1rwIRZiDZHu1tpPW_asXZkda7gxXlknsWqpMIe2bD0I3ZAwjpRn33xBw2AUIq7V8AvQtEGLc_VT9A1JGbz3sMnuJpC1D2ijhcjZZkf04LH8wyesEyxwCrHxE1E6pspa-QbrBlNrmNTDE1Pn9lLc_Vx_efk_j-fOtkfUwGhsqJ1hKuDA",
      alt: "Futuristic greenfield manufacturing plant",
    },
    {
      id: "integration",
      tag: "M&A Strategy",
      title: "Global HR Integration",
      text: "Harmonizing workforce policies and organizational structures across multiple countries during a multi-billion dollar merger.",
      status: "Global Synergy Focus",
      impact: "Multiple Countries Cross-Border Workforce Harmonization",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuqRmCIBjPhNrBT3IDt1JYUIGWFxnCtKWByszTVf9d1bTTeOfA_-FvNjztJxxrFjPrcb2JPVkSLkKrF2crAEzeCHYmT6Lci6ZMHTCLZi3YmkurSFdBe8qWHPyeYnjUiUq-Fqd_KBJQY38yOI9X_-LTNfHJIPL4T554QEYfaMaGV7_TbJTKbEYYY5qiBOOsLeKUcSoHz-ID0dQEmJRJlhOhfqWiBAnOMIC4o9pNjxLdJCq6jiRSkxBQ7Uwnz3tAyFHVW3cqYqWj5iQ",
      alt: "Corporate boardroom overlooking skyline",
    },
    {
      id: "transformation",
      tag: "Digitalization",
      title: "Workforce Transformation",
      text: "Implementing AI-driven talent management systems to future-proof 45,000+ employees against industry disruption.",
      status: "Next-Gen Talent",
      impact: "45,000+ Enterprise Employees Talent Modernization",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8OKMLTjbzZd8Jn965876Z3naN5tve5blpCMTsYIztuw9-LQuur-coA5_uVs8c2f5esz12BloEP8Ctd_u6zGF06ukHYiChVfv8VRWA9VmQV6raj3WqrVaevr9qOKgww1AhUQbCs8ebcup0Bj4n7TrqbOCl3NRuM_bH2oXwbgAlLVSJ0BuS-bRzb5vRagEHOI15Kk-eEMzbdl5CTB4r-QIwQAkqlktQcX_N3Ud5pOmUrWfzjlImJwv_fy0RKQzwg0HjXIsQtDaIybQ",
      alt: "Modern glass staircase in atrium",
    },
  ];

  const currentProject = projects[activeProjectIndex];

  return (
    <section className="py-section-gap bg-surface-container-low border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ScrollReveal className="mb-10 text-center max-w-2xl mx-auto">
          <ScrollRevealItem>
            <span className="text-primary font-label-md text-label-md uppercase tracking-widest block mb-2 font-semibold">
              STRATEGIC ARCHITECTURE
            </span>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <h2 className="font-headline-md text-headline-md text-primary">
              Operational Excellence Portfolio
            </h2>
          </ScrollRevealItem>
        </ScrollReveal>

        {/* Featured Hero Split Showcase (Replacing repetitive 3 photo cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-outline-variant/30 shadow-md p-6 md:p-8">
          {/* Left Column: Interactive Project Selector List */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-caption font-bold tracking-wider uppercase text-sage block mb-2">
              SELECT FEATURED CASE STUDY:
            </span>
            {projects.map((proj, idx) => {
              const isActive = activeProjectIndex === idx;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProjectIndex(idx)}
                  onMouseEnter={() => setActiveProjectIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer border ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-md translate-x-1"
                      : "bg-surface-container-low text-on-surface border-outline-variant/20 hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-caption font-bold uppercase tracking-wider ${
                      isActive ? "text-primary-fixed" : "text-sage"
                    }`}>
                      {proj.tag}
                    </span>
                    <span className={`text-caption font-medium ${
                      isActive ? "text-white/80" : "text-on-surface-variant"
                    }`}>
                      {proj.status}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold">
                    {proj.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Column: Hero Showcase Card */}
          <div className="md:col-span-7">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-xl overflow-hidden border border-outline-variant/20 shadow-md bg-surface-container-low"
            >
              <div className="h-64 md:h-72 relative overflow-hidden">
                <img
                  src={currentProject.src}
                  alt={currentProject.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-caption font-label-md px-3.5 py-1.5 rounded-full shadow-md font-bold">
                  {currentProject.tag}
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-4">
                <h3 className="font-headline-md text-headline-md text-primary font-bold">
                  {currentProject.title}
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {currentProject.text}
                </p>

                <div className="pt-4 border-t border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-caption uppercase font-bold tracking-wider text-sage block">
                      KEY OUTCOME &amp; SCALE
                    </span>
                    <span className="font-label-md text-label-md font-bold text-primary">
                      {currentProject.impact}
                    </span>
                  </div>
                  <span className="text-caption font-label-md text-secondary bg-surface-container-high px-3 py-1.5 rounded-lg font-semibold shrink-0">
                    Status: {currentProject.status}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPortfolioSection;
