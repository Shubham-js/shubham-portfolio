import { PROJECTS } from "@/lib/data";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className="secLabel reveal">
        {/* 04 <span>&mdash; Projects</span> */}
      </div>
      <h2 className="secTitle reveal">
        Things I&apos;ve <em>built</em>.
      </h2>

      <div className={styles.grid}>
        {PROJECTS.map((p) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} reveal`}
          >
            <div className={styles.num}>{p.num}</div>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.desc}>{p.description}</p>
            <div className={styles.stack}>
              {p.stack.map((t) => (
                <span key={t} className={styles.tech}>
                  {t}
                </span>
              ))}
            </div>
            <div className={styles.link}>{p.linkLabel}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
