"use client";

import { Wrench } from "lucide-react";
import { personalInfo } from "~/data/personal";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";

const stats = [
  { value: "9.41", label: "CGPA / 10" },
  { value: "3+", label: "Projects Built" },
  { value: "2+", label: "Internships" },
  { value: "IEEE", label: "Publication" },
];

export function About() {
  return (
    <AnimatedSection id="about" className="scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        <div className="space-y-8">
          {/* Bio */}
          <div className="max-w-3xl mx-auto">
            <p className="text-[#B8B5AE] leading-relaxed text-lg text-left">
              {personalInfo.bio}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass card-hover rounded-2xl p-6 text-center h-full"
              >
                <p className="text-3xl font-bold text-[#C5A568]">
                  {stat.value}
                </p>
                <p className="text-sm text-[#858585] mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
