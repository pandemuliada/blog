import styled from 'styled-components'

const List = styled('li')`
  color: ${({ theme }) =>
    theme.isDark ? theme.colors['lightest-gray'] : theme.colors['gray']};
`

const ListItem = styled('li')`
  color: ${({ theme }) =>
    theme.isDark ? theme.colors['lightest-gray'] : theme.colors['gray']};
`

export { List, ListItem }
