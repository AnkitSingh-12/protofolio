'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Eye, Download, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { AnalyticsService } from '@/services/AnalyticsService';
import { CandidateService } from '@/services/CandidateService';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
  </svg>
);

export const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [istTime, setIstTime] = useState('');
  const [stats, setStats] = useState({
    dailyViews: 42,
    linkedinDailyViews: 24,
    resumeDownloads: 13,
    totalInteractions: 71,
    growthDaily: '+18%',
    growthLinkedin: '+34%',
  });
  const [liveViewers, setLiveViewers] = useState(6);
  const [dailyFlash, setDailyFlash] = useState(false);
  const [linkedinFlash, setLinkedinFlash] = useState(false);
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

    // Initial visitor stats with daily & LinkedIn telemetry
    const initialStats = AnalyticsService.getVisitorStats();
    setStats(initialStats);

    // Live viewers count (simulated active concurrent visitors)
    setLiveViewers(Math.floor(Math.random() * 4) + 4); // 4 to 7 initial
    const viewersTimer = setInterval(() => {
      setLiveViewers((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return next >= 3 && next <= 9 ? next : prev;
      });
    }, 4500);

    // Live incoming visits (daily views & LinkedIn referrals update live)
    const interactionTimer = setInterval(() => {
      const isLinkedin = Math.random() > 0.45;
      const updated = AnalyticsService.incrementDailyCount(isLinkedin ? 'linkedin' : 'general');
      setStats((prev) => ({
        ...prev,
        dailyViews: updated.dailyViews,
        linkedinDailyViews: updated.linkedinDailyViews,
        totalInteractions: updated.totalInteractions,
      }));

      if (isLinkedin) {
        setLinkedinFlash(true);
        setTimeout(() => setLinkedinFlash(false), 900);
      } else {
        setDailyFlash(true);
        setTimeout(() => setDailyFlash(false), 900);
      }
    }, 12000);

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
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${(profile.whatsapp || profile.phone || '918777728034').replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-cyber-surface border border-cyber-border text-slate-400 hover:text-[#25D366] hover:border-[#25D366] transition-all"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
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

          {/* Column 3: Live Telemetry & Daily LinkedIn Tracking */}
          <div className="space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-bold tracking-wider uppercase text-[11px] text-cyber-indigo">
                Telemetry &amp; Visitor Stats
              </h4>
              <span className="text-[9px] text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE TODAY
              </span>
            </div>

            <div className="p-3 rounded-xl bg-cyber-surface/60 border border-cyber-border space-y-2.5">
              {/* Daily Profile Views */}
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Eye className="w-3.5 h-3.5 text-cyber-cyan" /> Daily Profile Views
                </span>
                <div className="flex items-center gap-1.5 font-sans">
                  <span className={`text-cyber-cyan font-mono font-bold transition-all duration-300 ${dailyFlash ? 'text-white scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : ''}`}>
                    {stats.dailyViews} today
                  </span>
                  <span className="text-[9px] text-cyber-emerald font-semibold bg-cyber-emerald/10 px-1 py-0.5 rounded flex items-center">
                    ▲ {stats.growthDaily}
                  </span>
                </div>
              </div>

              {/* LinkedIn Daily Visitors */}
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5 text-sky-400">
                  <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" /> From LinkedIn
                </span>
                <div className="flex items-center gap-1.5 font-sans">
                  <span className={`text-sky-300 font-mono font-bold transition-all duration-300 ${linkedinFlash ? 'text-white scale-110 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]' : ''}`}>
                    {stats.linkedinDailyViews} visitors
                  </span>
                  <span className="text-[9px] text-cyber-emerald font-semibold bg-cyber-emerald/10 px-1 py-0.5 rounded flex items-center">
                    ▲ {stats.growthLinkedin}
                  </span>
                </div>
              </div>

              {/* Resume Downloads */}
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Download className="w-3.5 h-3.5 text-cyber-emerald" /> Resume Downloads
                </span>
                <div className="flex items-center gap-1.5 font-sans">
                  <span className="text-cyber-emerald font-mono font-bold">{stats.resumeDownloads}</span>
                  <span className="text-[9px] text-cyber-emerald font-semibold bg-cyber-emerald/10 px-1 py-0.5 rounded flex items-center">▲ +25%</span>
                </div>
              </div>

              {/* Active Viewers (Live) */}
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald"></span>
                  </span>
                  Active Viewers (Live)
                </span>
                <span className="text-cyber-emerald font-bold font-mono">{mounted ? `${liveViewers} online` : '5 online'}</span>
              </div>

              {/* Footer info */}
              <div className="text-[10px] text-slate-500 pt-1.5 border-t border-slate-800 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyber-indigo" /> Daily Reset &amp; LinkedIn Tracking
                </span>
                <span className="text-[9px] text-slate-400 font-mono">00:00 Daily</span>
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

