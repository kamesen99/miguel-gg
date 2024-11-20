/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Keeps React strict mode enabled
  output: 'standalone', // Ensures compatibility for deployments
  images: {
    unoptimized: true, // Use this if you're exporting a static site
  },
  webpack: (config) => {
    // Add custom rule for handling .mp3 files
    config.module.rules.push({
      test: /\.mp3$/,
      type: 'asset/resource', // Modern replacement for 'file-loader'
    });
    return config;
  },
};

module.exports = nextConfig;
