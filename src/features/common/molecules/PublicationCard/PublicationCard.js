import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {Avatar, Date, SecondaryText} from 'ui'
import {MiniUser} from 'models/user'
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
          <Date date={publication.createdAt} />
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
    createdAt: PropTypes.string.isRequired,
    user: MiniUser.isRequired,
  }).isRequired,
  children: PropTypes.node,
}
