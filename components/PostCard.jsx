import Link from 'next/link'
import { formatDate } from '../utils'

const styles = {
  title: 'font-medium text-darkest-gray mb-1',
}

const PostCard = ({ previewImage, title, description, href, date, as }) => {
  return (
    <>
      <Link href={href} as={as}>
        <a className="block mb-8">
          <div className="bg-white mb-5 rounded cursor-pointer">
            {previewImage && (
              <img
                src={previewImage}
                alt={title}
                className="block w-full h-40 object-cover rounded-tr rounded-tl"
              />
            )}
            <div>
              <span className="font-light text-gray" style={{ fontSize: 13 }}>
                {formatDate(date)}
              </span>
              <h3 className={styles.title} style={{ fontSize: '1.3rem' }}>
                {title}
              </h3>
              <p className="text-gray mb-2 italic">{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}

export default PostCard
