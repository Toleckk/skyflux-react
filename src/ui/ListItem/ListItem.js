import React from 'react'
import PropTypes from 'prop-types'
import {Box} from 'reflexbox/styled-components'
import {StyledContainer, StyledDivider} from './styles'

export const ListItem = ({children}) => (
  <StyledContainer>
    <Box padding="0.5rem">{children}</Box>
    <StyledDivider />
  </StyledContainer>
)

ListItem.propTypes = {
  children: PropTypes.node,
}
