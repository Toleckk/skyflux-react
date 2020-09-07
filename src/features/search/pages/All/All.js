import React, {useState} from 'react'
import {Box} from 'reflexbox/styled-components'
import deepMerge from 'deepmerge'
import {useMyQuery} from 'features/common/hooks'
import {getFoundUsers} from 'models/user'
import {getFoundPosts} from 'models/post'
import {Search} from '../../templates'
import {PostsDisplay, UsersDisplay} from '../../organisms'

export const All = () => {
  const [text, setText] = useState('')
  const usersQuery = useMyQuery(
    deepMerge(getFoundUsers(text), {variables: {first: 4}}),
  )
  const postsQuery = useMyQuery(
    deepMerge(getFoundPosts(text), {variables: {first: 5}}),
  )

  const users = usersQuery.data?.getFoundUsers?.edges
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
