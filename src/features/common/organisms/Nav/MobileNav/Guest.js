import React from 'react'
import PropTypes from 'prop-types'
import {Avatar} from 'ui'
import {NavigationButton} from '../../../molecules'
import {StyledList} from './styles'

export const Guest = ({onAuthClick}) => (
  <StyledList>
    <NavigationButton icon="search" to="/search" />
    <NavigationButton onClick={onAuthClick}>
      <Avatar />
    </NavigationButton>
  </StyledList>
)

Guest.propTypes = {
  onAuthClick: PropTypes.func,
}
