import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {Avatar} from '../../../../ui'
import {NavigationButton} from '../../molecules'
import {StyledContainer, StyledItem} from './styles'

export const DesktopNav = () => (
  <Flex as="nav">
    <StyledContainer>
      <ul>
        <StyledItem>
          <NavigationButton>
            <Avatar src="https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg" />
          </NavigationButton>
        </StyledItem>
        <StyledItem>
          <NavigationButton to="/feed" icon="feed" />
        </StyledItem>
        <StyledItem>
          <NavigationButton icon="notifications" />
        </StyledItem>
        <StyledItem>
          <NavigationButton icon="settings" to="/settings" />
        </StyledItem>
        <StyledItem>
          <NavigationButton icon="search" to="/search" />
        </StyledItem>
        <StyledItem>
          <NavigationButton icon="logout" />
        </StyledItem>
      </ul>
    </StyledContainer>
  </Flex>
)
