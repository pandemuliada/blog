import styled from 'styled-components'

const Heading = styled.h1`
  color: ${({ theme, color }) =>
    color
      ? color
      : theme.isDark
      ? theme.colors['lightest-gray']
      : theme.colors['darker-gray']};
`

export default Heading
