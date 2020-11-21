import styled from 'styled-components'
import {Flex} from 'reflexbox'

export type StyledContainerProps = {
  hasBackground?: boolean
  size: string
}

export const StyledContainer = styled(Flex)<StyledContainerProps>`
  position: relative;

  align-items: center;
  justify-content: center;

  height: ${props => props.size};
  width: ${props => props.size};

  ${props => !!props.hasBackground && 'background: rgba(0, 0, 0, 0.7);'};
`
