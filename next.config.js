/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      loader: 'file-loader',
    })
    return config
  }
}

module.exports = nextConfig
