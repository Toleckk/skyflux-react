import React from 'react'
import PropTypes from 'prop-types'
import {Avatar} from 'ui'
import {NavigationButton} from '../../../molecules'
import {StyledList} from './styles'

export const Guest = ({onAuthClick}) => (
  <StyledList>
    <NavigationButton onClick={onAuthClick}>
      <Avatar />
    </NavigationButton>
    <NavigationButton icon="search" to="/search" />
  </StyledList>
)

Guest.propTypes = {
  onAuthClick: PropTypes.func,
}
