"use client";

import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCursor } from "@/hooks/useCursor";

export function ScrollInit() {
  useScrollReveal();
  useCursor();

  useEffect(() => {
    // Magnetic buttons
    const magnetics = document.querySelectorAll<HTMLElement>(
      "[data-magnetic]"
    );
    magnetics.forEach((btn) => {
      const onMove = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.22;
        const y = (e.clientY - r.top - r.height / 2) * 0.22;
        btn.style.transform = `translate(${x}px,${y}px) translateY(-2px)`;
      };
      const onLeave = () => { btn.style.transform = ""; };
      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
    });

    // Navbar scroll shrink
    const nav = document.getElementById("navbar");
    const onScroll = () =>
      nav?.classList.toggle("scrolled", window.scrollY > 80);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
