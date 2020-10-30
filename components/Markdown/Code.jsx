import styled from 'styled-components'

const StyledCode = styled.code`
  background: ${({ theme }) =>
    theme.isDark ? theme.colors['lightest-gray'] : theme.colors['gray']};
  color: ${({ theme }) =>
    theme.isDark ? theme.colors['darkest-gray'] : theme.colors['white']};
  font-size: 15px;
`

const Code = (props) => (
  <StyledCode
    className="bg-opacity-25"
    style={{ paddingLeft: 3, paddingRight: 3 }}
  >
    {props.children}
  </StyledCode>
)

export default Code
