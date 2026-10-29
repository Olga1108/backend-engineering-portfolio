import { profile } from "@/data/portfolio";
import navigation from "@/data/navigation.json";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Icon } from "@/components/ui/Icon";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer id="contact" className={styles.footer} aria-labelledby="contact-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.introduction}>
          <p className={styles.label}>Let’s connect</p>
          <h2 id="contact-title">Let’s build systems<br />that make an impact.</h2>
          <p className={styles.description}>
            Open to Backend Engineering opportunities<br />with product-focused US/EU teams.
          </p>
          <a className={styles.email} href={`mailto:${profile.email}`}>{profile.email}<Icon name="arrow" /></a>
        </div>
        <div className={styles.connect}>
          <p className={styles.availability}><span aria-hidden="true" />{profile.availability}</p>
          <p className={styles.location}>{profile.location} · {profile.engagement}</p>
          <SocialLinks />
        </div>
      </div>
      <div className={`container ${styles.directory}`}>
        <a className={styles.brand} href="#top" aria-label={`${profile.name} — back to top`}><span>OR</span>{profile.name}</a>
        <nav aria-label="Footer navigation">
          {navigation.filter((link) => !link.external).map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className={styles.backToTop} href="#top" aria-label="Back to top"><Icon name="down" /></a>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>© 2026 {profile.name}</p>
        <p>PHP / Symfony · Go · Messaging · Reliability</p>
      </div>
    </footer>
  );
}
