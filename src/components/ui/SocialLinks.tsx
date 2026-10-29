import { profile } from "@/data/portfolio";
import { Icon } from "./Icon";
import styles from "./SocialLinks.module.css";

export function SocialLinks() {
  return <ul className={styles.links} aria-label="Contact and professional profiles">{profile.links.map(link => <li key={link.label}><a href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}><Icon name={link.icon} /><span>{link.label}</span></a></li>)}</ul>;
}
