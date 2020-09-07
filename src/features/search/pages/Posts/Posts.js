import React, {useState} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useInfiniteScroll} from 'useInfiniteScroll'
import deepMerge from 'deepmerge'
import {useMyQuery} from 'features/common/hooks'
import {getFoundPosts} from 'models/post'
import {Search} from '../../templates'
import {PostsDisplay} from '../../organisms'

export const Posts = () => {
  const [text, setText] = useState('')
  const {data, loading, fetchMore} = useMyQuery(
    deepMerge(getFoundPosts(text), {variables: {first: 25}}),
  )

  const postsContainerRef = useInfiniteScroll({
    fetchMore,
    loading,
    hasMore: data?.getFoundPosts?.pageInfo?.hasNextPage,
  })

  const posts = data?.getFoundPosts?.edges

  return (
    <Search onInputChange={setText} isLoading={loading}>
      {!!posts?.length && (
        <Box marginTop="2rem">
          <PostsDisplay posts={posts} ref={postsContainerRef} />
        </Box>
      )}
    </Search>
  )
}
