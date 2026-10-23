"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import MagneticElement from "./MagneticElement";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-[var(--card-border)] bg-transparent opacity-50" />
    );
  }

  const currentTheme = resolvedTheme || theme || "dark";
  const isDark = currentTheme === "dark";

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <MagneticElement pullFactor={0.4}>
      <button
        type="button"
        onClick={handleToggle}
        className="relative w-9 h-9 rounded-full flex items-center justify-center border border-[var(--card-border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--accent-mint)] transition-all shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent-mint)] cursor-pointer"
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        title={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center justify-center pointer-events-none"
            >
              <Moon className="w-4 h-4 text-[#52b788]" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center justify-center pointer-events-none"
            >
              <Sun className="w-4 h-4 text-[#1b4332]" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </MagneticElement>
  );
}
