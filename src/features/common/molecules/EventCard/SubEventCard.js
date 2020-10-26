import React from 'react'
import {Translation} from 'react-i18next'
import {Box, Flex} from 'reflexbox/styled-components'
import {Date, Text} from 'ui'
import {UserBadge} from '../UserBadge'
import {StyledSubEventContainer} from './styles'

export const SubEventCard = ({event}) => (
  <StyledSubEventContainer>
    <Flex alignItems="center">
      <UserBadge user={event.subj.sub.from} />
      <Translation ns="sub">
        {t => (
          <Text>
            &nbsp; &nbsp;
            {t(event.subj.sub.accepted ? 'now reads you' : 'wants to read you')}
          </Text>
        )}
      </Translation>
    </Flex>
    <Box width="1rem" height="0" />
    <Box marginLeft="auto">
      <Date date={event.createdAt} />
    </Box>
  </StyledSubEventContainer>
)

SubEventCard.propTypes = {
  event: Event.isRequired,
}
