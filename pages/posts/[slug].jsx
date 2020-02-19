import Head from 'next/head'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const PostDetail = (props) => {
  const { 
    content, 
    data
  } = props
  
  return (<div>
    <Head>
      <title>{data.title}</title>
    </Head>

    <h2>{data.title}</h2>
    <ReactMarkdown source={content}/>
  </div>)
}

export default PostDetail

PostDetail.getInitialProps = async (context) => {
  const { slug } = context.query

  const content = await import(`../../posts/${slug}.md`)
  const data = matter(content.default)

  return {
    ...data // it returns { content: "string", data: { title, date, ... } }
  }
}