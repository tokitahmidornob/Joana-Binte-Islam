"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  size: number;
  initialX: number; // Percentage across the screen (0 - 100)
  initialY: number; // Percentage down the screen (20 - 120)
  driftX: number;   // Horizontal drift offset in px
  duration: number; // Seconds for full drift cycle
  delay: number;    // Staggered start delay
  blur: number;     // Soft edge blur in px
  maxOpacity: number;
}

export default function AmbientBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate smooth, organic forest particles on client mount to prevent SSR hydration mismatch
    const generated: Particle[] = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 8) + 4, // 4px to 12px
      initialX: Math.random() * 100,
      initialY: Math.random() * 100 + 20,
      driftX: (Math.random() - 0.5) * 120, // -60px to +60px lateral drift
      duration: Math.random() * 18 + 18,  // 18s to 36s slow drift
      delay: Math.random() * 8,           // 0s to 8s delay
      blur: Math.random() * 2 + 1,        // 1px to 3px soft blur
      maxOpacity: Math.random() * 0.25 + 0.15, // 0.15 to 0.40
    }));
    setParticles(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* Subtle Ambient Forest Aura Glows */}
      <div
        className="absolute -top-[15%] left-[10%] w-[55vw] h-[55vw] rounded-full blur-[140px] opacity-15 dark:opacity-20 pointer-events-none bg-[#2d6a4f] dark:bg-[#52b788]"
      />
      <div
        className="absolute top-[60%] -right-[15%] w-[50vw] h-[50vw] rounded-full blur-[140px] opacity-10 dark:opacity-15 pointer-events-none bg-[#1b4332] dark:bg-[#40916c]"
      />

      {/* Floating Forest Leaf / Dust Motes */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#2d6a4f]/20 dark:bg-[#52b788]/25"
          style={{
            left: `${p.initialX}%`,
            top: `${p.initialY}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            filter: `blur(${p.blur}px)`,
          }}
          animate={{
            y: [0, -1000],
            x: [0, p.driftX, -p.driftX / 2, p.driftX],
            opacity: [0, p.maxOpacity, p.maxOpacity * 0.8, 0],
            scale: [0.8, 1.2, 0.9, 0.6],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
