import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {MOBILE_NAV_HEIGHT} from '../MobileNav'
import {StyledItem} from './StyledItem'

export const StyledList: React.FC = ({children}) => (
  <Flex
    as="ul"
    justifyContent="space-evenly"
    alignItems="center"
    height={MOBILE_NAV_HEIGHT}
    width="100%"
  >
    {React.Children.map(children, (child, i) => (
      <StyledItem key={i}>{child}</StyledItem>
    ))}
  </Flex>
)
