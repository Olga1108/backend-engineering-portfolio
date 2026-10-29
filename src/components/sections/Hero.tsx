import { profile } from "@/data/portfolio";
import { ArchitectureDiagram } from "@/components/diagrams/ArchitectureDiagram";
import { Icon } from "@/components/ui/Icon";
import { SocialLinks } from "@/components/ui/SocialLinks";
import styles from "./Hero.module.css";

export function Hero() {
  return <section className={styles.hero} aria-labelledby="hero-title">
    <div className={`container ${styles.inner}`}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{profile.role}</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className={styles.stack}>{profile.stack}</p>
        <p className={styles.statement}>{profile.statement}</p>
        <ul className={styles.meta}><li><Icon name="pin" />{profile.location}</li><li>{profile.availability}</li><li>{profile.engagement}</li></ul>
        <a className="button" href="#work">View engineering work <Icon name="down" /></a>
        <SocialLinks />
      </div>
      <figure className={styles.figure}><ArchitectureDiagram /><figcaption>Simplified architecture · Built for predictable behavior</figcaption></figure>
      <a className={styles.scroll} href="#impact"><span className={styles.mouse} aria-hidden="true"><span /></span>Scroll to explore</a>
    </div>
  </section>;
}
