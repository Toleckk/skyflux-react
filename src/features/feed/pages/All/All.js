import React from 'react'
import {Box} from 'reflexbox/styled-components'
import useBooleanState from 'use-boolean-state'
import {Trans, useTranslation} from 'react-i18next'
import {PostForm} from 'features/common/organisms'
import {Divider, H1, Link, Text} from 'ui'
import {FeedDisplay, SuggestionsDisplay} from '../../organisms'
import {StyledContainer} from './styles'

export const All = () => {
  const {t} = useTranslation('feed')

  const [isFeedFulfilled, setIsFulfilled, setIsEmpty] = useBooleanState(false)

  return (
    <StyledContainer>
      <PostForm placeholder={t('Write a news')} />
      <Divider />
      <FeedDisplay
        onEmptyFeedReceived={setIsEmpty}
        onFulfilledFeedReceived={setIsFulfilled}
      />
      {!isFeedFulfilled && (
        <div>
          <H1>{t('Your feed is empty')}</H1>
          <Box margin="1rem 0">
            <SuggestionsDisplay />
          </Box>
          <Text>
            <Trans t={t}>
              If look smth, you can use our <Link to={'/search'}>search</Link>
            </Trans>
          </Text>
          <Divider />
        </div>
      )}
    </StyledContainer>
  )
}
