import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Konfiguracja dla lepszego SEO i URL
  trailingSlash: false,
  generateEtags: false,
  
  // Redirects dla lepszego SEO i URL
  async redirects() {
    return [
      // Redirect z www na bez www (jeśli używasz własnej domeny)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.jerzymachowski.pl',
          },
        ],
        destination: 'https://jerzymachowski.pl/:path*',
        permanent: true,
      },
    ];
  },
  
  // Headers dla lepszej wydajności i SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
