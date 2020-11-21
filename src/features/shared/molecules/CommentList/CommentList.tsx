import React from 'react'
import {useInfiniteScroll} from 'utils'
import {H1} from 'typography'
import {ListItem, Loader} from 'ui'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {CommentCard} from '..'
import {CommentConnectionFragment, CommentFragment} from '../../graphql'
import {StyledList} from './styles'

export type CommentListProps = {
  comments: CommentConnectionFragment
  onCommentDelete?: (comment: CommentFragment) => unknown
  onMore?: () => void
}

export const CommentList: React.FC<CommentListProps> = ({
  comments,
  onCommentDelete,
  onMore,
}) => {
  const {t} = useTranslation('post')

  const edges = comments?.edges
  const page = comments?.pageInfo
  const hasMore = page?.hasNextPage

  const ref = useInfiniteScroll({
    fetchMore: onMore,
    hasMore,
    direction: 'up',
  })

  return !edges.length ? (
    <H1>{t('Be the first to comment')}</H1>
  ) : (
    <StyledList ref={ref}>
      {edges.map(({cursor, node}) => (
        <ListItem key={cursor}>
          <CommentCard comment={node} onDelete={onCommentDelete} />
        </ListItem>
      ))}
      {!!onMore && hasMore && (
        <Flex as="li" width="100%" height="3rem">
          <Loader size="1.5rem" hasShadow={false} borderWidth="3px" />
        </Flex>
      )}
    </StyledList>
  )
}
