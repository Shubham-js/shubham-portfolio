"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <nav className={styles.nav} id="navbar">
      <Link href="/" className={styles.logo}>
        <span className={styles.logoDot} />
        shubham.jain()
      </Link>

      <ul className={styles.links}>
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={styles.link}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.right}>
        <a href="#resume" className={styles.btnResume}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
          Resume
        </a>
        <a href="#contact" className={styles.btnHire} data-magnetic>
          Get in touch
        </a>
      </div>
    </nav>
  );
}
