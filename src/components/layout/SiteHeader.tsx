"use client";

import { useState } from "react";
import navigation from "@/data/navigation.json";
import { profile } from "@/data/portfolio";
import { Icon } from "@/components/ui/Icon";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className={styles.header}>
    <div className={`container ${styles.inner}`}>
      <a className={styles.brand} href="#top" aria-label={`${profile.name} — home`} onClick={() => setMenuOpen(false)}><span className={styles.monogram}>OR</span><span className={styles.name}>{profile.name}</span></a>
      <button className={styles.menuToggle} type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
      <nav id="main-navigation" className={`${styles.nav} ${menuOpen ? styles.open : ""}`} aria-label="Main navigation">
        {navigation.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>{link.label}{link.external && <Icon name="external" />}</a>)}
        <a className="button button-small" href="#contact" onClick={() => setMenuOpen(false)}>Contact <Icon name="arrow" /></a>
      </nav>
    </div>
  </header>;
}
