import Link from 'next/link'

const styles = {
  title: 'text-xl font-medium text-gray-700 mb-2',
}

export default ({ title, description, href, as }) => {
  return (<div className='bg-gray-100 py-5 px-8 mb-5 rounded'>
    <h3 className={styles.title}>{title}</h3>
    <p className='truncate'>{description}</p>
    <Link href={href} as={as}>
      <a className='text-blue-400'>Read More</a>
    </Link>
  </div>)
}