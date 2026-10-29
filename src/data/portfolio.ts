import profileData from "./profile.json";
import metricData from "./metrics.json";
import caseStudyData from "./case-studies.json";

export type SocialIcon = "linkedin" | "github" | "mail" | "file";
export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  status?: string;
  technologies: string[];
  outcomes?: string[];
  visual?: string;
  notes: string[];
};

type Profile = {
  name: string;
  role: string;
  stack: string;
  statement: string;
  location: string;
  availability: string;
  engagement: string;
  email: string;
  links: { label: string; href: string; icon: SocialIcon }[];
};

// Keep content serializable and separate from presentation.
export const profile = profileData as Profile;
export const metrics = metricData;
export const caseStudies: CaseStudy[] = caseStudyData;
