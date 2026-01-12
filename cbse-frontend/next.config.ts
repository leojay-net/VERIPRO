import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/verify',
        destination: 'http://127.0.0.1:3001/verify',
      },
    ];
  },
};

export default nextConfig;
