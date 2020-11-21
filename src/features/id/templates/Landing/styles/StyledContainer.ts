import styled from 'styled-components'
import {Flex} from 'reflexbox/styled-components'

export const StyledContainer = styled(Flex)`
  background-image: url(${props => props.theme.landingBackground});
  background-color: rgb(${props => props.theme.primaryDark});
  background-position-x: -130px;

  min-height: 100vh;

  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
