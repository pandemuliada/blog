import Link from 'next/link'

export default () => {
  return (
    <nav className="bg-white shadow py-5 mb-10">
      <div className="w-10/12 mx-auto md:w-900">
        <div className="flex items-center text-gray-700">
          <Link href="/" as="/">
            <a className="font-bold italic text-xl">pandemuliada</a>
          </Link>
          <div className="overflow-y-auto ml-auto">
            <Link href="/posts" as="/posts">
              <a className="hover:text-blue-500">Posts</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
