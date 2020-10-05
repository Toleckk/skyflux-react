import React from 'react'
import {useTranslation} from 'react-i18next'
import {Box, Flex} from 'reflexbox/styled-components'
import {useInfiniteScroll} from 'useInfiniteScroll'
import {H2, Loader} from 'ui'
import {getSubRequests} from 'models/sub'
import {useMyQuery} from '../../hooks'
import {SubRequestList} from '../../molecules'

export const SubRequestsDisplay = () => {
  const {t} = useTranslation('nav')

  const {data, loading, fetchMore} = useMyQuery(getSubRequests({first: 25}))
  const subs = data?.getSubRequests?.edges

  const ref = useInfiniteScroll({
    fetchMore,
    loading,
    hasMore: data?.getSubRequests?.pageInfo?.hasNextPage,
    threshold: '100px',
  })

  return (
    <Flex flexBasis="0px" flexGrow="1" overflow="hidden" flexDirection="column">
      <Box margin="0 2rem">
        <H2>{t('Subscriptions requests')}</H2>
      </Box>
      {loading ? <Loader /> : <SubRequestList subs={subs} ref={ref} />}
    </Flex>
  )
}
