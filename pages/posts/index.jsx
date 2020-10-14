import { getAllPosts } from '../api'
import Layout from '@layouts/index'
import PostCard from '@components/PostCard'

const Posts = (props) => {
  const { posts } = props

  console.log(posts)

  return (
    <>
      <Layout title="Posts" ogTitle="Posts" container>
        <div className="pt-20 md:pt-24" style={{ backgroundColor: '#fefefe' }}>
          <section className="text-center mb-10">
            <h1 className="text-lg text-darkest-gray">Semua</h1>
          </section>

          <section>
            {posts.map(({ data }) => (
              <article key={data.slug}>
                <PostCard
                  title={data.title}
                  description={data.description}
                  href="/posts/[slug]"
                  as={`/posts/${data.slug}`}
                />
              </article>
            ))}
          </section>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts,
    },
  }
}

export default Posts
