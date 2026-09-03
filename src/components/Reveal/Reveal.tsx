"use client";

import type { ReactNode, RefObject } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Reveal.module.scss";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "li";
}

export function Reveal({ children, className = "", delayMs = 0, as = "div" }: RevealProps): React.JSX.Element {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const classes = `${styles.reveal} ${isVisible ? styles.isVisible : ""} ${className}`.trim();
  const style = delayMs ? { transitionDelay: `${delayMs}ms` } : undefined;

  if (as === "li") {
    return (
      <li ref={ref as RefObject<HTMLLIElement | null>} className={classes} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={ref as RefObject<HTMLDivElement | null>} className={classes} style={style}>
      {children}
    </div>
  );
}
