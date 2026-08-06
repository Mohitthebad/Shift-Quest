import React, { useState } from "react";
import { motion } from "framer-motion";
import { supabase, isSupabaseConfigured } from "../lib/supabase";

interface GetInTouchSectionProps {
  className?: string;
}

export const GetInTouchSection: React.FC<GetInTouchSectionProps> = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    inquiryType: "Executive Leadership Consulting",
    customInquiry: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

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
      formData.inquiryType === "Custom Inquiry" && formData.customInquiry
        ? `Custom Inquiry: ${formData.customInquiry}`
        : formData.inquiryType;

    if (isSupabaseConfigured()) {
      try {
        const { error } = await supabase.from("inquiries").insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            company: formData.organization,
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
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section className={`py-12 md:py-16 bg-[#FAF8F5] text-on-surface ${className}`}>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Dr. Krishan Singh welcomes inquiries regarding executive consulting, board membership, and strategic leadership mentorship. Experience a bespoke concierge approach to professional partnership.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Left: Form Area */}
          <div className="lg:col-span-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 md:p-10 rounded-2xl border border-outline-variant/30 shadow-sm space-y-5 text-center"
              >
                <div className="w-16 h-16 bg-sage/20 text-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary">
                  Inquiry Received
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-on-surface">{formData.fullName || "Executive Partner"}</strong>. Dr. Krishan Singh&apos;s office will review your inquiry and reach out within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: "",
                      organization: "",
                      email: "",
                      inquiryType: "Executive Leadership Consulting",
                      customInquiry: "",
                      message: "",
                    });
                  }}
                  className="mt-4 bg-primary text-white font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-primary/90 transition-all font-bold cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Row 1: Full Name & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Johnathan Doe"
                      className="w-full bg-transparent border-b border-outline-variant/60 pb-2.5 text-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                      ORGANIZATION
                    </label>
                    <input
                      type="text"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Global Enterprises Inc."
                      className="w-full bg-transparent border-b border-outline-variant/60 pb-2.5 text-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="j.doe@executive.com"
                    className="w-full bg-transparent border-b border-outline-variant/60 pb-2.5 text-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Row 3: Inquiry Type */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                    INQUIRY TYPE
                  </label>
                  <div className="relative">
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low/60 border border-outline-variant/30 rounded-lg px-4 py-3 text-body-md font-medium text-on-surface focus:outline-none focus:border-primary transition-all cursor-pointer appearance-none"
                    >
                      <option value="Executive Leadership Consulting">Executive Leadership Consulting</option>
                      <option value="Executive Coaching">Executive Coaching</option>
                      <option value="Industrial Relations Advisory">Industrial Relations Advisory</option>
                      <option value="HR & Organization Transformation">HR &amp; Organization Transformation</option>
                      <option value="Board Governance Advisory">Board Governance Advisory</option>
                      <option value="Custom Inquiry">Custom Inquiry</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Custom Inquiry Textarea */}
                {formData.inquiryType === "Custom Inquiry" && (
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                      CUSTOM INQUIRY DETAILS *
                    </label>
                    <textarea
                      name="customInquiry"
                      rows={3}
                      required={formData.inquiryType === "Custom Inquiry"}
                      value={formData.customInquiry}
                      onChange={handleChange}
                      placeholder="Please specify your custom inquiry or specific requirement..."
                      className="w-full bg-transparent border-b border-outline-variant/60 pb-2.5 text-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                )}

                {/* Row 4: Your Message */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we collaborate on your vision?"
                    className="w-full bg-transparent border-b border-outline-variant/60 pb-2.5 text-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-white font-label-md text-label-md px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-all font-bold shadow-sm cursor-pointer flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Direct Lines Card */}
          <div className="lg:col-span-4">
            <div className="bg-white p-7 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm relative">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                Direct Lines
              </h3>

              <div className="space-y-5">
                {/* Email Item */}
                <div className="flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200/50">
                      <span className="material-symbols-outlined text-xl">mail</span>
                    </div>
                    <a
                      href="mailto:krishan@shiftquest.com"
                      className="font-label-md text-label-md font-medium text-emerald-900 hover:underline"
                    >
                      krishan@shiftquest.com
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("krishan@shiftquest.com", "email")}
                    className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-1"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {copiedField === "email" ? "check" : "content_copy"}
                    </span>
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200/50">
                      <span className="material-symbols-outlined text-xl">call</span>
                    </div>
                    <a
                      href="tel:+919650106003"
                      className="font-label-md text-label-md font-medium text-on-surface-variant hover:text-primary transition-colors"
                    >
                      +91 9650106003
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("+919650106003", "phone")}
                    className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-1"
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {copiedField === "phone" ? "check" : "content_copy"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Gold Divider Accent */}
              <div className="h-[2px] bg-amber-400/80 rounded-full w-full mt-7" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
