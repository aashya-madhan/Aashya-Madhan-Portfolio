"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "~/types/data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Body scroll lock - cleanup on project change AND on unmount
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Focus management on open
  useEffect(() => {
    if (project && modalRef.current) {
      modalRef.current.focus();
    }
  }, [project]);

  // Keyboard navigation - Escape to close and focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project || !modalRef.current) return;

      // Escape to close
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Focus trap - Tab and Shift+Tab
      if (e.key === "Tab") {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusableArray = Array.from(focusableElements) as HTMLElement[];
        
        if (focusableArray.length === 0) return;

        const firstElement = focusableArray[0];
        const lastElement = focusableArray[focusableArray.length - 1];

        if (e.shiftKey) {
          // Shift+Tab: if on first element, go to last
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: if on last element, go to first
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  // Backdrop click handler
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/85 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#181818] border border-[#2A2A2A] rounded-2xl"
          >
            {/* Close button - positioned absolutely, stays fixed at top-right corner */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-[#181818]/80 backdrop-blur-sm border border-[#2A2A2A] text-[#B8B5AE] hover:text-[#C5A568] hover:border-[#C5A568] transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              tabIndex={-1}
              className="outline-none overflow-y-auto max-h-[90vh] p-6 md:p-8"
            >
              {/* Project Title */}
              <h2
                id="modal-title"
                className="text-3xl md:text-4xl font-bold text-[#F5F1E8] mb-4"
              >
                {project.title}
              </h2>

              {/* Introduction */}
              {project.modalContent?.introduction && (
                <p className="text-lg text-[#B8B5AE] leading-relaxed mb-6">
                  {project.modalContent.introduction}
                </p>
              )}

              {/* Screenshots */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="mb-8 space-y-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-[#2A2A2A] bg-[#111111] overflow-hidden"
                    >
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Problem Statement */}
              {project.modalContent?.problemStatement &&
                !project.modalContent.problemStatement.toLowerCase().includes("coming soon") && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#F5F1E8] mb-3">
                      Problem Statement
                    </h3>
                    <p className="text-[#B8B5AE] leading-relaxed">
                      {project.modalContent.problemStatement}
                    </p>
                  </div>
                )}

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#F5F1E8] mb-3">
                  Overview
                </h3>
                <p className="text-[#B8B5AE] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Contribution */}
              {project.modalContent?.contribution && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#F5F1E8] mb-3">
                    My Contribution
                  </h3>
                  <p className="text-[#B8B5AE] leading-relaxed">
                    {project.modalContent.contribution}
                  </p>
                </div>
              )}

              {/* Features */}
              {project.modalContent?.features &&
                project.modalContent.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#F5F1E8] mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.modalContent.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex gap-3 text-[#B8B5AE] leading-relaxed"
                        >
                          <span className="text-[#C5A568] shrink-0">&bull;</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Technology Stack */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#F5F1E8] mb-3">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#2A2A2A] bg-[#111111] px-3 py-1.5 text-sm font-mono text-[#B8B5AE]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              {project.modalContent?.challenges &&
                !project.modalContent.challenges.toLowerCase().includes("coming soon") && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#F5F1E8] mb-3">
                      Challenges & Solutions
                    </h3>
                    <p className="text-[#B8B5AE] leading-relaxed">
                      {project.modalContent.challenges}
                    </p>
                  </div>
                )}

              {/* Results */}
              {project.modalContent?.results &&
                !project.modalContent.results.toLowerCase().includes("coming soon") && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#F5F1E8] mb-3">
                      Results & Impact
                    </h3>
                    <p className="text-[#B8B5AE] leading-relaxed">
                      {project.modalContent.results}
                    </p>
                  </div>
                )}

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-[#2A2A2A]">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111111] border border-[#2A2A2A] text-[#F5F1E8] hover:border-[#C5A568] hover:text-[#C5A568] transition-all font-medium"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C5A568] text-[#080808] hover:bg-[#DFC58F] transition-all font-semibold"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
