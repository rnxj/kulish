/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure special behavior for admin routes
  experimental: {
    // Enable server actions
    serverActions: true,
  },
};

export default nextConfig; 