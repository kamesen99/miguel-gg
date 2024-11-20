/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // This is valid for static exports
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      type: 'asset/resource', // Modern replacement for file-loader
    });
    return config;
  },
};

module.exports = nextConfig;
