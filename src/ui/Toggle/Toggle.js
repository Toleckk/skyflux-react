import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledBorder,
  StyledCheckbox,
  StyledContainer,
  StyledRound,
} from './styles'

export const Toggle = ({className, width, height, ...props}) => (
  <StyledContainer>
    <StyledCheckbox {...props} />
    <StyledBorder className={className} width={width} height={height}>
      <StyledRound width={width} height={height} />
    </StyledBorder>
  </StyledContainer>
)

Toggle.defaultProps = {
  width: '4rem',
  height: '2rem',
}

Toggle.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}
