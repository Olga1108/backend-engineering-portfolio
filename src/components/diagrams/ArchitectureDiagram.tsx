import { useId } from "react";
import styles from "./ArchitectureDiagram.module.css";

type NodeProps = { x: number; y: number; width?: number; label: string; detail?: string; database?: boolean };

function Node({ x, y, width = 112, label, detail, database }: NodeProps) {
  return <g transform={`translate(${x} ${y})`}>
    <rect className={styles.node} width={width} height="58" rx="5" />
    {database && <g className={styles.database} transform="translate(16 17)"><ellipse cx="9" cy="3" rx="9" ry="4" /><path d="M0 3v18c0 5 18 5 18 0V3M0 10c0 5 18 5 18 0M0 17c0 5 18 5 18 0" /></g>}
    <text x={database ? 44 : width / 2} y={detail ? 25 : 33} textAnchor={database ? "start" : "middle"} className={styles.label}>{label}</text>
    {detail && <text x={database ? 44 : width / 2} y="42" textAnchor={database ? "start" : "middle"} className={styles.detail}>{detail}</text>}
  </g>;
}

export function ArchitectureDiagram({ variant = "hero" }: { variant?: "hero" | "versioning" }) {
  const id = useId();
  const markerId = `${id}-arrow`;
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;
  const hero = variant === "hero";
  return <><svg className={`${styles.diagram} ${hero ? "" : styles.desktop}`} viewBox={hero ? "0 0 510 360" : "0 0 580 300"} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
    <title id={titleId}>{hero ? "An illustrative backend system" : "Universal Versioning Platform design"}</title>
    <desc id={descriptionId}>{hero ? "A client calls a Symfony API, connected to Redis caching and RabbitMQ messaging. A worker consumes messages and writes to ClickHouse storage. This is a simplified illustration." : "A producer writes to a transactional outbox. RabbitMQ delivers events to a worker, coordinated with Redis for idempotency. The worker writes entity history to ClickHouse. Implementation is in progress."}</desc>
    <defs><marker id={markerId} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="m1 1 5 2.5L1 6" fill="none" stroke="currentColor" /></marker></defs>
    <g className={styles.connections} fill="none" strokeWidth="1" markerEnd={`url(#${markerId})`}>
      {hero ? <><path d="M100 164h45" /><path d="M251 164h24V59h49" /><path d="M251 164h24V135h49" /><path d="M386 164v32" /><path d="M386 254v42" /></> : <><path d="M102 145h28" /><path d="M224 145h28" /><path d="M346 145h40" /><path d="M433 87v29" /><path d="M480 145h32v101h-32" /></>}
    </g>
    {hero ? <>
      <Node x={8} y={135} width={92} label="Client" />
      <Node x={145} y={135} width={106} label="API" detail="Symfony" />
      <Node x={324} y={30} width={150} label="Redis" detail="caching" database />
      <Node x={324} y={106} width={150} label="RabbitMQ" detail="messaging" database />
      <Node x={324} y={196} width={150} label="Worker" detail="consumer" />
      <Node x={324} y={296} width={150} label="ClickHouse" detail="storage" database />
      <text className={styles.caption} x="65" y="266"><tspan x="65">Scalable</tspan><tspan x="65" dy="19">Reliable</tspan><tspan x="65" dy="19">Maintainable</tspan><tspan x="65" dy="19">Business-driven</tspan></text>
    </> : <>
      <Node x={8} y={116} width={94} label="Producer" detail="service" />
      <Node x={130} y={116} width={94} label="Outbox" />
      <Node x={252} y={116} width={94} label="RabbitMQ" />
      <Node x={386} y={29} width={94} label="Redis" detail="idempotency" />
      <Node x={386} y={116} width={94} label="Worker" detail="consumer" />
      <Node x={346} y={217} width={134} label="ClickHouse" detail="entity history" database />
      <text className={styles.caption} x="8" y="255">AT-LEAST-ONCE DELIVERY</text>
    </>}
  </svg>
  {!hero && <svg className={`${styles.diagram} ${styles.mobile}`} viewBox="0 0 360 345" role="img" aria-label="Proposed versioning flow: Producer to Outbox to RabbitMQ to Worker to ClickHouse, with Redis coordinating idempotency. Implementation in progress.">
    <defs><marker id={`${markerId}-mobile`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="m1 1 5 2.5L1 6" fill="none" stroke="currentColor" /></marker></defs>
    <g className={styles.connections} fill="none" strokeWidth="1" markerEnd={`url(#${markerId}-mobile)`}>
      <path d="M102 49h28" /><path d="M224 49h28" /><path d="M299 78v62" /><path d="M224 169h28" /><path d="M299 198v66h-75" />
    </g>
    <Node x={8} y={20} width={94} label="Producer" detail="service" />
    <Node x={130} y={20} width={94} label="Outbox" />
    <Node x={252} y={20} width={94} label="RabbitMQ" />
    <Node x={130} y={140} width={94} label="Redis" detail="idempotency" />
    <Node x={252} y={140} width={94} label="Worker" detail="consumer" />
    <Node x={74} y={235} width={150} label="ClickHouse" detail="entity history" database />
    <text className={styles.caption} x="8" y="330">AT-LEAST-ONCE DELIVERY</text>
  </svg>}
  </>;
}
