"use client";

import { ArrowRight } from "lucide-react";
import type { Project } from "~/types/data";
import { cn } from "~/lib/cn";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  isSelected?: boolean;
  className?: string;
}

export function ProjectCard({ project, onClick, isSelected, className }: ProjectCardProps) {
  const isDisabled = project.disabled;

  return (
    <div
      onClick={isDisabled ? undefined : onClick}
      tabIndex={isDisabled ? -1 : 0}
      onKeyDown={(e) => {
        if (!isDisabled && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={cn(
        "group rounded-xl glass p-6 transition-all duration-300 flex flex-col h-full",
        isDisabled
          ? "opacity-40 cursor-not-allowed"
          : "cursor-pointer",
        !isDisabled && !isSelected && "hover:border-[#C5A568] hover:border-2 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.6),0_0_20px_rgba(197,165,104,0.25)]",
        !isDisabled && isSelected && "border-[#C5A568] border-2 -translate-y-1 shadow-[0_8px_24px_rgba(0,0,0,0.6),0_0_20px_rgba(197,165,104,0.25)]",
        !isDisabled && "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A568] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]",
        className
      )}
    >
      {/* Header with title */}
      <div className="mb-3">
        <div className="flex items-center gap-3">
          <h3
            className={cn(
              "text-xl font-semibold transition-colors",
              isDisabled
                ? "text-[#555]"
                : "text-[#F5F1E8] group-hover:text-white"
            )}
          >
            {project.title}
          </h3>
          {isDisabled && (
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[#555]">
              Soon
            </span>
          )}
        </div>
      </div>

      {/* Truncated description */}
      <p
        className={cn(
          "text-sm leading-relaxed line-clamp-3 mb-4",
          isDisabled ? "text-[#444]" : "text-[#B8B5AE]"
        )}
      >
        {project.description}
      </p>

      {/* Key technologies - show only first 3 */}
      <div className="mb-4 flex flex-wrap gap-2">
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-mono",
              isDisabled
                ? "border-[#202020] bg-[#0f0f0f] text-[#444]"
                : "border-[#2A2A2A] bg-[#181818] text-[#858585]"
            )}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Spacer to push "View Details" to bottom */}
      <div className="flex-grow" />

      {/* View Details CTA */}
      {!isDisabled && (
        <div className="flex items-center gap-1.5 text-sm text-[#C5A568] font-medium mt-auto">
          <span>View Details</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </div>
  );
}
