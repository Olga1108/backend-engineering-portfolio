import experience from "@/data/experience.json";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import styles from "./ExperiencePreview.module.css";

export function ExperiencePreview() {
  return (
    <Section id="experience" number="07" title="Experience">
      <ol className={styles.timeline}>
        {experience.map((job) => (
          <li className={styles.job} key={job.company}>
            <p className={styles.period}><time dateTime={job.start}>{job.period}</time></p>
            <h3>{job.role}</h3>
            <p className={styles.company}>{job.company}</p>
            <p className={styles.description}>{job.description}</p>
            <details className={styles.details}>
              <summary>Role highlights <Icon name="arrow" /></summary>
              <p>{job.details}</p>
            </details>
          </li>
        ))}
      </ol>
      <a className={styles.resume} href="/documents/Olha-Razvaliaieva-Resume.pdf" target="_blank" rel="noopener noreferrer">
        View full experience in my resume <Icon name="external" />
      </a>
    </Section>
  );
}
