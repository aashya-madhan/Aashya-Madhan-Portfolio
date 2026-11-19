import { Experience } from "~/types/data";

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "IEEE ICC-CNS Conference",
    role: "Research Co-Author",
    period: "June 2026",
    location: "Published",
    website: "https://ieeexplore.ieee.org/document/11606036",
    highlights: [
      "Co-authored 'A Hybrid TCN–TabTransformer Framework for Multi-Dataset Campus Placement Prediction', published at IEEE ICC-CNS",
      "Designed a hybrid architecture combining TCN, TabTransformer and BiLSTM to model placement outcomes across multiple datasets",
      "Reached 91% prediction accuracy",
    ],
    techUsed: ["Deep Learning", "TCN", "TabTransformer", "BiLSTM", "Python", "Machine Learning"],
  },
  {
    id: "exp-2",
    company: "Infosys Springboard",
    role: "Full Stack Development Intern",
    period: "Sep 2025 - Nov 2025",
    location: "Remote",
    website: "https://drive.google.com/drive/folders/1mhXMheNZ6ye5_JNOHTim6AOdzIGunbG9?usp=sharing",
    highlights: [
      "Project: NGO Volunteer Management Application",
      "Cut manual data-entry time by 30% by building component-based React.js interfaces integrated end to end with REST APIs",
      "Delivered across 2 Agile sprints using Git/GitHub, code reviews and CI/CD workflows",
    ],
    techUsed: ["React.js", "Node.js", "REST APIs", "Git", "GitHub", "CI/CD", "Agile/Scrum"],
  },
  {
    id: "exp-3",
    company: "IBM SkillsBuild (Edunet Foundation)",
    role: "Frontend Web Development Intern",
    period: "Aug 2025 - Sep 2025",
    location: "Remote",
    website: "https://drive.google.com/drive/folders/1feNkXbbRpsO1nnTB65zVjZ7GGvqhWhnA?usp=drive_link",
    highlights: [
      "Project: Interactive Recipe-Search Web Application",
      "Reduced page load time by 15% while building 5+ responsive web interfaces",
      "Integrated 3 third-party REST APIs to deliver real-time data in production-facing features",
    ],
    techUsed: ["HTML", "CSS", "JavaScript", "React.js", "REST APIs"],
  },
];
