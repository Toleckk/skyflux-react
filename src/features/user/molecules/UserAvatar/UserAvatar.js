import React from 'react'
import useBooleanState from 'use-boolean-state'
import Lightbox from 'react-image-lightbox'
import {Box} from 'reflexbox/styled-components'
import {User} from 'models/user'
import {Avatar, Icon} from 'ui'
import {StyledAbsoluteLens} from './styles'

export const UserAvatar = ({user}) => {
  const [hovered, setHovered, setBlur] = useBooleanState(false)
  const [opened, open, close] = useBooleanState(false)

  return (
    <Box
      width="100%"
      height="100%"
      as={user.avatar ? 'button' : 'div'}
      onClick={user.avatar ? open : null}
      onMouseEnter={setHovered}
      onMouseLeave={setBlur}
    >
      <Avatar src={user.avatar}>
        {hovered && !!user.avatar && (
          <StyledAbsoluteLens>
            <Icon icon="find" width="60%" />
          </StyledAbsoluteLens>
        )}
      </Avatar>
      {opened && <Lightbox mainSrc={user.avatar} onCloseRequest={close} />}
    </Box>
  )
}

UserAvatar.propTypes = {
  user: User.isRequired,
}
