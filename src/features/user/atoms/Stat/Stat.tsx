import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {H1, Text} from 'typography'
import {Icon, IconProps} from 'ui'
import {StyledFilter, StyledUnderline} from './styles'

export type StatProps = {
  name: string
  count: number
  icon: IconProps['icon']
}

export const Stat: React.FC<StatProps> = ({name, count, icon}) => (
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
