import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  position: relative;

  user-select: none;
  border-radius: 50%;

  overflow: hidden;

  border: 2px solid ${props => props.theme.primary};
  box-shadow: 0 0 1rem ${props => props.theme.primary};

  width: 100%;
  height: 100%;
`
