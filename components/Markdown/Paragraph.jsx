import Text from '../Text'

const MarkdownParagraph = (props) => {
  return (
    <Text {...props} className="mb-4">
      {props.children}
    </Text>
  )
}

export default MarkdownParagraph
