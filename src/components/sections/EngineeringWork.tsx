import { caseStudies } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { CaseStudyCard } from "./CaseStudyCard";
import styles from "./EngineeringWork.module.css";

export function EngineeringWork() {
  const [featured, ...studies] = caseStudies;
  return <Section id="work" number="02" title="Selected engineering work">
    <CaseStudyCard study={featured} featured />
    <div className={styles.grid}>{studies.map(study => <CaseStudyCard key={study.id} study={study} />)}</div>
    <p className={styles.context}>Backend focus. Full-stack perspective. <span>Experience building APIs and the products that depend on them.</span></p>
  </Section>;
}
