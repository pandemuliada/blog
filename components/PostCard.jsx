import Link from 'next/link'

const styles = {
  title: 'font-medium text-darkest-gray mb-1',
}

const PostCard = ({ previewImage, title, description, href, as }) => {
  return (
    <>
      <Link href={href} as={as}>
        <a>
          <div className="bg-white mb-5 rounded cursor-pointer">
            {previewImage && (
              <img
                src={previewImage}
                alt={title}
                className="block w-full h-40 object-cover rounded-tr rounded-tl"
              />
            )}
            <div className="px-4 pb-2 pt-3">
              <h3 className={styles.title} style={{ fontSize: '1.3rem' }}>
                {title}
              </h3>
              <p className="text-gray mb-2">{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}

export default PostCard
