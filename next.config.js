module.exports = {
  // webpack5: false,
  reactStrictMode: true,
  generateBuildId: () => "build",
  async rewrites() {
    return [
      {
        source: "/(c|C)(h|H)(a|A)(r|R)(t|T)",
        destination: "/Chart",
      },
    ];
  },
  async reroutes() {
    return [
      {
        source: "/",
        destination: "/Portfolio",
      },
    ];
  },
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "cdn.fakercloud.com",
    ],
  },
};
