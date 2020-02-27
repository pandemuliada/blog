import dynamic from 'next/dynamic';
import matter from "gray-matter";
import { importAll } from '../../utils'
import Layout from '../../components/Layout'

const PostCard = dynamic(() => import('../../components/PostCard'))

const Posts = (props) => {
  const { posts } = props

  return (<>
    <Layout title="All Post" useContainer>
      <section className='text-center mt-5 mb-8'>
        <h1 className='text-4xl text-gray-800'>All Post</h1>
      </section>

      <section>
        {posts.map(({ data }) => (<article key={data.slug}>
          <PostCard
            title={data.title}
            description={data.description}
            href="/posts/[slug]" as={`/posts/${data.slug}`}/>
        </article>))}
      </section>
    </Layout>
  </>)
}

Posts.getInitialProps = async () => {
  const files = importAll(require.context('../../posts', true, /\.md$/))

  const posts = files.map(file => matter(file.default))

  return {
    posts
  }
}

export default Posts