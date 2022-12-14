/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.optimization.providedExports = true;

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./"),
      "@components": path.resolve(__dirname, "./components"),
      "@lib": path.resolve(__dirname, "./lib"),
      "@styles": path.resolve(__dirname, "./styles"),
    };

    return config;
  },
};

module.exports = nextConfig;
