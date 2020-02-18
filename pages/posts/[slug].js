import Head from 'next/head'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const PostDetail = (props) => {
  const { 
    content, 
    data: frontmatter
  } = props
  
  return (<div>
    <Head>
      <title>{frontmatter.title}</title>
    </Head>

    <h2>{frontmatter.title}</h2>
    <ReactMarkdown source={content}/>
  </div>)
}

export default PostDetail

PostDetail.getInitialProps = async (context) => {
  const { slug } = context.query

  const content = await import(`../../posts/${slug}.md`)
  const data = matter(content.default)

  console.log(data.content)

  return {
    ...data // it returns { content: "string", data: { title, date, ... } }
  }
}