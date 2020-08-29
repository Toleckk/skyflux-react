import React from 'react'
import PropTypes from 'prop-types'
import {Icon} from '../../../../ui'
import {
  StyledIconContainer,
  StyledInput,
  StyledRelativeContainer,
} from './styles'

export const SearchInput = ({id, ...props}) => (
  <StyledRelativeContainer>
    <StyledInput id={id} {...props} />
    <StyledIconContainer htmlFor={id}>
      <Icon icon="find" width="3rem" height="3rem" color="currentColor" />
    </StyledIconContainer>
  </StyledRelativeContainer>
)

SearchInput.defaultProps = {
  id: 'search',
}

SearchInput.propTypes = {
  id: PropTypes.string,
}
