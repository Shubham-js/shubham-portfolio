"use client";

import { useEffect, useRef, useState } from "react";
import { TOAST_ACHIEVEMENTS } from "@/lib/data";
import styles from "./AchievementToast.module.css";

export function AchievementToast() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const tiRef = useRef(0);
  const showingRef = useRef(false);

  const showToast = () => {
    if (showingRef.current) return;
    showingRef.current = true;
    setCurrent((c) => {
      const next = c % TOAST_ACHIEVEMENTS.length;
      tiRef.current = next + 1;
      return next;
    });
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      setTimeout(() => { showingRef.current = false; }, 500);
    }, 3200);
  };

  useEffect(() => {
    const grid = document.getElementById("ach-grid");
    if (!grid) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            TOAST_ACHIEVEMENTS.forEach((_, i) => {
              setTimeout(showToast, i * 3600);
            });
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(grid);
    return () => obs.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toast = TOAST_ACHIEVEMENTS[current];

  return (
    <div className={`${styles.toast} ${visible ? styles.show : ""}`}>
      <div className={styles.icon}>{toast.icon}</div>
      <div className={styles.body}>
        <div className={styles.label}>Achievement Unlocked</div>
        <div className={styles.msg}>{toast.msg}</div>
      </div>
      {visible && <div className={styles.bar} />}
    </div>
  );
}
