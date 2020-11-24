import React from 'react'
import {Translation} from 'react-i18next'
import {Box, Flex} from 'reflexbox/styled-components'
import {Text} from 'typography'
import {Date} from 'ui'
import {UserBadge} from 'features/shared/components/UserBadge'
import {EventFragment, SubEventBodyFragment} from '../../graphql'
import {StyledSubEventContainer} from './styles'

export type SubEventCardProps = {
  event: EventFragment & {subj: SubEventBodyFragment}
  mini?: boolean
}

export const SubEventCard: React.FC<SubEventCardProps> = ({event, mini}) => (
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
