export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  range: string;
  location: string;
  bullets: string[];
  techs: string[];
  tag: string;
}

export interface Project {
  id: string;
  num: string;
  title: string;
  description: string;
  stack: string[];
  link: string;
  linkLabel: string;
}

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface SkillGroup {
  id: string;
  icon: string;
  title: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "email" | "linkedin" | "github" | "leetcode" | "phone";
}

export interface RpgStat {
  label: string;
  value: string;
  sub: string;
  xp: string;
}
