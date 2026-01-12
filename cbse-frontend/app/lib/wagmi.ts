'use client';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { mainnet, sepolia, mantle, mantleSepoliaTestnet } from 'wagmi/chains';

// Configure chains - Mantle mainnet and testnet + Ethereum for compatibility
export const config = getDefaultConfig({
  appName: 'VeriPro',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '00000000000000000000000000000000',
  chains: [mantle, mantleSepoliaTestnet, mainnet, sepolia],
  transports: {
    [mantle.id]: http(),
    [mantleSepoliaTestnet.id]: http(),
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
});
