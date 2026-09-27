'use client';

import React, { useState, useEffect } from 'react';
import { Search, Mic, Settings, Briefcase, Menu, X } from 'lucide-react';
import { useCMS } from '@/context/CmsContext';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenVoice: () => void;
  onOpenAdminCms: () => void;
}


export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenVoice,
  onOpenAdminCms,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { editMode, state } = useCMS();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const initials = state.candidate.fullName.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-cyber-dark/95 border-b border-cyber-border py-3 shadow-glass' : 'bg-transparent py-4'
        }`}
        style={scrolled ? { WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)' } : undefined}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyber-cyan via-cyber-indigo to-cyber-emerald p-[2px] shadow-neon-cyan transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-cyber-dark rounded-[10px] flex items-center justify-center font-display font-bold text-cyber-cyan text-lg">
                {initials}
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyber-cyan">
                {state.candidate.fullName}
              </span>
              <span className="block text-[9px] text-cyber-emerald font-mono tracking-wider">
                {state.candidate.title}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-5 text-xs font-bold text-slate-300">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-cyber-cyan transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-2.5">

            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-lg bg-cyber-surface/80 border border-cyber-border text-slate-400 hover:text-white hover:border-cyber-cyan transition-all"
              title="Search Palette (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-cyber-cyan" />
            </button>

            <button
              onClick={onOpenVoice}
              className="p-2 rounded-lg bg-cyber-surface/80 border border-cyber-border text-slate-400 hover:text-cyber-emerald hover:border-cyber-emerald transition-all"
              title="Voice Commands"
            >
              <Mic className="w-4 h-4" />
            </button>

            {/* CMS Drawer — only visible when owner is logged in */}
            {editMode && (
              <button
                onClick={onOpenAdminCms}
                className="p-2 rounded-lg bg-cyber-indigo/20 border border-cyber-indigo text-cyber-indigo hover:opacity-80 transition-all"
                title="Master CMS Drawer"
              >
                <Settings className="w-4 h-4" />
              </button>
            )}

            <a
              href="#recruiter"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-emerald text-cyber-dark font-bold text-xs shadow-neon-cyan hover:opacity-95 transition-opacity"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Recruiter</span>
            </a>
          </div>

          {/* Mobile */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-cyber-surface border border-cyber-border text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-cyber-dark/95 backdrop-blur-xl border-b border-cyber-border px-4 pt-4 pb-6 space-y-3 font-bold">
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pb-3 border-b border-cyber-border">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-cyber-cyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-around pt-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenVoice(); }}
                className="flex items-center gap-1 text-xs text-cyber-emerald"
              >
                <Mic className="w-4 h-4" /> Voice
              </button>
              {editMode && (
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenAdminCms(); }}
                  className="flex items-center gap-1 text-xs text-cyber-indigo"
                >
                  <Settings className="w-4 h-4" /> CMS
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
