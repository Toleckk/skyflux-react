import styled from 'styled-components'

export type StyledFieldsetProps = {
  hasLabel?: boolean
  error?: boolean
}

export const StyledFieldset = styled.fieldset<StyledFieldsetProps>`
  margin: 0;
  color: ${props => props.theme.primaryText};

  position: relative;

  width: 100%;
  min-width: 215px;

  padding: ${props => (!props.hasLabel ? '8px' : 0)} 8px 8px 11px;

  border-radius: 4px;
  border: 2px solid
    ${({error, theme}) => (error ? theme.error : theme.primaryText)}E5;

  transition: all 300ms;

  &:focus-within {
    ${({theme, error}) =>
      !error &&
      `
        box-shadow: ${theme.secondary} 0 0 1.4rem;
        border-color: ${theme.secondary};
    `}
  }

  ${({error, theme}) =>
    error && `box-shadow: inset ${theme.error}E5 0 0 1.1rem;`}
`
