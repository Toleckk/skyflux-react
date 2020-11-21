import React, {useState} from 'react'
import {Box} from 'reflexbox/styled-components'
import {Search} from '../../templates'
import {PostsDisplay, UsersDisplay} from '../../organisms'
import {useSearchPosts, useSearchUsers} from '../../hooks'

export const All: React.FC = () => {
  const [text, setText] = useState('')
  const {users, loading: usersLoading} = useSearchUsers(text, 4)
  const {posts, loading: postsLoading} = useSearchPosts(text, 5)

  return (
    <Search onInputChange={setText} isLoading={usersLoading || postsLoading}>
      {(!!users?.edges?.length || !!posts?.edges?.length) && (
        <>
          {!!users?.edges?.length && (
            <Box marginTop="2rem">
              <UsersDisplay users={users} query={text} mini />
            </Box>
          )}
          {!!posts?.edges?.length && (
            <Box marginTop="2rem">
              <PostsDisplay posts={posts} query={text} />
            </Box>
          )}
        </>
      )}
    </Search>
  )
}
