module.exports = {
  plugins: [
    'tailwindcss',
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelist: ['ul', 'ol', 'li'],
          },
        ]
      : undefined,
    'autoprefixer',
  ],
}
