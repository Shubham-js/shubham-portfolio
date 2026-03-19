import Image from "next/image";
import styles from "./Hologram.module.css";

export function Hologram() {
  return (
    <div className={styles.display}>
      <div className={styles.scene}>
        {/* Orbit rings */}
        <div className={styles.orbit} />
        <div className={styles.orbit2} />

        {/* Frame with corner brackets */}
        <div className={styles.frame}>
          <div className={`${styles.corner} ${styles.cTl}`} />
          <div className={`${styles.corner} ${styles.cTr}`} />
          <div className={`${styles.corner} ${styles.cBl}`} />
          <div className={`${styles.corner} ${styles.cBr}`} />

          {/* Image + effect layers */}
          <div className={styles.imgWrap}>
            <Image
              src="/avatar.jpg"
              alt="Shubham Jain"
              width={340}
              height={420}
              className={styles.img}
              priority
            />
            <div className={styles.color} />
            <div className={styles.scanlines} />
            <div className={styles.bar} />
            <div className={styles.chroma} />
            <div className={styles.glitch} />
            <div className={styles.edge} />
          </div>

          {/* HUD */}
          <div className={styles.hud}>
            <div>
              <span className={styles.hudDot} />
              <span className={styles.hudOn}>ACTIVE</span>
            </div>
            <div>SDE-2 · INNOVACCER</div>
            <div className={styles.hudId}>ID: SJ-2025</div>
          </div>
        </div>

        {/* Floating chips */}
        <div className={styles.chips}>
          <div className={`${styles.chip} ${styles.hc1}`}>React · 95%</div>
          <div className={`${styles.chip} ${styles.hc2}`}>Top 0.5% LC</div>
          <div className={`${styles.chip} ${styles.hc3}`}>Node · 88%</div>
          <div className={`${styles.chip} ${styles.hc4}`}>9.11 CGPA</div>
          <div className={`${styles.chip} ${styles.hc5}`}>3+ yrs exp</div>
        </div>
      </div>

      {/* Pedestal */}
      <div className={styles.ped} />
      <div className={styles.baseGlow} />
    </div>
  );
}
