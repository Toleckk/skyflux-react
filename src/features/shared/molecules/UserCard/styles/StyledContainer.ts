import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  box-shadow: -1px 1px 10px rgb(${props => props.theme.primary});
  border: 1px solid rgb(${props => props.theme.primary});

  padding: 1.5em;

  border-radius: 1rem;

  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgb(${props => props.theme.secondary});
    box-shadow: -1px 1px 10px rgb(${props => props.theme.secondary});
  }
`
