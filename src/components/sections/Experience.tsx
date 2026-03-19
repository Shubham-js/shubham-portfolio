import { EXPERIENCE } from "@/lib/data";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className="secLabel reveal">
        // 02 <span>&mdash; Experience</span>
      </div>
      <h2 className="secTitle reveal">
        Where I&apos;ve <em>shipped</em>.
      </h2>

      <div className={styles.timeline}>
        {EXPERIENCE.map((exp) => (
          <div key={exp.id} className={`${styles.item} reveal`}>
            <div className={styles.meta}>
              <div className={styles.range}>{exp.range}</div>
              <span className={styles.tag}>{exp.tag}</span>
            </div>

            <div className={styles.dot} />

            <div className={styles.body}>
              <h3 className={styles.role}>{exp.role}</h3>
              <div className={styles.type}>{exp.type}</div>
              <ul className={styles.bullets}>
                {exp.bullets.map((b, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: b }}
                  />
                ))}
              </ul>
              <div className={styles.techs}>
                {exp.techs.map((t) => (
                  <span key={t} className={styles.tech}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
