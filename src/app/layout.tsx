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
  title: 'Ankit Singh | AI Engineer & Data Analyst',
  description: 'Production-grade developer portfolio website for Ankit Singh (B.Tech CSE AI & ML, Chandigarh Engineering College, AI Engineer at LBM Solution). Built with Next.js 15 & client-side AI tools.',
  keywords: [
    'Ankit Singh',
    'AI Engineer',
    'Data Analyst',
    'Chandigarh Engineering College',
    'FastAPI Python',
    'WorksBuddy OCR',
    'RAG Q&A System',
    'Machine Learning',
  ],
  authors: [{ name: 'Ankit Singh' }],
  openGraph: {
    title: 'Ankit Singh | AI Engineer & Data Analyst Portfolio',
    description: 'Production-grade AI portfolio featuring WorksBuddy OCR, RAG System, and supervised ML models.',
    type: 'website',
    url: 'https://ankit-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit Singh | AI Engineer & Data Analyst',
    description: 'Explore WorksBuddy OCR, RAG Q&A System, and machine learning projects.',
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
