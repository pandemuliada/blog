import dynamic from 'next/dynamic'
import matter from 'gray-matter'
import { importAll } from '../../utils'

const Layout = dynamic(() => import('../../components/Layout'))
const PostCard = dynamic(() => import('../../components/PostCard'))

const Posts = props => {
  const { posts } = props

  return (
    <>
      <Layout title="Posts" ogTitle="Posts" useContainer>
        <section className="text-center mb-6">
          <h1 className="text-4xl font-medium text-gray-800">
            Semua Postingan
          </h1>
        </section>

        <section>
          {posts.map(({ data }) => (
            <article key={data.slug}>
              <PostCard
                previewImage={data.heroImage}
                title={data.title}
                description={data.description}
                href="/posts/[slug]"
                as={`/posts/${data.slug}`}
              />
            </article>
          ))}
        </section>
      </Layout>
    </>
  )
}

Posts.getInitialProps = async () => {
  const files = importAll(require.context('../../posts', true, /\.md$/))

  const posts = files.map(file => matter(file.default))

  return {
    posts,
  }
}

export default Posts
