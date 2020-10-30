import styled from 'styled-components'

const BlockQuote = styled('blockquote')`
  border-left: 5px solid ${({ theme }) => theme.colors['blue-jeans']};
  padding-left: 15px;
  color: ${({ theme }) =>
    theme.isDark ? theme.colors['lightest-gray'] : theme.colors['gray']};
  font-style: italic;
`

export default BlockQuote
