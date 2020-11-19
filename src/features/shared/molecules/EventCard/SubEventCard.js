import React from 'react'
import PropTypes from 'prop-types'
import {Translation} from 'react-i18next'
import {Box, Flex} from 'reflexbox/styled-components'
import {Text} from 'typography'
import {Date} from 'ui'
import {UserBadge} from '../UserBadge'
import {StyledSubEventContainer} from './styles'

export const SubEventCard = ({event, mini}) => (
  <StyledSubEventContainer mini={mini}>
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
    {!mini && (
      <>
        <Box width="1rem" height="0" />
        <Box marginLeft="auto">
          <Date date={event.createdAt} />
        </Box>
      </>
    )}
  </StyledSubEventContainer>
)

SubEventCard.defaultProps = {
  mini: false,
}

SubEventCard.propTypes = {
  event: Event.isRequired,
  mini: PropTypes.bool,
}
