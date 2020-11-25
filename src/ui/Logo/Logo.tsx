import React, {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import {StyledSVG} from './styles'
import {calculateTrianglePoints} from './calculateTrianglePoints'

export type LogoProps = {
  className?: string
}

const size = 24
const smallTriangle = calculateTrianglePoints(
  size,
  size * 0.1416666666666667,
  size / 10,
)
const bigTriangle = calculateTrianglePoints(size, size / 24, size / 24)

export const Logo: React.FC<LogoProps> = ({className}) => {
  const {secondary} = useContext(ThemeContext)

  return (
    <div className={className}>
      <StyledSVG viewBox={`0 0 ${size} ${size}`}>
        <polygon
          points={bigTriangle}
          stroke={`${secondary}59`}
          strokeWidth={size / 30}
          fill="transparent"
        />
        <polygon
          points={smallTriangle}
          stroke={`${secondary}4C`}
          strokeWidth={size / 30}
          fill="transparent"
        />
      </StyledSVG>
    </div>
  )
}
