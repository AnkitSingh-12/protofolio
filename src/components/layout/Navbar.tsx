'use client';

import React, { useState, useEffect } from 'react';
import { Search, Mic, Settings, Briefcase, Menu, X, Edit3, Lock, LogOut, ShieldAlert, Key, Fingerprint, ArrowRight } from 'lucide-react';
import { useCMS } from '@/context/CmsContext';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenVoice: () => void;
  onOpenAdminCms: () => void;
}

const OWNER_EMAIL = 'ankit.as.singh12@gmail.com';
const OWNER_PASS = 'AnkitSingh@12';

function OwnerLoginModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!email || !pass) {
      setErr('Please fill in all security protocols.');
      return;
    }

    setIsScanning(true);
    setErr('');

    // Mock an AI Biometric / Terminal Decryption delay
    setTimeout(() => {
      if (email.trim().toLowerCase() === OWNER_EMAIL && pass === OWNER_PASS) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsScanning(false);
          onSuccess();
        }, 800);
      } else {
        setIsScanning(false);
        setErr('Decryption failed. Security credentials rejected.');
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-lg flex items-center justify-center p-4 transition-all">
      <div className="w-full max-w-md bg-cyber-dark/90 border border-cyber-cyan/30 rounded-2xl p-8 relative overflow-hidden shadow-2xl backdrop-blur-xl space-y-6 hover:border-cyber-cyan/50 transition-all duration-300">
        
        {/* Animated Scanning Matrix Line */}
        {isScanning && (
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-pulse top-0" />
        )}

        {/* Decorative Grid Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-cyan/40" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan/40" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan/40" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan/40" />

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-cyber-cyan" />
            <span className="font-mono text-xs font-bold text-slate-400 tracking-widest uppercase">
              COGNITIVE ROOT KEY
            </span>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Graphic Scan Area */}
        <div className="flex flex-col items-center justify-center py-4 space-y-2">
          <div className="relative w-20 h-20 flex items-center justify-center">
            {/* Pulsing Outer Rings */}
            <div className={`absolute inset-0 rounded-full border border-dashed transition-all duration-500 ${
              isSuccess 
                ? 'border-cyber-emerald animate-spin' 
                : isScanning 
                ? 'border-cyber-cyan animate-spin' 
                : 'border-cyber-indigo/40'
            }`} />
            
            <div className={`absolute w-16 h-16 rounded-full border flex items-center justify-center transition-all ${
              isSuccess 
                ? 'bg-cyber-emerald/10 border-cyber-emerald text-cyber-emerald animate-pulse' 
                : isScanning 
                ? 'bg-cyber-cyan/10 border-cyber-cyan text-cyber-cyan animate-pulse' 
                : 'bg-cyber-surface/60 border-cyber-border text-slate-400'
            }`}>
              {isSuccess ? (
                <Fingerprint className="w-8 h-8 text-cyber-emerald" />
              ) : (
                <Fingerprint className="w-8 h-8" />
              )}
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-lg font-bold font-display text-white tracking-wide">
              {isSuccess 
                ? 'Access Granted' 
                : isScanning 
                ? 'Decrypting Key...' 
                : 'Identity Authentication'}
            </h2>
            <p className="text-[10px] font-mono text-slate-400">
              {isSuccess 
                ? 'Neural connection established.' 
                : isScanning 
                ? 'Running credentials matching matrix.' 
                : 'SECURE NEURAL PORTAL — VERIFY KEY'}
            </p>
          </div>
        </div>

        {/* Inputs */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5 relative">
            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              Operator Sign-in ID
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                @
              </span>
              <input
                type="email"
                required
                disabled={isScanning || isSuccess}
                placeholder="ankit.as.singh12@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3.5 py-3 rounded-xl bg-cyber-dark border border-cyber-border text-white text-xs placeholder-slate-600 focus:outline-none focus:border-cyber-cyan font-mono transition-all disabled:opacity-50"
              />
            </div>
          </div>

          <div className="space-y-1.5 relative">
            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              Authorization Decryptor Passcode
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                <Key className="w-3.5 h-3.5" />
              </span>
              <input
                type="password"
                required
                disabled={isScanning || isSuccess}
                placeholder="••••••••••••"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="w-full pl-9 pr-3.5 py-3 rounded-xl bg-cyber-dark border border-cyber-border text-white text-xs placeholder-slate-600 focus:outline-none focus:border-cyber-cyan font-mono transition-all disabled:opacity-50"
              />
            </div>
          </div>

          {err && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/30 border border-red-500/30 text-red-400 text-xs font-mono">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>{err}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isScanning || isSuccess}
            className={`w-full py-3 px-4 rounded-xl font-bold font-mono text-xs transition-all duration-300 flex items-center justify-center gap-2 ${
              isSuccess 
                ? 'bg-cyber-emerald text-cyber-dark shadow-neon-emerald' 
                : isScanning 
                ? 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 animate-pulse' 
                : 'bg-gradient-to-r from-cyber-indigo to-cyber-cyan text-white hover:opacity-95 hover:shadow-neon-cyan active:scale-95'
            }`}
          >
            {isSuccess ? (
              <span>Decrypt Succeeded</span>
            ) : isScanning ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Establish Identity Link</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        {/* Footer Decorative Matrix Log */}
        <div className="pt-2 border-t border-cyber-border/40 flex justify-between text-[8px] font-mono text-slate-500">
          <span>PORT: 3000 / SECURE SSL</span>
          <span>SYSTEM STATUS: STABLE</span>
        </div>

      </div>
    </div>
  );
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenVoice,
  onOpenAdminCms,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { editMode, setEditMode, state } = useCMS();

  const handleEditClick = () => {
    if (editMode) {
      setEditMode(false);
    } else {
      setLoginModalOpen(true);
    }
  };

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
    { name: 'System Design', href: '#system-design' },
    { name: 'Blog', href: '#blog' },
    { name: 'Resume', href: '#resume' },
    { name: 'Recruiter', href: '#recruiter' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {loginModalOpen && (
        <OwnerLoginModal
          onClose={() => setLoginModalOpen(false)}
          onSuccess={() => { setEditMode(true); setLoginModalOpen(false); }}
        />
      )}

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
          <nav className="hidden xl:flex items-center gap-5 text-xs font-medium text-slate-300">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-cyber-cyan transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Edit Mode Toggle */}
            <button
              onClick={handleEditClick}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all ${
                editMode
                  ? 'bg-cyber-indigo/20 border-cyber-indigo text-cyber-cyan shadow-neon-indigo'
                  : 'bg-cyber-surface border-cyber-border text-slate-400 hover:text-white'
              }`}
              title="Toggle Owner Edit Mode"
            >
              {editMode ? <LogOut className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
              <span>{editMode ? 'Exit Edit' : 'Owner Login'}</span>
            </button>

            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyber-surface/80 border border-cyber-border text-slate-400 hover:text-white hover:border-cyber-cyan transition-all text-xs font-mono"
              title="Search Palette (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-cyber-cyan" />
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700">Ctrl+K</kbd>
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
              onClick={handleEditClick}
              className={`p-2 rounded-lg border text-xs ${
                editMode ? 'bg-cyber-indigo/20 border-cyber-indigo text-cyber-cyan' : 'bg-cyber-surface border-cyber-border text-slate-400'
              }`}
            >
              {editMode ? <LogOut className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
            </button>
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
          <div className="xl:hidden bg-cyber-dark/95 backdrop-blur-xl border-b border-cyber-border px-4 pt-4 pb-6 space-y-3 font-medium">
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
