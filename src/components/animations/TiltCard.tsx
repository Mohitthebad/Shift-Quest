import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

export interface CredentialItem {
  id: string;
  label: string;
  title: string;
  detail: string;
  institution: string;
  fullDescription: string;
  icon: string;
  verificationBadge: string;
}

interface TiltCardProps {
  item: CredentialItem;
  onSelect: (item: CredentialItem) => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({ item, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D tilt tracking
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for natural physical tilt feel
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), { damping: 20, stiffness: 200 });

  // Glare position
  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect(item)}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ duration: 0.2 }}
        className="relative bg-white p-7 rounded-2xl border border-outline-variant/30 shadow-executive hover:shadow-2xl transition-shadow cursor-pointer h-full flex flex-col justify-between overflow-hidden group select-none"
      >
        {/* 3D Glare Reflection Layer */}
        <motion.div
          style={{
            background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)`,
          }}
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        />

        <div className="relative z-20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-caption font-bold text-sage uppercase tracking-widest block">
              {item.label}
            </span>
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
            </div>
          </div>

          <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-bold leading-snug group-hover:text-primary-container transition-colors">
            {item.title}
          </h3>
          <p className="font-caption text-caption text-on-surface-variant leading-relaxed mb-4">
            {item.detail}
          </p>
        </div>

        <div className="relative z-20 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-caption font-semibold text-primary">
          <span>{item.institution}</span>
          <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
            open_in_full
          </span>
        </div>
      </motion.div>
    </div>
  );
};

interface FullscreenModalProps {
  selectedItem: CredentialItem | null;
  onClose: () => void;
}

export const FullscreenCredentialModal: React.FC<FullscreenModalProps> = ({ selectedItem, onClose }) => {
  React.useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <AnimatePresence>
      {selectedItem && (
        <div className="fixed inset-0 z-[200] overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Centered Scroll Container Wrapper */}
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
            {/* Modal Card Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-white/60 overflow-hidden z-10 text-left my-auto"
            >
              {/* Modal Header Bar */}
              <div className="bg-primary text-white p-6 md:p-8 relative">
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer"
                  aria-label="Close modal"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>

                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/15 rounded-full text-caption font-semibold text-primary-fixed uppercase tracking-wider mb-3">
                  <span className="material-symbols-outlined text-sm">{selectedItem.icon}</span>
                  {selectedItem.label}
                </div>

                <h2 className="font-headline-md text-headline-md font-bold text-white mb-2">
                  {selectedItem.title}
                </h2>
                <p className="text-primary-fixed font-body-md text-body-md font-medium">
                  {selectedItem.institution}
                </p>
              </div>

              {/* Modal Content Details */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <span className="text-caption font-bold text-sage uppercase tracking-wider block mb-2">
                    CREDENTIAL OVERVIEW
                  </span>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    {selectedItem.fullDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-outline-variant/20">
                  <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                    <span className="text-caption font-bold text-primary uppercase tracking-wider block mb-1">
                      ISSUING / GOVERNING BODY
                    </span>
                    <span className="font-label-md text-label-md font-bold text-on-surface">
                      {selectedItem.institution}
                    </span>
                  </div>

                  <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                    <span className="text-caption font-bold text-primary uppercase tracking-wider block mb-1">
                      STANDARDS VERIFICATION
                    </span>
                    <span className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sage text-lg">verified</span>
                      {selectedItem.verificationBadge}
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={onClose}
                    className="bg-primary text-white font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-primary/90 transition-all font-bold cursor-pointer"
                  >
                    Close Specification
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
