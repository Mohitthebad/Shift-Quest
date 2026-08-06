import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollReveal, ScrollRevealItem } from "./animations/MotionWrappers";
import { supabase, isSupabaseConfigured } from "../lib/supabase";

interface ContactPageProps {
  onNavigate?: (page: string) => void;
  onOpenContact?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenContact }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    title: "",
    practice: "Executive Coaching",
    customPractice: "",
    engagementMode: "Virtual Advisory",
    preferredTime: "Morning (9 AM - 12 PM)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const practiceSubmitted =
      formData.practice === "Custom" && formData.customPractice
        ? `Custom: ${formData.customPractice}`
        : formData.practice;

    if (isSupabaseConfigured()) {
      try {
        const { error } = await supabase.from("inquiries").insert([
          {
            full_name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            title: formData.title,
            practice: practiceSubmitted,
            message: formData.message,
          },
        ]);
        if (error) {
          console.error("Supabase insert error:", error);
        }
      } catch (err) {
        console.error("Supabase submission exception:", err);
      }
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    window.scrollTo({ top: 300, behavior: "smooth" });
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
      customPractice: "",
      engagementMode: "Virtual Advisory",
      preferredTime: "Morning (9 AM - 12 PM)",
      message: "",
    });
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col justify-between">
      {/* Top Fixed Navbar */}
      <Navbar activePage="contact" onNavigate={onNavigate} onOpenContact={onOpenContact} />

      <main className="flex-grow pt-24 pb-16 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full space-y-12 md:space-y-16">
        {/* 2-Column Main Contact Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Direct Office Contact & Information */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal className="space-y-6">
              <ScrollRevealItem>
                <div className="bg-surface p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm space-y-6">
                  <h3 className="font-headline-md text-headline-md font-bold text-primary border-b border-outline-variant/20 pb-4">
                    Executive Advisory Desk
                  </h3>

                  <div className="space-y-5">
                    {/* Work Email Item */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-2xl">mail</span>
                      </div>
                      <div className="flex-grow">
                        <span className="text-caption font-bold text-sage uppercase tracking-wider block mb-0.5">
                          DIRECT EXECUTIVE EMAIL
                        </span>
                        <a
                          href="mailto:krishan@shiftquest.com"
                          className="font-label-md text-label-md font-bold text-primary hover:underline block"
                        >
                          krishan@shiftquest.com
                        </a>
                        <span className="text-caption text-on-surface-variant block mt-0.5">
                          Inquiries &amp; Confidential Briefings
                        </span>
                      </div>
                      <button
                        onClick={() => copyToClipboard("krishan@shiftquest.com", "email")}
                        className="p-2 text-on-surface-variant hover:text-primary rounded-lg transition-colors cursor-pointer"
                        title="Copy Email"
                        aria-label="Copy Email"
                      >
                        <span className="material-symbols-outlined text-xl">
                          {copiedType === "email" ? "check" : "content_copy"}
                        </span>
                      </button>
                    </div>

                    {/* Office Phone Item */}
                    <div className="flex items-start gap-4 pt-4 border-t border-outline-variant/15">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-2xl">call</span>
                      </div>
                      <div className="flex-grow">
                        <span className="text-caption font-bold text-sage uppercase tracking-wider block mb-0.5">
                          EXECUTIVE DESK PHONE
                        </span>
                        <a
                          href="tel:+919650106003"
                          className="font-label-md text-label-md font-bold text-primary hover:underline block"
                        >
                          +91 9650106003
                        </a>
                        <span className="text-caption text-on-surface-variant block mt-0.5">
                          Mon – Sat: 9:00 AM – 7:00 PM IST
                        </span>
                      </div>
                      <button
                        onClick={() => copyToClipboard("+919650106003", "phone")}
                        className="p-2 text-on-surface-variant hover:text-primary rounded-lg transition-colors cursor-pointer"
                        title="Copy Phone Number"
                        aria-label="Copy Phone Number"
                      >
                        <span className="material-symbols-outlined text-xl">
                          {copiedType === "phone" ? "check" : "content_copy"}
                        </span>
                      </button>
                    </div>

                    {/* Primary Office Location */}
                    <div className="flex items-start gap-4 pt-4 border-t border-outline-variant/15">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-2xl">location_on</span>
                      </div>
                      <div>
                        <span className="text-caption font-bold text-sage uppercase tracking-wider block mb-0.5">
                          NATIONAL ADVISORY HEADQUARTERS
                        </span>
                        <p className="font-label-md text-label-md font-bold text-on-surface">
                          ShiftQuest Advisory Group
                        </p>
                        <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                          DLF Cyber City, Executive Tower B<br />
                          Gurugram (NCR), Haryana 122002, India
                        </p>
                      </div>
                    </div>

                    {/* Regional Office Location */}
                    <div className="flex items-start gap-4 pt-4 border-t border-outline-variant/15">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-2xl">domain</span>
                      </div>
                      <div>
                        <span className="text-caption font-bold text-sage uppercase tracking-wider block mb-0.5">
                          WESTERN REGION ADVISORY DESK
                        </span>
                        <p className="font-label-md text-label-md font-bold text-on-surface">
                          Industrial &amp; IR Practice Desk
                        </p>
                        <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                          Koregaon Park Executive Chambers<br />
                          Pune, Maharashtra 411001, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollRevealItem>

              {/* Confidentiality Assurance Box */}
              <ScrollRevealItem>
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl shrink-0 mt-0.5">verified_user</span>
                  <div className="space-y-1">
                    <h4 className="font-label-md text-label-md font-bold text-primary">
                      Executive Confidentiality Pledge
                    </h4>
                    <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                      We understand the sensitive nature of board dynamics, wage negotiations, and executive transitions. Your data and strategic briefs are held under strict non-disclosure obligations.
                    </p>
                  </div>
                </div>
              </ScrollRevealItem>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <ScrollRevealItem>
                <div className="bg-surface p-6 md:p-10 rounded-2xl border border-outline-variant/40 shadow-xl relative overflow-hidden">
                  {/* Subtle Accent Bar Top */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-sage to-primary" />

                  <div className="mb-6">
                    <span className="text-caption font-bold text-sage uppercase tracking-wider block mb-1">
                      SCHEDULE A CONVERSATION
                    </span>
                    <h2 className="font-headline-md text-headline-md font-bold text-primary">
                      Advisory Request Form
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      Fill in your preferred area of discussion below to initiate direct advisory dialogue.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center space-y-6"
                    >
                      <div className="w-20 h-20 bg-sage/20 text-primary rounded-full flex items-center justify-center mx-auto shadow-md">
                        <span className="material-symbols-outlined text-5xl">check_circle</span>
                      </div>
                      <div className="space-y-2 max-w-lg mx-auto">
                        <h3 className="font-headline-md text-headline-md text-primary font-bold">
                          Consultation Request Submitted
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                          Thank you, <strong className="text-on-surface">{formData.name}</strong>. Your consultation details have been logged with Dr. Krishan Singh&apos;s executive office.
                        </p>
                      </div>

                      <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 text-left max-w-md mx-auto space-y-2 font-caption text-caption">
                        <div className="flex justify-between gap-4">
                          <span className="text-on-surface-variant shrink-0">Practice Area:</span>
                          <strong className="text-primary text-right truncate">
                            {formData.practice === "Custom"
                              ? formData.customPractice || "Custom"
                              : formData.practice}
                          </strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-on-surface-variant">Work Email:</span>
                          <strong className="text-on-surface">{formData.email}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-on-surface-variant">Preferred Slot:</span>
                          <strong className="text-on-surface">{formData.preferredTime}</strong>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-outline-variant/20">
                          <span className="text-on-surface-variant">Reference Code:</span>
                          <strong className="text-sage font-mono">SQ-{Math.floor(100000 + Math.random() * 900000)}</strong>
                        </div>
                      </div>

                      <p className="text-caption text-on-surface-variant">
                        Our managing partner desk will respond within 24 business hours.
                      </p>

                      <div className="pt-4">
                        <button
                          onClick={handleReset}
                          className="bg-primary text-white font-label-md text-label-md px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-all font-bold shadow-md cursor-pointer"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name & Work Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Dr. / Mr. / Ms. Jane Doe"
                            className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jane.doe@company.com"
                            className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone & Designation */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1.5">
                            Direct Contact Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1.5">
                            Designation / Role
                          </label>
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="CEO, CHRO, Board Director"
                            className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          />
                        </div>
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1.5">
                          Organization / Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Enterprise or Group Name"
                          className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                      </div>

                      {/* Practice Area & Engagement Mode */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1.5">
                            Advisory Practice Area *
                          </label>
                          <select
                            name="practice"
                            value={formData.practice}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer"
                          >
                            <option value="Executive Coaching">Executive Coaching</option>
                            <option value="Industrial Relations Advisory">Industrial Relations Advisory</option>
                            <option value="HR & Organization Transformation">HR &amp; Organization Transformation</option>
                            <option value="Board Governance Advisory">Board Governance Advisory</option>
                            <option value="General Leadership Briefing">General Leadership Briefing</option>
                            <option value="Custom">Custom</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1.5">
                            Preferred Time Slot
                          </label>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer"
                          >
                            <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                            <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                            <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                          </select>
                        </div>
                      </div>

                      {/* Custom Practice Area Text Area */}
                      {formData.practice === "Custom" && (
                        <div>
                          <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1.5">
                            Custom Practice Area Details *
                          </label>
                          <textarea
                            name="customPractice"
                            rows={3}
                            required={formData.practice === "Custom"}
                            value={formData.customPractice}
                            onChange={handleChange}
                            placeholder="Please describe your custom practice area or specific advisory requirement..."
                            className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                          />
                        </div>
                      )}

                      {/* Message / Brief Agenda Note */}
                      <div>
                        <label className="block text-caption font-bold uppercase tracking-wider text-primary mb-1.5">
                          Brief Message or Agenda Notes
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Share key context, specific enterprise challenges, or proposed timeline for the consultation..."
                          className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant/30 rounded-xl text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                        />
                      </div>

                      {/* Submit Action */}
                      <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-outline-variant/20">
                        <span className="text-caption text-on-surface-variant flex items-center gap-1.5 font-medium">
                          <span className="material-symbols-outlined text-base text-sage">shield</span>
                          Strictly Confidential Board Advisory
                        </span>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto bg-primary text-white font-label-md text-label-md px-8 py-4 rounded-xl hover:bg-primary/90 transition-all font-bold shadow-lg cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {isSubmitting ? "Submitting..." : "Schedule Consultation"}
                          <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollRevealItem>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ContactPage;
