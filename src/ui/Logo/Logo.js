import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {ThemeContext} from 'styled-components'
import {StyledSVG} from './styles'
import {calculateTrianglePoints} from './calculateTrianglePoints'

const size = 24
const smallTriangle = calculateTrianglePoints(
  size,
  size * 0.1416666666666667,
  size / 10,
)
const bigTriangle = calculateTrianglePoints(size, size / 24, size / 24)

export const Logo = ({className}) => {
  const {secondary} = useContext(ThemeContext)

  return (
    <div className={className}>
      <StyledSVG viewBox={`0 0 ${size} ${size}`}>
        <polygon
          points={bigTriangle}
          stroke={`rgba(${secondary}, 0.35)`}
          strokeWidth={size / 30}
          fill="transparent"
        />
        <polygon
          points={smallTriangle}
          stroke={`rgba(${secondary}, 0.3)`}
          strokeWidth={size / 30}
          fill="transparent"
        />
      </StyledSVG>
    </div>
  )
}

Logo.defaultProps = {
  className: null,
}

Logo.propTypes = {
  className: PropTypes.string,
}
