/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND: "http://192.168.1.1:5000",
  },
};

module.exports = nextConfig;
