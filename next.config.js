/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3t32hsnjxo7q6.cloudfront.net",
      },
    ],
  },
};

module.exports = nextConfig;
