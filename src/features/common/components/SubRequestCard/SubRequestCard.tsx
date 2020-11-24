import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Icon} from 'ui'
import {UserCard} from 'features/shared/components'
import {SubRequestFragment} from '../../graphql'
import {useSubRequestActions} from '../../hooks'

export type SubRequestCardProps = {
  sub: SubRequestFragment
}

export const SubRequestCard: React.FC<SubRequestCardProps> = ({sub}) => {
  const {acceptSub, declineSub} = useSubRequestActions(sub._id)

  return (
    <UserCard user={sub.from}>
      <Flex marginTop="1rem" alignSelf="stretch" justifyContent="space-between">
        <Box as="button" onClick={declineSub}>
          <Icon icon="reset" size="1.5em" />
        </Box>
        <Box as="button" onClick={acceptSub}>
          <Icon icon="confirm" size="1.5em" />
        </Box>
      </Flex>
    </UserCard>
  )
}
