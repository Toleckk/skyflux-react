import React from 'react'
import PropTypes from 'prop-types'
import {StyledItem} from './StyledItem'

export const StyledList: React.FC = ({children}) => (
  <ul>
    {React.Children.map(children, (child, i) => (
      <StyledItem key={i}>{child}</StyledItem>
    ))}
  </ul>
)

StyledList.propTypes = {
  children: PropTypes.node,
}
