import { getAllPosts } from '../api'
import Layout from '../../layouts'
import PostCard from '../../components/PostCard'
import Heading from '../../components/Heading'

const Posts = (props) => {
  const { posts } = props

  return (
    <>
      <Layout title="Tulisan" ogTitle="Tulisan" container>
        <div className="pt-20 md:pt-24">
          <section className="mb-12">
            <Heading className="text-lg font-semibold">Semua Tulisan</Heading>
          </section>

          <section>
            {posts.map(({ data }) => (
              <article key={data.slug}>
                <PostCard
                  title={data.title}
                  description={data.description}
                  date={data.createdAt}
                  href={`/posts/${data.slug}`}
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
