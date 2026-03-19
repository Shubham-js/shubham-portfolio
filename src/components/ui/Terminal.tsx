"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Terminal.module.css";

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  whoami       — who is Shubham",
    "  skills       — tech stack",
    "  experience   — work history",
    "  projects     — built things",
    "  contact      — get in touch",
    "  download     — get resume PDF",
    "  achievements — wins & milestones",
    "  clear        — clear terminal",
  ],
  whoami: [
    "Shubham Jain · SDE-2 @ Innovaccer",
    "Noida, IN · shubhamcomputer33@gmail.com",
    "+91 6200905133 · Top 0.5% LeetCode",
  ],
  skills: [
    "Languages:  JavaScript · TypeScript · C++ · SQL",
    "Frontend:   React.js · Next.js · React Native · Redux",
    "Backend:    Node.js · REST APIs · Firebase · Express",
    "Tools:      Git · Webpack · CI/CD · Figma MCP · AI tools",
  ],
  experience: [
    "Oct 2024 – Now       →  SDE-2 @ Innovaccer",
    "Jul 2022 – Oct 2024  →  Sr. SWE @ MakeMyTrip",
    "Aug 2021 – Jul 2022  →  SDE @ Zunroof",
    "Aug 2018 – Jun 2022  →  B.Tech CSE, RCET · 9.11 CGPA",
  ],
  projects: [
    "[1] Toodle — E-Learning (10,000+ students) ↗",
    "[2] LinkedIn Clone — React + Firebase",
    "[3] Portfolio v1 — React + Firebase",
    "[4] Tribie — SIH 2020 Finalist",
  ],
  contact: [
    "Email:    shubhamcomputer33@gmail.com",
    "Phone:    +91 6200905133",
    "LinkedIn: linkedin.com/in/shubhamjain",
    "GitHub:   github.com/shubhamjain",
    "LeetCode: leetcode.com/shubhamjain",
  ],
  achievements: [
    "🏆 Employee of the Month — Aug 2025 (Innovaccer)",
    "⚡ Top 0.5% on LeetCode (1250+ problems)",
    "★  4-Star Coder on CodeChef (2022)",
    "💯 200/200 — TechGig Code Gladiators",
    "🎯 Smart India Hackathon 2020 Finalist",
    "🎓 Letter of Felicitation — CSVTU VC",
  ],
  download: [
    "Generating resume...",
    "[████████████████████] 100%",
    "✓ Resume ready — click the Download CV button above!",
  ],
};

interface Line {
  id: number;
  text: string;
  type: "cmd" | "out" | "accent" | "warn" | "blank";
}

const INITIAL_LINES: Line[] = [
  { id: 0, text: "whoami", type: "cmd" },
  { id: 1, text: "Shubham Jain · SDE-2 @ Innovaccer", type: "accent" },
  { id: 2, text: "Noida, India · Top 0.5% LeetCode", type: "out" },
  { id: 3, text: "", type: "blank" },
  { id: 4, text: "skills --top", type: "cmd" },
];

const SKILL_BARS = [
  { name: "React.js", pct: 95 },
  { name: "TypeScript", pct: 90 },
  { name: "Node.js", pct: 88 },
  { name: "Next.js", pct: 88 },
];

export function Terminal() {
  const [lines, setLines] = useState<Line[]>(INITIAL_LINES);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(100);

  const scrollBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (bodyRef.current)
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    });
  }, []);

  useEffect(() => {
    // show hint after initial lines
    const t = setTimeout(() => {
      setLines((prev) => [
        ...prev,
        { id: idRef.current++, text: "", type: "blank" },
        {
          id: idRef.current++,
          text: "Type a command below. Try: help",
          type: "out",
        },
      ]);
      scrollBottom();
    }, 800);
    return () => clearTimeout(t);
  }, [scrollBottom]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const cmd = input.trim().toLowerCase();
    setInput("");

    if (cmd === "") return;

    const newLines: Line[] = [
      { id: idRef.current++, text: cmd, type: "cmd" },
    ];

    if (cmd === "clear") {
      setLines([]);
      scrollBottom();
      return;
    }

    if (COMMANDS[cmd]) {
      COMMANDS[cmd].forEach((l) => {
        const isAccent =
          l.startsWith("✓") || (l.startsWith("[") && l.includes("100%"));
        newLines.push({
          id: idRef.current++,
          text: l,
          type: isAccent ? "accent" : "out",
        });
      });
    } else {
      newLines.push({
        id: idRef.current++,
        text: `Command not found: "${cmd}". Type "help".`,
        type: "warn",
      });
    }

    newLines.push({ id: idRef.current++, text: "", type: "blank" });
    setLines((prev) => [...prev, ...newLines]);
    scrollBottom();
  };

  return (
    <div className={styles.terminal}>
      {/* title bar */}
      <div className={styles.bar}>
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.r}`} />
          <span className={`${styles.dot} ${styles.y}`} />
          <span className={`${styles.dot} ${styles.g}`} />
        </div>
        <div className={styles.title}>shubham@portfolio:~</div>
      </div>

      {/* output body */}
      <div className={styles.body} ref={bodyRef}>
        {lines.map((line) =>
          line.type === "blank" ? (
            <span key={line.id} className={styles.line}>&nbsp;</span>
          ) : line.type === "cmd" ? (
            <span key={line.id} className={styles.line}>
              <span className={styles.prompt}>$</span>{" "}
              <span className={styles.cmd}>{line.text}</span>
            </span>
          ) : (
            <span
              key={line.id}
              className={`${styles.line} ${styles[line.type]}`}
            >
              {line.text}
            </span>
          )
        )}

        {/* skill bars — always shown after initial cmd */}
        {lines.find((l) => l.text === "skills --top") && (
          <>
            {SKILL_BARS.map((s) => (
              <span key={s.name} className={`${styles.line} ${styles.barRow}`}>
                <span className={styles.barName}>{s.name}</span>
                <span className={styles.barTrack}>
                  <span
                    className={styles.barFill}
                    style={{ width: `${s.pct}%` }}
                  />
                </span>
                <span className={styles.barPct}>{s.pct}%</span>
              </span>
            ))}
          </>
        )}
      </div>

      {/* input row */}
      <div className={styles.inputRow}>
        <span className={styles.inputPrompt}>$</span>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          autoComplete="off"
          spellCheck={false}
          placeholder="type a command..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>
    </div>
  );
}
