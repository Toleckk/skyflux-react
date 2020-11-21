import React, {ComponentPropsWithoutRef} from 'react'
import {Icon} from 'ui'
import {
  StyledIconContainer,
  StyledInput,
  StyledRelativeContainer,
} from './styles'

export type SearchInputProps = Omit<
  ComponentPropsWithoutRef<typeof StyledInput>,
  '_id'
>

export const SearchInput: React.FC<SearchInputProps> = props => (
  <StyledRelativeContainer>
    <StyledInput id="search" {...props} />
    <StyledIconContainer htmlFor="search">
      <Icon icon="find" width="3rem" height="3rem" color="currentColor" />
    </StyledIconContainer>
  </StyledRelativeContainer>
)
