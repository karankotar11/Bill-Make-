/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"standalone",
    experimental: {
        serverActions: true, // Enable server actions if you're using them
      },
};

export default nextConfig;
