import ReactMarkdown from 'react-markdown'
import author from '../../settings/author'
import { readingTime, formatDate, removeChar } from '../../utils'
import { getAllPosts, getPostBySlug } from '../api'
import Layout from '@layouts/index'
import {
  Heading,
  Link,
  Code,
  BlockCode,
  Paragraph,
} from '@components/Markdown/index'

const styles = {
  title: 'text-xl md:text-5xl font-medium text-darkest-gray text-center',
}

const PostDetail = (props) => {
  const { content, data } = props

  return (
    <>
      <Layout
        container
        title={data.title}
        ogTitle={data.title}
        description={data.description}
        url={`/posts/${data.slug}`}
        type="article"
        ogImage={data.heroImage}
      >
        <section className="w-full mx-auto md:pt-16">
          {data.heroImage && (
            <div className="w-full">
              <img src={data.heroImage} alt={data.title} className="w-full" />
            </div>
          )}
          <div className="text-darker-gray italic mt-2 mb-8 text-center w-10/12 mx-auto md:w-full">
            <h2 className={styles.title}>{data.title}</h2>
            <span className="text-gray">
              {formatDate(data.createdAt)} • {readingTime(content)} menit
            </span>
          </div>
        </section>

        <article className="w-10/12 mx-auto md:container">
          <ReactMarkdown
            escapeHtml={false}
            source={content}
            parserOptions={{ commonmark: true }}
            renderers={{
              heading: Heading,
              code: BlockCode,
              inlineCode: Code,
              link: Link,
              paragraph: Paragraph,
            }}
          />
        </article>

        <div className="mt-10 p-10" style={{ backgroundColor: '#f5f5f5' }}>
          <p className="font-medium" style={{ fontSize: 18 }}>
            Terima kasih sudah membaca.
          </p>
          <p className="italic">
            Jika kamu menikmati tulisan ini dan merasa tulisan ini bermanfaat,
            feel free to share it.
          </p>
        </div>

        <div className="my-8 w-10/12 mx-auto md:container">
          {data.categories?.map((category, index) => (
            <span key={`${category}_${index}`}>
              <Link href={`/category/${category}`} as={`/category/${category}`}>
                <a
                  style={{ backgroundColor: '#f5f5f5', fontSize: 14 }}
                  className="inline-block no-underline text-gray px-3 py-2 mr-3 cursor-pointer capitalize"
                >
                  {removeChar(category, '-')}
                </a>
              </Link>
            </span>
          ))}
        </div>

        {/* <div className="mb-8 w-10/12 mx-auto md:container">
          <hr className="my-6" />
          <span className="text-gray-600">Ditulis oleh</span>
          <h3 className="text-2xl font-bold mb-2 text-gray-700">
            {author.name}
          </h3>
          <p>{author.bio}</p>
          <div className="flex items-center">
            {author.accounts?.map((account, index) => (
              <div
                key={index + account.name}
                className="mr-3"
                style={{ width: 28, height: 28 }}
              >
                <a href={account.url} className="cursor-pointer">
                  <picture className="w-full">
                    <source srcSet={account.logo[0]} alt={account.name} />
                    <img
                      src={account.logo[1]}
                      alt={account.name}
                      className="w-full rounded-full"
                    />
                  </picture>
                </a>
              </div>
            ))}
          </div>
        </div> */}
      </Layout>
    </>
  )
}

export async function getStaticProps(context) {
  const post = await getPostBySlug(context.params.slug)
  const data = post.data
  const content = post.content
  return {
    props: { data, content },
  }
}

export async function getStaticPaths() {
  let posts = await getAllPosts()

  const paths = posts.map((post) => `/posts/${post.data.slug}`)

  return {
    paths,
    fallback: false,
  }
}

export default PostDetail
