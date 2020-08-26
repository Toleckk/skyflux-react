import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledContainer,
  StyledLogo,
  StyledLogoContainer,
  StyledMain,
} from './styles'

export const Landing = ({children}) => (
  <StyledContainer>
    <StyledLogoContainer>
      <StyledLogo />
    </StyledLogoContainer>
    <StyledMain>{children}</StyledMain>
  </StyledContainer>
)

Landing.propTypes = {
  children: PropTypes.node,
}
