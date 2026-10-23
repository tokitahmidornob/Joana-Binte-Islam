"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { ExperienceProject } from "@/lib/data";

interface ProjectModalProps {
  project: ExperienceProject | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 dark:bg-black/85 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--card)] border border-[var(--card-border)] z-10 shadow-2xl flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 bg-[var(--card)]/95 backdrop-blur-md px-6 py-4 border-b border-[var(--card-border)] flex items-center justify-between z-20">
            <div className="flex items-center gap-3 font-mono text-xs text-[var(--muted)]">
              <span className="w-2 h-2 bg-[var(--accent-mint)] inline-block"></span>
              <span className="uppercase text-[var(--foreground)] font-semibold">{project.category}</span>
              <span>//</span>
              <span>{project.date}</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--card-border)] hover:border-[var(--accent-mint)] bg-[var(--card-muted)] transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--foreground)] mb-2">
                {project.title}
              </h2>
              <p className="text-[var(--muted-foreground)] text-sm sm:text-base font-light">
                {project.tagline}
              </p>
            </div>

            <div className="relative w-full aspect-video border border-[var(--card-border)] overflow-hidden bg-[var(--card-muted)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 900px"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-4">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] font-semibold">
                  Overview & Key Contributions
                </h3>
                <p className="text-sm text-[var(--foreground)] leading-relaxed font-light">
                  {project.description}
                </p>

                <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] pt-2 font-semibold">
                  Impact & Key Learnings
                </h4>
                <ul className="space-y-2">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[var(--foreground)] font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-mint)] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-5 space-y-6 md:border-l md:border-[var(--card-border)] md:pl-8">
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-[var(--muted)] uppercase tracking-widest text-[10px] block">Role</span>
                    <span className="text-[var(--foreground)] font-semibold">{project.role}</span>
                  </div>
                  <div>
                    <span className="text-[var(--muted)] uppercase tracking-widest text-[10px] block">Organization</span>
                    <span className="text-[var(--muted-foreground)]">{project.organization}</span>
                  </div>
                  <div>
                    <span className="text-[var(--muted)] uppercase tracking-widest text-[10px] block">Date</span>
                    <span className="text-[var(--muted-foreground)]">{project.date}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--card-border)]">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-2 font-semibold">
                    Competencies & Methodologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono text-[var(--foreground)] bg-[var(--tag-bg)] border border-[var(--tag-border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
