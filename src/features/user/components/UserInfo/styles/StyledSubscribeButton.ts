import styled from 'styled-components'
import {SubscribeButton} from '../../SubscribeButton'

export const StyledSubscribeButton = styled(SubscribeButton)`
  align-self: flex-end;

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
  }
`
