import React, {Suspense} from 'react'
import {Flex} from 'reflexbox/styled-components'
import {Divider, Loader} from 'ui'
import {PostCard} from 'features/common/molecules'
import {useMyQuery} from 'features/common/hooks'
import {getPostById, ID} from 'models/post'
import {CommentForm, CommentsDisplay} from '..'

export const PostDisplay = ({_id}) => {
  const {data, loading} = useMyQuery(getPostById(_id))

  const post = data?.getPostById

  return (
    <Flex flexDirection="column" maxHeight="100vh" height="100%">
      <Suspense fallback={<Loader />}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <PostCard publication={post} />
            <Divider />
            <Flex
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              overflowY="hidden"
            >
              <CommentsDisplay postId={_id} />
            </Flex>
            <Divider />
            <CommentForm post={post} />
          </>
        )}
      </Suspense>
    </Flex>
  )
}

PostDisplay.propTypes = {
  _id: ID.isRequired,
}
