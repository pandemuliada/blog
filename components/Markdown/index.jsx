import ReactMarkdownParser from 'react-markdown'
import Link from './Link'
import Code from './Code'
import Heading from './Heading'
import BlockCode from './BlockCode'
import Paragraph from './Paragraph'
import { ListItem } from '../List'
import BlockQuote from '../BlockQuote'
import Divider from '../Divider'

const ReactMarkdown = (props) => {
  return (
    <ReactMarkdownParser
      {...props}
      source={props.source}
      escapeHtml={false}
      parserOptions={{ commonmark: true }}
      renderers={{
        heading: Heading,
        code: BlockCode,
        inlineCode: Code,
        link: Link,
        paragraph: Paragraph,
        listItem: ListItem,
        blockquote: BlockQuote,
        thematicBreak: Divider,
      }}
    />
  )
}

export default ReactMarkdown
