import NextHead from 'next/head'

const Head = (props) => {
  const {
    title,
    description,
    url,
    type,
    ogImage,
    ogTitle,
    ogDescription,
  } = props

  return (
    <NextHead>
      <title>{title || process.env.SITE_NAME}</title>
      <meta name="site_name" content={process.env.SITE_NAME} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
        rel="stylesheet"
      />

      <meta property="og:url" content={url || ''} />
      <meta
        property="og:title"
        content={`${ogTitle && ogTitle + ' • '}${process.env.SITE_NAME}`}
      />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={type || 'website'} />

      <meta name="twitter:site" content={url || ''} />
      <meta name="twitter:card" content="summary_large_image" />
      {ogImage && (
        <>
          <meta name="twitter:image" content={ogImage} />

          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}
    </NextHead>
  )
}

export default Head
