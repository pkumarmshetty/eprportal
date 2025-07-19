import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    /* config options here */
    async rewrites() {
        return [
            {
                source: '/admin/dashboard',
                destination: '/dashboard.html',
            },
        ];
    },
};

export default nextConfig;