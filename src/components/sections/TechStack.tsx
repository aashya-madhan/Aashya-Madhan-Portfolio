"use client";

import { motion } from "framer-motion";
import { skillCategories } from "~/data/skills";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { SkillBadge } from "~/components/ui/SkillBadge";
import { staggerContainer, staggerItem } from "~/lib/motion";

export function TechStack() {
  return (
    <AnimatedSection id="skills" className="scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies I work with to build amazing projects"
        />
        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="mb-4 text-xl font-bold text-[#F5F1E8]">
                {category.category}
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={staggerItem}>
                    <SkillBadge skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
