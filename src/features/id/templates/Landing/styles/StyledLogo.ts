import styled from 'styled-components'
import {Logo} from '@skyflux/react/ui'

export const StyledLogo = styled(Logo)`
  width: 80%;

  @media (min-device-aspect-ratio: 16/9) {
    width: 70%;
  }
`
