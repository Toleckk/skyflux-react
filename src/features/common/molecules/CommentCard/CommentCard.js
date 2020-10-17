import React, {useMemo} from 'react'
import {withTranslation} from 'react-i18next'
import {Comment, deleteComment} from 'models/comment'
import {Link, Tip} from 'ui'
import {useIsMe, useMyMutation} from '../../hooks'
import {PublicationCard} from '..'

export const CommentCard = withTranslation('post')(({publication, t}) => {
  const isMyComment = useIsMe(publication.user)
  const isMyPost = useIsMe(publication.post.user)

  const [remove] = useMyMutation(deleteComment({_id: publication._id}))

  const onDelete = useMemo(
    () => (isMyComment || isMyPost) && (() => remove()),
    [isMyComment, isMyPost, remove],
  )

  return (
    <PublicationCard publication={publication} onDelete={onDelete}>
      {!!publication.post && !!publication.post.text && (
        <div>
          <Tip>
            {t('To post')}&nbsp;
            <Link to={`/post/${publication.post._id}`}>
              {publication.post.text}
            </Link>
          </Tip>
        </div>
      )}
    </PublicationCard>
  )
})

CommentCard.propTypes = {
  publication: Comment.isRequired,
}
