import styled from 'styled-components'

const Heading = styled.h1`
  color: ${({ theme }) =>
    theme.isDark ? theme.colors['cultured'] : theme.colors['darker-gray']};
`

export default Heading
