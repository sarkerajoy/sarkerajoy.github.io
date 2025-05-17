/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',       // static export
  trailingSlash: true,    // routing fix for GitHub Pages
  // NO basePath here!
}

export default nextConfig;
