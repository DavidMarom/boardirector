/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['*.themealdb.com'],
        remotePatterns: [
            {
                hostname: '*.themealdb.com'
            },
        ],
    },
}

module.exports = nextConfig
