"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe2 } from "lucide-react";
import { projects } from "~/data/projects";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { ProjectCard } from "~/components/ui/ProjectCard";
import { ProjectModal } from "~/components/ui/ProjectModal";
import { staggerContainer, staggerItem } from "~/lib/motion";
import type { Project } from "~/types/data";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <AnimatedSection id="projects" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="lux-section-intro">
          <div>
            <p className="section-kicker">02 — Selected work</p>
            <h2 className="lux-section-title">Projects<span>.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#8e887d]">A selection of projects across personal safety, placement preparation and document integrity.</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.article key={project.id} variants={staggerItem} className="lux-project-shell">
              <div className="lux-project-topline">
                <span>0{index + 1} / 03</span>
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code`} className="lux-project-icon" onClick={(event) => event.stopPropagation()}>
                      <Github size={15} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live site`} className="lux-project-icon" onClick={(event) => event.stopPropagation()}>
                      <Globe2 size={15} />
                    </a>
                  )}
                </div>
              </div>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
                isSelected={selectedProject?.id === project.id}
                className="lux-project-card"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </AnimatedSection>
  );
}
