import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Avatar, Icon, Nickname} from 'ui'
import {acceptSub, SubRequest} from 'models/sub'
import {useMyMutation} from '../../hooks'

export const SubRequestCard = ({sub: {_id, from}}) => {
  const [accept] = useMyMutation(acceptSub({_id}))

  return (
    <Flex justifyContent="space-between">
      <Flex alignItems="center" marginRight="2rem">
        <Box height="2rem" width="2rem" marginRight="1rem">
          <Avatar src={from.avatar} />
        </Box>
        <Nickname>{from.nickname}</Nickname>
      </Flex>
      <Flex>
        <Box as="button" marginLeft="0.5rem">
          <Icon icon="reset" size="1rem" />
        </Box>
        <Box as="button" marginLeft="0.5rem" onClick={() => accept()}>
          <Icon icon="confirm" size="1rem" />
        </Box>
      </Flex>
    </Flex>
  )
}

SubRequestCard.propTypes = {
  sub: SubRequest.isRequired,
}
