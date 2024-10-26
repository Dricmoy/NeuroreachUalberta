/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['aceternity.com', 'source.unsplash.com', 'unsplash.com', 'images.unsplash.com'], // Add the external domain here
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
