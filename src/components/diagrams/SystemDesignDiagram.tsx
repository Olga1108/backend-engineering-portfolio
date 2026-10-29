import { useId } from "react";
import styles from "./SystemDesignDiagram.module.css";

type DiagramNode = { x: number; y: number; label: string; width?: number };

function Node({ x, y, label, width = 84 }: DiagramNode) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={width} height="40" rx="4" />
      <text x={width / 2} y="24" textAnchor="middle">{label}</text>
    </g>
  );
}

// These are explanatory patterns, not literal production topologies.
export function SystemDesignDiagram({ id, labels, summary }: {
  id: string;
  labels: string[];
  summary: string;
}) {
  const markerId = `${useId()}-flow`;
  const nodes: DiagramNode[] = id === "event-delivery"
    ? [
        { x: 6, y: 16, label: labels[0] },
        { x: 118, y: 16, label: labels[1] },
        { x: 230, y: 16, label: labels[2] },
        { x: 230, y: 115, label: labels[3] },
        { x: 94, y: 115, width: 108, label: labels[4] },
      ]
    : id === "read-path"
      ? labels.map((label, index) => ({ x: 6 + index * 112, y: 67, label }))
      : id === "versioning"
        ? [
            { x: 6, y: 16, label: labels[0] },
            { x: 230, y: 16, label: labels[1] },
            { x: 6, y: 115, width: 116, label: labels[2] },
            { x: 230, y: 115, label: labels[3] },
          ]
        : [
            { x: 6, y: 16, width: 66, label: labels[0] },
            { x: 98, y: 16, width: 100, label: labels[1] },
            { x: 224, y: 16, width: 90, label: labels[2] },
            { x: 98, y: 115, width: 116, label: labels[3] },
          ];
  const paths: Record<string, string[]> = {
    "event-delivery": ["M90 36h28", "M202 36h28", "M272 56v59", "M230 135h-28"],
    "read-path": ["M90 87h28", "M202 87h28"],
    versioning: ["M90 36h140", "M272 56v30H64v29", "M122 135h108"],
    "ddd-service": ["M72 36h26", "M198 36h26", "M214 135h55V56"],
  };

  return (
    <svg className={styles.diagram} viewBox="0 0 320 175" role="img" aria-label={summary}>
      <defs>
        <marker id={markerId} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="m1 1 5 2.5L1 6" fill="none" stroke="currentColor" />
        </marker>
      </defs>
      <g className={styles.connections} markerEnd={`url(#${markerId})`}>
        {paths[id].map((path) => <path key={path} d={path} />)}
      </g>
      <g className={styles.nodes}>
        {nodes.map((node) => <Node key={node.label} {...node} />)}
      </g>
    </svg>
  );
}
