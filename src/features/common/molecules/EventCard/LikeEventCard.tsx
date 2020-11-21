import React, {Suspense} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Translation} from 'react-i18next'
import {Text} from 'typography'
import {Date, Link, Loader} from 'ui'
import {UserBadge} from 'features/shared/molecules'
import {useModal} from 'features/shared/hooks'
import {EventFragment, LikeEventBodyFragment} from '../../graphql'
import {StyledEllipsisContainer, StyledSubEventContainer} from './styles'

export type LikeEventCardProps = {
  event: EventFragment & {subj: LikeEventBodyFragment}
  mini?: boolean
}

export const LikeEventCard: React.FC<LikeEventCardProps> = ({event, mini}) => {
  const {open} = useModal('post')

  return (
    <Suspense fallback={<Loader />}>
      <Translation ns="like">
        {t => (
          <StyledSubEventContainer mini={mini}>
            <Flex alignItems="center">
              <Flex flexShrink={0} alignItems="center" maxWidth="100%">
                <UserBadge user={event.subj.like.user} />
                <StyledEllipsisContainer>
                  <Text>{t('has liked your publication')}</Text>
                </StyledEllipsisContainer>
              </Flex>
              <Link as="button" onClick={() => open(event.subj.like.post._id)}>
                {event.subj.like.post.text}
              </Link>
            </Flex>
            {!mini && (
              <Box flexShrink={0} marginLeft="1rem">
                <Date date={event.createdAt} />
              </Box>
            )}
          </StyledSubEventContainer>
        )}
      </Translation>
    </Suspense>
  )
}
