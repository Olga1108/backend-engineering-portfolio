import principles from "@/data/principles.json";
import { Section } from "@/components/ui/Section";
import styles from "./EngineeringPrinciples.module.css";

export function EngineeringPrinciples() {
  return (
    <Section id="principles" number="03" title="How I engineer systems">
      <ol className={styles.grid}>
        {principles.map((principle) => (
          <li className={styles.principle} key={principle.number}>
            <span className={styles.number}>{principle.number}</span>
            <div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
