import type { CaseStudy } from "@/data/portfolio";
import { ArchitectureDiagram } from "@/components/diagrams/ArchitectureDiagram";
import { CaseStudyVisual } from "@/components/diagrams/CaseStudyVisual";
import { Icon } from "@/components/ui/Icon";
import styles from "./CaseStudyCard.module.css";

export function CaseStudyCard({ study, featured = false }: { study: CaseStudy; featured?: boolean }) {
  return <article className={`${styles.card} ${featured ? styles.featured : ""}`} aria-labelledby={`${study.id}-title`}>
    <div className={styles.body}>
      {featured && <p className={styles.eyebrow}>Featured engineering design</p>}
      <h3 id={`${study.id}-title`}>{study.title}</h3>
      <p className={styles.subtitle}>{study.subtitle}</p>
      {study.description && <p className={styles.description}>{study.description}</p>}
      {study.status && <p className={styles.status}><span aria-hidden="true" />{study.status}</p>}
      <ul className={styles.tags} aria-label="Technologies">{study.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
    </div>
    {featured ? <figure className={styles.architecture}><ArchitectureDiagram variant="versioning" /><figcaption>Proposed delivery & processing flow</figcaption></figure> : <div className={styles.visual}><CaseStudyVisual variant={study.visual} /></div>}
    {featured && <ul className={styles.outcomes} aria-label="Design goals">{study.outcomes?.map(outcome => <li key={outcome}>{outcome}</li>)}</ul>}
    <details className={styles.notes}>
      <summary>Explore engineering notes <Icon name="arrow" /></summary>
      <div className={styles.noteContent}>{study.notes.map(note => <p key={note}>{note}</p>)}</div>
    </details>
  </article>;
}
