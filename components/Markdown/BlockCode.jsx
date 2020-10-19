import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  base16AteliersulphurpoolLight,
  atomDark,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default ({ language, value }) => {
  return (
    <div className="mb-4">
      <SyntaxHighlighter
        customStyle={{ borderRadius: 0 }}
        language={language}
        style={base16AteliersulphurpoolLight}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  )
}
