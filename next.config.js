module.exports = {
  webpack5: false,
  reactStrictMode: true,
  generateBuildId: () => 'build',
  async rewrites() {
    return [
        {
            source: '/(c|C)(h|H)(a|A)(r|R)(t|T)',
            destination: '/Chart',
        }
    ]
  },
}
