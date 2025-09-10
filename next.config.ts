// import { i18n } from './next-i18next.config'; // Not used in App Router

const nextConfig = {
  reactStrictMode: true,
  // Remove i18n for App Router compatibility
  // i18n, // This is not supported in App Router
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      {
        protocol: 'https',
        hostname: 'picnie-data.s3.ap-south-1.amazonaws.com',
      },
      { protocol: 'https', hostname: 'idpdefault.s3.ap-south-1.amazonaws.com' },
      { protocol: 'https', hostname: 'data-flair.training' },
      {
        protocol: 'https',
        hostname: 'instructor-academy.onlinecoursehost.com',
      },
      // Add this line for your Anima images
      { protocol: 'https', hostname: 'c.animaapp.com' },
      // External hosts used in images
      { protocol: 'https', hostname: 'www.cstad.edu.kh' },
      { protocol: 'https', hostname: 'lms-api.istad.co' },
      { protocol: 'https', hostname: 'scontent.fpnh10-1.fna.fbcdn.net' },
      // ✅ Add your new domain here
      { protocol: 'https', hostname: 'as1.ftcdn.net' },
    ],
  },

  // Add Turbopack configuration instead of webpack
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // Keep webpack config as fallback for non-Turbopack builds
  webpack: (config: { resolve: { alias: Record<string, unknown> } }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
