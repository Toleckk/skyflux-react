import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {useMutation} from '@apollo/client'
import {Icon} from 'ui'
import {SubRequest} from 'models/sub'
import {UserCard} from 'features/shared/molecules'
import {ACCEPT_SUB, DECLINE_SUB} from '../../graphql'

export const SubRequestCard = ({sub: {_id, from}}) => {
  const [accept] = useMutation(ACCEPT_SUB, {variables: {_id}})
  const [decline] = useMutation(DECLINE_SUB, {variables: {_id}})

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
