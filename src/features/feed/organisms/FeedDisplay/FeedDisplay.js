import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import noop from 'noop6'
import {getFeed} from 'models/post'
import {useInfiniteScroll} from 'utils'
import {Loader} from 'ui'
import {useMyQuery} from 'features/common/hooks'
import {PostList} from 'features/common/molecules'

export const FeedDisplay = ({onEmptyFeedReceived, onFulfilledFeedReceived}) => {
  const {data, loading, fetchMore} = useMyQuery(getFeed({first: 25}))

  const posts = data?.getFeed?.edges

  useEffect(() => {
    if (!loading)
      return posts?.length ? onFulfilledFeedReceived() : onEmptyFeedReceived()
  }, [onEmptyFeedReceived, onFulfilledFeedReceived, posts, loading])

  const hasMore = data?.getFeed?.pageInfo?.hasNextPage

  const scrollContainerRef = useInfiniteScroll({
    fetchMore,
    loading,
    hasMore,
  })

  return loading ? (
    <Loader />
  ) : (
    <PostList posts={posts} ref={scrollContainerRef} loading={hasMore} />
  )
}

FeedDisplay.defaultProps = {
  onEmptyFeedReceived: noop,
  onFulfilledFeedReceived: noop,
}

FeedDisplay.propTypes = {
  onEmptyFeedReceived: PropTypes.func,
  onFulfilledFeedReceived: PropTypes.func,
}
