/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ESTA LÍNEA ES CLAVE
  images: {
    unoptimized: true, // Necesario para export static
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
