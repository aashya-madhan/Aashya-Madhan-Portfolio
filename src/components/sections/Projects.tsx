"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "~/data/projects";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { ProjectCard } from "~/components/ui/ProjectCard";
import { ProjectModal } from "~/components/ui/ProjectModal";
import { staggerContainer, staggerItem } from "~/lib/motion";
import type { Project } from "~/types/data";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <AnimatedSection id="projects" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Projects" subtitle="A selection of my recent work" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
            >
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project)}
                isSelected={selectedProject?.id === project.id}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </AnimatedSection>
  );
}
