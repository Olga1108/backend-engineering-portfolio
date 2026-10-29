import mentorship from "@/data/mentorship.json";
import { Section } from "@/components/ui/Section";
import styles from "./Mentorship.module.css";

export function Mentorship() {
  return (
    <Section id="mentorship" number="06" title="Mentorship & engineering culture">
      <div className={styles.layout}>
        <div className={styles.metric}>
          <p className={styles.value}>{mentorship.value}</p>
          <p>{mentorship.label}</p>
        </div>
        <div className={styles.copy}>
          <p>{mentorship.description}</p>
          <p className={styles.context}>{mentorship.context}</p>
        </div>
        <ol className={styles.activities}>
          {mentorship.activities.map((activity, index) => (
            <li key={activity}><span>0{index + 1}</span>{activity}</li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
