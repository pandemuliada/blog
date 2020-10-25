import SyntaxHighlighter, {
  Prism as PrismSyntaxHighlighter,
} from 'react-syntax-highlighter'
// Prism Theme
import {
  base16AteliersulphurpoolLight,
  atomDark,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'

// Highlight Theme
import {
  atelierSulphurpoolLight,
  atomOneDark,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import useTheme from '../../hooks/useTheme'

const BlockCode = ({ language, value }) => {
  const { theme } = useTheme()

  return (
    <div className="mb-4">
      <SyntaxHighlighter
        customStyle={{ borderRadius: 0 }}
        codeTagProps={{
          className: 'font-mono',
          style: { fontSize: 15 },
        }}
        language={language}
        style={theme === 'light' ? atelierSulphurpoolLight : atomOneDark}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  )
}

export default BlockCode
