import React, {ComponentProps} from 'react'
import {
  StyledBorder,
  StyledCheckbox,
  StyledContainer,
  StyledRound,
} from './styles'

export type ToggleProps = ComponentProps<typeof StyledCheckbox> & {
  width?: React.CSSProperties['width']
  height?: React.CSSProperties['height']
  className?: string
}

export const Toggle: React.FC<ToggleProps> = ({
  width = '4rem',
  height = '2rem',
  className,
  ...props
}) => (
  <StyledContainer>
    <StyledCheckbox {...props} />
    <StyledBorder className={className} width={width} height={height}>
      <StyledRound width={width} height={height} />
    </StyledBorder>
  </StyledContainer>
)
