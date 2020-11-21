import styled from 'styled-components'

export const Button = styled.button`
  min-height: 2rem;

  flex-shrink: 0;

  padding: 0.5em 1.5em;

  border-radius: 1.5em;
  border: 1.5px solid rgb(${props => props.theme.primary});

  color: rgb(${props => props.theme.secondaryText});
  font-size: 1rem;

  transition: all 100ms;

  &:hover {
    border-color: rgb(${props => props.theme.primary});
    box-shadow: rgba(${props => props.theme.primary}, 0.6) 0 0 1.5rem;
    background: radial-gradient(
      transparent,
      rgba(${props => props.theme.secondary}, 0.35)
    );
  }

  &.focus-visible:focus {
    border-color: rgb(${props => props.theme.primary});
    box-shadow: rgba(${props => props.theme.primary}, 0.99) 0 0 2rem;
    background: radial-gradient(
      transparent,
      rgba(${props => props.theme.secondary}, 0.6)
    );
  }

  &:active {
    box-shadow: rgba(${props => props.theme.primary}, 0.9) 0 0 20rem;
    background: radial-gradient(
      transparent,
      rgba(${props => props.theme.secondary}, 0.5)
    );
  }
`
