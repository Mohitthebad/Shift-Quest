import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Contact: React.FC<ContactProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    title: "",
    practice: "Executive Coaching",
    preferredTime: "Morning (9 AM - 12 PM)",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      title: "",
      practice: "Executive Coaching",
      preferredTime: "Morning (9 AM - 12 PM)",
      message: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-surface text-on-surface rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden z-10 my-8"
          >
            {/* Modal Header */}
            <div className="bg-primary text-white p-6 md:p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer"
                aria-label="Close Contact Dialog"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-caption font-semibold text-primary-fixed uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-sm">calendar_month</span>
                EXECUTIVE BRIEFING
              </div>
              <h2 className="font-headline-md text-headline-md font-bold text-white mb-1">
                Schedule a Conversation
              </h2>
              <p className="text-on-primary-container font-body-md text-body-md">
                Direct C-Suite &amp; Board Advisory with Dr. Krishan Singh
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-sage/20 text-primary rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    Consultation Request Confirmed
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-on-surface">{formData.name}</strong>. Your consultation details have been received. Our executive office will reach out to confirm your scheduled slot within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="bg-primary text-white font-label-md text-label-md px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-all font-bold shadow-md cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dr. / Mr. / Ms. Jane Doe"
                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-lg text-body-md focus:outline-none focus:border-primary transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane.doe@company.com"
                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-lg text-body-md focus:outline-none focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1">
                        Designation / Role
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="CEO, CHRO, Board Member"
                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-lg text-body-md focus:outline-none focus:border-primary transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-lg text-body-md focus:outline-none focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1">
                        Advisory Practice Area *
                      </label>
                      <select
                        name="practice"
                        value={formData.practice}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-lg text-body-md focus:outline-none focus:border-primary transition-all"
                      >
                        <option value="Executive Coaching">Executive Coaching</option>
                        <option value="Industrial Relations Advisory">Industrial Relations Advisory</option>
                        <option value="HR & Organization Transformation">HR &amp; Organization Transformation</option>
                        <option value="Board Governance Advisory">Board Governance Advisory</option>
                        <option value="General Leadership Briefing">General Leadership Briefing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-lg text-body-md focus:outline-none focus:border-primary transition-all"
                      >
                        <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                        <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                        <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1">
                      Brief Message or Agenda Note
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share any key context or areas you would like to cover..."
                      className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-lg text-body-md focus:outline-none focus:border-primary transition-all resize-none"
                    />
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-outline-variant/20">
                    <span className="text-caption text-on-surface-variant flex items-center gap-1 font-medium">
                      <span className="material-symbols-outlined text-sm text-sage">lock</span>
                      Strictly Confidential Executive Advisory
                    </span>
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-primary text-white font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-primary/90 transition-all font-bold shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      Schedule Consultation
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Contact;
