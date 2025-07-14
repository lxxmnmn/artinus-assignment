import { PROTOCOL } from '@/constants/common';

import type { NextConfig } from 'next';

const hostname = process.env.NEXT_PUBLIC_IMAGE_HOST ?? '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: PROTOCOL.HTTPS,
        hostname,
        pathname: '/**',
      },
    ],
    formats: ['image/webp'],
  },
};

export default nextConfig;
