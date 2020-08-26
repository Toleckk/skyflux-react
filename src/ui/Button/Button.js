import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px 12px;
  min-height: 33px;

  flex-shrink: 0;

  border-radius: 10px;
  border: 1.5px solid rgb(${props => props.theme.primary});

  color: rgb(${props => props.theme.secondaryText});
  font-size: medium;

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
