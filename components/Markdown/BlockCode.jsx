import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default ({ language, value }) => {
  return (
    <div className="mb-5">
      <SyntaxHighlighter
        showLineNumbers
        language={language}
        style={base16AteliersulphurpoolLight}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  )
}
