import NextLink from 'next/link'

export default (props) => <NextLink href={props.href} as={props.href}><a className='underline text-blue-400'>{props.children}</a></NextLink>
