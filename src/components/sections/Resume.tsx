import styles from "./Resume.module.css";

export function Resume() {
  return (
    <section className={styles.section} id="resume">
      <div className={`${styles.inner} reveal`}>
        <div className={styles.badge}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
          Ready to download
        </div>

        <h2 className={styles.heading}>
          Get my <em>resume</em>
        </h2>

        <p className={styles.sub}>
          3+ years at Innovaccer, MakeMyTrip &amp; Zunroof. Top 0.5% on
          LeetCode. 9.11 CGPA. Everything on one page.
        </p>

        <a
          href="./ShubhamJain_Resume.pdf"
          download
          className={styles.dlBtn}
          data-magnetic
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
          Download Resume &middot; PDF
        </a>

        <div className={styles.links}>
          <a href="/resume.pdf" target="_blank" className={styles.rl}>
            View Online
          </a>
          <span className={styles.sep}>&middot;</span>
          <a href="mailto:shubhamcomputer33@gmail.com" className={styles.rl}>
            Email a copy
          </a>
          <span className={styles.sep}>&middot;</span>
          <a
            href="https://linkedin.com/in/shubhamjain"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.rl}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
