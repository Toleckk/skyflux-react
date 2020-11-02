import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {Comment, deleteComment} from 'models/comment'
import {Tip} from 'ui'
import {useConfirmDialog, useIsMe, useMyMutation} from '../../hooks'
import {PublicationCard} from '..'
import {StyledEllipsisLink} from './styles'

export const CommentCard = withTranslation('post')(({publication, t, mini}) => {
  const isMyComment = useIsMe(publication.user)
  const isMyPost = useIsMe(publication.post.user)

  const [remove] = useMyMutation(deleteComment({_id: publication._id}))
  const [removeWithConfirmation, Modal] = useConfirmDialog(remove)

  const onDelete = useMemo(
    () => (isMyComment || isMyPost) && (() => removeWithConfirmation()),
    [isMyComment, isMyPost, removeWithConfirmation],
  )

  return (
    <PublicationCard publication={publication} onDelete={onDelete} mini={mini}>
      {!!publication.post && !!publication.post.text && (
        <div>
          <Flex as={Tip}>
            {t('To post')}&nbsp;
            <Flex flex={1}>
              <StyledEllipsisLink to={`/post/${publication.post._id}`}>
                {publication.post.text}
              </StyledEllipsisLink>
            </Flex>
          </Flex>
        </div>
      )}
      <Modal
        text={t('Are you sure you want to delete this comment?')}
        icon="trash"
      />
    </PublicationCard>
  )
})

CommentCard.defaultProps = {
  mini: false,
}

CommentCard.propTypes = {
  publication: Comment.isRequired,
  mini: PropTypes.bool,
}
