import styled from 'styled-components'

const Divider = styled('hr')`
  position: relative;
  border-width: 0px;
  width: 200px;

  margin: auto;
  margin-bottom: 60px;

  text-align: center;

  &::after {
    content: '•   •   •';
    color: ${({ theme }) =>
      theme.isDark
        ? theme.colors['lighter-gray']
        : theme.colors['lighter-gray']};
    font-size: 30px;
  }
`

export default Divider
