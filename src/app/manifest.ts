import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ankit Singh - AI Portfolio',
    short_name: 'Ankit AI Portfolio',
    description: 'Production-grade AI-powered portfolio website for Ankit Singh (AI Engineer & Data Analyst)',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0F19',
    theme_color: '#00F0FF',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

