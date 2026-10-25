"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { experience } from "~/data/experience";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "~/lib/motion";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Experience" subtitle="My professional journey" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative space-y-8"
        >
          {/* Glowing timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] timeline-line" />

          {experience.map((exp) => (
            <motion.div key={exp.id} variants={staggerItem} className="relative pl-10">
              {/* Timeline dot */}
              <div className="absolute left-0 top-3 h-[16px] w-[16px] rounded-full border-2 border-[#C5A568] bg-[#080808] timeline-dot" />

              <div className="glass card-hover rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-[#F5F1E8]">{exp.role}</h3>
                  <span className="text-sm text-[#858585] font-mono sm:text-right">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  {exp.website ? (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#C5A568] hover:text-[#DFC58F] transition-colors inline-flex items-center gap-1"
                    >
                      {exp.company}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-[#C5A568]">{exp.company}</p>
                  )}
                  <span className="text-[#505050]">•</span>
                  <span className="text-sm text-[#858585]">{exp.location}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-[#B8B5AE] leading-relaxed flex gap-2">
                      <span className="text-[#C5A568] shrink-0">&bull;</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full glass px-3 py-1 text-xs text-[#B8B5AE] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
