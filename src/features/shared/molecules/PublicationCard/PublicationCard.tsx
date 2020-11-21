import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {SecondaryText} from 'typography'
import {Date, Icon} from 'ui'
import {CommentFragment, PostFragment} from '../../graphql'
import {UserBadge} from '../UserBadge'
import {StyledContainer} from './styles'

export type PublicationCardProps = {
  publication: CommentFragment | PostFragment
  onDelete: false | undefined | (() => unknown)
  mini?: boolean
}

export const PublicationCard: React.FC<PublicationCardProps> = ({
  publication,
  children,
  onDelete,
  mini,
}) => (
  <StyledContainer mini={mini}>
    <Flex alignItems="center">
      <Box flex={1} marginRight="1rem">
        <UserBadge user={publication.user} />
      </Box>
      {!mini && (
        <Flex alignItems="flex-start">
          <Date date={publication.createdAt} />
          {!!onDelete && (
            <Box as="button" onClick={onDelete} marginLeft="0.5rem">
              <Icon icon="delete" size="1rem" />
            </Box>
          )}
        </Flex>
      )}
    </Flex>
    <Box margin="5px 0 10px">
      <SecondaryText>{publication.text}</SecondaryText>
    </Box>
    {children}
  </StyledContainer>
)
