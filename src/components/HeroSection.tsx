"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, GraduationCap } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import MagneticElement from "./MagneticElement";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-[var(--card-border)]">
      {/* Background Subtle Grid Texture */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col space-y-8"
      >
        {/* Top Meta Tag Row */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
            <span className="w-2 h-2 bg-[var(--accent-mint)] inline-block"></span>
            <span>Index // Academic Portfolio</span>
            <span className="opacity-40">/</span>
            <span className="text-[var(--foreground)] font-semibold">{PERSONAL_INFO.location}</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
            <GraduationCap className="w-4 h-4 text-[var(--accent-mint)]" />
            <span className="opacity-70">status:</span>
            <span className="text-[var(--foreground)] font-semibold">BS (Hons) Forestry & Environment</span>
          </div>
        </motion.div>

        {/* Hero Name & Title (Nature & Forest Theme Typography) */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-[var(--foreground)] leading-[0.92]">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[var(--muted)] leading-tight">
            SUSTAINABILITY, <span className="text-[var(--foreground)] font-semibold underline decoration-[var(--accent-mint)] decoration-wavy underline-offset-8">BIODIVERSITY</span> & DIGITAL INNOVATION.
          </h2>
        </motion.div>

        {/* Bio Excerpt */}
        <motion.div variants={itemVariants} className="max-w-3xl">
          <p className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed font-light">
            {PERSONAL_INFO.bioHeadline}
          </p>
        </motion.div>

        {/* CTAs with Magnetic interactions */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
          <MagneticElement pullFactor={0.25}>
            <a
              href="#experience"
              className="group flex items-center gap-2 px-7 py-3.5 bg-[var(--accent)] text-[var(--accent-foreground)] font-bold text-xs uppercase tracking-widest hover:bg-[var(--accent-light)] transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
            >
              <span>View Experience & Activities</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </MagneticElement>

          <MagneticElement pullFactor={0.2}>
            <a
              href="#education"
              className="flex items-center gap-2 px-6 py-3.5 border border-[var(--card-border)] hover:border-[var(--accent-mint)] bg-[var(--card)] text-[var(--foreground)] font-mono text-xs uppercase tracking-widest transition-colors shadow-sm cursor-pointer"
            >
              <span>Academic Background</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </MagneticElement>
        </motion.div>
      </motion.div>

      {/* Bottom Ribbon: Key Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[var(--card-border)] mt-16 font-mono"
      >
        {PERSONAL_INFO.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col space-y-1">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)]">
              {stat.value}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[var(--muted)] font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
