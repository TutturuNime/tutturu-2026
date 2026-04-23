 
const nextConfig = {
  webpack5: true,
  optimizeFonts: true,
  compress: true,  
  reactStrictMode: true,
  cacheComponents: true,
  images: {
    unoptimized: true,
  },

    ppr: true, // or 'incremental'
    rscPrefetch: true, // Add this line
}

module.exports = nextConfig
