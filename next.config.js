 
const nextConfig = {
  webpack5: true,
  optimizeFonts: true,
  compress: true,  
  reactStrictMode: true,
  cacheComponents: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    ppr: false, // ⛔ matikan
  },
}

module.exports = nextConfig
