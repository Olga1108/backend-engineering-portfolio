import type { SocialIcon } from "@/data/portfolio";

type IconName = SocialIcon | "arrow" | "down" | "pin" | "external";
const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  down: <path d="M12 4v15m-6-6 6 6 6-6" />,
  external: <><path d="M14 4h6v6m0-6L10 14" /><path d="M10 4H4v16h16v-6" /></>,
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 6 9 7 9-7" /></>,
  file: <><path d="M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 13h8M8 17h6" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
  github: <><path d="M9 19c-4 1-4-2-6-2m13 4v-3.5c0-1 .1-1.5-.5-2 3.5-.4 5.5-1.8 5.5-5.5 0-1.5-.5-2.5-1.5-3.5.2-1 .2-2-.3-3-1.5 0-2.5.7-3.4 1.3a12 12 0 0 0-6.6 0C8.3 4.2 7.3 3.5 5.8 3.5c-.5 1-.5 2-.3 3C4.5 7.5 4 8.5 4 10c0 3.7 2 5.1 5.5 5.5-.6.5-.5 1-.5 2V21" /></>,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
