import React from 'react'
import {withTranslation} from 'react-i18next'
import {Flex} from 'reflexbox/styled-components'
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
    <Date date={event.createdAt} />
  </Flex>
))

SubEventCard.propTypes = {
  event: Event.isRequired,
}
