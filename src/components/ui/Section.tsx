import type { ReactNode } from "react";
import styles from "./Section.module.css";

export function Section({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} className={`container ${styles.section}`} aria-labelledby={`${id}-title`}>
    <header className={styles.heading}><span className={styles.number}>{number}</span><h2 id={`${id}-title`}>{title}</h2><span className={styles.rule} /></header>
    {children}
  </section>;
}
