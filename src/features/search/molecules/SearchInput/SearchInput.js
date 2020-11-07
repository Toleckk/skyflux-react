import React from 'react'
import {Icon} from 'ui'
import {
  StyledIconContainer,
  StyledInput,
  StyledRelativeContainer,
} from './styles'

export const SearchInput = props => (
  <StyledRelativeContainer>
    <StyledInput id="search" {...props} />
    <StyledIconContainer htmlFor="search">
      <Icon icon="find" width="3rem" height="3rem" color="currentColor" />
    </StyledIconContainer>
  </StyledRelativeContainer>
)
