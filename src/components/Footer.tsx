import React from "react";

interface FooterProps {
  onNavigate?: (page: string) => void;
  onScrollToCTA?: (e: React.MouseEvent) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onScrollToCTA }) => {
  const handleNav = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-[#F0EBE3] text-on-surface font-caption text-caption w-full flex flex-col items-center gap-stack-md px-margin-mobile py-stack-lg border-t border-outline-variant/40 relative">
      <div className="max-w-container-max w-full grid grid-cols-1 md:grid-cols-3 gap-stack-lg items-start border-b border-outline-variant/40 pb-stack-lg">
        <div className="space-y-4">
          <div
            className="flex items-center cursor-pointer group"
            onClick={(e) => handleNav(e, "home")}
          >
            <img
              alt="ShiftQuest logo"
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              src="/logo-transparent.png"
            />
          </div>
          <p className="text-on-surface-variant max-w-xs leading-relaxed">
            Transforming Potential into Performance through structured HR advisory, industrial relations governance, and ICF executive mentorship.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-stack-md">
          <div className="flex flex-col gap-2">
            <h5 className="text-primary font-bold mb-2">Advisory Practice</h5>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              href="#"
              onClick={(e) => handleNav(e, "coaching")}
            >
              Executive Coaching
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              href="#"
              onClick={(e) => handleNav(e, "industrial-relations")}
            >
              Industrial Relations
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              href="#"
              onClick={(e) => handleNav(e, "hr-transformation")}
            >
              HR Strategy
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-primary font-bold mb-2">Company</h5>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              href="#"
              onClick={(e) => handleNav(e, "about")}
            >
              About Us
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              href="#"
              onClick={onScrollToCTA || ((e) => handleNav(e, "about"))}
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="space-y-4 text-right md:text-left">
          <h5 className="text-primary font-bold">Executive Consultation</h5>
          <p className="text-on-surface-variant">enquiry@shiftquest.com</p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center pt-stack-md text-on-surface-variant max-w-container-max gap-4">
        <span>© 2024 ShiftQuest Consulting. All rights reserved.</span>
        <div className="flex items-center gap-[6px] p-[4px_8px] border border-outline-variant/60 rounded-[6px] w-fit bg-surface-container-low/60 backdrop-blur-[6px]">
          <a
            href="https://play.fabulousmedia.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FabulousMedia"
            className="flex items-center justify-center bg-[#fff] p-[3px] rounded-[4px] opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:-translate-y-[1px] shadow-sm"
          >
            <img
              src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
              alt="FabulousMedia"
              className="h-[8px] md:h-[10px] w-auto block"
            />
          </a>

          <div className="w-[1px] h-[10px] bg-outline-variant"></div>

          <a
            href="https://gocommercially.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GoCommercially"
            className="flex items-center justify-center bg-[#fff] p-[3px] rounded-[4px] opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:-translate-y-[1px] shadow-sm"
          >
            <img
              src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
              alt="GoCommercially"
              className="h-[8px] md:h-[10px] w-auto block"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
