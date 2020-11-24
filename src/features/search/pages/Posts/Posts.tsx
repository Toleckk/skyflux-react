import React, {useState} from 'react'
import {Box} from 'reflexbox/styled-components'
import {Search} from '../../templates'
import {PostsDisplay} from '../../components'
import {useSearchPosts} from '../../hooks'

export const Posts: React.FC = () => {
  const [text, setText] = useState('')

  const {posts, loading, more} = useSearchPosts(text)

  return (
    <Search onInputChange={setText} isLoading={loading}>
      {!!posts?.edges?.length && (
        <Box marginTop="2rem">
          <PostsDisplay posts={posts} onMore={more} />
        </Box>
      )}
    </Search>
  )
}
