import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {Avatar} from '../../../../ui'
import {NavigationButton} from '../../molecules'
import {StyledItem} from './styles'

export const MobileNav = () => (
  <nav>
    <Flex as="ul" justifyContent="space-evenly">
      <StyledItem>
        <NavigationButton icon="search" to="/search" />
      </StyledItem>
      <StyledItem>
        <NavigationButton icon="notifications" />
      </StyledItem>
      <StyledItem>
        <NavigationButton icon="feed" to="/feed" />
      </StyledItem>
      <StyledItem>
        <NavigationButton>
          <Avatar src="https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg" />
        </NavigationButton>
      </StyledItem>
    </Flex>
  </nav>
)
