import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

export const StyledRing = styled.div`
  position: absolute;

  ${props =>
    props.hasShadow &&
    `box-shadow: inset rgba(${props.theme.secondary}, 0.7) 0 0 2rem 0.5rem, 
             rgba(${props.theme.secondary}, 0.7) 0 0 2rem 0.5rem;`};

  ${({animation, borderWidth, size, theme}) => css`
    width: ${size};
    height: ${size};

    border: ${borderWidth} solid rgb(${theme.primary});
    border-radius: 50%;

    opacity: 0.5;

    animation: 2s linear -1s infinite normal none running ${animation};
  `}
`

StyledRing.propTypes = {
  animation: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  borderWidth: PropTypes.string.isRequired,
  hasShadow: PropTypes.bool.isRequired,
}
