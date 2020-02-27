import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const styles = {
  title: 'text-xl font-medium text-gray-700 mb-2',
  code: 'inline-block bg-gray-200 px-2 rounded text-gray-700'
}

const Home = () => {
  return (<>
    <Layout title="Home" useContainer>
      <section className='text-center mt-5 mb-8'>
        <h1 className='text-4xl text-gray-800'>Next Blog</h1>
        <p className='mt-1 mb-3'>Simple static markdown blog site, created with NextJS</p>
      </section>

      <section className='bg-gray-100 py-5 px-8 mb-5 rounded'>
        <h3 className={styles.title}>How to create new blog post ?</h3>
        <p>Go to <code className={styles.code}>posts</code> directory on this project and create new file with <code className={styles.code}>.md</code> extension</p>
      </section>
    
      <div className='text-center mt-3'>
        <Link href="/posts" as="/posts">
          <a className='bg-blue-100 text-blue-500 px-4 py-2 rounded'>See all post</a>
        </Link>
      </div>
    </Layout>
  </>)
}

export default Home
