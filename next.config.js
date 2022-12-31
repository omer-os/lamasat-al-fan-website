const nextTranslate = require("next-translate");

const nextConfig = {
  /* config options here */
};

module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
});
