/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable server components features that aren't compatible with static export
  experimental: {
    appDir: true,
  },
};

export default nextConfig;

