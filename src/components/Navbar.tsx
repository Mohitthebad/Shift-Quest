import React, { useState, useEffect } from "react";

interface NavbarProps {
  activePage?: string;
  onNavigate?: (page: string) => void;
  onScrollToCTA?: (e: React.MouseEvent) => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage = "home",
  onNavigate,
  onScrollToCTA,
  onOpenContact,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleNav = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
    setIsDrawerOpen(false);
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 ${
          isScrolled ? "glass-nav shadow-executive" : "bg-surface/85 backdrop-blur-md border-b border-outline-variant/30"
        }`}
      >
        <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => handleNav(e, "home")}>
          <img
            alt="ShiftQuest logo"
            className="h-8 w-8 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzCsdtPpmgnDkxLi1fbuTeZQAH73y_YruPYbAGlAfl68hXxu83FI6U1EOwYfVaPnM94CE4rCs9hJ4m7EQGU7mfonM0owJv-baxzq22xBFIwemHOq0kYmd5C36Wu1l7VMEOiOZaPrUWaYOxPUvGE2nTp9lJ-ef4x7DpiOoipF411tMERn1efiYCNvFjJjWaHJ4GSCjXRMAAJ1KHTfi_T4Y4wXExwx_EUoAj3SmsKhAD--rxwLAwiaYdopeoidRF7BJoBYkBnrn-Rznr"
          />
          <span className="font-headline-sm text-headline-sm font-bold text-primary">
            ShiftQuest Consulting
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            className={`font-label-md text-label-md transition-colors px-3.5 py-2 rounded cursor-pointer ${
              activePage === "home" ? "text-primary font-bold" : "text-on-surface-variant hover:bg-surface-container-low"
            }`}
            href="#"
            onClick={(e) => handleNav(e, "home")}
          >
            Home
          </a>

          {/* 1. Advisory Practices Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("practices")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-1 text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low px-3.5 py-2 rounded transition-all cursor-pointer font-semibold">
              Advisory Practices
              <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${activeMenu === "practices" ? "rotate-180" : ""}`}>
                keyboard_arrow_down
              </span>
            </button>

            {/* Practices Mega Menu Panel */}
            {activeMenu === "practices" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] bg-white/95 backdrop-blur-2xl border border-outline-variant/30 shadow-2xl rounded-2xl p-8 z-50 mt-2 transition-all">
                <div className="grid grid-cols-12 gap-8 items-start">
                  <div className="col-span-6 space-y-4">
                    <span className="text-caption font-bold text-sage uppercase tracking-widest block border-b border-outline-variant/20 pb-2">
                      CORE ADVISORY PRACTICES
                    </span>

                    <a
                      href="#"
                      onClick={(e) => handleNav(e, "coaching")}
                      className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-surface-container-low transition-all cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-xl">psychology</span>
                      </div>
                      <div>
                        <h4 className="font-label-md text-label-md font-bold text-primary group-hover:text-primary-container">
                          Executive Coaching
                        </h4>
                        <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                          Helping leaders think with greater clarity, lead with confidence, and create lasting impact.
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      onClick={(e) => handleNav(e, "industrial-relations")}
                      className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-surface-container-low transition-all cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-xl">gavel</span>
                      </div>
                      <div>
                        <h4 className="font-label-md text-label-md font-bold text-primary group-hover:text-primary-container">
                          Industrial Relations Advisory
                        </h4>
                        <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                          Building collaborative employee relations, wage settlements, and business continuity.
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      onClick={(e) => handleNav(e, "hr-transformation")}
                      className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-surface-container-low transition-all cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-xl">account_tree</span>
                      </div>
                      <div>
                        <h4 className="font-label-md text-label-md font-bold text-primary group-hover:text-primary-container">
                          HR &amp; Organization Transformation
                        </h4>
                        <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                          Aligning leadership, culture, and people strategy with evolving business priorities.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="col-span-3 space-y-3">
                    <span className="text-caption font-bold text-sage uppercase tracking-widest block border-b border-outline-variant/20 pb-2">
                      INDUSTRIES
                    </span>
                    <ul className="space-y-2 font-caption text-caption text-on-surface font-semibold">
                      <li className="flex items-center gap-2 text-on-surface-variant hover:text-primary">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Manufacturing &amp; Plants
                      </li>
                      <li className="flex items-center gap-2 text-on-surface-variant hover:text-primary">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Chemicals &amp; Safety
                      </li>
                      <li className="flex items-center gap-2 text-on-surface-variant hover:text-primary">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Engineering &amp; R&amp;D
                      </li>
                      <li className="flex items-center gap-2 text-on-surface-variant hover:text-primary">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Family Businesses
                      </li>
                      <li className="flex items-center gap-2 text-on-surface-variant hover:text-primary">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Growth Enterprises
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-3 bg-surface-container-low p-5 rounded-xl border border-outline-variant/20 flex flex-col justify-between h-full space-y-3">
                    <div>
                      <span className="text-caption font-bold text-primary uppercase tracking-wider block mb-1">
                        EXECUTIVE BRIEFING
                      </span>
                      <h4 className="font-label-md text-label-md font-bold text-on-surface mb-2">
                        Direct Board &amp; C-Suite Advisory
                      </h4>
                      <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                        Led by Dr. Krishan Singh with over 30 years executive experience.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setActiveMenu(null);
                        if (onOpenContact) onOpenContact();
                      }}
                      className="w-full bg-primary text-white font-label-md text-label-md py-2.5 px-4 rounded-lg hover:bg-primary/90 transition-all font-bold cursor-pointer text-center shadow-sm"
                    >
                      Schedule Session →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. About Dr. Krishan Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("about")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button
              onClick={(e) => handleNav(e, "about")}
              className="flex items-center gap-1 text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low px-3.5 py-2 rounded transition-all cursor-pointer font-semibold"
            >
              About Dr. Krishan Singh
              <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${activeMenu === "about" ? "rotate-180" : ""}`}>
                keyboard_arrow_down
              </span>
            </button>

            {/* About Mega Menu Panel */}
            {activeMenu === "about" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[750px] bg-white/95 backdrop-blur-2xl border border-outline-variant/30 shadow-2xl rounded-2xl p-8 z-50 mt-2 transition-all">
                <div className="grid grid-cols-12 gap-8 items-start">
                  <div className="col-span-7 space-y-4">
                    <span className="text-caption font-bold text-sage uppercase tracking-widest block border-b border-outline-variant/20 pb-2">
                      LEADERSHIP PROFILE &amp; ACADEMIA
                    </span>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-xl">award</span>
                        <div>
                          <h4 className="font-label-md text-label-md font-bold text-primary">30+ Years Executive Leadership</h4>
                          <p className="font-caption text-caption text-on-surface-variant">Stewardship across manufacturing, IR, and multinational integration.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-xl">psychology</span>
                        <div>
                          <h4 className="font-label-md text-label-md font-bold text-primary">ICF Accredited Associate Certified Coach</h4>
                          <p className="font-caption text-caption text-on-surface-variant">Global coaching standards &amp; 200+ leaders mentored.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-xl">school</span>
                        <div>
                          <h4 className="font-label-md text-label-md font-bold text-primary">Ph.D. in HR Accounting &amp; Labour Law</h4>
                          <p className="font-caption text-caption text-on-surface-variant">University of Pune &amp; Indian Law Institute, New Delhi.</p>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#"
                      onClick={(e) => handleNav(e, "about")}
                      className="inline-flex items-center gap-2 text-primary font-bold font-label-md text-label-md hover:underline pt-2"
                    >
                      View Complete Executive Profile →
                    </a>
                  </div>

                  <div className="col-span-5 bg-surface-container-low p-5 rounded-xl border border-outline-variant/20 space-y-4">
                    <div className="flex items-center gap-3">
                      <img src="/icf-badge.png" alt="ICF Badge" className="w-12 h-12 rounded-full object-cover border" />
                      <div>
                        <h5 className="font-label-md text-label-md font-bold text-primary">Dr. Krishan Singh</h5>
                        <span className="text-caption font-bold text-sage">FOUNDER &amp; PRINCIPAL</span>
                      </div>
                    </div>
                    <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                      "Better organizations begin with better leadership. Transformation is built through consistent leadership and trusted relationships."
                    </p>
                    <button
                      onClick={(e) => handleNav(e, "about")}
                      className="w-full bg-primary text-white font-label-md text-label-md py-2.5 px-4 rounded-lg hover:bg-primary/90 transition-all font-bold cursor-pointer text-center"
                    >
                      Explore Credentials
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Firm Profile & Methodology Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("firm")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-1 text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low px-3.5 py-2 rounded transition-all cursor-pointer font-semibold">
              Firm Overview
              <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${activeMenu === "firm" ? "rotate-180" : ""}`}>
                keyboard_arrow_down
              </span>
            </button>

            {/* Firm Overview Mega Menu Panel */}
            {activeMenu === "firm" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white/95 backdrop-blur-2xl border border-outline-variant/30 shadow-2xl rounded-2xl p-8 z-50 mt-2 transition-all">
                <div className="grid grid-cols-12 gap-8 items-start">
                  <div className="col-span-7 space-y-4">
                    <span className="text-caption font-bold text-sage uppercase tracking-widest block border-b border-outline-variant/20 pb-2">
                      TRANSFORMATION ARCHITECTURE
                    </span>

                    <ul className="space-y-3 font-caption text-caption text-on-surface font-semibold">
                      <li className="p-2.5 bg-surface-container-low rounded-lg border border-outline-variant/20">
                        <span className="text-primary font-bold uppercase tracking-wider block mb-0.5">01 AUDIT &amp; DIAGNOSTIC</span>
                        Deep workforce analysis &amp; labor governance evaluation.
                      </li>
                      <li className="p-2.5 bg-surface-container-low rounded-lg border border-outline-variant/20">
                        <span className="text-primary font-bold uppercase tracking-wider block mb-0.5">02 STRUCTURE &amp; DESIGN</span>
                        Target operating model &amp; C-Suite alignment.
                      </li>
                      <li className="p-2.5 bg-surface-container-low rounded-lg border border-outline-variant/20">
                        <span className="text-primary font-bold uppercase tracking-wider block mb-0.5">03 DISCIPLINE &amp; CULTURE</span>
                        Harmonious union settlements &amp; high-performance culture.
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-5 bg-primary text-white p-6 rounded-xl space-y-4 shadow-md">
                    <span className="text-caption font-bold text-primary-fixed uppercase tracking-wider">
                      PROVEN OUTCOMES
                    </span>
                    <div className="space-y-2">
                      <div className="font-headline-md text-headline-md font-bold">48+</div>
                      <p className="font-caption text-caption text-primary-fixed leading-relaxed">
                        Long-Term Industrial Wage Agreements with Zero Strike Record.
                      </p>
                    </div>
                    <button
                      onClick={onOpenContact}
                      className="w-full bg-white text-primary font-label-md text-label-md py-2.5 px-4 rounded-lg hover:bg-surface transition-all font-bold cursor-pointer text-center"
                    >
                      Schedule Advisory →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact || onScrollToCTA || ((e) => handleNav(e, "about"))}
            className="bg-accent text-white font-label-md text-label-md px-6 py-2.5 rounded-lg active:opacity-80 transition-all hover:bg-accent/90 shadow-sm font-bold cursor-pointer"
          >
            Schedule
          </button>
          <button
            className="md:hidden text-primary p-2 focus:outline-none"
            onClick={toggleDrawer}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100 block" : "opacity-0 pointer-events-none hidden"
        }`}
        onClick={toggleDrawer}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-surface z-[70] transform transition-transform duration-300 flex flex-col gap-unit p-4 shadow-xl ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="font-headline-sm text-headline-sm font-bold text-primary">ShiftQuest</div>
            <div className="text-caption font-label-md uppercase tracking-wider text-secondary">
              Strategic HR &amp; IR Advisory
            </div>
          </div>
          <button className="p-2 text-on-surface-variant focus:outline-none" onClick={toggleDrawer}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          <a
            className={`rounded-full flex items-center gap-3 px-4 py-3 font-label-md text-label-md ${
              activePage === "home" ? "bg-secondary-container text-on-secondary-container font-bold" : "text-on-surface-variant hover:bg-surface-variant"
            }`}
            href="#"
            onClick={(e) => handleNav(e, "home")}
          >
            <span className="material-symbols-outlined">home</span> Home
          </a>
          <a
            className={`rounded-full flex items-center gap-3 px-4 py-3 font-label-md text-label-md ${
              activePage === "about" ? "bg-secondary-container text-on-secondary-container font-bold" : "text-on-surface-variant hover:bg-surface-variant"
            }`}
            href="#"
            onClick={(e) => handleNav(e, "about")}
          >
            <span className="material-symbols-outlined">person</span> About Dr. Krishan Singh
          </a>
          <a
            className={`rounded-full flex items-center gap-3 px-4 py-3 font-label-md text-label-md ${
              activePage === "coaching" ? "bg-secondary-container text-on-secondary-container font-bold" : "text-on-surface-variant hover:bg-surface-variant"
            }`}
            href="#"
            onClick={(e) => handleNav(e, "coaching")}
          >
            <span className="material-symbols-outlined">psychology</span> Executive Coaching
          </a>
          <a
            className={`rounded-full flex items-center gap-3 px-4 py-3 font-label-md text-label-md ${
              activePage === "industrial-relations" ? "bg-secondary-container text-on-secondary-container font-bold" : "text-on-surface-variant hover:bg-surface-variant"
            }`}
            href="#"
            onClick={(e) => handleNav(e, "industrial-relations")}
          >
            <span className="material-symbols-outlined">gavel</span> Industrial Relations
          </a>
          <a
            className={`rounded-full flex items-center gap-3 px-4 py-3 font-label-md text-label-md ${
              activePage === "hr-transformation" ? "bg-secondary-container text-on-secondary-container font-bold" : "text-on-surface-variant hover:bg-surface-variant"
            }`}
            href="#"
            onClick={(e) => handleNav(e, "hr-transformation")}
          >
            <span className="material-symbols-outlined">account_tree</span> HR Transformation
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
