import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '',
        port: '',
        pathname: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
