import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {Avatar, SecondaryText, Text} from '../../../../ui'
import {StyledContainer, StyledDivider, StyledNickname} from './styles'

export const PublicationCard = ({publication, children}) => {
  return (
    <StyledContainer>
      <Flex padding="10px" flexDirection="column">
        <Flex alignItems="center">
          <Box width="2rem" height="2rem">
            <Avatar src={publication.user.avatar} />
          </Box>
          <Box flex={1} marginLeft="1rem">
            <StyledNickname>{publication.user.nickname}</StyledNickname>
          </Box>
          <Text>{publication.date}</Text>
        </Flex>
        <Box margin="5px 0 10px">
          <SecondaryText>{publication.text}</SecondaryText>
        </Box>
        {children}
      </Flex>
      <StyledDivider />
    </StyledContainer>
  )
}

PublicationCard.propTypes = {
  publication: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string,
      nickname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.node,
}
