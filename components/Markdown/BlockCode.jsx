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
  atelierSeasideLight,
  atelierForestLight,
  atelierEstuaryLight,
  atomOneLight,
  atomOneDark,
  atomOneDarkReasonable,
  atelierCaveLight,
  atelierDuneLight,
  githubGist,
  github,
  paraisoLight,
  vs,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default ({ language, value }) => {
  return (
    <div className="mb-4">
      <SyntaxHighlighter
        customStyle={{ borderRadius: 0 }}
        codeTagProps={{
          className: 'font-mono',
          style: { fontSize: 14 },
        }}
        language={language}
        style={atelierSulphurpoolLight}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  )
}
