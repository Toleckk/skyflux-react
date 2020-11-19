import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Icon} from 'ui'
import {acceptSub, declineSub, SubRequest} from 'models/sub'
import {useMyMutation} from '../../hooks'
import {UserCard} from '../UserCard'

export const SubRequestCard = ({sub: {_id, from}}) => {
  const [accept] = useMyMutation(acceptSub({_id}))
  const [decline] = useMyMutation(declineSub({_id}))

  return (
    <UserCard user={from}>
      <Flex marginTop="1rem" alignSelf="stretch" justifyContent="space-between">
        <Box as="button" onClick={() => decline()}>
          <Icon icon="reset" size="1.5em" />
        </Box>
        <Box as="button" onClick={() => accept()}>
          <Icon icon="confirm" size="1.5em" />
        </Box>
      </Flex>
    </UserCard>
  )
}

SubRequestCard.propTypes = {
  sub: SubRequest.isRequired,
}
