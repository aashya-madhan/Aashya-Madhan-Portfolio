/* eslint-disable @next/next/no-img-element */
import { cn } from "~/lib/cn";
import type { Skill } from "~/types/data";

interface SkillBadgeProps {
  skill: Skill;
  className?: string;
}

export function SkillBadge({ skill, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-xl glass px-4 py-2.5 transition-all hover:border-[#C5A568]",
        className
      )}
    >
      <img
        src={skill.icon}
        alt=""
        width={20}
        height={20}
        className="shrink-0"
        loading="lazy"
      />
      <span className="text-sm font-medium text-[#F5F1E8]">{skill.name}</span>
    </div>
  );
}
