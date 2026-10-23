"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { PROJECTS_EXPERIENCE, ExperienceProject } from "@/lib/data";
import ProjectModal from "./ProjectModal";
import MagneticElement from "./MagneticElement";

const CATEGORIES = [
  "All",
  "Environmental Conservation",
  "Conference & Representation",
  "Scientific Research",
] as const;

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ExperienceProject | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_EXPERIENCE
      : PROJECTS_EXPERIENCE.filter((p) => p.category === selectedCategory);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[var(--card-border)]">
      {/* Header and Filter Row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
      >
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">
            <span className="text-[var(--foreground)] font-bold">// 01</span>
            <span>Selected Projects & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-[var(--foreground)]">
            EXPERIENCE & INITIATIVES
          </h2>
        </div>

        {/* Filter Bar with Magnetic Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <MagneticElement key={cat} pullFactor={0.2}>
              <button
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold shadow-sm"
                    : "bg-[var(--card)] text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--card-border)] hover:border-[var(--accent-mint)]"
                }`}
              >
                {cat}
              </button>
            </MagneticElement>
          ))}
        </div>
      </motion.div>

      {/* Masonry Layout: Responsive Columns with Viewport Animations */}
      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => {
            const aspectClass =
              project.aspect === "landscape"
                ? "aspect-[16/9]"
                : "aspect-[4/3]";

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setActiveProject(project)}
                className="masonry-item group cursor-pointer border border-[var(--card-border)] bg-[var(--card)] hover:border-[var(--accent-mint)] transition-colors duration-300 overflow-hidden flex flex-col shadow-sm hover:shadow-md"
              >
                {/* Media Image Container */}
                <div className={`relative w-full ${aspectClass} overflow-hidden bg-[var(--card-muted)]`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/15 dark:bg-black/35 group-hover:bg-transparent transition-colors duration-300" />

                  {/* Top Overlay Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 bg-[var(--card)]/90 backdrop-blur-md border border-[var(--card-border)] text-[10px] font-mono uppercase tracking-widest text-[var(--foreground)] shadow-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 bg-[var(--card)]/90 backdrop-blur-md border border-[var(--card-border)] text-[10px] font-mono text-[var(--muted)] shadow-sm">
                      {project.date}
                    </span>
                  </div>

                  {/* Hover Inspect Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="flex items-center gap-2 px-4 py-2 bg-[var(--card)]/95 backdrop-blur-md border border-[var(--accent-mint)] text-xs font-mono uppercase tracking-wider text-[var(--foreground)] shadow-lg font-bold">
                      <Eye className="w-3.5 h-3.5 text-[var(--accent-mint)]" />
                      <span>Inspect Details</span>
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent-mint)] transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--accent-mint)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)]">
                      <span className="text-[var(--foreground)] font-semibold">{project.role}</span>
                      <span>•</span>
                      <span>{project.organization}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--muted-foreground)] font-light leading-relaxed pt-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Competencies Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--card-border)]/60">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[10px] font-mono text-[var(--foreground)] bg-[var(--tag-bg)] border border-[var(--tag-border)] group-hover:border-[var(--accent-mint)] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
