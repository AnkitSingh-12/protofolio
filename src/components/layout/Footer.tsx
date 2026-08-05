'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Eye, Download, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { AnalyticsService } from '@/services/AnalyticsService';
import { CandidateService } from '@/services/CandidateService';

export const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [istTime, setIstTime] = useState('');
  const [stats, setStats] = useState({ totalInteractions: 42, resumeDownloads: 8 });
  const [liveViewers, setLiveViewers] = useState(3);
  const profile = CandidateService.getProfile();
  const initials = profile.fullName.split(' ').map((n) => n[0]).join('');

  useEffect(() => {
    setMounted(true);
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
    const clockTimer = setInterval(updateClock, 1000);

    // Initial visitor stats
    const initialStats = AnalyticsService.getVisitorStats();
    setStats(initialStats);

    // Live viewers count (simulated LinkedIn-like active visitors)
    setLiveViewers(Math.floor(Math.random() * 5) + 3); // 3 to 7 initial
    const viewersTimer = setInterval(() => {
      setLiveViewers((prev) => {
        const delta = Math.random() > 0.55 ? 1 : -1;
        const next = prev + delta;
        return next >= 2 && next <= 9 ? next : prev;
      });
    }, 4500);

    // Live Visitor Interactions increment (simulate incoming views)
    const interactionTimer = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        totalInteractions: prev.totalInteractions + (Math.random() > 0.6 ? 1 : 0),
      }));
    }, 15000);

    return () => {
      clearInterval(clockTimer);
      clearInterval(viewersTimer);
      clearInterval(interactionTimer);
    };
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
                {mounted ? istTime : '11:30:00 AM'}
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
                <div className="flex items-center gap-1.5 font-sans">
                  <span className="text-cyber-cyan font-mono font-bold">{stats.totalInteractions}</span>
                  <span className="text-[9px] text-cyber-emerald font-semibold bg-cyber-emerald/10 px-1 py-0.5 rounded flex items-center">▲ +14%</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Download className="w-3.5 h-3.5 text-cyber-emerald" /> Resume Downloads
                </span>
                <div className="flex items-center gap-1.5 font-sans">
                  <span className="text-cyber-emerald font-mono font-bold">{stats.resumeDownloads}</span>
                  <span className="text-[9px] text-cyber-emerald font-semibold bg-cyber-emerald/10 px-1 py-0.5 rounded flex items-center">▲ +25%</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald"></span>
                  </span>
                  Active Viewers (Live)
                </span>
                <span className="text-cyber-emerald font-bold">{mounted ? `${liveViewers} online` : '3 online'}</span>
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

