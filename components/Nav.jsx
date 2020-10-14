import Link from 'next/link'

export default () => {
  return (
    <nav className="fixed bg-white py-5 pl-16 pr-5 w-48 h-screen">
      <div className="flex items-center h-full">
        <div className="text-gray-700 flex flex-col">
          <Link href="/" as="/">
            <a className="text-gray">About</a>
          </Link>
          <Link href="/tag/[tag]" as="/tag/technical">
            <a className="text-gray mt-3 ml-3">Technical</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
