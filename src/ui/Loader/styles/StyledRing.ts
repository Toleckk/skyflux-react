import styled, {Keyframes} from 'styled-components'

export type StyledRingProps = {
  animation: Keyframes
  hasShadow: boolean
  size: string
  borderWidth: string
}

export const StyledRing = styled.div<StyledRingProps>`
  position: absolute;

  box-shadow: ${props =>
    props.hasShadow
      ? `inset ${props.theme.secondary}B2 0 0 2rem 0.5rem, 
             ${props.theme.secondary}B2 0 0 2rem 0.5rem;`
      : 'unset'};

  width: ${props => props.size};
  height: ${props => props.size};

  border: ${props => `${props.borderWidth} solid ${props.theme.primary}`};
  border-radius: 50%;
  opacity: 0.5;

  animation: 2s linear -1s infinite normal none running ${props => props.animation};
`
