"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import MagneticElement from "./MagneticElement";

const NAV_LINKS = [
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--card-border)] py-3.5 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#"
          className="group flex items-center gap-3 text-[var(--foreground)] transition-opacity hover:opacity-85"
        >
          <div className="w-8 h-8 border border-[var(--card-border)] bg-[var(--card)] flex items-center justify-center font-mono text-xs font-bold tracking-widest text-[var(--foreground)] group-hover:border-[var(--accent-mint)] transition-colors shadow-sm">
            {PERSONAL_INFO.monogram}
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm uppercase text-[var(--foreground)]">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-mono">
              Academic Portfolio
            </span>
          </div>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors tracking-wide text-xs uppercase font-mono relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--accent-mint)] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA, Status Pill & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 border border-[var(--card-border)] bg-[var(--card)] text-xs font-mono shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-mint)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-mint)]"></span>
            </span>
            <span className="text-[11px] tracking-wide text-[var(--muted-foreground)] font-medium">Open to Research</span>
          </div>

          <MagneticElement pullFactor={0.25}>
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 bg-[var(--accent)] text-[var(--accent-foreground)] text-xs font-semibold uppercase tracking-wider hover:bg-[var(--accent-light)] transition-colors shadow-sm cursor-pointer"
            >
              Contact
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </MagneticElement>

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--foreground)] hover:bg-[var(--card-muted)] border border-[var(--card-border)] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-[var(--card-border)] bg-[var(--background)]/98 backdrop-blur-xl px-6 py-6 shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[var(--foreground)] hover:text-[var(--accent-mint)] text-base uppercase font-mono tracking-wider py-1 border-b border-[var(--card-border)]/50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[var(--muted)] text-xs font-mono py-1">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent-mint)] inline-block"></span>
                  <span>Seeking Research & Sustainability Initiatives</span>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold text-xs uppercase tracking-wider"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
