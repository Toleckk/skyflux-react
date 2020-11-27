import React from 'react'
import {Avatar} from '@skyflux/react/ui'
import {StyledList} from './styles'
import {NavigationButton} from '../../../components'

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
