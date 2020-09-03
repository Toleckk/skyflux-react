import React, {useState} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useMyQuery} from 'features/common/hooks'
import {getFoundPosts} from 'models/post'
import {Search} from '../../templates'
import {PostsDisplay} from '../../organisms'

export const Posts = () => {
  const [text, setText] = useState('')
  const {data, loading} = useMyQuery(getFoundPosts(text))

  const posts = data?.getFoundPosts?.edges

  return (
    <Search onInputChange={setText} isLoading={loading}>
      {!!posts?.length && (
        <Box marginTop="2rem">
          <PostsDisplay posts={posts} />
        </Box>
      )}
    </Search>
  )
}
