"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, ExternalLink, Mail } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/data";
import MagneticElement from "./MagneticElement";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "linkedin":
        return (
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case "email":
        return <Mail className="w-3.5 h-3.5" />;
      default:
        return <ExternalLink className="w-3.5 h-3.5" />;
    }
  };

  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--background)] text-[var(--muted-foreground)] text-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Bio / Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[var(--accent-mint)] inline-block"></span>
              <span className="font-bold tracking-tight text-[var(--foreground)] uppercase text-base font-mono">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-[var(--muted)] max-w-sm text-xs leading-relaxed font-light">
              Undergraduate Student in Forestry & Environment at Gazipur Agricultural University. Passionate about biodiversity, conservation, AI, and coding.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[var(--muted)]">
              <span>Gazipur, BD / UTC+6</span>
              <span>•</span>
              <span className="text-[var(--foreground)] font-semibold">{time ? `${time} BST` : "Dhaka Time"}</span>
            </div>
          </div>

          {/* Col 2: Navigation Quicklinks */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[var(--foreground)] font-mono font-bold">Sections</h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#experience" className="hover:text-[var(--accent-mint)] transition-colors">
                  // 01. EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[var(--accent-mint)] transition-colors">
                  // 02. ABOUT & VALUES
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[var(--accent-mint)] transition-colors">
                  // 03. EDUCATION
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--accent-mint)] transition-colors">
                  // 04. CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[var(--foreground)] font-mono font-bold">Connect</h4>
            <div className="flex flex-col space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <MagneticElement key={link.name} pullFactor={0.15}>
                  <a
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between py-1.5 border-b border-[var(--card-border)]/60 hover:border-[var(--accent-mint)] text-xs text-[var(--muted-foreground)] hover:text-[var(--accent-mint)] transition-all font-mono"
                  >
                    <span className="flex items-center gap-2">
                      {getSocialIcon(link.name)}
                      {link.name}
                    </span>
                    <span className="text-[11px] text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors truncate max-w-[200px]">
                      {link.handle}
                    </span>
                  </a>
                </MagneticElement>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)] font-mono">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[var(--muted)]">Gazipur Agricultural University</span>
            <MagneticElement pullFactor={0.25}>
              <button
                type="button"
                onClick={scrollToTop}
                className="group flex items-center gap-1.5 text-[var(--foreground)] hover:text-[var(--accent-mint)] transition-colors py-1 px-2.5 border border-[var(--card-border)] hover:border-[var(--accent-mint)] bg-[var(--card)] cursor-pointer"
                aria-label="Scroll back to top"
              >
                <span>TOP</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </MagneticElement>
          </div>
        </div>
      </div>
    </footer>
  );
}
