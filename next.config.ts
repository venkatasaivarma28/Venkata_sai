import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/venkata_sai' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/venkata_sai' : '',
  trailingSlash: true,
};

export default nextConfig;
