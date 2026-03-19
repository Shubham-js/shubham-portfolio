import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className={styles.green}>Shubham Jain</span> &middot; All rights
        reserved.
      </p>
      <p>
        Built with Next.js &middot; TypeScript &middot; Deployed on{" "}
        <span className={styles.green}>Vercel</span>
      </p>
    </footer>
  );
}
