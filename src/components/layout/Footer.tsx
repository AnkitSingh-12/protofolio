'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Eye, Download, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { AnalyticsService } from '@/services/AnalyticsService';
import { CandidateService } from '@/services/CandidateService';

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState('');
  const [stats, setStats] = useState({ totalInteractions: 42, resumeDownloads: 8 });
  const profile = CandidateService.getProfile();
  const initials = profile.fullName.split(' ').map((n) => n[0]).join('');

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Date().toLocaleTimeString('en-US', options));
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    setStats(AnalyticsService.getVisitorStats());

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-cyber-dark/90 border-t border-cyber-border pt-12 pb-8 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-cyber-border/60">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyber-cyan/20 border border-cyber-cyan flex items-center justify-center font-display font-bold text-cyber-cyan text-sm">
                {initials}
              </div>
              <span className="font-display font-bold text-white text-lg">
                {profile.fullName}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {profile.bio}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-cyber-surface border border-cyber-border text-slate-400 hover:text-white hover:border-cyber-cyan transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-cyber-surface border border-cyber-border text-slate-400 hover:text-white hover:border-cyber-cyan transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-lg bg-cyber-surface border border-cyber-border text-slate-400 hover:text-white hover:border-cyber-cyan transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: IST Bengaluru Clock */}
          <div className="space-y-2 font-mono text-xs">
            <h4 className="text-white font-bold tracking-wider uppercase text-[11px] text-cyber-cyan">
              Location & Timezone
            </h4>
            <div className="p-3 rounded-xl bg-cyber-surface/60 border border-cyber-border space-y-1.5">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-cyber-emerald animate-pulse" />
                <span>Local Time</span>
              </div>
              <div className="text-lg font-bold text-cyber-emerald pl-5">
                {istTime || '11:30:00 AM'}
              </div>
              <p className="text-[10px] text-slate-500 pl-5">{profile.location}</p>
            </div>
          </div>

          {/* Column 3: Live Telemetry */}
          <div className="space-y-2 font-mono text-xs">
            <h4 className="text-white font-bold tracking-wider uppercase text-[11px] text-cyber-indigo">
              Telemetry & Visitor Stats
            </h4>
            <div className="p-3 rounded-xl bg-cyber-surface/60 border border-cyber-border space-y-2">
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Eye className="w-3.5 h-3.5 text-cyber-cyan" /> Visitor Interactions
                </span>
                <span className="text-cyber-cyan font-bold">{stats.totalInteractions}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Download className="w-3.5 h-3.5 text-cyber-emerald" /> Resume Downloads
                </span>
                <span className="text-cyber-emerald font-bold">{stats.resumeDownloads}</span>
              </div>
              <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-800 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyber-indigo" /> 100% Client-Side Local Analytics
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {profile.fullName}. Engineered with Next.js 15, React 19 & Framer Motion.</p>
          <p className="flex items-center gap-1">
            Built for Top Engineering Teams
          </p>
        </div>
      </div>
    </footer>
  );
};

