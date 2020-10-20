import styled from 'styled-components'

const Text = styled.p`
  color: ${({ theme }) =>
    theme.isDark ? theme.colors['lighter-gray'] : theme.colors['gray']};
`

export default Text
