import React, {Suspense} from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {Translation} from 'react-i18next'
import {Event} from 'models/event'
import {Date, Link, Loader, Text} from 'ui'
import {UserBadge} from '../UserBadge'
import {useModal} from '../../hooks'

export const LikeEventCard = ({event, mini}) => {
  const {open} = useModal('post')

  return (
    <Suspense fallback={<Loader />}>
      <Translation ns="like">
        {t => (
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Flex flexShrink={0} alignItems="center">
                <UserBadge user={event.subj.like.user} />
                <Box margin="0 1ex">
                  <Text>{t('has liked your publication')}</Text>
                </Box>
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
          </Flex>
        )}
      </Translation>
    </Suspense>
  )
}

LikeEventCard.defaultProps = {
  mini: false,
}

LikeEventCard.propTypes = {
  event: Event.isRequired,
  mini: PropTypes.bool,
}
