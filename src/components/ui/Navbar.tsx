"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "~/data/navigation";
import { personalInfo } from "~/data/personal";
import { useActiveSection } from "~/hooks/useActiveSection";
import { cn } from "~/lib/cn";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const sectionIds = navItems.map((item) => item.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[850px]">
      <div className="rounded-2xl bg-[#141414] backdrop-blur-xl border border-[#2A2A2A] px-4 py-3 md:px-6">
        <div className="flex items-center justify-between">
          <Link href={isHome ? "#hero" : "/"} className="text-lg font-extrabold text-white">
            {personalInfo.name.split(" ")[0]}
            <span className="text-[#C5A568]">.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = isHome
                ? activeSection === item.href.replace("#", "")
                : item.href === "#blog" && pathname.startsWith("/blog");
              return (
                <Link
                  key={item.href}
                  href={isHome ? item.href : `/${item.href}`}
                  className={cn(
                    "relative px-3 py-1.5 text-sm font-medium rounded-xl transition-colors",
                    isActive
                      ? "text-white"
                      : "text-[#858585] hover:text-[#B8B5AE]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl bg-[#C5A568]/8 border border-[#403522]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm font-medium rounded-xl text-[#C5A568] hover:bg-[#C5A568]/8 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#858585] hover:text-[#C5A568] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 rounded-2xl bg-[#141414] backdrop-blur-xl border border-[#2A2A2A] p-4"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = isHome
                  ? activeSection === item.href.replace("#", "")
                  : item.href === "#blog" && pathname.startsWith("/blog");
                return (
                  <Link
                    key={item.href}
                    href={isHome ? item.href : `/${item.href}`}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-bold transition-all",
                      isActive
                        ? "text-white bg-[#C5A568]/8 border border-[#403522]"
                        : "text-[#858585] hover:text-white hover:bg-[#1a1a1a]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-bold transition-all text-[#C5A568] hover:bg-[#C5A568]/8"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
