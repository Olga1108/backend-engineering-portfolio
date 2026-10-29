import context from "@/data/product-context.json";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import styles from "./ProductContext.module.css";

export function ProductContext() {
  return (
    <Section id="about" number="05" title="Engineering with product context">
      <div className={styles.layout}>
        <h3>{context.headline}</h3>
        <div className={styles.copy}>
          <p>{context.description}</p>
          <p>{context.supporting}</p>
        </div>
      </div>
      <ol className={styles.flow} aria-label="From product problem to engineering outcome">
        {context.steps.map((step, index) => (
          <li key={step}>
            <span className={styles.step}><span className={styles.number}>0{index + 1}</span>{step}</span>
            {index < context.steps.length - 1 && <Icon name="arrow" />}
          </li>
        ))}
      </ol>
    </Section>
  );
}
