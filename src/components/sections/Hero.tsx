"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles } from "lucide-react";
import { personalInfo } from "~/data/personal";
import { fadeInUp, staggerContainer } from "~/lib/motion";
import { HeroScene } from "~/components/effects/HeroScene";

const metrics = [
  { value: "9.41", label: "CGPA / 10" },
  { value: "3+", label: "Projects" },
  { value: "2+", label: "Internships" },
  { value: "IEEE", label: "Publication" },
];

export function Hero() {
  return (
    <section id="hero" className="lux-hero relative overflow-hidden scroll-mt-20">
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-one" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-two" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-3 px-5 pb-24 pt-28 md:grid-cols-[1.05fr_0.95fr] md:px-10 lg:px-16">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-20">
          <motion.div variants={fadeInUp} className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#8f774a]/35 bg-[#c5a568]/[0.07] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c5a568] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c5a568]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#d5c29b] sm:text-xs">Open to opportunities</span>
          </motion.div>

          <motion.p variants={fadeInUp} className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-[#9d8b68]">
            Portfolio · 2026
          </motion.p>
          <motion.h1 variants={fadeInUp} className="max-w-3xl text-[clamp(3.6rem,8vw,7.7rem)] font-medium leading-[0.91] tracking-[-0.075em] text-[#f5f0e5]">
            Aashya
            <span className="block font-serif italic font-normal tracking-[-0.065em] text-[#c5a568]">Madhan.</span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#aaa49a]">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c5a568]">Computer Science</span>
            <span className="hidden h-px w-8 bg-[#66563b] sm:block" />
            <span>B.Tech · SRM Institute of Science and Technology, Ramapuram</span>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-7 max-w-xl text-base leading-8 text-[#aaa69d] md:text-lg">
            {personalInfo.tagline}. Focused on full-stack development with <span className="text-[#eee5d2]">React.js</span>, <span className="text-[#eee5d2]">Node.js</span> and <span className="text-[#eee5d2]">MongoDB</span>, alongside research in machine learning.
          </motion.p>
          <motion.p variants={fadeInUp} className="mt-3 max-w-xl text-sm leading-7 text-[#827d73]">
            Co-authored an IEEE conference paper on a hybrid deep learning framework reporting 91% prediction accuracy.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="lux-primary-link">
              Explore selected work <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="lux-secondary-link">Get in touch</a>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="lux-icon-link" aria-label="Open resume">
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-3">
            {personalInfo.socials.map((social) => (
              <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="hero-social" aria-label={social.platform}>
                {social.platform === "GitHub" ? <Github size={17} /> : <Linkedin size={17} />}
              </a>
            ))}
            <span className="ml-2 h-px w-12 bg-[#55472f]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#777166]">Chennai, India</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative mx-auto flex w-full max-w-[570px] items-center justify-center md:ml-auto"
        >
          <HeroScene />
          <div className="hero-scene-caption hero-caption-top">
            <span>01 / 03</span><span>Selected dimensions</span>
          </div>
          <div className="hero-scene-caption hero-caption-bottom">
            <span>Curiosity</span><span className="h-px w-8 bg-[#806c48]" /><span>Craft</span><span className="h-px w-8 bg-[#806c48]" /><span>Code</span>
          </div>
          <div className="hero-orbit-note"><Sparkles size={13} /> Built with intention</div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="hero-metrics md:col-span-2">
          {metrics.map((metric, index) => (
            <div key={metric.label} className="hero-metric">
              <span className="font-serif text-3xl text-[#d0b477] md:text-4xl">{metric.value}</span>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[#777166]">{metric.label}</span>
              {index < metrics.length - 1 && <span className="hero-metric-divider" />}
            </div>
          ))}
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll to about section" className="hero-scroll-cue">
        <span>Scroll to explore</span><ArrowDown size={14} />
      </a>
      <div className="hero-side-index" aria-hidden="true">AM — 001</div>
    </section>
  );
}
