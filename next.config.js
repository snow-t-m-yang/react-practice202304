/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pokeapi.co/",
        port: "",
        pathname: "/api/v2/pokemon/",
      },
    ],
  },
};

module.exports = nextConfig;
