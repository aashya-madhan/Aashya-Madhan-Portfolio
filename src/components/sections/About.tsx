"use client";

import { Wrench } from "lucide-react";
import { personalInfo } from "~/data/personal";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";

const stats = [
  { value: "30%", label: "Less manual data entry" },
  { value: "15%", label: "Faster page loads" },
  { value: "5+", label: "Responsive interfaces built" },
  { value: "91%", label: "Prediction accuracy (IEEE)" },
];

export function About() {
  return (
    <AnimatedSection id="about" className="scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="About Me" subtitle="Curious by nature. Careful in craft." />
        <div className="space-y-8">
          {/* Bio */}
          <div className="max-w-3xl mx-auto">
            {personalInfo.bio.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-[#B8B5AE] leading-relaxed text-lg text-left [&:not(:first-child)]:mt-5">
                {paragraph}
              </p>
            ))}
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
