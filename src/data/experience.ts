import { Experience } from "~/types/data";

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "IEEE ICC-CNS Conference",
    role: "Research Co-Author",
    period: "June 2026",
    location: "Published",
    website: "https://ieeexplore.ieee.org/",
    highlights: [
      "Co-authored an IEEE conference paper on 'A Hybrid TCN–TabTransformer Framework for Multi-Dataset Campus Placement Prediction'",
      "Proposed a hybrid deep learning framework combining TCN, TabTransformer, and BiLSTM architectures",
      "Achieved 91% prediction accuracy on multi-dataset campus placement prediction tasks",
    ],
    techUsed: ["Deep Learning", "TCN", "TabTransformer", "BiLSTM", "Python", "Machine Learning"],
  },
  {
    id: "exp-2",
    company: "Infosys Springboard",
    role: "Full Stack Development Intern",
    period: "Sep 2025 - Nov 2025",
    location: "Remote",
    website: "https://infyspringboard.onwingspan.com/web/en/page/home",
    highlights: [
      "Developed component-based React.js interfaces and integrated REST APIs end-to-end, reducing manual data-entry time by 30%",
      "Worked across 2 Agile sprints using Git/GitHub, code reviews, and CI/CD workflows for version-controlled development",
    ],
    techUsed: ["React.js", "Node.js", "REST APIs", "Git", "GitHub", "CI/CD", "Agile/Scrum"],
  },
  {
    id: "exp-3",
    company: "IBM SkillsBuild (Edunet Foundation)",
    role: "Frontend Web Development Intern",
    period: "Aug 2025 - Sep 2025",
    location: "Remote",
    website: "https://www.ibm.com/academic/home",
    highlights: [
      "Developed 5+ responsive web interfaces and optimized rendering performance, reducing page load time by 15%",
      "Integrated 3 third-party REST APIs to support real-time data in production-facing features",
    ],
    techUsed: ["HTML", "CSS", "JavaScript", "React.js", "REST APIs"],
  },
];
