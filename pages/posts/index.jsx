import Head from 'next/head'
import Link from 'next/link'
import matter from "gray-matter";

const styles = {
  title: 'text-xl font-medium text-gray-700 mb-2',
}

const Posts = (props) => {
  const { posts } = props

  return (<div>
    <Head>
      <title>All Post</title>
    </Head>
    <div className='w-10/12 mx-auto md:w-1/4'>
      <section className='text-center mt-5 mb-8'>
        <h1 className='text-4xl text-gray-800'>All Post</h1>
      </section>

      <article>
        {posts.map(({ data }) => (
          <div className='bg-gray-100 py-5 px-8 mb-5 rounded' key={data.slug}>
            <h3 className={styles.title}>{data.title}</h3>
            <p className='truncate'>{data.description}</p>
            <Link href={`/posts/${data.slug}`} as={`/posts/${data.slug}`}>
              <a className='text-blue-400'>Read More</a>
            </Link>
          </div>
        ))}
      </article>
    </div>

  </div>)
}

Posts.getInitialProps = async () => {
  const importAll = (file) => file.keys().map(file);
  const files = importAll(require.context('../../posts', true, /\.md$/))

  const posts = files.map(file => matter(file.default))

  return {
    posts
  }
}

export default Posts