import styled from 'styled-components'

export const StyledContainer = styled.div`
  box-shadow: 0 0 1rem rgb(${props => props.theme.secondary});

  background: rgb(${props => props.theme.primaryDark});

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;

  border-style: solid;
  border-color: rgb(${props => props.theme.secondary});

  border-width: 0;
  border-top-width: 1px;

  @media (min-width: 768px) {
    width: 25rem;
    flex-direction: row;
    border-radius: 0.5rem;
    border-width: 1px;
  }
`
