import { ACHIEVEMENTS } from "@/lib/data";
import styles from "./Achievements.module.css";

export function Achievements() {
  return (
    <section className={styles.section} id="achievements">
      <div className="secLabel reveal">
        // 05 <span>&mdash; Recognition</span>
      </div>
      <h2 className="secTitle reveal">
        <em>Milestones</em> &amp; <strong>wins</strong>.
      </h2>

      <div className={styles.grid} id="ach-grid">
        {ACHIEVEMENTS.map((a) => (
          <div key={a.id} className={`${styles.card} reveal`}>
            <div className={styles.icon}>{a.icon}</div>
            <div className={styles.body}>
              <strong className={styles.title}>{a.title}</strong>
              <p className={styles.desc}>{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
