import React from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox/styled-components'
import {MOBILE_NAV_HEIGHT} from '../MobileNav'
import {StyledItem} from './StyledItem'

export const StyledList = ({children}) => (
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

StyledList.propTypes = {
  children: PropTypes.node,
}
