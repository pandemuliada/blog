const jdown = require('jdown')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  env: {
    SITE_NAME: "Pande Muliada",
    SITE_SHORT_DESCRIPTION: "Pande Muliada personal blog about programming",
  },
  exportTrailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/posts': { page: '/posts' },
    }

    const content = await jdown('posts') // get all markdown files in posts directory
    
    Object.entries(content).forEach(([filename, fileContent]) => {
      paths[`/posts/${fileContent.slug}`] = { page: `/posts/[slug]`, query: { 
          slug: fileContent.slug,
        } 
      }
    })

    return paths
  }
})