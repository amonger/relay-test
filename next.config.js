/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    relay: {
      src: "./src",
      language: "typescript",
      artifactDirectory: "./__generated__",
    },
  },
};

module.exports = nextConfig;
