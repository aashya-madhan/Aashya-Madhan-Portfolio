"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { personalInfo } from "~/data/personal";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";

export function Contact() {
  return (
    <AnimatedSection id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Get in Touch"
          subtitle="Let's create something amazing together"
        />
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="glass rounded-2xl p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#C5A568]/8 flex items-center justify-center mx-auto mb-4 border border-[#403522]">
              <Mail className="w-7 h-7 text-[#C5A568]" />
            </div>
            <h3 className="text-xl font-bold text-[#F5F1E8] mb-3">Email Me</h3>
            <p className="text-sm text-[#858585] mb-5 overflow-wrap-anywhere">{personalInfo.email}</p>
            <a
              href={`mailto:${personalInfo.email}?subject=Portfolio%20Inquiry&body=Hi%20Aashya,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0ABest%20regards`}
              className="inline-flex items-center gap-2 text-sm text-[#C5A568] hover:text-[#DFC58F] font-semibold transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </a>
          </div>

          {/* Location Card */}
          <div className="glass rounded-2xl p-8 text-center h-full flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-[#C5A568]/8 flex items-center justify-center mx-auto mb-4 border border-[#403522]">
              <MapPin className="w-7 h-7 text-[#C5A568]" />
            </div>
            <h3 className="text-xl font-bold text-[#F5F1E8] mb-3">Location</h3>
            <p className="text-sm text-[#858585]">{personalInfo.location}</p>
            <p className="text-xs text-[#707070] mt-2">Available for remote work</p>
          </div>

          {/* Social Links Card */}
          <div className="glass rounded-2xl p-8 text-center h-full flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-[#C5A568]/8 flex items-center justify-center mx-auto mb-4 border border-[#403522]">
              <svg className="w-7 h-7 text-[#C5A568]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#F5F1E8] mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass px-4 py-2.5 rounded-xl text-sm text-[#B8B5AE] hover:text-[#C5A568] hover:border-[#403522] transition-all duration-300 font-medium cursor-pointer block"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
