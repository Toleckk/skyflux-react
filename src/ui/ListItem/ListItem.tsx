import React from 'react'
import {Box} from 'reflexbox/styled-components'
import {StyledContainer, StyledDivider} from './styles'

export const ListItem: React.FC = ({children}) => (
  <StyledContainer>
    <Box padding="0.5rem">{children}</Box>
    <StyledDivider />
  </StyledContainer>
)
