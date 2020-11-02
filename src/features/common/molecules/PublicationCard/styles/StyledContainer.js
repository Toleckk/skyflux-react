import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: ${props => (props.mini ? '0.875em' : '1em')};
`
