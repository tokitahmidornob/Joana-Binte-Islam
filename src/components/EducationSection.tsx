"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { EDUCATION_DATA } from "@/lib/data";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[var(--card-border)]">
      {/* Section Tag */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-12"
      >
        <span className="text-[var(--foreground)] font-bold">// 03</span>
        <span>Academic Journey & Qualifications</span>
      </motion.div>

      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-[var(--foreground)]">
              EDUCATION & MERIT
            </h2>
            <p className="text-[var(--muted-foreground)] text-sm sm:text-base font-light mt-2 max-w-2xl">
              Consistent record of academic excellence across secondary, higher secondary, and undergraduate university levels.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 border border-[var(--card-border)] bg-[var(--card)] text-xs font-mono text-[var(--foreground)] shadow-sm">
            <Award className="w-3.5 h-3.5 text-[var(--accent-mint)]" />
            <span className="font-semibold">Dual Perfect 5.00 GPA Achiever</span>
          </div>
        </motion.div>

        {/* Education Timeline Cards with Viewport Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-8 border border-[var(--card-border)] bg-[var(--card)] hover:border-[var(--accent-mint)] transition-colors flex flex-col justify-between space-y-6 relative group shadow-sm hover:shadow-md"
            >
              {/* Index & Period Tag */}
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="px-2.5 py-1 bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[11px] text-[var(--foreground)] font-medium">
                  {edu.period}
                </span>
                {edu.result ? (
                  <span className="px-2.5 py-1 bg-[var(--accent)] text-[var(--accent-foreground)] font-bold text-[11px] tracking-wider uppercase shadow-sm">
                    {edu.result}
                  </span>
                ) : (
                  <span className="px-2.5 py-1 border border-[var(--accent-mint)]/40 bg-[var(--tag-bg)] text-[var(--accent-mint)] text-[10px] tracking-widest uppercase font-bold">
                    Current
                  </span>
                )}
              </div>

              {/* Title & Institution */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)]">
                  <GraduationCap className="w-3.5 h-3.5 text-[var(--accent-mint)]" />
                  <span>Qualification</span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent-mint)] transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-xs font-mono text-[var(--muted-foreground)] font-medium">
                  {edu.institution}
                </p>
              </div>

              {/* Narrative Details */}
              <div className="pt-4 border-t border-[var(--card-border)]/60">
                <p className="text-xs text-[var(--muted)] leading-relaxed font-light">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
