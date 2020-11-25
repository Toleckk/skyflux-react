import styled from 'styled-components'

export const Button = styled.button`
  min-height: 2rem;

  flex-shrink: 0;

  padding: 0.5em 1.5em;

  border-radius: 1.5em;
  border: 1.5px solid ${props => props.theme.primary};

  color: ${props => props.theme.secondaryText};
  font-size: 1rem;

  transition: all 100ms;

  &:hover {
    border-color: ${props => props.theme.primary};
    box-shadow: ${props => props.theme.primary}99 0 0 1.5rem;
    background: radial-gradient(
      transparent,
      ${props => props.theme.secondary}59
    );
  }

  &.focus-visible:focus {
    border-color: ${props => props.theme.primary};
    box-shadow: ${props => props.theme.primary} 0 0 2rem;
    background: radial-gradient(
      transparent,
      ${props => props.theme.secondary}99
    );
  }

  &:active {
    box-shadow: ${props => props.theme.primary}E5 0 0 20rem;
    background: radial-gradient(
      transparent,
      ${props => props.theme.secondary}7F
    );
  }
`
