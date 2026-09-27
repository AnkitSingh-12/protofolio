import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ankit Singh - AI Portfolio',
    short_name: 'Ankit AI Portfolio',
    description: 'Production AI portfolio website for Ankit Singh (AI / Generative AI Engineer)',
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

