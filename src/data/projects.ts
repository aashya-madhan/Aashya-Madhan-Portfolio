import { Project } from "~/types/data";

export const projects: Project[] = [
  {
    id: "safepulse",
    title: "SafePulse",
    description:
      "A full-stack personal safety application with secure user authentication, real-time location sharing, and emergency contact management. Features an emergency alert workflow using geolocation, server-side countdown logic, and email notifications to notify trusted contacts during emergencies.",
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
      "/projects/safepulse-1.jpg", // TODO: replace with actual screenshot
      "/projects/safepulse-2.jpg", // TODO: replace with actual screenshot
    ],
    modalContent: {
      introduction: "A full-stack personal safety application designed to provide peace of mind through emergency preparedness and rapid response capabilities.",
      problemStatement: "In emergency situations, every second counts. Traditional methods of contacting help can be slow and unreliable, especially when someone is in distress.",
      contribution: "Built the complete full-stack architecture including secure JWT-based authentication, real-time geolocation tracking, server-side emergency countdown logic, and automated email notification system using the Resend API.",
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
      "AI-Powered Placement Preparation Platform that organizes interview questions across multiple technical and non-technical domains. Features a resume analysis and job-description matching system that evaluates candidate profiles against relevant skills and keywords to provide personalized feedback.",
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
      "/projects/prepforge-1.jpg", // TODO: replace with actual screenshot
      "/projects/prepforge-2.jpg", // TODO: replace with actual screenshot
    ],
    modalContent: {
      introduction: "An AI-powered platform designed to help students and job seekers prepare effectively for technical interviews and placement processes.",
      problemStatement: "Job seekers often struggle to organize their interview preparation effectively and lack personalized feedback on their readiness for specific roles.",
      contribution: "Developed the full-stack application with React.js frontend, Node.js backend, and integrated AI/ML capabilities for resume analysis and skill matching against job descriptions.",
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
    title: "VerifAura AI",
    description:
      "An AI-based document forgery detection system using computer vision and deep learning to analyze documents and identify potential manipulations. Built with Flask and integrated with a trained CNN model for automated forgery detection and prediction.",
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
        detail: "Real-time forgery detection system",
      },
    ],
    screenshots: [
      "/projects/verifaura-1.jpg", // TODO: replace with actual screenshot
      "/projects/verifaura-2.jpg", // TODO: replace with actual screenshot
    ],
    modalContent: {
      introduction: "An AI-based document forgery detection system that leverages computer vision and deep learning to identify potential document manipulations.",
      problemStatement: "Document forgery poses significant security risks in various sectors. Manual verification is time-consuming and prone to human error.",
      contribution: "Built the complete Flask-based web application, integrated OpenCV for document preprocessing, trained and deployed a CNN model for forgery detection, and implemented multi-format document support using PyMuPDF.",
      features: [
        "Computer vision-based document analysis using OpenCV",
        "Trained CNN model for deep learning-based forgery prediction",
        "Multi-format document support (PDF, images) via PyMuPDF",
        "Real-time automated detection system",
        "Flask web application for easy document upload and analysis",
        "Confidence scoring for forgery predictions",
      ],
      challenges: "Technical challenges and solutions coming soon",
      results: "Quantitative results and impact metrics coming soon",
    },
  },
];
