import React from 'react'
import {
  StyledContainer,
  StyledLogo,
  StyledLogoContainer,
  StyledMain,
} from './styles'

export const Landing: React.FC = ({children}) => (
  <StyledContainer>
    <StyledLogoContainer>
      <StyledLogo />
    </StyledLogoContainer>
    <StyledMain>{children}</StyledMain>
  </StyledContainer>
)
