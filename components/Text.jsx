import styled from 'styled-components'

const Text = styled.p`
  color: ${({ theme }) =>
    theme.isDark ? theme.colors['lightest-gray'] : theme.colors['gray']};
`

export default Text
