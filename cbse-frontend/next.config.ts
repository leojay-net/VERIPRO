import type { NextConfig } from "next";

// Coordinator URL - defaults to localhost for development
// Set COORDINATOR_URL in Vercel environment variables for production
const COORDINATOR_URL = process.env.COORDINATOR_URL || 'http://127.0.0.1:3001';

const nextConfig: NextConfig = {
  async rewrites() {
    // Only add rewrite if coordinator URL is set and not localhost in production
    if (process.env.NODE_ENV === 'production' && COORDINATOR_URL.includes('127.0.0.1')) {
      // In production without a real coordinator, don't rewrite (will 404)
      return [];
    }
    
    return [
      {
        source: '/api/verify',
        destination: `${COORDINATOR_URL}/verify`,
      },
    ];
  },

  // Webpack configuration to handle problematic packages
  webpack: (config, { isServer }) => {
    // Handle pino and related packages for client-side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        child_process: false,
        worker_threads: false,
      };
    }

    // Ignore problematic imports
    config.resolve.alias = {
      ...config.resolve.alias,
      'pino-pretty': false,
    };

    return config;
  },

  // Transpile packages that need it
  transpilePackages: [
    '@walletconnect/universal-provider',
    '@walletconnect/ethereum-provider',
  ],
};

export default nextConfig;
