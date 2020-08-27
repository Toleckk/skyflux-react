import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {Avatar, Icon, SecondaryText, Text} from '../../../../ui'
import {StyledDivider, StyledNickname, StyledContainer} from './styles'

export const PostCard = ({post}) => {
  return (
    <StyledContainer>
      <Flex padding="10px" flexDirection="column">
        <Flex alignItems="center">
          <Avatar
            src={post.user.avatar}
            style={{width: '2rem', height: '2rem'}}
          />
          <Box flex={1} marginLeft="1rem">
            <StyledNickname>{post.user.nickname}</StyledNickname>
          </Box>
          <Text>{post.date}</Text>
        </Flex>
        <Box margin="5px 0 10px">
          <SecondaryText>{post.text}</SecondaryText>
        </Box>
        <Flex justifyContent="space-between">
          <Flex alignItems="center">
            <Icon icon="comment" size="1.5rem" />
            <Text style={{marginLeft: '1ex'}}>{post.commentsCount}</Text>
          </Flex>
          <Flex alignItems="center">
            <Icon icon="love" size="1.5rem" />
            <Text style={{marginLeft: '1ex'}}>{post.commentsCount}</Text>
          </Flex>
        </Flex>
      </Flex>
      <StyledDivider />
    </StyledContainer>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    commentsCount: PropTypes.number.isRequired,
    likesCount: PropTypes.number.isRequired,
    hasMyLike: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string,
      nickname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}
