'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useCMS } from '@/context/CmsContext';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
  </svg>
);

export const ContactModule: React.FC = () => {
  const { state } = useCMS();
  const { candidate } = state;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Get In Touch With {candidate.fullName.split(' ')[0]}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Available for full-time software engineering roles, technical internships, and AI research collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Direct Contact & Social Cards */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-cyber-surface/70 border border-cyber-border space-y-4 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white font-display">Direct Contact & Verified Profiles</h3>

              <a
                href={`mailto:${candidate.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-cyber-dark border border-cyber-border text-slate-200 hover:border-cyber-cyan transition-all group"
              >
                <div className="p-3 rounded-lg bg-cyber-cyan/10 text-cyber-cyan group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">Email Address</div>
                  <div className="text-sm font-mono font-bold text-white">{candidate.email}</div>
                </div>
              </a>

              <a
                href={`tel:${candidate.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-cyber-dark border border-cyber-border text-slate-200 hover:border-cyber-emerald transition-all group"
              >
                <div className="p-3 rounded-lg bg-cyber-emerald/10 text-cyber-emerald group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">Phone Number</div>
                  <div className="text-sm font-mono font-bold text-white">{candidate.phone}</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${(candidate.whatsapp || candidate.phone || '918777728034').replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-cyber-dark border border-cyber-border text-slate-200 hover:border-[#25D366] transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#25D366]/10 text-[#25D366] group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">WhatsApp</div>
                  <div className="text-sm font-mono font-bold text-white">
                    {candidate.whatsapp || candidate.phone}
                  </div>
                </div>
              </a>

              {/* Verified LinkedIn */}
              {candidate.linkedin && (
                <a
                  href={candidate.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-cyber-dark border border-cyber-border text-slate-200 hover:border-cyber-indigo transition-all group"
                >
                  <div className="p-3 rounded-lg bg-cyber-indigo/10 text-cyber-indigo group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">LinkedIn Profile</div>
                    <div className="text-sm font-mono font-bold text-white">
                      {candidate.linkedin.replace('https://', '').replace('www.', '')}
                    </div>
                  </div>
                </a>
              )}

              {/* Verified GitHub */}
              {candidate.github && (
                <a
                  href={candidate.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-cyber-dark border border-cyber-border text-slate-200 hover:border-cyber-cyan transition-all group"
                >
                  <div className="p-3 rounded-lg bg-cyber-cyan/10 text-cyber-cyan group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">GitHub Profile</div>
                    <div className="text-sm font-mono font-bold text-white">
                      {candidate.github.replace('https://', '').replace('www.', '')}
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>


          {/* Contact Form */}
          <div className="p-6 sm:p-8 rounded-2xl bg-cyber-surface/70 border border-cyber-border backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="space-y-1">
                <label className="text-slate-300">Your Full Name:</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Hiring Manager / Recruiter"
                  className="w-full p-3 rounded-xl bg-cyber-dark border border-cyber-border text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300">Email Address:</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. recruiter@company.com"
                  className="w-full p-3 rounded-xl bg-cyber-dark border border-cyber-border text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300">Message / Inquiry:</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message regarding job opportunities or collaborations..."
                  className="w-full p-3 rounded-xl bg-cyber-dark border border-cyber-border text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-emerald text-cyber-dark font-bold text-xs shadow-neon-cyan hover:opacity-95 transition-opacity"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-cyber-emerald/20 border border-cyber-emerald/40 text-cyber-emerald text-center font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you! Your message has been received cleanly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
