import Link from 'next/link'

const styles = {
  title: 'text-xl font-medium text-gray-700 mb-1',
}

export default ({ previewImage, title, description, href, as }) => {
  return (<>
    <Link href={href} as={as}>
      <div className='bg-white mb-5 rounded cursor-pointer border border-gray-300 hover:shadow'>
        {previewImage && <img src={previewImage} alt={title} className='block w-full h-40 object-cover rounded-tr rounded-tl'/>}
        <div className='px-4 pb-2 pt-3'>
          <h3 className={styles.title}>{title}</h3>
          <p className='text-gray-600 mb-2'>{description}</p>
        </div>
      </div>
    </Link>
  </>)
}