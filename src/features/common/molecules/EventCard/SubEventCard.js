import React from 'react'
import {withTranslation} from 'react-i18next'
import {Box, Flex} from 'reflexbox/styled-components'
import {Date, Text} from 'ui'
import {UserBadge} from '../UserBadge'

export const SubEventCard = withTranslation('sub')(({event, t}) => (
  <Flex alignItems="center" justifyContent="space-between">
    <Flex alignItems="center">
      <UserBadge user={event.subj.sub.from} />
      <Text>
        &nbsp; &nbsp;
        {t(event.subj.sub.accepted ? 'now reads you' : 'wants to read you')}
      </Text>
    </Flex>
    <Box marginLeft="1rem">
      <Date date={event.createdAt} />
    </Box>
  </Flex>
))

SubEventCard.propTypes = {
  event: Event.isRequired,
}
