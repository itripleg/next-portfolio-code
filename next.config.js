module.exports = {
  // webpack5: false,
  reactStrictMode: true,
  generateBuildId: () => "build",
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "cdn.fakercloud.com",
      "lh3.googleusercontent.com",
    ],
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});
