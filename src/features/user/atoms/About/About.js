import React from 'react'
import PropTypes from 'prop-types'
import {SecondaryText} from 'ui'
import {StyledFirstLetter, StyledText} from './styles'

export const About = ({children}) => (
  <StyledText>
    <StyledFirstLetter>{children.slice(0, 1)}</StyledFirstLetter>
    <SecondaryText>{children.slice(1)}</SecondaryText>
  </StyledText>
)

About.propTypes = {
  children: PropTypes.string.isRequired,
}
