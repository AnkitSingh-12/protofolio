import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { CmsProvider } from '@/context/CmsContext';
import { AchievementProvider } from '@/context/AchievementContext';
import { I18nProvider } from '@/context/I18nContext';
import { AuroraBackground } from '@/components/shared/AuroraBackground';
import { LenisScroll } from '@/components/shared/LenisScroll';
import { ShellLayout } from '@/components/layout/ShellLayout';
import candidateData from '@/knowledge-base/candidate.json';


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Ankit Singh | AI / Generative AI Engineer',
  description: 'Production portfolio of Ankit Singh - AI / Generative AI Engineer specializing in Agentic AI (LangGraph, CrewAI, MCP), RAG pipelines, real-time voice architectures, and document intelligence systems.',
  keywords: [
    'Ankit Singh',
    'AI Engineer',
    'Generative AI',
    'Agentic AI',
    'LangGraph',
    'CrewAI',
    'MCP',
    'RAG',
    'FastAPI',
    'Python',
    'Chandigarh Engineering College',
    'WorksBuddy',
  ],
  authors: [{ name: 'Ankit Singh' }],
  openGraph: {
    title: 'Ankit Singh | AI / Generative AI Engineer Portfolio',
    description: 'Explore Autonomous AI Leads Enrichment Platform, Retrieval-Augmented Q&A System, and Real-Time Voice Agent systems.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ankit-portfolio-ai.netlify.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit Singh | AI / Generative AI Engineer',
    description: 'Explore Autonomous AI Leads Enrichment Platform, Retrieval-Augmented Q&A System, and Real-Time Voice Agent systems.',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: candidateData.fullName,
    jobTitle: candidateData.title,
    alumniOf: 'Chandigarh Engineering College',
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'FastAPI',
      'Python',
      'React',
      'Next.js',
      'Data Analysis',
    ],
    email: candidateData.email,
    sameAs: [
      candidateData.github,
      candidateData.linkedin,
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-cyber-dark text-slate-100 antialiased selection:bg-cyber-cyan selection:text-black">
        <CmsProvider>
          <AchievementProvider>
            <I18nProvider>
              <LenisScroll>
                <AuroraBackground>
                  <ShellLayout>{children}</ShellLayout>
                </AuroraBackground>
              </LenisScroll>
            </I18nProvider>
          </AchievementProvider>
        </CmsProvider>
      </body>
    </html>
  );
}
