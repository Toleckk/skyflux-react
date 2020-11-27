import styled from 'styled-components'
import {Text} from '@skyflux/react/typography'

export const FieldDescription = styled(Text)`
  width: 70%;

  @media (min-width: 768px) {
    width: 50%;
  }
`
