/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dummyimage.com", "https://devicon.dev/"],
  },
  env: {
    USER_ID: process.env.USER_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    SERVICE_ID: process.env.SERVICE_ID,
  },
};

module.exports = nextConfig;
