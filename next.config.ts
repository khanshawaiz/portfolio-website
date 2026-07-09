import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['localhost', '*.local', '192.168.*.*', '191.168.*.*'],
  /* config options here */
};

export default nextConfig;