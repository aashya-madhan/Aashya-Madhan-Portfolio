import { cn } from "~/lib/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16 text-center", className)}>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F5F1E8]">
        {title}
        <span className="text-[#C5A568]">.</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[#B8B5AE]">{subtitle}</p>
      )}
    </div>
  );
}
