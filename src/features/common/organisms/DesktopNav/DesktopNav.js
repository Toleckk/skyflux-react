import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {Avatar, Link} from '../../../../ui'
import {StyledContainer, StyledIcon, StyledItem} from './styles'

export const DesktopNav = () => (
  <Flex as="nav">
    <StyledContainer>
      <ul>
        <StyledItem>
          <Avatar />
        </StyledItem>
        <StyledItem>
          <Link to="/feed">
            <StyledIcon icon="feed" />
          </Link>
        </StyledItem>
        <StyledItem>
          <button>
            <StyledIcon icon="notifications" />
          </button>
        </StyledItem>
        <StyledItem>
          <Link to="/settings">
            <StyledIcon icon="settings" />
          </Link>
        </StyledItem>
        <StyledItem>
          <Link to="/search">
            <StyledIcon icon="search" />
          </Link>
        </StyledItem>
        <StyledItem>
          <button>
            <StyledIcon icon="logout" />
          </button>
        </StyledItem>
      </ul>
    </StyledContainer>
  </Flex>
)
