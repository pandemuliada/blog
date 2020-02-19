import Head from 'next/head'
import Link from 'next/link'
import matter from "gray-matter";

const Posts = (props) => {
  const { posts } = props

  return (<div>
    <Head>
      <title>All Post</title>
    </Head>

    <h1>All Post</h1>

    {posts.map(({ data }) => (
      <div key={data.slug}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <Link href={`/posts/${data.slug}`} as={`/posts/${data.slug}`}>
          <a>Detail</a>
        </Link>
      </div>
    ))}
  </div>)
}

Posts.getInitialProps = async () => {
  const importAll = (file) => file.keys().map(file);
  const files = importAll(require.context('../../posts', false, /\.md$/))

  const posts = files.map(file => matter(file.default))

  return {
    posts
  }
}

export default Posts