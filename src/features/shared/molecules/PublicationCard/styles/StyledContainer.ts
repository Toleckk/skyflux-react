import styled from 'styled-components'

export type StyledContainerProps = {
  mini?: boolean
}

export const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: column;

  font-size: ${props => (props.mini ? '0.875em' : '1em')};
`
