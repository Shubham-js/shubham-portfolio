"use client";

import { useState, useEffect, useRef } from "react";

export function useTypewriter(words: string[], speed = 90, deleteSpeed = 50, pause = 1600) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIndex];

    const tick = () => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          timeoutRef.current = setTimeout(() => setDeleting(true), pause);
          return;
        }
        setCharIndex((c) => c + 1);
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
          setCharIndex(0);
          return;
        }
        setCharIndex((c) => c - 1);
      }
    };

    timeoutRef.current = setTimeout(tick, deleting ? deleteSpeed : speed);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, deleting, wordIndex, words, speed, deleteSpeed, pause]);

  return displayed;
}
