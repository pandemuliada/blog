module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  env: {
    SITE_TITLE: "Next Markdown Blog",
    SITE_SHORT_DESCRIPTION: "A simple static blog created with nextjs & markdown",
  }
}