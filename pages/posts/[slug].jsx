import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import { readingTime, formatDate } from '../../utils'
import author from '../../settings/author'

const Paragraph = ({ children }) => <p>{children}</p>

const Heading = (props) => {
  if (props.level == 1) return <h1 {...props} className='mt-6 mb-4 font-medium text-gray-800 text-5xl'>{props.children}</h1> 
  if (props.level == 2) return <h2 {...props} className='mt-6 mb-4 font-medium text-gray-800 text-4xl'>{props.children}</h2> 
  if (props.level == 3) return <h3 {...props} className='mt-6 mb-4 font-medium text-gray-800 text-2xl'>{props.children}</h3>
}

const BlockCode = (props) => {
  return (<pre className='bg-gray-200 p-4 overflow-y-auto my-6 text-gray-700'>
    <code>{props.value}</code>
  </pre>)
}

const InlineCode = (props) => <code className='bg-gray-200 px-1 text-gray-700'>{props.children}</code>

const Link = (props) => <a {...props} className='underline hover:text-blue-500'>{props.children}</a>

const styles = {
  title: 'text-4xl md:text-5xl font-medium text-gray-800 mb-0',
}

const PostDetail = (props) => {
  const { 
    content,
    data
  } = props

  return (<>
    <Layout 
      title={data.title}
      description={data.description}
      url={`/posts/${data.slug}`}
      type="article"
      ogImage={data.heroImage}
      useContainer>
    
      <section className='mt-5'>
        <h2 className={styles.title}>{data.title}</h2>
        <div className='text-gray-600 italic mb-5'>
          <span>{formatDate(data.createdAt)} - {readingTime(content) > 1 ? readingTime(content) + ' minutes' : readingTime(content) + ' minute' } read</span>
        </div>
        {data.heroImage && <img src={data.heroImage} alt={data.title} className='mb-5'/>}
      </section>

      <article>
        <ReactMarkdown 
          source={content}
          parserOptions={{ commonmark: true }}
          renderers={{
            paragraph: Paragraph,
            heading: Heading,
            code: BlockCode,
            inlineCode: InlineCode,
            link: Link
          }}
          />
      </article>

      {!!data.categories && <div className='mt-12'>
        {data.categories.map((category, index) => <span key={index} className='bg-gray-200 text-gray-700 py-2 px-3 mr-3 inline-block text-sm capitalize'>{category}</span>)}
      </div>}
      

      <div className='mb-8'>
        <hr className='my-6'/>
        <span className='text-gray-600'>Written by</span>
        <h3 className='text-2xl font-bold mb-2 text-gray-700'>{author.name}</h3>
        <p>{author.bio}</p>
      </div>
    </Layout>
  </>)
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