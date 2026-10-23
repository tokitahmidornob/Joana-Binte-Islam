"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, HeartHandshake, BookOpen, MessageSquare, Presentation, Laptop, Compass, Sparkles } from "lucide-react";
import { PERSONAL_INFO, SKILL_CATEGORIES } from "@/lib/data";
import MagneticElement from "./MagneticElement";

export default function AboutSection() {
  const [activeCategory, setActiveCategory] = useState<number | "all">("all");
  const categoryIcons = [MessageSquare, Presentation, Laptop, Compass];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[var(--card-border)]">
      {/* Section Tag */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-12"
      >
        <span className="text-[var(--foreground)] font-bold">// 02</span>
        <span>Profile & Philosophy</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: CSS-Only Typographic Monogram & Guiding Values */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          {/* CSS-Only Typographic Monogram Container */}
          <div className="relative group overflow-hidden border border-[var(--card-border)] bg-[var(--card)] shadow-md">
            {/* Corner Crosshairs */}
            <div className="absolute top-2.5 left-2.5 z-10 w-2.5 h-2.5 border-t-2 border-l-2 border-[var(--accent-mint)] pointer-events-none opacity-80" />
            <div className="absolute top-2.5 right-2.5 z-10 w-2.5 h-2.5 border-t-2 border-r-2 border-[var(--accent-mint)] pointer-events-none opacity-80" />
            <div className="absolute bottom-2.5 left-2.5 z-10 w-2.5 h-2.5 border-b-2 border-l-2 border-[var(--accent-mint)] pointer-events-none opacity-80" />
            <div className="absolute bottom-2.5 right-2.5 z-10 w-2.5 h-2.5 border-b-2 border-r-2 border-[var(--accent-mint)] pointer-events-none opacity-80" />

            <div className="relative aspect-[3/4] w-full flex flex-col items-center justify-between p-8 overflow-hidden bg-gradient-to-b from-[var(--card)] via-[var(--card-muted)] to-[var(--card)]">
              {/* Subtle Radial Glow Aura */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-80"
                style={{
                  background: "radial-gradient(circle at 50% 48%, rgba(82, 183, 136, 0.22) 0%, rgba(45, 106, 79, 0.08) 45%, transparent 75%)"
                }}
              />

              {/* Top Architectural Subtitle */}
              <div className="w-full flex items-center justify-between z-10 font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)] animate-pulse" />
                  Forestry Scholar
                </span>
                <span>GAU // BD</span>
              </div>

              {/* Massive Elegant Monogram "JBI" */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center select-none group-hover:scale-105 transition-transform duration-700 ease-out">
                <span className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter text-[var(--foreground)] font-mono leading-none drop-shadow-sm">
                  JBI
                </span>
                <div className="mt-3 w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--accent-mint)] to-transparent" />
                <span className="mt-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--muted)]">
                  Architectural Dossier
                </span>
              </div>

              {/* Bottom Metadata Pill */}
              <div className="w-full z-10 pt-4 border-t border-[var(--card-border)]/60 flex items-center justify-between font-mono text-xs">
                <div>
                  <div className="font-bold text-[var(--foreground)] tracking-wide">{PERSONAL_INFO.name}</div>
                  <div className="text-[10px] text-[var(--muted)]">{PERSONAL_INFO.field}</div>
                </div>
                <div className="px-2.5 py-1 bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[10px] text-[var(--foreground)] font-semibold uppercase tracking-wider">
                  Verified
                </div>
              </div>
            </div>
          </div>

          {/* Guiding Principles Card */}
          <div className="p-6 border border-[var(--card-border)] bg-[var(--card)] space-y-4 shadow-sm">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)] flex items-center gap-2 font-semibold">
              <HeartHandshake className="w-3.5 h-3.5 text-[var(--accent-mint)]" />
              Core Academic Values
            </h4>
            <ul className="space-y-2 text-xs text-[var(--muted-foreground)] font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-mint)] shrink-0" />
                <span>Belief in Humanity, Empathy & Mutual Respect</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-mint)] shrink-0" />
                <span>Commitment to Lifelong Academic Learning</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-mint)] shrink-0" />
                <span>Active Environmental Sustainability Stewardship</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-mint)] shrink-0" />
                <span>Interdisciplinary Curiosity in AI & Coding</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-[var(--card-border)]">
              <MagneticElement pullFactor={0.2}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[var(--foreground)] hover:text-[var(--accent-mint)] underline underline-offset-4 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Connect for Research & Projects</span>
                </a>
              </MagneticElement>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Statement & UI Skill Pill Tags */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-12"
        >
          {/* Bio Narrative */}
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase text-[var(--foreground)] leading-tight">
              COMMITTED TO ECOLOGICAL RESILIENCE & LIFELONG SCHOLARSHIP.
            </h3>

            <div className="p-6 border-l-2 border-[var(--accent-mint)] bg-[var(--card)] text-[var(--muted-foreground)] text-sm sm:text-base leading-relaxed font-light italic shadow-sm border border-r-[var(--card-border)] border-t-[var(--card-border)] border-b-[var(--card-border)]">
              "{PERSONAL_INFO.aboutMe}"
            </div>
          </div>

          {/* Skills Section with UI Pill Tags */}
          <div id="skills" className="space-y-6 pt-4 border-t border-[var(--card-border)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-mono uppercase tracking-widest text-[var(--foreground)] font-semibold">
                  Skills & Technical Competencies
                </h4>
                <p className="text-xs text-[var(--muted)] font-mono mt-1">
                  Core capabilities, organizational skills, and technology passions.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <MagneticElement pullFactor={0.2}>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("all")}
                    className={`px-3 py-1 text-[11px] font-mono uppercase transition-colors cursor-pointer ${
                      activeCategory === "all"
                        ? "bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold shadow-sm"
                        : "text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--card-border)] bg-[var(--card)]"
                    }`}
                  >
                    All
                  </button>
                </MagneticElement>
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <MagneticElement key={cat.title} pullFactor={0.2}>
                    <button
                      type="button"
                      onClick={() => setActiveCategory(idx)}
                      className={`px-3 py-1 text-[11px] font-mono uppercase transition-colors cursor-pointer ${
                        activeCategory === idx
                          ? "bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold shadow-sm"
                          : "text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--card-border)] bg-[var(--card)]"
                      }`}
                    >
                      {cat.title.split(" ")[0]}
                    </button>
                  </MagneticElement>
                ))}
              </div>
            </div>

            {/* Categorized Pill Groups */}
            <div className="space-y-6">
              {SKILL_CATEGORIES.map((category, idx) => {
                if (activeCategory !== "all" && activeCategory !== idx) {
                  return null;
                }
                const IconComponent = categoryIcons[idx % categoryIcons.length];

                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="p-5 border border-[var(--card-border)] bg-[var(--card)] space-y-3 shadow-sm"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--foreground)] uppercase tracking-wider font-semibold">
                      <IconComponent className="w-3.5 h-3.5 text-[var(--accent-mint)]" />
                      <span>{category.title}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3.5 py-1.5 text-xs font-mono text-[var(--foreground)] bg-[var(--tag-bg)] border border-[var(--tag-border)] hover:border-[var(--accent-mint)] hover:text-[var(--accent-mint)] transition-all cursor-default shadow-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
