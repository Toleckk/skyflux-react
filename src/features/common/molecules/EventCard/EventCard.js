import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Event} from 'models/event'
import {Avatar, Icon, Nickname} from 'ui'

export const EventCard = ({event: {user}}) => (
  <Flex justifyContent="space-between">
    <Flex alignItems="center" marginRight="2rem">
      <Box height="2rem" width="2rem" marginRight="1rem">
        <Avatar src={user.avatar} />
      </Box>
      <Nickname>{user.nickname}</Nickname>
    </Flex>
    <Flex>
      <Box as="button" marginLeft="0.5rem">
        <Icon icon="reset" size="1rem" />
      </Box>
      <Box as="button" marginLeft="0.5rem">
        <Icon icon="confirm" size="1rem" />
      </Box>
    </Flex>
  </Flex>
)

EventCard.propTypes = {
  event: Event.isRequired,
}
