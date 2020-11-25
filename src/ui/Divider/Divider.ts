import styled, {keyframes} from 'styled-components'

const appear = keyframes`
  from {
    transform: scaleX(0);
  }
  
  to {
    transform: scaleX(1);    
  }
`

export type DividerProps = {
  color?: 'primary' | 'secondary'
}

export const Divider = styled.hr<DividerProps>`
  border: 0;
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  background: ${props => props.theme[props.color || 'primary']};
  margin: 3vh 0;
  box-shadow: ${props => props.theme[props.color || 'primary']} 0 0 1rem 0.05rem;

  animation: ${appear} 880ms ease normal;
`
