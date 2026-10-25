export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
  socials: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ProjectHighlight {
  icon: string;
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  npmUrl?: string;
  image: string;
  featured: boolean;
  disabled?: boolean;
  highlights?: ProjectHighlight[];
  screenshots?: string[];
  modalContent?: {
    introduction?: string;
    problemStatement?: string;
    contribution?: string;
    features?: string[];
    challenges?: string;
    results?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  website?: string;
  highlights: string[];
  techUsed: string[];
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
}

export interface NavItem {
  label: string;
  href: string;
}
