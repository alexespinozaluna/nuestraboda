/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nuestraboda",
  assetPrefix: "/nuestraboda/",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
