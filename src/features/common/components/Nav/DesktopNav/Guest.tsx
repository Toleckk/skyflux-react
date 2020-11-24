import React from 'react'
import {Avatar} from 'ui'
import {NavigationButton} from '../../../components'
import {StyledList} from './styles'

export type GuestProps = {
  onAuthClick?: () => unknown
}

export const Guest: React.FC<GuestProps> = ({onAuthClick}) => (
  <StyledList>
    <NavigationButton onClick={onAuthClick}>
      <Avatar />
    </NavigationButton>
    <NavigationButton icon="search" to="/search" />
  </StyledList>
)
