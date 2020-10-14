import matter from 'gray-matter'

export async function getAllPosts() {
  const context = require.context('../../_posts', false, /\.md$/)
  const posts = []
  for (const key of context.keys()) {
    const post = key.slice(2)
    const content = await import(`../../_posts/${post}`)
    const data = matter(content.default)
    posts.push({
      data: { ...data.data },
    })
  }

  // Sort descending by created at
  return posts.sort(
    (a, b) => new Date(b.data.createdAt) - new Date(a.data.createdAt)
  )
}

export async function getPostBySlug(slug) {
  const content = await import(`../../_posts/${slug}.md`)
  const data = matter(content.default)

  return {
    ...data, // returns { content: "html string", data: { title, date, ... } }
  }
}
