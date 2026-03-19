"use client";

import { useRef } from "react";
import { SKILL_GROUPS } from "@/lib/data";
import styles from "./Skills.module.css";

export function Skills() {
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent, i: number) => {
    const el = groupRefs.current[i];
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <section className={styles.section} id="skills">
      <div className="secLabel reveal">
        {/* 03 <span>&mdash; Skills</span> */}
      </div>
      <h2 className="secTitle reveal">
        My <em>tech</em> <strong>arsenal</strong>.
      </h2>

      <div className={styles.grid}>
        {SKILL_GROUPS.map((g, i) => (
          <div
            key={g.id}
            className={`${styles.group} reveal`}
            ref={(el) => { groupRefs.current[i] = el; }}
            onMouseMove={(e) => handleMouseMove(e, i)}
          >
            <div className={styles.header}>
              <div className={styles.icon}>{g.icon}</div>
              <div className={styles.title}>{g.title}</div>
            </div>
            <div className={styles.nodes}>
              {g.skills.map((s) => (
                <div key={s} className={styles.node}>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
