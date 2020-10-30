import styled from 'styled-components'
import Heading from '../components/Heading'
import Text from '../components/Text'

const StyledBackground = styled.div`
  background: ${({ theme }) =>
    theme.isDark ? theme.colors['rich-black-fogra'] : theme.colors['white']};
  transition: all ease-out 0.3s;
`

const ComingSoon = () => {
  return (
    <StyledBackground className="h-screen v-align justify-center">
      <div>
        <Heading className="text-xl">404</Heading>
        <Text>
          Mohon bersabar ya teman-teman, halaman ini akan segera dibuka
        </Text>
      </div>
    </StyledBackground>
  )
}

export default ComingSoon
