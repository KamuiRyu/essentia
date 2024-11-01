import type { NextConfig } from "next";
const path = require('path');

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@fonts': path.resolve(__dirname, 'src/fonts'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@core-api': path.resolve(__dirname, 'src/core-api')
    };
    return config;
  }
};

export default nextConfig;
