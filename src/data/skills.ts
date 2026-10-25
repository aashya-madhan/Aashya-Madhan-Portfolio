import { SkillCategory } from "~/types/data";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: `${DI}/python/python-original.svg` },
      { name: "Java", icon: `${DI}/java/java-original.svg` },
      { name: "JavaScript", icon: `${DI}/javascript/javascript-original.svg` },
      { name: "SQL", icon: `${DI}/mysql/mysql-original.svg` },
      { name: "HTML5", icon: `${DI}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${DI}/css3/css3-original.svg` },
    ],
  },
  {
    category: "Web & Backend",
    skills: [
      { name: "React.js", icon: `${DI}/react/react-original.svg` },
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${DI}/express/express-original.svg` },
      { name: "Flask", icon: `${DI}/flask/flask-original.svg` },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg` },
      { name: "MySQL", icon: `${DI}/mysql/mysql-original.svg` },
      { name: "Git", icon: `${DI}/git/git-original.svg` },
      { name: "GitHub", icon: `${DI}/github/github-original.svg` },
      { name: "Postman", icon: `${SI}/postman/FF6C37` },
    ],
  },
  {
    category: "Other Technologies",
    skills: [
      { name: "OpenCV", icon: `${DI}/opencv/opencv-original.svg` },
      { name: "PyMuPDF", icon: `${DI}/python/python-original.svg` },
      { name: "REST APIs", icon: `${SI}/fastapi/009688` },
      { name: "JWT", icon: `${SI}/jsonwebtokens/000000` },
      { name: "CI/CD", icon: `${DI}/githubactions/githubactions-original.svg` },
    ],
  },
];
