import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {H1, Icon, Text} from 'ui'
import {StyledFilter, StyledUnderline} from './styles'

export const Stat = ({name, count, icon}) => (
  <Box>
    <Text>{name}</Text>
    <StyledFilter>
      <Flex as={H1} alignItems="center">
        {count}
        <Flex marginLeft="0.2em" marginTop="2px">
          <Icon icon={icon} height="1em" width="1em" />
        </Flex>
      </Flex>
      <Box marginTop="2px">
        <StyledUnderline />
      </Box>
    </StyledFilter>
  </Box>
)

Stat.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  icon: Icon.propTypes.icon,
}
