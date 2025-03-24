import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['apod.nasa.gov', 'www.meteorshowers.org'],
  },
};

module.exports = nextConfig;

export default nextConfig;
