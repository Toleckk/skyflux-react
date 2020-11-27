import React, {useCallback} from 'react'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Tip} from '@skyflux/react/typography'
import {Link} from '@skyflux/react/ui'
import {useMe} from '../../hooks'
import {PublicationCard} from '..'
import {CommentFragment, CommentWithPostFragment} from '../../graphql'

export type CommentCardProps = {
  comment: CommentFragment | CommentWithPostFragment
  mini?: boolean
  onDelete?: (comment: CommentFragment) => unknown
}

export const CommentCard: React.FC<CommentCardProps> = ({
  comment,
  onDelete,
  mini = false,
}) => {
  const {t} = useTranslation('post')

  const {isMe} = useMe()

  const isMyComment = isMe(comment.user)
  const isMyPost = 'post' in comment && isMe(comment.post.user)

  const deleteComment = useCallback(() => onDelete?.(comment), [
    onDelete,
    comment,
  ])

  return (
    <PublicationCard
      publication={comment}
      onDelete={(isMyComment || isMyPost) && onDelete && deleteComment}
      mini={mini}
    >
      {'post' in comment && !!comment.post.text && (
        <div>
          <Flex as={Tip}>
            {t('To post')}&nbsp;
            <Flex flex={1}>
              <Link to={`/post/${comment.post._id}`}>{comment.post.text}</Link>
            </Flex>
          </Flex>
        </div>
      )}
    </PublicationCard>
  )
}
