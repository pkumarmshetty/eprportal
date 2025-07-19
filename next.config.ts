import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    typescript: {
        // This skips type-checking during the build
        ignoreBuildErrors: true,
    },
    eslint: {
        // Optional: skip ESLint errors during build too
        ignoreDuringBuilds: true,
    },
    /* config options here */
    async rewrites() {
        return [
            {
                source: '/admin/dashboard',
                destination: '/dashboard.html',
            },
            {
                source: '/01K0HM2J1H587XBJ5WP7MS3TRT',
                destination: '/01K0HM2J1H587XBJ5WP7MS3TRT.svg'
            }
        ];
    },
};

export default nextConfig;