import React from 'react'
import {withTranslation} from 'react-i18next'
import {Comment} from 'models/comment'
import {Link, Tip} from 'ui'
import {PublicationCard} from '..'

export const CommentCard = withTranslation('post')(({publication, t}) => (
  <PublicationCard publication={publication}>
    {!!publication.post && (
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
))

CommentCard.propTypes = {
  publication: Comment.isRequired,
}
