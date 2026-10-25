"use client";

import { cn } from "~/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg cursor-pointer";

  const variants = {
    primary:
      "bg-[#C5A568] text-[#080808] hover:bg-[#DFC58F] shadow-lg shadow-[#C5A568]/25 hover:shadow-[#DFC58F]/30 font-semibold",
    secondary:
      "glass text-[#F5F1E8] hover:bg-[#C5A568]/5 hover:border-[#C5A568]",
    outline:
      "border border-[#2A2A2A] text-[#B8B5AE] hover:text-[#C5A568] hover:border-[#C5A568] hover:bg-[#181818]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    // Check if it's a mailto link or external link
    const isMailto = href.startsWith('mailto:');
    const isExternal = href.startsWith('http');
    
    return (
      <a 
        href={href} 
        className={classes}
        {...(isExternal && !isMailto ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
