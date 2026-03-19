"use client";

import { useEffect, useRef } from "react";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { Terminal } from "@/components/ui/Terminal";
import { useTypewriter } from "@/hooks/useTypewriter";
import { ROLES, RPG_STATS } from "@/lib/data";
import styles from "./Hero.module.css";

export function Hero() {
  const role = useTypewriter(ROLES, 90, 50, 1600);
  const xpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (xpRef.current) xpRef.current.style.width = "73%";
    }, 600);
    return () => clearTimeout(t);
  }, []);

  const handleStatHover = (e: React.MouseEvent, xp: string) => {
    const el = document.createElement("div");
    el.className = "xpFloat";
    el.textContent = xp;
    el.style.left = `${e.clientX - 20}px`;
    el.style.top = `${e.clientY - 10}px`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 950);
  };

  return (
    <section className={styles.hero}>
      <ParticleCanvas />
      <div className={styles.grid} />
      <div className={styles.vignette} />

      {/* LEFT */}
      <div className={styles.left}>
        <div className={styles.status}>
          <span className={styles.statusDot} />
          Open to Opportunities &middot; Across India
        </div>

        <h1 className={styles.name}>
          <span className={styles.n1}>SHUBHAM</span>
          <span className={styles.n2}>JAIN</span>
        </h1>

        <div className={styles.rpgRow}>
          <div className={styles.level}>LVL 07</div>
          <div className={styles.xpWrap}>
            <div className={styles.xpLabel}>XP to Senior Dev</div>
            <div className={styles.xpTrack}>
              <div ref={xpRef} className={styles.xpFill} />
            </div>
          </div>
          <div className={styles.rpgTitle}>AI Engineer</div>
        </div>

        <div className={styles.role}>
          <span className={styles.rolePrefix}>&gt;&nbsp;</span>
          <span>{role}</span>
          <span className={styles.cursor} />
        </div>

        <p className={styles.desc}>
          Building <strong>high-performance web products</strong> that scale —
          from real-time healthcare platforms to travel features used by
          millions. <strong>4+ years</strong> shipping features that move the
          needle.
        </p>

        <div className={styles.btns}>
          <a href="#projects" className={styles.btnPrimary} data-magnetic>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            View My Work
          </a>
          <a
            href="/ShubhamJain_Resume.pdf"
            download
            className={styles.btnGhost}
            data-magnetic
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            <span>Download CV</span>
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Get In Touch
          </a>
        </div>
      </div>

      {/* RIGHT — Terminal + RPG Stats */}
      <div className={styles.right}>
        <Terminal />

        <div className={styles.stats}>
          {RPG_STATS.map((s) => (
            <div
              key={s.label}
              className={styles.stat}
              onMouseEnter={(e) => handleStatHover(e, s.xp)}
            >
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statVal}>{s.value}</div>
              <div className={styles.statSub}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scroll}>Scroll to explore</div>
    </section>
  );
}
