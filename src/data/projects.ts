import { Project } from "~/types/data";

export const projects: Project[] = [
  {
    id: "safepulse",
    title: "SafePulse",
    description:
      "Help, one tap away. A personal safety app with live location sharing and trusted-contact management. In an emergency, a server-side countdown triggers email alerts that tell your contacts where you are.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "bcrypt", "Geolocation API", "Resend API"],
    githubUrl: "https://github.com/aashya-madhan/SafePulse",
    liveUrl: "https://safe-pulse-chi.vercel.app",
    image: "/projects/safepulse.jpg",
    featured: true,
    highlights: [
      {
        icon: "Shield",
        label: "Secure Authentication",
        detail: "JWT-based authentication with bcrypt password hashing",
      },
      {
        icon: "MapPin",
        label: "Real-time Location",
        detail: "Live location sharing with trusted contacts",
      },
      {
        icon: "Bell",
        label: "Emergency Alerts",
        detail: "Automated email notifications during emergencies",
      },
      {
        icon: "Users",
        label: "Contact Management",
        detail: "Manage and notify trusted emergency contacts",
      },
    ],
    screenshots: [
      "/projects/safepulse-1.jpg", 
      "/projects/safepulse-2.jpg",
      "/projects/safepulse-3.jpg", 

    ],
    modalContent: {
      introduction: "A full-stack safety app built for the moments when reaching for a phone isn't an option, giving users and their loved ones peace of mind.",
      problemStatement: "In an emergency, every second counts, and calling or typing out a message is often the slowest part. People in distress need a way to raise the alarm quickly.",
      contribution: "Designed and built the full stack: JWT authentication with bcrypt hashing, geolocation tracking, a server-side emergency countdown, and automated email alerts through the Resend API.",
      features: [
        "JWT-based authentication with bcrypt password hashing for secure user accounts",
        "Real-time location sharing with trusted contacts using Geolocation API",
        "Emergency alert workflow with server-side countdown logic",
        "Automated email notifications to trusted contacts during emergencies",
        "Contact management system for adding and organizing emergency contacts",
        "Responsive design for mobile and desktop devices",
      ],
      challenges: "Technical challenges and solutions coming soon",
      results: "Quantitative results and impact metrics coming soon",
    },
  },
  {
    id: "prepforge",
    title: "PrepForge",
    description:
      "Placement prep that adapts to you. Interview questions across technical and non-technical domains, plus a resume analyzer that matches your profile to a job description and shows which skills and keywords you're missing.",
    techStack: ["React.js", "Node.js", "REST APIs", "MongoDB", "AI/ML"],
    githubUrl: "https://github.com/aashya-madhan/PrepForge",
    liveUrl: "https://prep-forge-sand.vercel.app",
    image: "/projects/prepforge.jpg",
    featured: true,
    highlights: [
      {
        icon: "Brain",
        label: "AI-Powered Analysis",
        detail: "Smart resume analysis and skill matching",
      },
      {
        icon: "BookOpen",
        label: "Interview Questions",
        detail: "Organized questions across multiple domains",
      },
      {
        icon: "Target",
        label: "Personalized Feedback",
        detail: "Tailored recommendations for improvement",
      },
      {
        icon: "Award",
        label: "Job Matching",
        detail: "Match profiles with job descriptions",
      },
    ],
    screenshots: [
      "/projects/prepforge-1.jpg", 
      "/projects/prepforge-2.jpg", 
      "/projects/prepforge-3.jpg",
    ],
    modalContent: {
      introduction: "An AI-powered platform that helps students and job seekers prepare for technical interviews and placements in one place.",
      problemStatement: "Interview prep is scattered across dozens of sources, and candidates rarely know how their resume measures up against a specific role.",
      contribution: "Built the full-stack application: a React.js frontend, a Node.js REST API with MongoDB, and the resume analysis and job-description matching system.",
      features: [
        "AI-powered resume analysis with keyword extraction and skill matching",
        "Job description matching system that evaluates candidate profiles",
        "Organized interview questions across technical and non-technical domains",
        "Personalized feedback and recommendations for improvement",
        "REST API architecture for scalable data management",
        "MongoDB database for efficient storage and retrieval",
      ],
      challenges: "Technical challenges and solutions coming soon",
      results: "Quantitative results and impact metrics coming soon",
    },
  },
  {
    id: "verifaura",
    title: "VerifAura",
    description:
      "Catching what the eye misses. A document forgery detection system that uses computer vision and a trained CNN to analyze uploads and flag likely manipulations.",
    techStack: ["Python", "Flask", "OpenCV", "PyMuPDF", "CNN", "Deep Learning"],
    githubUrl: "https://github.com/aashya-madhan/VerifAura",
    liveUrl: "https://verifaura-ai.onrender.com",
    image: "/projects/verifaura.jpg",
    featured: true,
    highlights: [
      {
        icon: "ScanSearch",
        label: "Document Analysis",
        detail: "Computer vision for manipulation detection",
      },
      {
        icon: "Shield",
        label: "CNN Model",
        detail: "Deep learning for forgery prediction",
      },
      {
        icon: "FileCheck",
        label: "Multi-Format Support",
        detail: "Supports various document formats",
      },
      {
        icon: "Zap",
        label: "Automated Detection",
        detail: "Upload a document, get a prediction",
      },
    ],
    screenshots: [
      "/projects/verifaura-1.jpg", 
      "/projects/verifaura-2.jpg", 
      "/projects/verifaura-3.jpg",
    ],
    modalContent: {
      introduction: "An AI-based system that uses computer vision and deep learning to detect manipulated documents automatically.",
      problemStatement: "Forged documents are a serious security risk, and checking them by hand is slow and prone to human error.",
      contribution: "Built the Flask web application end to end: OpenCV for document preprocessing, a trained CNN model for forgery prediction, and PyMuPDF for multi-format document support.",
      features: [
        "Computer vision-based document analysis using OpenCV",
        "Trained CNN model for deep learning-based forgery prediction",
        "Multi-format document support (PDF, images) via PyMuPDF",
        "Automated detection from a single upload",
        "Flask web application for easy document upload and analysis",
        "Confidence scoring for forgery predictions",
      ],
      challenges: "Technical challenges and solutions coming soon",
      results: "Quantitative results and impact metrics coming soon",
    },
  },
];
