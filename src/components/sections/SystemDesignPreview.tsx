import designs from "@/data/system-designs.json";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { SystemDesignDiagram } from "@/components/diagrams/SystemDesignDiagram";
import styles from "./SystemDesignPreview.module.css";

export function SystemDesignPreview() {
  return (
    <Section id="system-design" number="04" title="System design preview">
      <p className={styles.intro}>A few patterns behind the work. Clear boundaries, explicit guarantees and room to evolve.</p>
      <div className={styles.grid}>
        {designs.map((design) => (
          <article className={styles.card} key={design.id}>
            <p className={styles.focus}>{design.focus}</p>
            <h3>{design.title}</h3>
            <SystemDesignDiagram id={design.id} labels={design.labels} summary={design.summary} />
            <p className={styles.description}>{design.description}</p>
            <details className={styles.notes}>
              <summary>Design notes <Icon name="arrow" /></summary>
              <p>{design.note}</p>
            </details>
          </article>
        ))}
      </div>
      <p className={styles.caption}>Simplified architecture patterns. The versioning platform is currently in implementation.</p>
    </Section>
  );
}
