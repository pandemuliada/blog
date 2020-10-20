import Link from 'next/link'

export default () => {
  return (
    <nav
      className="fixed top-0 bottom-0 bg-white py-5 pl-10 pr-5 h-screen"
      style={{ width: 200 }}
    >
      <div className="flex items-center h-full">
        <div className="text-gray-700 flex flex-col">
          <Link href="/" as="/">
            <a className="text-gray">About</a>
          </Link>
          <Link href="/now" as="/now">
            <a className="text-gray mt-3">Now</a>
          </Link>
          <Link href="/posts" as="/posts">
            <a className="text-gray mt-3">Blog</a>
          </Link>
          <Link href="/tag/[tag]" as="/tag/technical">
            <a className="text-gray mt-3 ml-3">Technical</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
