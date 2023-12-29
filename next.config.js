/** @type {import('next').NextConfig} */

// module.exports = nextConfig

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/',
                destination: 'http://localhost:8080/api/'
            },
        ]
    },
}