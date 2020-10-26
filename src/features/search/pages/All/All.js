import React, {useState} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useMyQuery} from 'features/common/hooks'
import {getFoundUsers} from 'models/user'
import {getFoundPosts} from 'models/post'
import {Search} from '../../templates'
import {PostsDisplay, UsersDisplay} from '../../organisms'

export const All = () => {
  const [text, setText] = useState('')
  const usersQuery = useMyQuery(getFoundUsers(text, {first: 4}))
  const postsQuery = useMyQuery(getFoundPosts(text, {first: 5}))

  const users = usersQuery.data?.getFoundUsers?.edges
  const posts = postsQuery.data?.getFoundPosts?.edges

  return (
    <Search
      onInputChange={setText}
      isLoading={usersQuery.loading || postsQuery.loading}
    >
      {(!!users?.length || !!posts?.length) && (
        <>
          {!!users?.length && (
            <Box marginTop="2rem">
              <UsersDisplay users={users} query={text} mini />
            </Box>
          )}
          {!!posts?.length && (
            <Box marginTop="2rem">
              <PostsDisplay posts={posts} query={text} />
            </Box>
          )}
        </>
      )}
    </Search>
  )
}
