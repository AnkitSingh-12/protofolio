'use client';

import React from 'react';
import { User, BookOpen, GraduationCap, MapPin, Globe, Eye, Download, ChevronDown, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { CandidateService } from '@/services/CandidateService';
import { AnalyticsService } from '@/services/AnalyticsService';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
  </svg>
);

export const AboutModule: React.FC = () => {
  const profile = CandidateService.getProfile();
  const education = CandidateService.getEducation();

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ========================================================================= */}
        {/* HERO / FEATURED ABOUT CARD (MATCHING USER'S REQUESTED DESIGN) */}
        {/* ========================================================================= */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#dcdde0] text-slate-900 p-6 sm:p-12 lg:p-14 border border-slate-300 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 relative z-10">
              {/* Large Bold Name */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-black tracking-tight font-display">
                {profile.fullName}
              </h1>

              {/* Highlighted Role & Experience Subtitle */}
              <div className="text-base sm:text-lg lg:text-xl text-black font-sans leading-relaxed relative">
                <span className="font-mono text-xl mr-2 font-bold">—</span>
                <span className="bg-[#fecaca] text-black font-extrabold px-2 py-0.5 rounded shadow-sm inline">
                  AI / Generative AI Engineer
                </span>{' '}
                at <span className="font-bold italic">WorksBuddy.Ai (LBM Solution)</span>, with experience across{' '}
                Agentic AI, Generative AI &amp; RAG, Real-Time Voice AI, and Document Intelligence.

                {/* Looping Hand-Drawn Arrow Doodle pointing to photo */}
                <div className="hidden sm:block absolute -right-6 -top-10 text-black pointer-events-none select-none">
                  <svg viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-14 text-black">
                    <path d="M48 12 C 38 4, 25 8, 30 22 C 36 32, 44 38, 14 46" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />
                    <path d="M22 39 L 12 47 L 19 55" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              </div>

              {/* Action Buttons Row with Scribble Accent */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <a
                    href="#resume"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-black text-white font-bold text-xs sm:text-sm tracking-wide hover:bg-neutral-800 transition-all rounded shadow-md active:scale-95 group"
                  >
                    <Eye className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    <span>View Resume</span>
                  </a>

                  <button
                    onClick={() => {
                      AnalyticsService.trackEvent('DOWNLOAD_RESUME', 'About Card Download');
                      window.print();
                    }}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-black text-white font-bold text-xs sm:text-sm tracking-wide hover:bg-neutral-800 transition-all rounded shadow-md active:scale-95 group"
                  >
                    <Download className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    <span>Download Resume</span>
                  </button>
                </div>

                {/* Scribble Stroke Accent */}
                <div className="pt-1 text-black select-none pointer-events-none">
                  <svg viewBox="0 0 140 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-7 text-black">
                    <path d="M5 24 L 35 10 L 65 20 L 95 6 L 125 18 L 138 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 28 L 44 14 L 74 22 L 104 8 L 130 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Scroll Down Indicator */}
              <div className="pt-2">
                <a
                  href="#about-details"
                  className="inline-flex items-center gap-2.5 text-xs font-bold text-slate-700 hover:text-black transition-colors group"
                >
                  <div className="w-7 h-7 rounded bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <span className="font-mono uppercase tracking-wider text-[11px]">Scroll Down</span>
                </a>
              </div>
            </div>

            {/* Right Photo & Social Icons Column */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end gap-4 sm:gap-6 relative">
              {/* Tilted Accent Diamond / Square */}
              <div className="absolute -top-4 left-6 sm:left-12 w-5 h-5 bg-black border-2 border-orange-500 rotate-12 shadow-md hidden sm:block" />

              {/* Photo Box with Offset Solid Black Frame */}
              <div className="relative group shrink-0">
                {/* Offset Black Border Box */}
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full border-[3px] sm:border-[4px] border-black rounded-sm pointer-events-none" />

                {/* Portrait Photo Container */}
                <div className="w-56 sm:w-72 md:w-80 h-72 sm:h-96 bg-slate-300 rounded-sm overflow-hidden shadow-xl relative z-10 border border-slate-300">
                  <img
                    src="/profile.jpg"
                    alt={profile.fullName}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Social Icons Column */}
              <div className="flex flex-col gap-2.5 shrink-0 z-10">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-[#555960] hover:bg-black text-white flex items-center justify-center transition-all shadow-md hover:scale-110"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-[#555960] hover:bg-black text-white flex items-center justify-center transition-all shadow-md hover:scale-110"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-[#555960] hover:bg-black text-white flex items-center justify-center transition-all shadow-md hover:scale-110"
                  title="Email Ankit"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${(profile.whatsapp || profile.phone || '918777728034').replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-[#555960] hover:bg-[#25D366] text-white flex items-center justify-center transition-all shadow-md hover:scale-110"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${profile.phone}`}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-[#555960] hover:bg-black text-white flex items-center justify-center transition-all shadow-md hover:scale-110"
                  title="Phone Contact"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* PREVIOUS DETAILED STORY & EDUCATIONAL CREDENTIALS (PRESERVED IN FULL) */}
        {/* ========================================================================= */}
        <div id="about-details" className="space-y-12 scroll-mt-24">
          {/* Section Sub-Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs">
              <User className="w-3.5 h-3.5" />
              <span>BACKGROUND &amp; VISION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Engineering Story &amp; Educational Journey
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              B.Tech in Computer Science &amp; Engineering graduate from Chandigarh Engineering College with hands-on experience developing AI applications, production document-intelligence systems, agentic workflows, and RAG pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Story Narrative */}
            <div className="lg:col-span-2 space-y-6 bg-cyber-surface/70 border border-cyber-border rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyber-cyan" />
                <span>Personal Vision &amp; Mission</span>
              </h3>
              
              <div className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  I am <strong className="text-cyber-cyan font-bold">Ankit Singh</strong>, an AI / Generative AI Engineer with a Bachelor of Technology in Computer Science &amp; Engineering from <strong className="text-cyber-cyan font-bold">Chandigarh Engineering College, Punjab</strong>. I bring practical experience developing end-to-end AI applications, RAG pipelines, agentic frameworks, and production document-intelligence systems.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  At <strong className="text-cyber-cyan font-bold">LBM Solution Pvt. Ltd. (WorksBuddy.Ai)</strong>, I develop MCP-based AI agents (Lio, Taro, Evox &amp; Inzo) for business process automation, architect real-time voice agents using LangGraph, Pipecat, LiveKit, Deepgram, and ElevenLabs with sub-2s latency, and ship local Document Intelligence pipelines via PaddleOCR and Ollama (Phi-3 / Llama 3.2). Previously, as a Data Analyst Intern at <strong className="text-cyber-cyan font-bold">JSPIDERS Pvt. Ltd.</strong>, I conducted exploratory data analysis on student performance datasets to isolate academic risk indicators and drivers of score variance.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  My mission is to contribute to high-impact product engineering and AI teams at global software leaders like <strong className="text-cyber-cyan font-bold">Google, Microsoft, OpenAI, Meta, Nvidia, and Amazon</strong>, building robust, privacy-first AI solutions with strong engineering discipline.
                </p>
              </div>

              {/* Spoken Languages Bar */}
              <div className="pt-4 border-t border-cyber-border space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-emerald flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Spoken Languages
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {profile.languages.map((lang) => (
                    <div key={lang.name} className="p-3 rounded-xl bg-cyber-dark border border-cyber-border text-center">
                      <div className="font-bold text-white text-sm">{lang.name}</div>
                      <div className="text-[10px] font-mono text-cyber-cyan">{lang.fluency}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Breakdown Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                <GraduationCap className="w-5 h-5 text-cyber-emerald" />
                <span>Academic Credentials</span>
              </h3>

              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 rounded-2xl bg-cyber-surface/60 border border-cyber-border space-y-2 hover:border-cyber-emerald/50 transition-all"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-cyber-emerald">
                    <span>{edu.duration}</span>
                    <span className="px-2 py-0.5 rounded bg-cyber-dark border border-cyber-emerald/30 font-bold">
                      {edu.grade}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm">{edu.degree}</h4>
                  <div className="text-xs text-slate-300 font-medium">{edu.institution}</div>
                  {edu.affiliation && <div className="text-[11px] text-slate-400">{edu.affiliation}</div>}
                  <div className="text-[10px] text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" /> {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
