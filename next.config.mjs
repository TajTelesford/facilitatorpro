/** @type {import('next').NextConfig} */

import withImages from 'next-images'

const nextConfig = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "webp", "svg"],
  webpack(config, options) {
    return config;
  },
});

export default nextConfig;
