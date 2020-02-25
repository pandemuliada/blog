import NextLink from 'next/link'

export default (props) => <NextLink href={props.href} as={props.href}><a className='underline hover:text-blue-500'>{props.children}</a></NextLink>
