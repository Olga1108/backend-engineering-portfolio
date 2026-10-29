import { metrics } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import styles from "./ImpactMetrics.module.css";

export function ImpactMetrics() {
  return <Section id="impact" number="01" title="Selected impact"><dl className={styles.metrics}>{metrics.map(metric => <div className={styles.metric} key={metric.label}><dt>{metric.label}</dt><dd className={styles.value}>{metric.value}</dd><dd className={styles.description}>{metric.description}</dd></div>)}</dl></Section>;
}
