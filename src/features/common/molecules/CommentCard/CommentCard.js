import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Comment} from 'models/comment'
import {Link, Tip} from 'ui'
import {useIsMe} from '../../hooks'
import {PublicationCard} from '..'

export const CommentCard = ({publication, mini, onDelete}) => {
  const {t} = useTranslation('post')

  const isMyComment = useIsMe(publication.user)
  const isMyPost = useIsMe(publication.post.user)

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
