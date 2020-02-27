import Link from 'next/link'
import dynamic from 'next/dynamic'
import matter from "gray-matter";
import { importAll } from '../utils'
import Layout from '../components/Layout'

const PostCard = dynamic(() => import('../components/PostCard'))

const styles = {
  title: 'text-2xl font-medium text-gray-700 mb-4',
  code: 'inline-block bg-gray-200 px-1 rounded text-gray-700'
}

const Home = ({ posts }) => {
  return (<>
    <Layout title="Beranda" useContainer>
      <section>
        <h1 className='text-4xl font-bold text-gray-800'>Halo semua ✋</h1>
        <p className='mt-4'>Selamat datang di blog pribadi saya. Saya <b>Pande Muliada</b>. Beginner Front End Developer dari Bali, Indonesia. Di blog ini saya akan membagikan hal-hal seputar programming dan mungkin curhatan serta pengalaman saya hehe ✌️</p>
        <p>Oiya, tulisan di blog ini juga ada di medium saya, <a className='text-blue-400 underline' href="https://medium.com/@pandemuliada">cekidot</a></p>
        <p>Blog ini dibuat menggunakan <code className={styles.code}>nextjs</code> <code className={styles.code}>markdown</code> dan <code className={styles.code}>netlify</code>. Bisa di cek repositorinya <a className='text-blue-400 underline' href="https://github.com/pandemuliada/Next-Static-Markdown-Blog">disini</a></p>
      </section>
      
      <hr className='my-6'/>

      <h3 className={styles.title}>Postingan Terbaru</h3>
      <section>
        {posts.map(({ data }) => (<article key={data.slug}>
          <PostCard
            previewImage={data.heroImage}
            title={data.title}
            description={data.description}
            href="/posts/[slug]" as={`/posts/${data.slug}`}/>
        </article>))}
      </section>
    
      <div className='text-center mt-10'>
        <Link href="/posts" as="/posts">
          <a className='bg-blue-100 text-blue-500 px-4 py-2 rounded'>Lihat semua postingan</a>
        </Link>
      </div>
    </Layout>
  </>)
}

Home.getInitialProps = async () => {
  const files = importAll(require.context('../posts', true, /\.md$/))

  const posts = files.slice(0, 3).map(file => matter(file.default))

  return {
    posts
  }
}

export default Home
