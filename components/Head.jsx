import NextHead from 'next/head'

const Head = (props) => {
  const { title, description, url, type, ogImage } = props

  return (<NextHead>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta property="og:url" content={url || ''}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:type" content={type || 'website'}/>
      {ogImage && <meta property="og:image" content={ogImage}/>}
  </NextHead>)
}

export default Head