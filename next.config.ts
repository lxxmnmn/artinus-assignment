import { PROTOCOL } from '@/constants/common';

import type { NextConfig } from 'next';

if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
  throw new Error('Environment Variable is not set.');
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: PROTOCOL.HTTPS,
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOST ?? '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp'],
  },
};

export default nextConfig;
