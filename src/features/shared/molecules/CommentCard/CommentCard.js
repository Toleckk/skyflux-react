import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Comment} from 'models/comment'
import {Tip} from 'typography'
import {Link} from 'ui'
import {useMe} from '../../hooks'
import {PublicationCard} from '..'

export const CommentCard = ({publication, mini, onDelete}) => {
  const {t} = useTranslation('post')

  const {isMe} = useMe()

  const isMyComment = isMe(publication.user)
  const isMyPost = isMe(publication.post.user)

  const deleteComment = useCallback(() => onDelete?.(publication), [
    onDelete,
    publication,
  ])

  return (
    <PublicationCard
      publication={publication}
      onDelete={(isMyComment || isMyPost) && onDelete && deleteComment}
      mini={mini}
    >
      {!!publication.post && !!publication.post.text && (
        <div>
          <Flex as={Tip}>
            {t('To post')}&nbsp;
            <Flex flex={1}>
              <Link to={`/post/${publication.post._id}`}>
                {publication.post.text}
              </Link>
            </Flex>
          </Flex>
        </div>
      )}
    </PublicationCard>
  )
}

CommentCard.defaultProps = {
  mini: false,
}

CommentCard.propTypes = {
  publication: Comment.isRequired,
  mini: PropTypes.bool,
  onDelete: PropTypes.func,
}
