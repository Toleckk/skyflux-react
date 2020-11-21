import React from 'react'
import {SecondaryText} from 'typography'
import {StyledFirstLetter, StyledText} from './styles'

export type AboutProps = {
  children: string
}

export const About: React.FC<AboutProps> = ({children}) => (
  <StyledText>
    <StyledFirstLetter>{children.slice(0, 1)}</StyledFirstLetter>
    <SecondaryText>{children.slice(1)}</SecondaryText>
  </StyledText>
)
