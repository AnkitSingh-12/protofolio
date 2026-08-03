'use client';

import React from 'react';
import { User, BookOpen, GraduationCap, MapPin, Globe } from 'lucide-react';
import { CandidateService } from '@/services/CandidateService';

export const AboutModule: React.FC = () => {
  const profile = CandidateService.getProfile();
  const education = CandidateService.getEducation();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Engineering Story & Educational Journey
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            B.Tech CSE (AI & ML) graduate from Chandigarh Engineering College with hands-on experience building production document-intelligence systems and machine learning models.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Story Narrative */}
          <div className="lg:col-span-2 space-y-6 bg-cyber-surface/70 border border-cyber-border rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyber-cyan" />
              <span>Personal Vision & Mission</span>
            </h3>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Profile Image Column */}
              <div className="w-full md:w-auto shrink-0 mx-auto md:mx-0">
                <div className="w-40 h-52 rounded-2xl bg-gradient-to-tr from-cyber-cyan via-cyber-indigo to-cyber-emerald p-[2px] shadow-neon-cyan relative group overflow-hidden">
                  <div className="w-full h-full bg-cyber-dark rounded-[14px] overflow-hidden relative">
                    <img 
                      src="/profile.jpg" 
                      alt="Ankit Singh profile photo"
                      className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-2">
                      <span className="text-[10px] text-cyber-cyan font-mono tracking-wider">AI Engineer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio Text Column */}
              <div className="flex-1 space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  I am <strong className="text-cyber-cyan font-bold">Ankit Singh</strong>, a Computer Science & Engineering (AI & ML) graduate from <strong className="text-cyber-cyan font-bold">Chandigarh Engineering College, Punjab</strong>. I bring a strong foundation in Artificial Intelligence, Machine Learning, and scalable software pipelines.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  During my professional role as an AI Engineer at <strong className="text-cyber-cyan font-bold">LBM Solution Pvt. Ltd.</strong>, I built local document intelligence pipelines utilizing FastAPI, PaddleOCR, and local LLMs (Llama 3.2, Phi-3). I also completed a Data Analyst internship at <strong className="text-cyber-cyan font-bold">JSPIDERS Pvt. Ltd.</strong>, conducting exploratory data analysis on student datasets to isolate academic performance drivers.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  My mission is to contribute to high-impact product engineering and AI research teams at global software leaders like <strong className="text-cyber-cyan font-bold">Google, Microsoft, OpenAI, Meta, Nvidia, and Amazon</strong>, while building reliable, privacy-first AI solutions with strong engineering discipline.
                </p>
              </div>
            </div>

            {/* Spoken Languages Bar */}
            <div className="pt-4 border-t border-cyber-border space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-emerald flex items-center gap-2">
                <Globe className="w-4 h-4" /> Spoken Languages
              </h4>
              <div className="grid grid-cols-3 gap-3">
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
    </section>
  );
};

