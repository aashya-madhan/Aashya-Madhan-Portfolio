"use client";

import { FileText } from "lucide-react";
import { personalInfo } from "~/data/personal";
import { AnimatedSection } from "~/components/ui/AnimatedSection";

export function ResumeCTA() {
  return (
    <AnimatedSection className="text-center">
      <div className="mx-auto max-w-3xl rounded-2xl p-10 md:p-14 bg-[#181818] backdrop-blur-xl border border-[#2A2A2A] relative overflow-hidden">
        {/* Champagne gold accent line */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#C5A568] to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F1E8]">
            Want to know more<span className="text-[#C5A568]">?</span>
          </h2>
          <p className="mt-4 text-[#B8B5AE] text-lg">
            Download my resume for a detailed look at my experience, skills,
            and education.
          </p>
          <div className="mt-8">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#080808] rounded-lg bg-[#C5A568] hover:bg-[#DFC58F] transition-all duration-300 shadow-lg shadow-[#C5A568]/25 hover:shadow-[#DFC58F]/30"
            >
              <FileText size={18} />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
