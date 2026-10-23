"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Copy, Mail, MapPin, Loader2, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO, PERSONAL_INFO } from "@/lib/data";
import MagneticElement from "./MagneticElement";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Academic / Research Collaboration",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "Academic / Research Collaboration", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Tag */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-12"
      >
        <span className="text-[var(--foreground)] font-bold">// 04</span>
        <span>Get in Touch</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Direct Contact & Social Channels */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)] leading-tight">
              LET'S CONNECT & COLLABORATE.
            </h2>
            <p className="text-[var(--muted-foreground)] font-light text-sm sm:text-base leading-relaxed">
              Open to research collaborations, environmental initiatives, academic projects, and professional opportunities. Feel free to reach out directly via email or LinkedIn.
            </p>
          </div>

          {/* Contact Dispatch Cards (Phone Card completely removed) */}
          <div className="space-y-4 font-mono text-xs">
            {/* Primary Email Card */}
            <div className="p-5 border border-[var(--card-border)] bg-[var(--card)] space-y-3 shadow-sm">
              <div className="flex items-center justify-between text-[var(--muted)] uppercase tracking-wider">
                <span className="flex items-center gap-2 font-medium">
                  <Mail className="w-3.5 h-3.5 text-[var(--accent-mint)]" />
                  Primary Email
                </span>
                <span className="text-[10px] text-[var(--muted)]">Active Inbox</span>
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-[var(--foreground)] text-sm tracking-wide hover:underline hover:text-[var(--accent-mint)] truncate font-semibold"
                >
                  {CONTACT_INFO.email}
                </a>
                <MagneticElement pullFactor={0.25}>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1 text-[11px] uppercase border border-[var(--card-border)] bg-[var(--tag-bg)] hover:bg-[var(--card-muted)] text-[var(--foreground)] transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-[var(--accent-mint)]" />
                        <span className="text-[var(--accent-mint)] font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </MagneticElement>
              </div>
            </div>

            {/* LinkedIn & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <MagneticElement pullFactor={0.15} className="w-full">
                <a
                  href={CONTACT_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-[var(--card-border)] bg-[var(--card)] hover:border-[var(--accent-mint)] transition-colors space-y-1 block shadow-sm"
                >
                  <div className="flex items-center justify-between text-[var(--muted)] text-[11px] uppercase">
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:text-[var(--accent-mint)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <div className="text-[var(--foreground)] font-semibold truncate text-xs">
                    {PERSONAL_INFO.name}
                  </div>
                </a>
              </MagneticElement>

              <div className="p-4 border border-[var(--card-border)] bg-[var(--card)] space-y-1 shadow-sm">
                <div className="flex items-center gap-1.5 text-[var(--muted)] text-[11px] uppercase">
                  <MapPin className="w-3 h-3 text-[var(--accent-mint)]" />
                  <span>Base Location</span>
                </div>
                <div className="text-[var(--foreground)] font-semibold text-xs">
                  {CONTACT_INFO.location}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clean Minimalist Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <div className="p-8 sm:p-10 border border-[var(--card-border)] bg-[var(--card)] relative shadow-sm">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)] mb-6 flex items-center justify-between font-semibold">
              <span>Send a Message</span>
              <span className="text-[10px] text-[var(--muted)]">// DIRECT DISPATCH</span>
            </h3>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-[var(--accent)] text-[var(--accent-foreground)] flex items-center justify-center font-bold">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tight text-[var(--foreground)]">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--muted-foreground)] font-mono max-w-sm">
                    Thank you, your message has reached Joana Binte Islam. She will get back to you shortly.
                  </p>
                  <MagneticElement pullFactor={0.25}>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-4 px-6 py-2.5 border border-[var(--card-border)] font-mono text-xs uppercase tracking-wider text-[var(--foreground)] hover:bg-[var(--card-muted)] transition-colors cursor-pointer"
                    >
                      Send Another Note
                    </button>
                  </MagneticElement>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)] font-medium"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Rahman / Student Peer"
                        className="w-full px-4 py-3 bg-[var(--card-muted)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--muted)] text-sm font-mono focus:outline-none focus:border-[var(--accent-mint)] focus:ring-1 focus:ring-[var(--accent-mint)] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)] font-medium"
                      >
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@institution.edu"
                        className="w-full px-4 py-3 bg-[var(--card-muted)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--muted)] text-sm font-mono focus:outline-none focus:border-[var(--accent-mint)] focus:ring-1 focus:ring-[var(--accent-mint)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)] font-medium"
                    >
                      Inquiry Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--card-muted)] border border-[var(--card-border)] text-[var(--foreground)] text-sm font-mono focus:outline-none focus:border-[var(--accent-mint)] focus:ring-1 focus:ring-[var(--accent-mint)] transition-all"
                    >
                      <option value="Academic / Research Collaboration">Academic / Research Collaboration</option>
                      <option value="Environmental Conservation Project">Environmental Conservation Project</option>
                      <option value="Conference / Poster Presentation">Conference / Poster Presentation</option>
                      <option value="Student Organization & Leadership">Student Organization & Leadership</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)] font-medium"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details of the collaboration, opportunity, or research inquiry..."
                      className="w-full px-4 py-3 bg-[var(--card-muted)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--muted)] text-sm font-mono focus:outline-none focus:border-[var(--accent-mint)] focus:ring-1 focus:ring-[var(--accent-mint)] transition-all resize-none"
                    />
                  </div>

                  <MagneticElement pullFactor={0.15} className="w-full">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-4 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-[var(--accent-foreground)] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 shadow-md cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitting Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </MagneticElement>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
