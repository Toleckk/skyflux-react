import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  padding: 1.5rem;

  box-shadow: -1px 1px 10px rgb(${props => props.theme.primary});
  border: 1px solid rgb(${props => props.theme.primary});

  border-radius: 1rem;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgb(${props => props.theme.secondary});
    box-shadow: -1px 1px 10px rgb(${props => props.theme.secondary});
  }
`
