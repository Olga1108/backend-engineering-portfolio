import styles from "./CaseStudyVisual.module.css";

export function CaseStudyVisual({ variant }: { variant?: string }) {
  return <svg className={styles.visual} width="100" height="80" viewBox="0 0 100 80" fill="none" aria-hidden="true">
    {variant === "chart" ? <><path className={styles.grid} d="M5 15h90M5 40h90M5 65h90M25 5v65M50 5v65M75 5v65" /><path d="M5 60 20 52 30 54 43 34 54 39 67 24 78 29 94 10" stroke="currentColor" /><path d="m88 10 6 0 0 6" stroke="currentColor" /></> : variant === "bars" ? <>{[20, 30, 41, 52, 64, 73].map((height, index) => <rect key={height} x={index * 15 + 7} y={77 - height} width="8" height={height} fill="currentColor" opacity={.25 + index * .13} />)}</> : <><rect x="4" y="8" width="90" height="64" rx="4" stroke="currentColor" opacity=".5" />{[23, 39, 55].map(y => <g key={y}><rect x="15" y={y - 3} width="5" height="5" stroke="currentColor" /><path d={`M30 ${y}h49`} stroke="currentColor" opacity=".65" /></g>)}</>}
  </svg>;
}
