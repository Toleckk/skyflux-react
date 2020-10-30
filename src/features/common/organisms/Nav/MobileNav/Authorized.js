import React from 'react'
import PropTypes from 'prop-types'
import {Avatar} from 'ui'
import {me} from 'models/user'
import {NavigationButton} from '../../../molecules'
import {useMyQuery} from '../../../hooks'
import {StyledList} from './styles'

export const Authorized = ({onMenuClick, onNotificationsClick}) => {
  const {data} = useMyQuery(me())

  return (
    <StyledList>
      <NavigationButton icon="search" to="/search" />
      <NavigationButton icon="notifications" onClick={onNotificationsClick} />
      <NavigationButton icon="feed" to="/feed" />
      <NavigationButton onClick={onMenuClick}>
        <Avatar src={data?.me?.avatar} />
      </NavigationButton>
    </StyledList>
  )
}

Authorized.propTypes = {
  onMenuClick: PropTypes.func,
  onNotificationsClick: PropTypes.func,
}
