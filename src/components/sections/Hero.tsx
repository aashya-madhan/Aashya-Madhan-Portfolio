"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Sparkles, Award, Briefcase } from "lucide-react";
import { personalInfo } from "~/data/personal";
import { fadeInUp, staggerContainer } from "~/lib/motion";
import { GradientOrb } from "~/components/effects/GradientOrb";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-4 md:px-6 overflow-hidden"
    >
      {/* Mouse-tracking gradient orb */}
      <GradientOrb />

      {/* Bottom gradient glow */}
      <div className="absolute inset-x-0 bottom-0 h-[50vh] hero-warm-glow pointer-events-none z-[1]" />

      {/* Floating orbs - removed colored gradients */}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-8">
          <div className="gradient-border inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#181818]">
            <Sparkles className="w-4 h-4 text-[#C5A568]" />
            <span className="text-sm font-medium gradient-text">
              Available for Full-Time Opportunities
            </span>
          </div>
        </motion.div>

        {/* Name with gradient */}
        <motion.div variants={fadeInUp}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight mb-6">
            <span className="text-[#C5A568]">{personalInfo.name}</span>
          </h1>
          <p className="text-2xl md:text-3xl text-[#B8B5AE] font-semibold mb-4">
            Full Stack Developer
          </p>
          <div className="flex items-center justify-center gap-3 text-[#858585]">
            <Briefcase className="w-5 h-5" />
            <span>B.Tech CSE • SRM Institute</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="mt-8 text-lg md:text-xl text-[#B8B5AE] leading-relaxed max-w-3xl mx-auto"
        >
          Crafting scalable web applications with{" "}
          <span className="text-[#F5F1E8]">React.js</span>,{" "}
          <span className="text-[#F5F1E8]">Node.js</span>, and{" "}
          <span className="text-[#F5F1E8]">MongoDB</span>. 
          Published IEEE research achieving{" "}
          <span className="text-[#F5F1E8] text-xl">91% accuracy</span> in ML prediction.
        </motion.p>

        {/* Stats Grid */}
        <motion.div 
          variants={fadeInUp}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="glass card-hover rounded-2xl p-6 border-t border-t-[#C5A568]/30">
            <div className="text-4xl font-bold text-[#C5A568] mb-2">9.41</div>
            <div className="text-sm text-[#858585]">CGPA / 10</div>
          </div>
          <div className="glass card-hover rounded-2xl p-6 border-t border-t-[#C5A568]/30">
            <div className="text-4xl font-bold text-[#C5A568] mb-2">3+</div>
            <div className="text-sm text-[#858585]">Projects</div>
          </div>
          <div className="glass card-hover rounded-2xl p-6 border-t border-t-[#C5A568]/30">
            <div className="text-4xl font-bold text-[#C5A568] mb-2">2+</div>
            <div className="text-sm text-[#858585]">Internships</div>
          </div>
          <div className="glass card-hover rounded-2xl p-6 flex flex-col items-center justify-center border-t border-t-[#C5A568]/30">
            <Award className="w-8 h-8 text-[#C5A568] mb-2" />
            <div className="text-sm text-[#C5A568] font-semibold">IEEE</div>
            <div className="text-xs text-[#858585]">Publication</div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center gap-4">
          <a
            href={personalInfo.socials[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass card-hover p-4 rounded-xl transition-all duration-300 border border-[#2A2A2A] hover:border-[#C5A568]"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href={personalInfo.socials[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass card-hover p-4 rounded-xl transition-all duration-300 border border-[#2A2A2A] hover:border-[#C5A568]"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a
            href="#contact"
            className="glass card-hover px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-[#C5A568] border border-[#403522] hover:bg-[#C5A568]/8"
          >
            Let&apos;s Connect
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" aria-label="Scroll down" className="group">
          <ArrowDown
            size={20}
            className="text-[#858585] scroll-indicator group-hover:text-[#C5A568] transition-colors"
          />
        </a>
      </motion.div>
    </section>
  );
}
