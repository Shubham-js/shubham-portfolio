import styles from "./About.module.css";

const META = [
  { key: "Location", val: "Noida, Uttar Pradesh, India" },
  { key: "Current", val: "Innovaccer · SDE-2" },
  { key: "Stack", val: "React · Next.js · Node.js · TypeScript" },
  { key: "Email", val: "shubhamcomputer33@gmail.com" },
  { key: "Phone", val: "+91 6200905133" },
];

const METRICS = [
  { num: "45%", label: "Build Time Reduced", desc: "Webpack caching, code-splitting & config refactoring at Innovaccer" },
  { num: "13.5%", label: "Conversion Increase", desc: "Seat Availability feature across Web & App at MakeMyTrip" },
  { num: "10K+", label: "Students Reached", desc: "Toodle E-Learning platform · Recognised by CSVTU VC" },
  { num: "95%", label: "Code Coverage", desc: "Achieved on Alameda US Government product" },
];

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.grid}>
        {/* Left — text */}
        <div className="reveal">
          <div className="secLabel">
            {/* 01 <span>&mdash; About Me</span> */}
          </div>
          <h2 className="secTitle">
            Crafting digital<br />
            <em>experiences</em> that<br />
            <strong>actually ship.</strong>
          </h2>

          <div className={styles.text}>
            <p>
              I&apos;m a <strong>Software Development Engineer 2</strong> at
              Innovaccer, building scalable healthcare products used by care
              teams across the US. Previously at <strong>MakeMyTrip</strong>, I
              engineered features transforming how millions of Indians travel.
            </p>
            <p>
              I obsess over <strong>performance, clean architecture</strong>, and
              developer experience. Whether it&apos;s cutting build times by 45%,
              reducing API latency, or shipping a feature that bumps conversion
              by 13.5% &mdash; I care about the numbers behind the craft.
            </p>
            <p>
              Currently shipping with{" "}
              <strong>AI-assisted dev</strong> &mdash; Claude, Cursor &amp;
              GitHub Copilot alongside Figma MCP to move faster without
              sacrificing quality.
            </p>
          </div>

          <div className={styles.meta}>
            {META.map((m) => (
              <div key={m.key} className={styles.metaRow}>
                <span className={styles.metaKey}>{m.key}</span>
                {m.val}
              </div>
            ))}
          </div>
        </div>

        {/* Right — metric cards */}
        <div className={styles.cards}>
          {METRICS.map((m, i) => (
            <div key={m.label} className={`${styles.card} reveal rd${i + 1}`}>
              <div className={styles.cardNum}>{m.num}</div>
              <div className={styles.cardLabel}>{m.label}</div>
              <div className={styles.cardDesc}>{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
