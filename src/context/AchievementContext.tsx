'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export interface AchievementBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

const defaultBadges: AchievementBadge[] = [
  { id: 'cec-scholar', title: 'CEC Computer Science Scholar', description: 'B.Tech CSE (AI & ML) Graduate from Chandigarh Engineering College', icon: '🎓', unlocked: true },
  { id: 'lbm-ai-engineer', title: 'AI Engineering Professional', description: 'Built local WorksBuddy OCR document pipeline at LBM Solution', icon: '⚡', unlocked: true },
  { id: 'jspiders-analyst', title: 'Data Analytics Intern', description: 'Conducted student performance analysis at JSPIDERS', icon: '📊', unlocked: true },
  { id: 'rag-developer', title: 'RAG Pipeline Architect', description: 'Designed end-to-end semantic Q&A with agentic search fallback', icon: '🤖', unlocked: true },
  { id: 'client-ai-pioneer', title: 'Browser-Based AI Assistant Explorer', description: 'Explored 100% Client-Side AI Features (TF-IDF, Intent NLP)', icon: '🚀', unlocked: false },
];

interface AchievementContextType {
  badges: AchievementBadge[];
  unlockBadge: (id: string) => void;
}

const AchievementContext = createContext<AchievementContextType>({
  badges: defaultBadges,
  unlockBadge: () => { },
});

export const AchievementProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [badges, setBadges] = useState<AchievementBadge[]>(defaultBadges);

  const unlockBadge = (id: string) => {
    setBadges((prev) =>
      prev.map((b) => {
        if (b.id === id && !b.unlocked) {
          // Trigger confetti explosion
          try {
            confetti({ particleCount: 70, spread: 60, origin: { y: 0.8 } });
          } catch {
            // fallback
          }
          return { ...b, unlocked: true };
        }
        return b;
      })
    );
  };

  return (
    <AchievementContext.Provider value={{ badges, unlockBadge }}>
      {children}
    </AchievementContext.Provider>
  );
};

export const useAchievements = () => useContext(AchievementContext);
