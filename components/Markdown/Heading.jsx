import Heading from '../Heading'

const MarkdownHeading = (props) => {
  if (props.level == 1)
    return (
      <Heading as="h1" {...props} className="mt-6 mb-4 font-medium text-xl">
        {props.children}
      </Heading>
    )
  if (props.level == 2)
    return (
      <Heading as="h2" {...props} className="mt-6 mb-4 font-medium text-lg">
        {props.children}
      </Heading>
    )
  if (props.level == 3)
    return (
      <Heading as="h3" {...props} className="mt-6 mb-2 font-medium text-md">
        {props.children}
      </Heading>
    )
}

export default MarkdownHeading
