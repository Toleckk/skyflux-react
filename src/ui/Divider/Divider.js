import styled, {keyframes} from 'styled-components'
import PropTypes from 'prop-types'

const appear = keyframes`
  from {
    transform: scaleX(0);
  }
  
  to {
    transform: scaleX(1);    
  }
`

export const Divider = styled.hr`
  border: 0;
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  background: rgb(${props => props.theme[props.color]});
  margin: 3vh 0;
  box-shadow: rgb(${props => props.theme[props.color]}) 0 0 1rem 0.05rem;

  animation: ${appear} 880ms ease normal;
`

Divider.defaultProps = {
  color: 'primary',
}

Divider.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
}
