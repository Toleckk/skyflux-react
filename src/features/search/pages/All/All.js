import React, {useState} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useMyQuery} from 'features/common/hooks'
import {getFoundUsers} from 'models/user'
import {getFoundPosts} from 'models/post'
import {Search} from '../../templates'
import {PostsDisplay, UsersDisplay} from '../../organisms'

export const All = () => {
  const [text, setText] = useState('')
  const usersQuery = useMyQuery(getFoundUsers(text))
  const postsQuery = useMyQuery(getFoundPosts(text))

  const users = usersQuery.data?.getFoundUsers?.edges.slice(0, 4)
  const posts = postsQuery.data?.getFoundPosts?.edges

  return (
    <Search
      onInputChange={setText}
      isLoading={usersQuery.loading || postsQuery.loading}
    >
      {!!users?.length && (
        <Box marginTop="2rem">
          <UsersDisplay users={users} withAllLink mini />
        </Box>
      )}
      {!!posts?.length && (
        <Box marginTop="2rem">
          <PostsDisplay posts={posts} withAllLink />
        </Box>
      )}
    </Search>
  )
}
