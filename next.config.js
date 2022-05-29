module.exports = {
  // webpack5: false,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  generateBuildId: () => "build",
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "cdn.fakercloud.com",
      "lh3.googleusercontent.com",
      "cloudflare-ipfs.com",
      "loremflickr.com",
    ],
  },
};
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({});
